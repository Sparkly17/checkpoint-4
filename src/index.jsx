import './index.css';
import './stylesheets/common.scss';
import './stylesheets/fonts.scss';
import './stylesheets/category.scss';

import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
    HashRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
    useLocation
} from 'react-router-dom';

import Chapter from './Chapter.jsx';
import About from './About.jsx';
import Styleguide from './Styleguide.jsx';
import Main from './Main.jsx';
import Template from './Template.jsx';
import Checklist_Article from './Checklist_Article.jsx';
import Collection from './pages/Collection.jsx';
import Chapter2 from './Chapter2.jsx';
import LivingCategory from './pages/category/LivingCategory.jsx';
import DocsCategory from './pages/category/DocsCategory.jsx';
import FinanceCategory from './pages/category/FinanceCategory.jsx';
import LearnCategory from './pages/category/LearnCategory.jsx';
import SocialCategory from './pages/category/SocialCategory.jsx';
import WorkCategory from './pages/category/WorkCategory.jsx';
import ArticlePage from './pages/article/ArticlePage.jsx';
import Article from "./Article.jsx";

const root = createRoot(document.getElementById('app'));

function RouteLayout() {
    return (
        <>
            <ScrollToTopOnRouteChange />
            <Outlet />
        </>
    );
}

function ScrollToTopOnRouteChange() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return null;
}

function NotFound() {
    return <Navigate to="/" replace />;
}

root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route element={<RouteLayout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/chapter" element={<Chapter />} />
                    <Route path="/chapter-2" element={<Chapter2 />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/styleguide" element={<Styleguide />} />
                    <Route path="/template" element={<Template />} />
                    <Route path="/checklist" element={<Checklist_Article />} />
                    <Route path="/collection" element={<Collection />} />

                    <Route path="/category">
                        <Route path="living" element={<LivingCategory />} />
                        <Route path="docs" element={<DocsCategory />} />
                        <Route path="finance" element={<FinanceCategory />} />
                        <Route path="learn" element={<LearnCategory />} />
                        <Route path="social" element={<SocialCategory />} />
                        <Route path="work" element={<WorkCategory />} />
                    </Route>

                    <Route path="/article">
                        <Route path="border" element={<Article />} />
                        <Route path=":slug" element={<ArticlePage />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
