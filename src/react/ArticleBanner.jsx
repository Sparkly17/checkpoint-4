import React from 'react';
import Tag from "./Tag.jsx";
import Crumbs from "./Crumbs.jsx";

function ArticleBanner({ title, crumbs, tags = [], readTime, color, slug }) {
    return (
        <section className='article-banner' style={color ? { backgroundColor: color } : undefined}>
            {slug && <img className='article-banner-cover' src={`/checkpoint-4/images/article/${slug}/cover.png`} alt="" />}
            <div className='article-banner-tags'>
                {tags.map(tag => <Tag key={tag} tag={tag}/>)}
                {readTime && <Tag tag={`${readTime} минут`}/>}
            </div>
            <div className='article-banner-content'>
                <Crumbs crumbs={crumbs}/>
                <h1 className='article-banner-title b96 m-b32'>{title}</h1>
            </div>
        </section>
    );
}

export default ArticleBanner;
