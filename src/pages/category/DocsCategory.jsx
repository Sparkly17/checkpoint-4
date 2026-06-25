import React from 'react';
import { CategoryPage } from "../../react/CategoryPage.jsx";
import banner from "/src/images/category/docs/banner.png";

const GRID = [
    { columns: '1fr 2fr', slots: [
        { cmp: 'circle', tag: 'Статья'   },
        { cmp: 'card',   tag: 'Статья'   },
    ]},
    { columns: '1fr 1fr 1fr', slots: [
        { cmp: 'card',   tag: 'Чек-лист' },
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'card',   tag: 'Статья'   },
    ]},
    { columns: '2fr 1fr', slots: [
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'card',   tag: 'Чек-лист' },
    ]},
    { columns: '2fr 1fr', slots: [
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'circle', tag: 'Чек-лист' },
    ]},
]

export default function DocsCategory() {
    return (
        <CategoryPage
            color="#E9A6C7"
            folder="docs"
            catTag="Документы"
            categorySlug="docs"
            grid={GRID}
            title="Документы"
            description="Паспорт, СНИЛС, госуслуги и другие документы взрослой жизни"
            bannerText="Документы — это скучно, но без них никуда. Здесь собраны материалы, которые помогают разобраться с бумагами без паники."
            banner={banner}
        />
    )
}
