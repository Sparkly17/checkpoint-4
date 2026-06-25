import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../react/Header.jsx'
import Footer from '../../react/Footer.jsx'
import ArticleBanner from '../../react/ArticleBanner.jsx'
import ArticleQuote from '../../react/ArticleQuote.jsx'
import ArticleChecklist from '../../react/ArticleChecklist.jsx'
import '../../stylesheets/article.scss'
import { fetchArticleBySlug, fetchSectionsByArticleId, fetchBlocksBySectionIds } from '../../api/airtable.js'
import { usePageMeta } from '../../react/usePageMeta.js'

const CATEGORY_COLORS = {
  'Жилье':    '#315A9F',
  'Финансы':  '#255E55',
  'Работа':   '#EAC01B',
  'Документы':'#E9A6C7',
  'Учёба':    '#9DD6DF',
  'Общение':  '#C63E3E',
}

function RichText({ text }) {
  if (!text) return null
  return (
    <p className="m-s16 s20">
      {text.split('\n').map((line, i, arr) => (
        <React.Fragment key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  )
}

function Block({ block, slug, color }) {
  const f = block.fields
  const img = (name) => name ? `/src/images/article/${name}` : null

  switch (f.type) {
    case 'text':
      return <RichText text={f.text} />

    case 'image':
      return (
        <>
          {img(f.image_desktop) && <img className="desktop" src={img(f.image_desktop)} alt="" />}
          {img(f.image_mobile) && <img className="mobile" src={img(f.image_mobile)} alt="" />}
        </>
      )

    case 'splash':
      return (
        <div className="article-splash-img">
          {img(f.image_desktop) && <img className="desktop" src={img(f.image_desktop)} alt="" />}
          {img(f.image_mobile) && <img className="mobile" src={img(f.image_mobile)} alt="" />}
        </div>
      )

    case 'two-photos':
      return (
        <div className="article-two-photos-hor">
          {img(f.image_desktop) && <img className="desktop" src={img(f.image_desktop)} alt="" />}
          {img(f.image_desktop_2) && <img className="desktop" src={img(f.image_desktop_2)} alt="" />}
          {img(f.image_mobile) && <img className="mobile" src={img(f.image_mobile)} alt="" />}
          {img(f.image_mobile_2) && <img className="mobile" src={img(f.image_mobile_2)} alt="" />}
        </div>
      )

    case 'quote':
      return (
        <div className="desktop">
          <ArticleQuote quote={f.quote_text} author={f.quote_author || ''} color={color} />
        </div>
      )

    case 'checklist': {
      let checklistItems = []
      try {
        const parsed = JSON.parse(f.checklist_data)
        checklistItems = Array.isArray(parsed) ? parsed : (parsed.items || [])
      } catch {}
      return <ArticleChecklist items={checklistItems} color={color} />
    }

    case 'table': {
      if (!f.table_data) return null
      const tableData = JSON.parse(f.table_data)
      return (
        <table className="article-table">
          {tableData.headers && (
            <thead>
              <tr>
                {tableData.headers.map((h, i) => <th key={i}>{h}</th>)}
              </tr>
            </thead>
          )}
          <tbody>
            {tableData.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )
    }

    default:
      return null
  }
}

function Section({ section, blocks, slug, color }) {
  const sectionBlocks = blocks
    .filter(b => b.fields.section && b.fields.section.includes(section.id))
    .sort((a, b) => a.fields.order - b.fields.order)

  return (
    <section className="article-block gap-48">
      {section.fields.heading && (
        <h2 className="b24 m-b24">{section.fields.heading}</h2>
      )}
      {sectionBlocks.map(block => (
        <Block key={block.id} block={block} slug={slug} color={color} />
      ))}
    </section>
  )
}

function ArticlePage() {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)
  const [sections, setSections] = useState([])
  const [blocks, setBlocks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const articleFields = article?.fields || {}
  usePageMeta({
    title: articleFields.title || '',
    description: articleFields.breadcrumbs || articleFields.title || '',
    type: 'article',
  })

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetchArticleBySlug(slug)
      .then(articleRecord => {
        if (!articleRecord) throw new Error('Статья не найдена')
        setArticle(articleRecord)
        return fetchSectionsByArticleId(articleRecord)
      })
      .then(sectionRecords => {
        setSections(sectionRecords)
        return fetchBlocksBySectionIds(sectionRecords)
      })
      .then(blockRecords => {
        setBlocks(blockRecords)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [slug])

  if (loading) return null

  if (error) {
    return (
      <>
        <Header />
        <div className="article-error">Ошибка: {error}</div>
        <Footer />
      </>
    )
  }

  const f = article.fields
  const crumbs = f.breadcrumbs
    ? f.breadcrumbs.split('→').map(c => c.trim())
    : ['Главная', f.category || 'Статьи', f.title]

  const sortedSections = [...sections].sort((a, b) => a.fields.order - b.fields.order)

  return (
    <>
      <Header />
      <section className="intro">
        <ArticleBanner
          title={f.title}
          crumbs={crumbs}
          tags={['Статья', f.category].filter(Boolean)}
          readTime={f.read_time}
          color={CATEGORY_COLORS[f.category]}
          slug={f.slug}
        />
      </section>
      <article className="article gap-96">
        {sortedSections.map(section => (
          <Section key={section.id} section={section} blocks={blocks} slug={f.slug} color={CATEGORY_COLORS[f.category]} />
        ))}
      </article>
      <Footer />
    </>
  )
}

export default ArticlePage
