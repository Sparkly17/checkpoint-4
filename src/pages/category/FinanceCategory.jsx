import React from 'react';
import { CategoryPage } from "../../react/CategoryPage.jsx";
import banner from "/src/images/category/finance/banner.png";

const GRID = [
    { columns: '2fr 1fr', slots: [
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'card',   tag: 'Чек-лист' },
    ]},
    { columns: '1fr 1fr 1fr', slots: [
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'circle', tag: 'Чек-лист' },
    ]},
    { columns: '1fr 2fr', slots: [
        { cmp: 'circle', tag: 'Статья'   },
        { cmp: 'card',   tag: 'Статья'   },
    ]},
    { columns: '2fr 1fr', slots: [
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'card',   tag: 'Чек-лист' },
    ]},
]

export default function FinanceCategory() {
    return (
        <CategoryPage
            color="#255E55"
            folder="finance"
            catTag="Финансы"
            categorySlug="finance"
            grid={GRID}
            title="Финансы"
            description="Как следить за деньгами, не паниковать и строить финансовую подушку"
            bannerText="Финансы — это не страшно. Здесь собраны материалы, которые помогают разобраться с деньгами без сложных формул."
            banner={banner}
        />
    )
}
