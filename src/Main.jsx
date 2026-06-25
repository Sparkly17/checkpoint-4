import React, { useState, useEffect, useRef } from 'react';
import Header from "./react/Header.jsx";
import Footer from "./react/Footer.jsx";
import './stylesheets/main.scss'
import Tag from "./react/Tag.jsx";
import Card from "./react/Card.jsx";
import main from "/src/images/other/main.png"
import mmain from "/src/images/main/mmain.png"
import mainPink from "/src/images/other/main-pink.png"
import mainGreen from "/src/images/other/main-green.png"
import goto from "/src/images/icons/goto.svg"
import searchIcon from "/src/images/icons/search.svg"

import docs from "/src/images/themes/docsT.png"
import finance from "/src/images/themes/financeT.png"
import house from "/src/images/themes/houseT.png"
import learn from "/src/images/themes/learnT.png"
import soc from "/src/images/themes/socT.png"
import work from "/src/images/themes/workT.png"

import sections from "/src/images/main/sections.png";
import msections from "/src/images/main/msections.png";

import img1 from "/src/images/main/card1.png";
import img2 from "/src/images/main/card2.png";
import img3 from "/src/images/main/card3.png";
import img4 from "/src/images/main/card4.png";
import img5 from "/src/images/main/card5.png";
import img6 from "/src/images/main/card6.png";
import img7 from "/src/images/main/card7.png";
import img8 from "/src/images/main/card8.png";
import img9 from "/src/images/main/card9.png";
import img10 from "/src/images/main/card10.png";
import img11 from "/src/images/main/card11.png";
import img12 from "/src/images/main/card12.png";
import img13 from "/src/images/main/card13.png";
import img14 from "/src/images/main/card14.png";
import img15 from "/src/images/main/card15.png";
import img16 from "/src/images/main/card16.png";
import img17 from "/src/images/main/card17.png";

import mimg1 from "/src/images/main/mcard1.png";
import mimg2 from "/src/images/main/mcard2.png";
import mimg3 from "/src/images/main/mcard3.png";
import mimg4 from "/src/images/main/mcard4.png";
import mimg5 from "/src/images/main/mcard5.png";
import mimg6 from "/src/images/main/mcard6.png";
import mimg7 from "/src/images/main/mcard7.png";
import mimg8 from "/src/images/main/mcard8.png";
import mimg9 from "/src/images/main/mcard9.png";
import mimg10 from "/src/images/main/mcard10.png";
import mimg11 from "/src/images/main/mcard11.png";
import mimg12 from "/src/images/main/mcard12.png";
import mimg13 from "/src/images/main/mcard13.png";
import mimg14 from "/src/images/main/mcard14.png";
import mimg15 from "/src/images/main/mcard15.png";
import mimg16 from "/src/images/main/mcard16.png";
import mimg17 from "/src/images/main/mcard17.png";

import cot from "/src/images/main/cot.png";

import section1 from "/src/images/main/section1.png";
import section2 from "/src/images/main/section2.png";
import section3 from "/src/images/main/section3.png";
import section4 from "/src/images/main/section4.png";
import section5 from "/src/images/main/section5.png";
import section6 from "/src/images/main/section6.png";

import msection1 from "/src/images/main/msection1.png";
import msection2 from "/src/images/main/msection2.png";
import msection3 from "/src/images/main/msection3.png";
import msection4 from "/src/images/main/msection4.png";
import msection5 from "/src/images/main/msection5.png";
import msection6 from "/src/images/main/msection6.png";


import card_3 from "/src/images/cards/img3.png";
import card_8 from "/src/images/cards/img8.png";
import card_10 from "/src/images/cards/img10.png";
import mcard_3 from "/src/images/cards/mimg3.png";
import mcard_8 from "/src/images/cards/mimg8.png";
import mcard_10 from "/src/images/cards/mimg10.png";

