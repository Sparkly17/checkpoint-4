import React, { useState } from 'react'

function CheckboxIcon({ checked, color }) {
    if (checked) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <rect x="2" y="2" width="20" height="20" fill={color}/>
                <path d="M19.484 7.879L10.377 16.986L5.514 12.122L6.928 10.708L10.377 14.157L18.070 6.464L19.484 7.879Z" fill="white"/>
            </svg>
        )
    }
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M22 2V22H2V2H22ZM4 20H20V4H4V20Z" fill={color}/>
        </svg>
    )
}

function ArticleChecklist({ items, color }) {
    const [checked, setChecked] = useState(() => new Array(items.length).fill(false))

    function toggle(i) {
        setChecked(prev => prev.map((v, idx) => idx === i ? !v : v))
    }

    return (
        <div className="article-checklist-block">
            {items.map((item, i) => (
                <div key={i} className="article-checklist-item" onClick={() => toggle(i)}>
                    <CheckboxIcon checked={checked[i]} color={color || '#255E55'} />
                    <div className="article-checklist-text">
                        <p className="article-checklist-title sb20 m-sb20">{item.title}</p>
                        {(item.subtitle || item.text) && (
                            <p className="article-checklist-subtitle s16 m-s16">{item.subtitle || item.text}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ArticleChecklist
