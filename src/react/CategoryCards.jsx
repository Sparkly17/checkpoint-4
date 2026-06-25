import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card.jsx'
import CircleCard from './CircleCard.jsx'
import { fetchArticlesByCategory } from '../api/airtable.js'

function CategoryCards({ category, slug, layout }) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticlesByCategory(category).then(setArticles)
  }, [category])

  if (articles.length === 0) return null

  const rows = []
  let cursor = 0
  for (const cols of layout) {
    rows.push(articles.slice(cursor, cursor + cols.length))
    cursor += cols.length
  }

  return (
    <section className="cards-section">
      {rows.map((rowArticles, rowIndex) => {
        const cols = layout[rowIndex]
        const gridTemplateColumns = cols.join(' ')

        return (
          <div
            key={rowIndex}
            className="cards-list"
            style={{ gridTemplateColumns }}
          >
            {rowArticles.map((article) => {
              const f = article.fields
              const imgPath = (name) => name ? `/checkpoint-4/images/category/${slug}/${name}` : null
              const cardProps = {
                title: f.title,
                tags: f.tags || [],
                image: imgPath(f.card_image),
                mimage: imgPath(f.card_image_mobile),
              }

              const inner = f.card_type === 'circle-card'
                ? <CircleCard type="vertical" {...cardProps} />
                : <Card {...cardProps} />

              return f.slug ? (
                <Link key={article.id} to={`/article/${f.slug}`}>
                  {inner}
                </Link>
              ) : (
                <div key={article.id}>{inner}</div>
              )
            })}
          </div>
        )
      })}
    </section>
  )
}

export default CategoryCards
