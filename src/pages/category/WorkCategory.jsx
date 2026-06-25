import React from 'react';
import { CategoryPage } from "../../react/CategoryPage.jsx";
import banner from "/src/images/category/work/banner.png";

const GRID = [
    { columns: '2fr 1fr', slots: [
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'card',   tag: 'Чек-лист' },
    ]},
    { columns: '1fr 1fr 1fr', slots: [
        { cmp: 'card',   tag: 'Чек-лист' },
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'card',   tag: 'Статья'   },
    ]},
    { columns: '1fr 2fr', slots: [
        { cmp: 'circle', tag: 'Статья'   },
        { cmp: 'card',   tag: 'Статья'   },
    ]},
    { columns: '2fr 1fr', slots: [
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'circle', tag: 'Чек-лист' },
    ]},
]

export default function WorkCategory() {
    return (
        <CategoryPage
            color="#EAC01B"
            folder="work"
            catTag="Работа"
            categorySlug="work"
            grid={GRID}
            title="Работа"
            description="Как найти работу, написать резюме, пройти собеседование и не потеряться на первом месте"
            bannerText="Работа — это про карьеру и первые шаги во взрослой жизни. Здесь собраны советы по поиску работы, стажировкам и развитию профессиональных навыков."
            banner={banner}
        />
    )
}
