import React from 'react';
import { CategoryPage } from "../../react/CategoryPage.jsx";
import banner from "/src/images/category/social/banner.png";

const GRID = [
    { columns: '2fr 1fr', slots: [
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'card',   tag: 'Чек-лист' },
    ]},
    { columns: '1fr 1fr 1fr', slots: [
        { cmp: 'card',   tag: 'Чек-лист' },
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'circle', tag: 'Статья'   },
    ]},
    { columns: '1fr 2fr', slots: [
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'card',   tag: 'Статья'   },
    ]},
    { columns: '2fr 1fr', slots: [
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'circle', tag: 'Чек-лист' },
    ]},
]

export default function SocialCategory() {
    return (
        <CategoryPage
            color="#C63E3E"
            folder="social"
            catTag="Общение"
            categorySlug="social"
            grid={GRID}
            title="Общение"
            description="Как знакомиться, говорить с родителями, просить помощи и строить здоровые отношения"
            bannerText="Социализация — это про друзей, новые знакомства и комфортное общение. Здесь вы найдёте подсказки, как заводить контакты, не теряя себя."
            banner={banner}
        />
    )
}
