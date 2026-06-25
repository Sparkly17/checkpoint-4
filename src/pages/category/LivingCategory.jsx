import React from 'react';
import { CategoryPage } from "../../react/CategoryPage.jsx";
import banner from "/src/images/category/living/banner.png";
import mobileBanner from "/src/images/banner/mhouse.png";

const GRID = [
    { columns: '2fr 1fr', slots: [
        { cmp: 'card',   tag: 'Лонгрид'  },
        { cmp: 'card',   tag: 'Шаблон'   },
    ]},
    { columns: '1fr 1fr 1fr', slots: [
        { cmp: 'card',   tag: 'Чек-лист' },
        { cmp: 'circle', tag: 'Статья'   },
        { cmp: 'card',   tag: 'Статья'   },
    ]},
    { columns: '1fr 2fr', slots: [
        { cmp: 'card',   tag: 'Статья'   },
        { cmp: 'card',   tag: 'Статья'   },
    ]},
    { columns: '1fr 2fr', slots: [
        { cmp: 'circle', tag: 'Статья'   },
        { cmp: 'card',   tag: 'Чек-лист' },
    ]},
]

export default function LivingCategory() {
    return (
        <CategoryPage
            color="#315A9F"
            folder="living"
            catTag="Жилье"
            categorySlug="living"
            grid={GRID}
            title="Жилье"
            description="Как снять квартиру, разобраться с договором, общежитием и переездом"
            bannerText="Жильё это про комфорт и ощущение опоры. Здесь собраны материалы, которые помогают навести порядок без спешки."
            banner={banner}
            mobileBanner={mobileBanner}
        />
    )
}
