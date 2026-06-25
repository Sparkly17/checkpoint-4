import React from 'react';
import Header from "../../react/Header.jsx";
import Footer from "../../react/Footer.jsx";
import '../../stylesheets/article.scss'
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

import img1 from "/src/images/article/communal/1.png"
import img2 from "/src/images/article/communal/2.png"
import img3 from "/src/images/article/communal/3.png"
import img4 from "/src/images/article/communal/4.png"
import img5 from "/src/images/article/communal/5.png"
import mimg1 from "/src/images/article/communal/m-1.png"
import mimg2 from "/src/images/article/communal/m-2.png"
import mimg3 from "/src/images/article/communal/m-3.png"
import mimg4 from "/src/images/article/communal/m-4.png"
import mimg5 from "/src/images/article/communal/m-5.png"

import banner from "/src/images/article/communal/banner.png"

import more_img1 from "/src/images/main/card1.png";
import more_img2 from "/src/images/main/card2.png";
import more_img3 from "/src/images/main/card3.png";
import more_mimg1 from "/src/images/main/mcard1.png";
import more_mimg2 from "/src/images/main/mcard2.png";
import more_mimg3 from "/src/images/main/mcard3.png";

class CommunalArticle extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={'intro'}>
                    <ArticleBanner title={"Коммуналка: за что платишь и как за этим следить"}
                                   crumbs={['Главная', 'Быт', 'Коммуналка: за что платишь и как за этим следить']}/>
                    <img className={'desktop intro-img'} style={{top: "83px", right: "0"}} src={banner}/>

                </section>
                <article className={'article communal-article gap-96'}>
                    <section className={'article-block gap-96'}>
                        <div className={'gap-24'}>
                            <h2 className={'a-start-title b40 m-b24'}>Коммунальные услуги: за что ты платишь и как это
                                контролировать</h2>
                            <p className={'m-s16 s20'}>Коммуналка — одна из тех вещей, о которых почти никто не думает
                                на старте. Смотришь квартиру, обсуждаешь цену, радуешься, что «влезаю в бюджет» — а
                                потом приходит первый платёж, и оказывается, что к аренде добавляется ещё ощутимая
                                сумма. И самое неприятное — ты не до конца понимаешь, за что именно платишь и нормально
                                ли это вообще.
                            </p>
                            <div className={'desktop'}>
                                <ArticleQuote quote={'Самая дорогая коммуналка —  та, которую ты не понимаешь'}/>
                            </div>
                            <img className={'desktop'} src={img1}/>
                            <img className={'mobile'} src={mimg1}/>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-b24'}>Что вообще входит в коммунальные платежи</h2>
                            <p className={'m-s16 s20'}>Первое, что важно понять: «коммуналка» — это не одна цифра, а
                                набор разных услуг. И в каждой квартире этот набор может немного отличаться.
                            </p>
                            <img className={'desktop'} src={img2}/>
                            <img className={'mobile'} src={mimg2}/>
                            <p className={'m-s16 s20'}>Первое, что важно понять: «коммуналка» — это не одна цифра, а
                                набор разных услуг. И в каждой квартире этот набор может немного отличаться.
                                Обычно туда входят:<br/>
                                • вода (холодная и горячая)<br/>
                                • электричество<br/>
                                • отопление<br/>
                                • вывоз мусора<br/>
                                • содержание дома (лифт, уборка подъезда, ремонт)<br/>
                                • интернет (иногда отдельно, иногда уже подключён)<br/>
                                Иногда часть платежей уже включена в аренду, иногда всё платится отдельно. И вот здесь
                                часто начинается путаница: ты думаешь, что платишь «всё включено», а потом выясняется,
                                что счётчики — сверху.
                                Поэтому ещё на этапе съёма важно задать прямой вопрос: что именно входит в аренду, а что
                                оплачивается отдельно?
                            </p>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-b24'}>Почему суммы могут сильно отличаться</h2>
                            <p className={'m-s16 s20'}>
                                Даже в похожих квартирах коммуналка может отличаться в разы. Это нормально.
                                Основные факторы:<br/>
                                • есть ли счётчики или платёж фиксированный<br/>
                                • сколько человек живёт<br/>
                                • состояние дома (старый или новый)<br/>
                                • отопление (центральное или индивидуальное)<br/>
                                • твои привычки (душ каждый день или раз в три, техника постоянно включена или нет)<br/>
                                Например, зимой платёж почти всегда выше из-за отопления. А если в квартире старые окна
                                или плохая изоляция, сумма может быть ещё больше.
                            </p>
                            <div className={'desktop'}>
                                <ArticleQuote quote={'Цена аренды — это только половина стоимости жизни в квартире'}/>
                            </div>
                            <p className={'m-s16 s20'}>Гораздо проще сказать на старте: спокойно и без наезда. Не «ты
                                постоянно всё оставляешь», а «давай договоримся убирать кухню после себя». Не «ты бесишь
                                своим шумом», а «мне сложно засыпать, давай после 23:00 потише». Когда проблема ещё
                                маленькая, её легче решить. И это не воспринимается как конфликт.
                            </p>
                        </div>
                        <img className={'desktop'} src={img3}/>
                        <img className={'mobile'} src={mimg3}/>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-b24'}>Как понять, что ты платишь нормально</h2>
                            <p className={'m-s16 s20'}>
                                Если ты впервые живёшь отдельно, сложно понять, адекватные ли суммы приходят.
                                Здесь помогает простая логика:<br/>
                                • сравнить с похожими квартирами<br/>
                                • спросить у знакомых<br/>
                                • посмотреть средние цифры по городу<br/>
                                Если платёж резко выше ожиданий, стоит разобраться, откуда он берётся. Иногда это
                                объективные причины (например, зима), а иногда — ошибки или недоговорённости.
                            </p>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-b24'}>Как контролировать платежи, чтобы не переплачивать</h2>
                            <div className={'article-two-photos-hor'}>
                                <img className={'desktop'} src={img4}/>
                                <img className={'desktop'} src={img5}/>
                                <img className={'mobile'} src={mimg4}/>
                            </div>
                            <p className={'m-s16 s20'}>
                                Даже в похожих квартирах коммуналка может отличаться в разы. Это нормально.
                                Основные факторы:<br/>
                                • есть ли счётчики или платёж фиксированный<br/>
                                • сколько человек живёт<br/>
                                • состояние дома (старый или новый)<br/>
                                • отопление (центральное или индивидуальное)<br/>
                                • твои привычки (душ каждый день или раз в три, техника постоянно включена или нет)<br/>
                                Например, зимой платёж почти всегда выше из-за отопления. А если в квартире старые окна
                                или плохая изоляция, сумма может быть ещё больше.
                            </p>
                            <div className={'desktop'}>
                                <ArticleQuote quote={'Цена аренды — это только половина стоимости жизни в квартире'}/>
                            </div>
                            <p className={'m-s16 s20'}>
                                Гораздо проще сказать на старте: спокойно и без наезда. Не «ты постоянно всё
                                оставляешь», а «давай договоримся убирать кухню после себя». Не «ты бесишь своим шумом»,
                                а «мне сложно засыпать, давай после 23:00 потише». Когда проблема ещё маленькая, её
                                легче решить. И это не воспринимается как конфликт.
                            </p>
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

export default CommunalArticle;
