import React, { useState, useEffect } from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import CircleCard from "./CircleCard.jsx";
import ChecklistModal from "./ChecklistModal.jsx";
import { Link } from "react-router-dom";
import { fetchArticlesByCategory, fetchArticleBySlug } from '../api/airtable.js';
import { usePageMeta } from "./usePageMeta.js";
import '../stylesheets/chapter.scss'
import '../stylesheets/article.scss'
import '../stylesheets/checklist-modal.scss'

export function CategoryPage({ color, folder, catTag, categorySlug, grid, title, description, bannerText, banner, mobileBanner }) {
    usePageMeta({ title, description })
    const [articles, setArticles] = useState([])
    const [modal, setModal] = useState(null)

    useEffect(() => {
        fetchArticlesByCategory(catTag).then(setArticles)
    }, [catTag])

    async function openChecklist(slug) {
        const record = await fetchArticleBySlug(slug)
        if (!record) return
        const f = record.fields
        let data = {}
        try { data = JSON.parse(f.checklist_items || '{}') } catch {}
        setModal({ title: f.title, data })
    }

    function renderCard(article, slot, index) {
        if (!article) return <div key={index} />
        const f = article.fields
        const img = `/checkpoint-4/images/category/${folder}/${index + 1}.png`
        const mimg = `/checkpoint-4/images/category/${folder}/m-${index + 1}.png`
        const CardCmp = slot.cmp === 'circle' ? CircleCard : Card
        const tags = [slot.tag, catTag]

        if (f.type === 'checklist') {
            return (
                <div key={article.id} style={{ cursor: 'pointer' }} onClick={() => openChecklist(f.slug)}>
                    <CardCmp title={f.title} tags={tags} image={img} mimage={mimg} type="vertical" />
                </div>
            )
        }
        return (
            <Link key={article.id} to={`/article/${f.slug}`}>
                <CardCmp title={f.title} tags={tags} image={img} mimage={mimg} type="vertical" />
            </Link>
        )
    }

    let idx = 0
    return (
        <>
            <Header color={color} />
            <section className={`category-page category ${categorySlug}`}>
                <div className={"category-banner"}>
                    <h1 className={"category-banner-title b128 m-b30"}>{title}</h1>
                    <p className={"category-banner-text n20 m-n14-20"}>{bannerText}</p>
                </div>
                <img className={"category-banner-img desktop"} src={banner} />
                {mobileBanner && <img className={"category-banner-img mobile"} src={mobileBanner} />}
            </section>

            <div className={'block category-page-cards'}>
                <section className={'cards-section'}>
                    {grid.map((row, rowIdx) => (
                        <div key={rowIdx} className={'cards-list'} style={{ gridTemplateColumns: row.columns }}>
                            {row.slots.map((slot) => {
                                const article = articles[idx]
                                const cardIdx = idx++
                                return renderCard(article, slot, cardIdx)
                            })}
                        </div>
                    ))}
                </section>
            </div>

            {modal && (
                <ChecklistModal
                    title={modal.title}
                    data={modal.data}
                    color={color}
                    onClose={() => setModal(null)}
                />
            )}

            <Footer />
        </>
    )
}
