import React from 'react';
import { CategoryPage } from "../../react/CategoryPage.jsx";
import banner from "/src/images/category/learn/banner.png";

const GRID = [
    { columns: '2fr 1fr', slots: [
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'circle', tag: 'Чек-лист' },
    ]},
    { columns: '1fr 1fr 1fr', slots: [
        { cmp: 'card',   tag: 'Чек-лист' },
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'card',   tag: 'Статья'   },
    ]},
    { columns: '1fr 2fr', slots: [
        { cmp: 'card',   tag: 'Чек-лист' },
        { cmp: 'card',   tag: 'Статья'   },
    ]},
    { columns: '2fr 1fr', slots: [
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'circle', tag: 'Статья'   },
    ]},
]

export default function LearnCategory() {
    return (
        <CategoryPage
            color="#9DD6DF"
            folder="learn"
            catTag="Учёба"
            categorySlug="learn"
            grid={GRID}
            title="Учёба"
            description="Как учиться, не выгорать и разобраться с вузом и дедлайнами"
            bannerText="Учёба — это не только оценки. Здесь собраны материалы о том, как справляться с дедлайнами, выбирать направление и не терять себя."
            banner={banner}
        />
    )
}