import card1 from "/src/images/main/img1.png";
import card2 from "/src/images/main/img2.png";
import card3 from "/src/images/main/img3.png";
import mcard1 from "/src/images/main/mimg1.png";
import mcard2 from "/src/images/main/mimg2.png";
import mcard3 from "/src/images/main/mimg3.png";
import card_4 from "/src/images/cards/img4.png";
import card4 from "/src/images/main/img4.png";
import card5 from "/src/images/main/img5.png";
import mcard_4 from "/src/images/main/mimg_4.png";
import mcard4 from "/src/images/main/mimg4.png";
import mcard5 from "/src/images/main/mimg5.png";
import card6 from "/src/images/main/img6.png";
import card7 from "/src/images/main/img7.png";
import mcard6 from "/src/images/main/mimg6.png";
import mcard7 from "/src/images/main/mimg7.png";
import card8 from "/src/images/main/img8.png";
import card9 from "/src/images/main/img9.png";
import card10 from "/src/images/main/img10.png";
import card11 from "/src/images/main/img11.png";
import card12 from "/src/images/main/img12.png";
import mcard8 from "/src/images/main/mimg8.png";
import mcard9 from "/src/images/main/mimg9.png";
import mcard10 from "/src/images/main/mimg10.png";
import mcard11 from "/src/images/main/mimg11.png";
import mcard12 from "/src/images/main/mimg12.png";
import card_13 from "/src/images/main/img_13.png";
import card13 from "/src/images/main/img13.png";
import card14 from "/src/images/main/img14.png";
import card15 from "/src/images/main/img15.png";
import card16 from "/src/images/main/img16.png";
import card17 from "/src/images/main/img17.png";
import mcard13 from "/src/images/main/mimg13.png";
import mcard14 from "/src/images/main/mimg14.png";
import mcard15 from "/src/images/main/mimg15.png";
import mcard16 from "/src/images/main/mimg16.png";
import obodok from "/src/images/main/obodok.png"

import mobodok1 from "/src/images/main/mobodok-1.png"
import mobodok2 from "/src/images/main/mobodok-2.png"

import pink2 from "/src/images/main/pink2.png";
import pink from "/src/images/main/pink.png";
import blue from "/src/images/main/blue.png";
import yellow from "/src/images/main/yellow.png";
import CircleCard from "./react/CircleCard.jsx";
import {Link, useNavigate} from "react-router-dom";
import { PageMeta } from "./react/usePageMeta.js";
import { fetchAllArticles } from "./api/airtable.js";

const TYPE_LABEL = { article: 'Статья', checklist: 'Чек-лист' }

