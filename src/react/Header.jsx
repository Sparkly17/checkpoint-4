import React, { useState, useRef, useEffect } from 'react';
import { Logo, MLogo } from './Logo.jsx'
import burger from "/src/images/icons/burger.svg"
import close from "/src/images/icons/close.svg"
import search from "/src/images/icons/search.svg"
import arrow from "/src/images/icons/chevron-down.svg"
import classNames from 'classnames';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { fetchAllArticles } from '../api/airtable.js';

const TYPE_LABEL = { article: 'Статья', checklist: 'Чек-лист' }

const CATEGORY_COLORS = [
    { category: 'living',  slug: 'living',  color: '#315A9F' },
    { category: 'finance', slug: 'finance', color: '#255E55' },
    { category: 'work',    slug: 'work',    color: '#EAC01B' },
    { category: 'docs',    slug: 'docs',    color: '#E9A6C7' },
    { category: 'learn',   slug: 'study',   color: '#9DD6DF' },
    { category: 'social',  slug: 'social',  color: '#C63E3E' },
]

function colorFromPath(pathname) {
    for (const { category, slug, color } of CATEGORY_COLORS) {
        if (pathname.includes(`/category/${category}`) || pathname.includes(`/article/${slug}-`)) {
            return color
        }
    }
    return null
}

function MobileMenu({ onClose }) {
    const [query, setQuery] = useState('')
    const [allArticles, setAllArticles] = useState(null)
    const [results, setResults] = useState([])
    const navigate = useNavigate()
    const inputRef = useRef(null)

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        fetchAllArticles().then(setAllArticles)
        setTimeout(() => inputRef.current?.focus(), 100)
        return () => { document.body.style.overflow = '' }
    }, [])

    useEffect(() => {
        if (!allArticles || query.trim().length < 2) { setResults([]); return }
        const q = query.toLowerCase()
        setResults(allArticles.filter(a => a.fields.title?.toLowerCase().includes(q)).slice(0, 8))
    }, [query, allArticles])

    function handleResultClick(slug) {
        onClose()
        navigate(`/article/${slug}`)
    }

    return (
        <div className="mobile-menu">
            <div className="mobile-menu-top">
                <p className="mobile-menu-title">Меню</p>
                <img src={close} alt="" onClick={onClose} className="mobile-menu-close" />
            </div>
            <div className="mobile-menu-search">
                <img src={search} alt="" />
                <input
                    ref={inputRef}
                    className="mobile-menu-search-input"
                    placeholder="Что тебя интересует?"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </div>
            {results.length > 0 ? (
                <div className="mobile-menu-results">
                    {results.map(a => (
                        <div key={a.id} className="mobile-menu-result-item" onClick={() => handleResultClick(a.fields.slug)}>
                            <p className="mobile-menu-result-title">{a.fields.title}</p>
                            <p className="mobile-menu-result-meta">{TYPE_LABEL[a.fields.type] || a.fields.type} · {a.fields.category}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <nav className="mobile-menu-nav">
                    <Link to="/category/living" onClick={onClose}>Жильё</Link>
                    <Link to="/category/finance" onClick={onClose}>Финансы</Link>
                    <Link to="/category/work" onClick={onClose}>Работа</Link>
                    <Link to="/category/docs" onClick={onClose}>Документы</Link>
                    <Link to="/category/learn" onClick={onClose}>Учёба</Link>
                    <Link to="/category/social" onClick={onClose}>Общение</Link>
                </nav>
            )}
        </div>
    )
}

function Header({ color }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    color = color ?? colorFromPath(location.pathname) ?? '#E9A6C7'
    const [searchOpen, setSearchOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [allArticles, setAllArticles] = useState(null)
    const [results, setResults] = useState([])
    const inputRef = useRef(null)
    const navigate = useNavigate()

    const openSearch = async () => {
        setSearchOpen(true)
        setTimeout(() => inputRef.current?.focus(), 50)
        if (!allArticles) {
            const articles = await fetchAllArticles()
            setAllArticles(articles)
        }
    }

    const closeSearch = () => {
        setSearchOpen(false)
        setQuery('')
        setResults([])
    }

    useEffect(() => {
        if (!allArticles) return
        if (query.trim().length < 2) { setResults([]); return }
        const q = query.toLowerCase()
        setResults(
            allArticles.filter(a => a.fields.title?.toLowerCase().includes(q)).slice(0, 8)
        )
    }, [query, allArticles])

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') closeSearch() }
        if (searchOpen) document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [searchOpen])

    const handleResultClick = (slug) => {
        closeSearch()
        navigate(`/article/${slug}`)
    }

    return (
        <>
            <header className="header">
                <Link to={'/'}><span className={'desktop'}><Logo color={color}/></span></Link>
                <Link to={'/'}><span className={'mobile'}><MLogo color={color}/></span></Link>
                <button className={'header-burger mobile'} onClick={() => setMenuOpen(true)}><img src={burger}/></button>

                <nav className={classNames("nav desktop")}>
                    <Link className={classNames("nav-link living", "n16", "m-n14")} to={'/category/living'}>Жилье</Link>
                    <Link className={classNames("nav-link finance", "n16", "m-n14")} to={'/category/finance'}>Финансы</Link>
                    <Link className={classNames("nav-link docs", "n16", "m-n14")} to={'/category/docs'}>Документы</Link>
                    <Link className={classNames("nav-link work", "n16", "m-n14")} to={'/category/work'}>Работа</Link>
                    <Link className={classNames("nav-link learn", "n16", "m-n14")} to={'/category/learn'}>Учеба</Link>
                    <Link className={classNames("nav-link social", "n16", "m-n14")} to={'/category/social'}>Социализация</Link>
                    <Link className={classNames("nav-link", "n16", "m-n14")}>
                        Форматы
                        <img className={'desktop'} src={arrow}/>
                    </Link>
                </nav>
                <div className={classNames("search desktop")} onClick={openSearch} style={{cursor:'pointer'}}>
                    <img className={classNames("search-icon")} src={search}/>
                </div>

                {searchOpen && (
                    <div className="search-fullscreen desktop">
                        <img src={search} className="search-fullscreen-icon"/>
                        <input
                            ref={inputRef}
                            className="search-fullscreen-input"
                            placeholder="Поиск статей..."
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        <button className="search-fullscreen-close" onClick={closeSearch}>×</button>
                        {results.length > 0 && (
                            <div className="search-results">
                                {results.map(a => (
                                    <div
                                        key={a.id}
                                        className="search-result-item"
                                        onClick={() => handleResultClick(a.fields.slug)}
                                    >
                                        <div className="search-result-title">{a.fields.title}</div>
                                        <div className="search-result-tags">
                                            {a.fields.type && <span className="search-result-tag">{TYPE_LABEL[a.fields.type] || a.fields.type}</span>}
                                            {a.fields.category && <span className="search-result-tag">{a.fields.category}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </header>
            {searchOpen && <div className="search-backdrop" onClick={closeSearch}/>}
            {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
        </>
    )
}

export default Header;
