import React from 'react';
import Header from "../../react/Header.jsx";
import Footer from "../../react/Footer.jsx";
import '../../stylesheets/article.scss'
import splash from "/src/images/article/leave/splash.png"
import msplash from "/src/images/article/leave/m-splash.png"
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

import img2 from "/src/images/article/leave/2.png"
import img3 from "/src/images/article/leave/3.png"
import img4 from "/src/images/article/leave/4.png"
import img5 from "/src/images/article/leave/5.png"
import mimg2 from "/src/images/article/leave/m-2.png"
import mimg3 from "/src/images/article/leave/m-3.png"
import mimg4 from "/src/images/article/leave/m-4.png"
import mimg5 from "/src/images/article/leave/m-5.png"

import banner from "/src/images/article/leave/banner.png"

import more_img1 from "/src/images/main/card1.png";
import more_img2 from "/src/images/main/card2.png";
import more_img3 from "/src/images/main/card3.png";
import more_mimg1 from "/src/images/main/mcard1.png";
import more_mimg2 from "/src/images/main/mcard2.png";
import more_mimg3 from "/src/images/main/mcard3.png";

class LeaveArticle extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={'intro'}>
                    <ArticleBanner title={"Как сьехать с квартиры без потерь и ссор"}
                                   crumbs={['Главная', 'Быт', 'Как сьехать с квартиры без потерь и ссор']}/>
                    <img className={'desktop intro-img'} style={{top: "178px", right: "0"}} src={banner}/>
                </section>
                <article className={'article leave-article gap-96'}>
                    <section className={'a-start article-block'}>
                        <h2 className={'a-start-title b40 m-b24'}>Как съехать с квартиры без потерь и конфликтов</h2>
                        <p className={'m-s16 s20'}>Переезд с квартиры — это не только перенос вещей, но и много
                            бюрократии, возможных недопониманий и рисков потерять залог. Если не подготовиться заранее,
                            можно лишиться денег, испортить отношения с арендодателем или столкнуться с неожиданными
                            штрафами. Главная цель — съехать аккуратно, оставить квартиру в порядке и сохранить
                            спокойствие обеих сторон.</p>
                        <div className={'article-splash-img'}>
                            <img className={'desktop'} src={splash}/>
                            <img className={'mobile'} src={msplash}/>
                        </div>
                        <div className={'gap-24'}>
                            <h3 className={'b24-24 m-b20'}>Состояние квартиры: что фиксировать</h3>
                            <p className={'m-s16 s20'}>Перед съездом внимательно обойдите все комнаты и зафиксируйте
                                состояние квартиры. Обратите внимание на:<br/>
                                • стены, полы, потолки — царапины, пятна, сколы<br/>
                                • мебель и технику — наличие и исправность<br/>
                                • сантехнику и электрику — работа, протечки, поломки<br/>
                                Лучше делать фото и видео с датой, чтобы при спорах можно было показать реальное
                                состояние квартиры. Если что-то сломалось по вашей вине — обсудите компенсацию заранее,
                                чтобы избежать неожиданностей.</p>
                            <img className={'desktop'} src={img2}/>
                            <img className={'mobile'} src={mimg2}/>
                            <p className={'m-s16 s20'}>
                                Чистота и порядок имеют значение:<br/>
                                • Пропылесосьте и протрите поверхности<br/>
                                • Вымойте полы и окна<br/>
                                • Проверяйте исправность сантехники и техники<br/>
                                • Почините мелкие поломки или предупредите владельца<br/>
                                Даже если квартира не ваша, аккуратность и внимание к деталям создают доверие и повышают
                                шанс вернуть залог полностью.
                            </p>
                        </div>
                    </section>
                    <section className={'a-find article-block'}>
                        <h3 className={'b24-24 m-b20'}>Договоренности с арендодателем</h3>
                        <div className={'article-two-photos-hor'}>
                            <img className={'desktop'} src={img3}/>
                            <img className={'desktop'} src={img4}/>
                            <img className={'mobile'} src={mimg3}/>
                            <img className={'mobile'} src={mimg4}/>
                        </div>
                        <div className={'gap-16'}>
                            <p className={'m-s16 s20'}>
                            Уточните заранее, когда и как будет проходить осмотр квартиры, кто присутствует и какие
                                документы нужно подписывать. Всё фиксируйте письменно — даже простое сообщение в
                                мессенджере поможет в случае разногласий.
                            </p>
                            <div className={'desktop'}>
                                <ArticleQuote
                                    author={'Иван Платонов — опытный юрист по аренде жилья'}
                                    quote={'«Наличие акта передачи квартиры — ваш лучший щит», — советует опытный юрист по аренде жилья.'}/>
                            </div>
                            <p className={'m-s16 s20'}>
                                Согласуйте детали: кто проверяет показания счётчиков, кто получает ключи, когда
                                возвращается залог. Это избавляет от недоразумений и лишних споров. Не оставляйте ключи
                                у соседей или друзей: передавайте их только арендодателю или указанному лицу. Убедитесь,
                                что арендодатель подтвердил получение ключей письменно или в мессенджере. Уведомьте
                                управляющую компанию или ЖКХ о съезде, если это требуется.
                                Так вы избежите претензий за повреждения или неоплаченные счета после вашего выезда.
                            </p>
                        </div>

                    </section>
                    <section className={'a-check article-block gap-24'}>
                        <div className={'gap-24'}>
                            <h3 className={'b24-24  m-b20'}>Акт передачи и залог</h3>
                            <img className={'desktop'} src={img5}/>
                            <img className={'mobile'} src={mimg5}/>
                            <p className={'m-s16 s20'}>
                                Подписание акта передачи фиксирует состояние квартиры и защищает обе стороны. В
                                документе
                                укажите: список мебели и техники, состояние стен, пола, потолка, наличие долгов по
                                коммунальным платежам, дату передачи ключей.
                                После осмотра обсудите дату возврата залога. Если есть споры, показывайте фото и видео —
                                это
                                поможет аргументировано доказать своё положение.
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

export default LeaveArticle;
