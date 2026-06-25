import React from 'react';
import Header from "./react/Header.jsx";
import Footer from "./react/Footer.jsx";
import house from "/src/images/banner/chapter2.png"
import mhouse from "/src/images/banner/mchapter2.png"
import './stylesheets/chapter.scss'
import Card from "./react/Card.jsx";
import card1 from "/src/images/cards/chapter2/img1.png";
import card2 from "/src/images/cards/chapter2/img2.png";
import card3 from "/src/images/cards/chapter2/img3.png";
import card4 from "/src/images/cards/chapter2/img4.png";
import card5 from "/src/images/cards/chapter2/img5.png";
import card6 from "/src/images/cards/chapter2/img6.png";
import mcard1 from "/src/images/cards/chapter2/mimg1.png";
import mcard2 from "/src/images/cards/chapter2/mimg2.png";
import mcard3 from "/src/images/cards/chapter2/mimg3.png";
import mcard4 from "/src/images/cards/chapter2/mimg4.png";
import mcard5 from "/src/images/cards/chapter2/mimg5.png";
import mcard6 from "/src/images/cards/chapter2/mimg6.png";

class Chapter2 extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={"chapter-page chp2 banner"}>
                    <div className={"banner-content"}>
                        <h1 className={"banner-title b80 m-b30"}>Подборки</h1>
                        <p className={"banner-text n20 m-n14-20"}>Подборки — это собранные в одном месте материалы по важным
                            темам. Здесь собрано самое главное, чтобы было проще ориентироваться и быстрее находить
                            нужное.</p>
                    </div>
                    <img className={"banner-img desktop"} src={house}/>
                    <img className={"banner-img mobile"} src={mhouse}/>
                </section>
                <div className={'block'}>
                    <section className={'cards-section'}>
                        <div className={'cards-list'} style={{gridTemplateColumns: "488px 692px"}}>
                            <Card fonts={"b40 m-b24"} title={'Памятки для будущих работяг'} tags={['Финансы', 'Документы', 'Работа']}
                                  mimage={mcard1} image={card1}/>
                            <Card fonts={"b40 m-b24"} title={'Документы по-человечески: \nкак не утонуть в бюрократии'}
                                  tags={['Документы', 'Работа']} mimage={mcard2} image={card2}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "692px 488px"}}>
                            <a href={'#/collection'}>
                                <Card fonts={"b40 m-b24"} title={'Набор выживания для переезда: самые важные шпаргалки'}
                                      tags={['Финансы', 'Жилье', 'Работа']} mimage={mcard3} image={card3}/>
                            </a>

                            <Card fonts={"b40 m-b24"} title={'Подборка «Финансовая грамотность»'} tags={['Финансы', 'Документы', 'Работа']}
                                  mimage={mcard4} image={card4}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "488px 692px"}}>
                            <Card fonts={"b40 m-b24"} title={'Быт за 5 минут: база, которая тебя спасет'} tags={['Жилье', 'Работа']}
                                  mimage={mcard5} image={card5}/>
                            <Card fonts={"b40 m-b24"} title={'Учеба на легке: главные шпаргалки'} tags={['Документы', 'Учеба']}
                                  mimage={mcard6} image={card6}/>
                        </div>
                    </section>
                </div>
                <Footer/>
            </>
        );
    }
}

export default Chapter2;
