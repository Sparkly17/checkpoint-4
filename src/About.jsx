import React from 'react';
import Header from "./react/Header.jsx";
import Footer from "./react/Footer.jsx";
import spider from "/src/images/banner/spider.png"
import './stylesheets/about.scss'
import alina from "/src/images/other/alina.png"
import vova from "/src/images/other/vova.png"
import misha from "/src/images/other/misha.png"
import Themes from "./react/Themes.jsx";
import Card from "./react/Card.jsx";
import spec1 from "/src/images/other/spec1.png"
import spec2 from "/src/images/other/spec2.png"
import spec3 from "/src/images/other/spec3.png"

import mspider from "/src/images/banner/mspider.png"
import malina from "/src/images/other/malina.png"
import mvova from "/src/images/other/mvova.png"
import mmisha from "/src/images/other/mmisha.png"
import mspec1 from "/src/images/other/mspec1.png"
import mspec2 from "/src/images/other/mspec2.png"
import mspec3 from "/src/images/other/mspec3.png"

import section1 from "/src/images/main/section1.png";
import section2 from "/src/images/main/section2.png";
import section3 from "/src/images/main/section3.png";
import section4 from "/src/images/main/section4.png";
import section5 from "/src/images/main/section5.png";
import section6 from "/src/images/main/section6.png";
import {Link} from "react-router-dom";
import { PageMeta } from "./react/usePageMeta.js";


class Chapter extends React.Component {
    render() {
        return (
            <>
                <PageMeta title="О проекте" description="Чекпоинт — информационный ресурс для тех, кто только начинает самостоятельную жизнь" />
                <Header/>
                <section className={"about banner"}>
                    <div className={"banner-content"}>
                        <h1 className={"banner-title b80 m-b30"}>Медиа от зумеров для зумеров</h1>
                        <p className={"banner-text n20 m-n14-20"}>Помогаем зумерам во взрослой жизни:
                            объясняем просто и понятно, что, как и где</p>
                    </div>
                    <img className={"banner-img desktop"} src={spider}/>
                    <img className={"banner-img mobile"} src={mspider}/>
                </section>
                <section className={'info block'}>
                    <div className={'info-row alina'}>
                        <div className={'info-row-img'}>
                            <img className={'info-img desktop'} src={alina}/>
                            <img className={'info-img mobile'} src={malina}/>
                            <p className={'info-name b32 m-b20'}>Алина, 17</p>
                        </div>
                        <div className={'info-row-text'}>
                            <h2 className={'info-title b48-48 m-b30-30'}>Мы не учебник, а наставник</h2>
                            <p className={'info-desc s20-28 m-n14'}>Алина никак не могла определиться с выбором
                                направления
                                обучения:
                                родители настаивали на медицине, а душа лежала к творчеству. В Чек-Поинте Алина нашла
                                гайды и статьи, которые ей помогли определиться с направлением, а интервью с разбором
                                кейса дало ей уверенности</p>
                        </div>
                    </div>
                    <div className={'info-row vova'}>
                        <div className={'info-row-img'}>
                            <img className={'info-img desktop'} src={vova}/>
                            <img className={'info-img mobile'} src={mvova}/>
                            <p className={'info-name b32 m-b20'}>Вова, 20</p>
                        </div>
                        <div className={'info-row-text'}>
                            <h2 className={'info-title b48-48 m-b30-30'}>Решаем широкий спектр проблем</h2>
                            <p className={'info-desc s20-28 m-n14'}>После переезда Вова жил в полупустой квартире,
                                ел доширак и никак не мог заставить себя сделать уборку. В Чек-Поинте он нашел чек-листы
                                для здорового питания, гайды по правильной уборке и статьи про особенности быта в
                                взрослой жизни</p>
                        </div>
                    </div>
                    <div className={'info-row'}>
                        <div className={'info-row-img'}>
                            <img className={'info-img desktop'} src={misha}/>
                            <img className={'info-img mobile'} src={mmisha}/>
                            <p className={'info-name b32 m-b20'}>Миша, 24</p>
                        </div>
                        <div className={'info-row-text'}>
                            <h2 className={'info-title b48-48 m-b30-30'}>Решаем сложные проблемы просто</h2>
                            <p className={'info-desc s20-28 m-n14'}>Миша хотел открыть ИП, но запутался в куче разных
                                приложений,
                                сервисов и документов. В Чек-Поинте он нашел все нужные ему шаблоны документов, а также
                                узнал в подкасте, как грамотнее подойти к этому вопросу и получил доступ к чату с
                                другими начинающими предпринимателями</p>
                        </div>
                    </div>
                </section>
                <section className={'block mobile'}>
                    <Themes/>
                </section>
                <section  style={{margin: "96px 120px"}} className={'block desktop web-sections'}>
                    <Link to={'/category/living'}><img style={{position: "absolute", left: "0px", top: "0px"}} src={section1}/></Link>
                    <Link to={'/category/finance'}><img style={{position: "absolute", left: "408px", top: "0px"}} src={section2}/></Link>
                    <Link to={'/category/docs'}><img style={{position: "absolute", left: "714px", top: "0px"}} src={section3}/></Link>
                    <Link to={'/category/work'}><img style={{position: "absolute", left: "0px", top: "379px"}} src={section4}/></Link>
                    <Link to={'/category/learn'}><img style={{position: "absolute", left: "408px", top: "291px"}} src={section5}/></Link>
                    <Link to={'/category/social'}><img style={{position: "absolute", left: "714px", top: "371px"}} src={section6}/></Link>
                </section>
                <section className={'spec block'}>
                    <div className={'spec-info'}>
                        <h2 className={'b48 m-b30-30 desktop'}>Спец- проекты</h2>
                        <h2 className={'b48 m-b30-30 mobile'}>Спецпроекты</h2>
                        <p className={'n20 m-s14'}>Здесь мы создаем контент для тех, чей путь во взрослую жизнь
                            начинается с особых обстоятельств.</p>
                    </div>
                    <Card image={spec1} mimage={mspec1} title={'Особый путь — проект для ребят с инвалидностью'}/>
                    <Card image={spec2} mimage={mspec2} title={'Взрослая жизнь в новой стране — переезд в Россию'}/>
                    <Card image={spec3} mimage={mspec3} title={'Из интерната во взрослую жизнь'}/>
                </section>
                <section className={'form-block block'}>
                    <h2 className={'b48 form-title m-b30-30'}>Не пропусти важные новости</h2>
                    <form className={'form'}>
                        <div className={'form-inputs'}>
                            <input placeholder={'Имя'} className={'form-input s20-28'}/>
                            <input placeholder={'E-mail'} className={'form-input s20-28'}/>
                        </div>

                        <button className={'form-button s20-28'}>Отправить</button>
                    </form>
                </section>
                <Footer/>
            </>
        );
    }
}

export default Chapter;