function SolveSearch({ image, mimage1, mimage2 }) {
    const [query, setQuery] = useState('')
    const [allArticles, setAllArticles] = useState(null)
    const [results, setResults] = useState([])
    const navigate = useNavigate()
    const inputRef = useRef(null)

    useEffect(() => {
        fetchAllArticles().then(setAllArticles)
    }, [])

    useEffect(() => {
        if (!allArticles || query.trim().length < 2) { setResults([]); return }
        const q = query.toLowerCase()
        setResults(allArticles.filter(a => a.fields.title?.toLowerCase().includes(q)).slice(0, 6))
    }, [query, allArticles])

    function handleResultClick(slug) {
        setQuery('')
        setResults([])
        navigate(`/article/${slug}`)
    }

    return (
        <section className={'solve'}>
            <h2 className={'solve-title sb48-48 m-b30-30'}>Окей, Чекпоинт...</h2>
            <div className={'solve-search'}>
                <input
                    ref={inputRef}
                    className={'solve-input m-n16'}
                    placeholder={'Как жить эту сложную жизнь...'}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <img className={'solve-icon'} src={searchIcon}/>
                {results.length > 0 && (
                    <div className={'solve-results'}>
                        {results.map(a => (
                            <div key={a.id} className={'solve-result-item'} onClick={() => handleResultClick(a.fields.slug)}>
                                <span className={'solve-result-title'}>{a.fields.title}</span>
                                <span className={'solve-result-tag'}>{TYPE_LABEL[a.fields.type] || a.fields.type}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <img className={'solve-image desktop'} src={image}/>
            <img className={'solve-image-1 mobile'} src={mimage1}/>
            <img className={'solve-image-2 mobile'} src={mimage2}/>
        </section>
    )
}

class Main extends React.Component {
    render() {
        return (
            <>
                <PageMeta title="Чекпоинт"
                          description="Гид для студентов и молодых взрослых: документы, жильё, финансы, работа, учёба и общение в одном месте"/>
                <Header/>
                <img className='desktop arrow-blue' src={blue}/>
                <img className='desktop arrow-pink' src={pink}/>
                <img className='desktop arrow-yellow' src={yellow}/>
                <img className='desktop arrow-pink2' src={pink2}/>
                <section className={'top'}>
                    <div className={'top-title'}>
                        <div className={'top-title-text b172-172 m-b48'}>Чекпоинт</div>
                        <div className={'top-title-text second b28-32 m-b24'}>Лучший друг зумера.<br/> Давай
                            знакомиться!
                        </div>
                    </div>
                    <div className={'top-carousel'}>
                        <div>
                            <Link to={'/article/living-rent-guide'}>
                                <img className={'left-img desktop'} src={main}/>
                                <img className={'left-img mobile'} src={mmain}/>
                                <h1 className={'left-title b48-48 m-b24'}>Снимаем квартиру в новом городе правильно</h1>
                                <div className={'left-tags'}>
                                    <Tag tag={'Статья'}/>
                                    <Tag tag={'Жилье'}/>
                                </div>
                            </Link>
                        </div>
                        <div className={'top-carousel-vert desktop'}>
                            <Link to={'/article/docs-fines'}>
                                <Card fonts={'b24-24 m-b16'} type={'customg-img-1'} image={mainPink}
                                      title={'Медицинские справки: где их брать и почему они всегда нужны «срочно»'}
                                      tags={['Статья', 'Документы']}/>
                            </Link>
                            <Link to={'/article/finance-track-money'}>
                                <Card fonts={'b24-24 m-b16'} type={'customg-img-2'} image={mainGreen}
                                      title={'Как понять, куда уходят деньги?'}
                                      tags={['Статья', 'Финансы']}/>
                            </Link>
                        </div>
                    </div>

                </section>
                <SolveSearch image={obodok} mimage1={mobodok1} mimage2={mobodok2}/>

                <section className={'chapter house'}>
                    <Link to={'/category/living'}><h2 className={'chapter-top-title sb96 m-b48'}>Жилье</h2></Link>
                    <div className={'chapter-items'}>
                        <Link to={'/article/main'}>
                            <Card mimage={mimg1} image={img1} title={'Снимаем квартиру в новом городе правильно'}
                                  type={'white-text'}
                                  tags={['Статья', 'Жилье']}/>
                        </Link>
                        <Link to={'/template'}>
                            <Card mimage={mimg2} image={img2} title={'Что делать если арендодатель нарушает договор'}
                                  type={'white-text'} tags={['Статья', 'Жилье']}/>
                        </Link>
                        <Link to={'/article/living-student-flat'}>
                            <CircleCard mimage={mimg3} image={img3} type={'white-text'}
                                        title={'Студенческое жильё: плюсы и минусы разных вариантов'}
                                        tags={['Статья', 'Жилье']}/>
                        </Link>
                    </div>
                </section>

                <div className={"chapter-outer work-outer"}>
                    <section className={'chapter work'}>
                        <Link to={'/category/work'}><h2 className={'chapter-top-title sb96 m-b48'}>Работа</h2></Link>
                        <div className={'chapter-items'}>
                            <Link to={'/article/work-resume'}>
                                <Card mimage={mimg4} image={img4} title={'Как написать резюме'}
                                      tags={['Статья', 'Работа']}/>
                            </Link>
                            <Link to={'/article/work-burnout'}>
                                <Card mimage={mimg5} image={img5} title={'Что делать, если устал работать'}
                                      tags={['Статья', 'Работа']} type={"black-text"}/>
                            </Link>
                            <Link to={'/article/work-first-job'}>
                                <CircleCard type={"vertical"} mimage={mimg6} image={img6}
                                            title={'Первая подработка, как понять что вакансия нормальная'}
                                            tags={['Статья', 'Работа']}/>
                            </Link>
                        </div>
                    </section>
                </div>

                <section className={'web-sections'}>
                    <Link to={'/category/living'}><img className={'desktop'}
                                                       style={{position: "absolute", left: "0px", top: "0px"}}
                                                       src={section1}/></Link>
                    <Link to={'/category/finance'}><img className={'desktop'}
                                                        style={{position: "absolute", left: "408px", top: "0px"}}
                                                        src={section2}/></Link>
                    <Link to={'/category/docs'}><img className={'desktop'}
                                                     style={{position: "absolute", left: "714px", top: "0px"}}
                                                     src={section3}/></Link>
                    <Link to={'/category/work'}><img className={'desktop'}
                                                     style={{position: "absolute", left: "0px", top: "379px"}}
                                                     src={section4}/></Link>
                    <Link to={'/category/learn'}><img className={'desktop'}
                                                      style={{position: "absolute", left: "408px", top: "291px"}}
                                                      src={section5}/></Link>
                    <Link to={'/category/social'}><img className={'desktop'}
                                                       style={{position: "absolute", left: "714px", top: "371px"}}
                                                       src={section6}/></Link>

                    <Link to={'/category/living'}><img className={'mobile'}
                                                       style={{position: "absolute", left: "0px", top: "0px"}}
                                                       src={msection1}/></Link>
                    <Link to={'/category/finance'}><img className={'mobile'}
                                                        style={{position: "absolute", left: "408px", top: "0px"}}
                                                        src={msection2}/></Link>
                    <Link to={'/category/docs'}><img className={'mobile'}
                                                     style={{position: "absolute", left: "714px", top: "0px"}}
                                                     src={msection3}/></Link>
                    <Link to={'/category/work'}><img className={'mobile'}
                                                     style={{position: "absolute", left: "0px", top: "379px"}}
                                                     src={msection4}/></Link>
                    <Link to={'/category/learn'}><img className={'mobile'}
                                                      style={{position: "absolute", left: "408px", top: "291px"}}
                                                      src={msection5}/></Link>
                    <Link to={'/category/social'}><img className={'mobile'}
                                                       style={{position: "absolute", left: "714px", top: "371px"}}
                                                       src={msection6}/></Link>
                </section>

                <section className={'chapter doc'}>
                    <Link to={'/category/docs'}><h2 className={'chapter-top-title sb96 m-sb24'}>Документы</h2></Link>
                    <div className={'chapter-items'}>
                        <Link to={'/article/docs-fines'}>
                            <Card mimage={mimg7} image={img7} type={'black-text'}
                                  title={'Что делать, если потерял документ'} tags={['Статья', 'Документы']}/>
                        </Link>
                        <Link to={'/article/docs-self-employed'}>
                            <CircleCard mimage={mimg8} image={img8} title={'Самозанятость простыми словами'}
                                        tags={['Статья', 'Документы']}/>
                        </Link>
                        <Link to={'/article/docs-passport'}>
                            <Card mimage={mimg9} image={img9} title={'Как поменять паспорт'}
                                  tags={['Статья', 'Документы']}/>
                        </Link>
                    </div>
                </section>

                <div className={"chapter-outer learn-outer"}>
                    <section className={'chapter learn'}>
                        <Link to={'/category/learn'}><h2 className={'chapter-top-title sb96 m-sb24 m-b48'}>Учеба</h2>
                        </Link>
                        <div className={'chapter-items'}>
                            <Link to={'/article/study-survive'}>
                                <CircleCard type={"vertical"} mimage={mimg10} image={img10}
                                            title={'Как не утонуть в дедлайнах, если всё накопилось'}
                                            tags={['Статья', 'Учеба']}/>
                            </Link>
                            <Link to={'/article/study-work-balance'}>
                                <Card mimage={mimg11} image={img11}
                                      title={'Как совмещать учебу и работу'}
                                      tags={['Статья', 'Учеба']}/>
                            </Link>
                            <Link to={'/article/study-direction'}>
                                <Card mimage={mimg12} image={img12} title={'Как выбрать направление учебы'}
                                      tags={['Статья', 'Учеба']}/>
                            </Link>
                        </div>
                    </section>
                </div>

                <section className={'chapter collection block'}>
                    <Link to={'/chapter-2'}><h2 className={'chapter-top-title sb96 m-b48'}>Подборки</h2></Link>
                    <div className={'chapter-items'}>
                        <Card fonts={'b32 m-b24'} mimage={mimg13} image={img13}
                              title={'Набор выживания \n' +
                                  'для переезда: самые важные шпаргалки'}
                              tags={['Работа', 'Документы', 'Финансы']}
                              type={"black-text"}/>
                        <Card fonts={'b32 m-b24'} mimage={mimg14} image={img14}
                              title={'Подборка «Финансовая грамотность»'} tags={['Документы', 'Финансы', 'Работа']}/>
                    </div>
                </section>

                <div className={"chapter-outer video-outer"}>
                    <section className={'chapter video-pods block'}>
                        <h2 className={'chapter-top-title sb96 m-b48'}>Видео и подкасты</h2>
                        <div className={'video-pods-content'}>
                            <Card fonts={'b24-24 m-b24'} mimage={mimg15} image={img15} type={"lower white-text"}
                                  title={'Как снять квартиру\n' +
                                      'и не стать обманутым'} tags={['Разбор кейса', 'Жилье']}/>
                            <div className={"video-pods-right"}>
                                <Card fonts={'b24-24 m-b24'} mimage={mimg16} image={img16} type={"lower white-text"}
                                      title={'Первое собеседование: как не растеряться'} tags={['Подкаст', 'Работа']}/>
                                <Card fonts={'b24-24 m-b24'} mimage={mimg17} image={img17} type={"lower white-text"}
                                      title={'Основные правила работы с документами'} tags={['Подкаст', 'Документы']}/>
                            </div>
                        </div>
                    </section>
                    <img src={cot} className={'video-outer-img desktop'}/>
                </div>

                <Footer/>
            </>
        );
    }
}

export default Main;
