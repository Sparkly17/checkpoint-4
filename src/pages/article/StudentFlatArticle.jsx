import React from 'react';
import Header from "../../react/Header.jsx";
import Footer from "../../react/Footer.jsx";
import '../../stylesheets/article.scss'
import splash from "/src/images/article/student-flat/splash.png"
import msplash from "/src/images/article/student-flat/m-splash.png"
import img10 from "/src/images/article/img10.png"
import cian from "/src/images/article/cian.png"
import download from "/src/images/icons/download.svg"
import Tag from "../../react/Tag.jsx";
import goto from "/src/images/icons/goto-white.svg"
import Table from "../../react/Table.jsx";
import Card from "../../react/Card.jsx";

import arrow from "/src/images/icons/arrow-right-black.svg"
import FlatCheck from "../../react/FlatCheck.jsx";
import ArticleBanner from "../../react/ArticleBanner.jsx";
import ArticleQuote from "../../react/ArticleQuote.jsx";
import CircleCard from "../../react/CircleCard.jsx";

import img2 from "/src/images/article/student-flat/2.png"
import mimg2 from "/src/images/article/student-flat/m-2.png"

import banner from "/src/images/article/student-flat/banner.png"

import more_img1 from "/src/images/main/card1.png";
import more_img2 from "/src/images/main/card2.png";
import more_img3 from "/src/images/main/card3.png";
import more_mimg1 from "/src/images/main/mcard1.png";
import more_mimg2 from "/src/images/main/mcard2.png";
import more_mimg3 from "/src/images/main/mcard3.png";

class StudentFlatArticle extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={'intro'}>
                    <ArticleBanner title={"Студенческое жильё: плюсы и минусы разных вариантов"}
                                   crumbs={['Главная', 'Быт', 'Студенческое жильё: плюсы и минусы разных вариантов']}/>
                    <img className={'desktop intro-img'} style={{top: "295px", right: "51px"}} src={banner}/>
                </section>
                <article className={'article student-flat gap-96'}>
                    <section className={'article-block gap-48'}>
                        <div className={'gap-24'}>
                            <h2 className={'a-start-title b40 m-b24'}>Студенческое жильё: плюсы и минусы разных
                                вариантов</h2>
                            <p className={'m-s16 s20'}>Мы поговорили с Анастасией Ивановой, которая уже более десяти лет
                                консультирует студентов и их родителей по вопросам съёма жилья, чтобы понять, какие
                                варианты лучше выбирать и на что обращать внимание.</p>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-sb20'}>— Анастасия, с чего лучше начинать поиск?</h2>
                            <p className={'m-s16 s20'}>Для многих студентов первый вариант — общежитие, и это понятно.
                                Это дешево, рядом с университетом и всё включено: свет, вода, интернет. Но есть нюанс:
                                вы делите комнату или этаж с другими людьми, и не всегда легко сосредоточиться на учёбе
                                или отдохнуть.</p>
                        </div>
                        <div className={'article-splash-img'}>
                            <img className={'desktop'} src={splash}/>
                            <img className={'mobile'} src={msplash}/>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-sb20'}>— Какие плюсы жилья в общаге вы бы выделили? А минусы?</h2>
                            <p className={'m-s16 s20'}>Близость к учебе, низкая цена, возможность быстро освоиться среди
                                других студентов. Шум, ограниченная приватность, возможные конфликты с соседями, строгие
                                правила и ограниченное время пребывания гостей.</p>
                        </div>
                        <div className={'desktop'}>
                            <ArticleQuote
                                quote={'Общежитие — отличный старт, но не для тех, кто ценит личное пространство'}/>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-sb20'}>— А как насчёт аренды квартиры?</h2>
                            <p className={'m-s16 s20'}>Это совершенно другой опыт. Тут у тебя своя кухня, ванная, часто
                                своя комната или даже отдельная квартира. Свобода полная, но и ответственность тоже: все
                                счета, уборка, ремонт — на тебе. С одной стороны это приватность, контроль над жильём,
                                возможность приглашать друзей, удобство и комфорт. Но есть и минусы: Стоимость выше,
                                нужно разбираться с коммуналкой, иногда сложно найти безопасный вариант без риска
                                попасть на мошенников.</p>
                        </div>
                        <img className={'desktop'} src={img2}/>
                        <img className={'mobile'} src={mimg2}/>
                        <div className={'desktop'}>
                            <ArticleQuote
                                quote={'Съёмная квартира учит самостоятельности, но требует внимательности и финансовой дисциплины'}/>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-sb20'}>— Сьемная комната, что скажете про такой вариант?</h2>
                            <p className={'m-s16 s20'}>Это вариант между общежитием и съёмной квартирой. Часто дешевле
                                аренды квартиры, есть доступ к кухне и удобствам, иногда хозяин помогает с бытовыми
                                вопросами. Ограничения по личной свободе, возможно, неудобное соседство с хозяевами,
                                иногда строгие правила поведения.
                                «Комната у хозяина — компромисс: экономия и помощь, но меньше свободы», — резюмирует
                                Анастасия.</p>
                        </div>
                    </section>
                </article>
                <section className={'articl chapter house block'}>
                    <div className={'chapter-top  article-more-info'}>
                        <h2 className={'chapter-top-title b48 m-sb24'}>Больше на тему <em>жилье</em></h2>
                        <p className={'chapter-top-link n20 m-n20'}>Смотреть все <img src={arrow}/></p>
                    </div>
                    <div className={'chapter-items'}>
                        <a href={'#/article'}>
                            <Card mimage={more_mimg1} image={more_img1}
                                  title={'Что проверить до приезда хозяина квартиры'}
                                  type={'white-text'}
                                  tags={['Статья', 'Жилье']}/>
                        </a>
                        <Card mimage={more_mimg2} image={more_img2} title={'Акт приема-передачи квартиры: шаблон'}
                              type={'white-text'} tags={['Шаблон', 'Жилье']}/>
                        <CircleCard mimage={more_mimg3} image={more_img3} type={'white-text'}
                                    title={'Как распределить бытовые задачи с соседом в общаге'}
                                    tags={['Статья', 'Жилье']}/>
                    </div>
                </section>
                <Footer/>
            </>
        );
    }
}

export default StudentFlatArticle;
