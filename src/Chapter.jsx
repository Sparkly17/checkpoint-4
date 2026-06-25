import React from 'react';
import Header from "./react/Header.jsx";
import Footer from "./react/Footer.jsx";
import house from "/src/images/banner/house.png"
import mhouse from "/src/images/banner/mhouse.png"
import './stylesheets/chapter.scss'
import Sort_Btn from "./react/Sort_Btn.jsx";
import time from "/src/images/icons/time.svg"
import asc from "/src/images/icons/asc.svg"
import Card from "./react/Card.jsx";
import card1 from "/src/images/cards/img1.png";
import card2 from "/src/images/cards/img2.png";
import card3 from "/src/images/cards/img3.png";
import card4 from "/src/images/cards/img4.png";
import card5 from "/src/images/cards/img5.png";
import card6 from "/src/images/cards/img6.png";
import card7 from "/src/images/cards/img7.png";
import card8 from "/src/images/cards/img8.png";
import card9 from "/src/images/cards/img9.png";
import card10 from "/src/images/cards/img10.png";
import mcard1 from "/src/images/cards/mimg1.png";
import mcard2 from "/src/images/cards/mimg2.png";
import mcard3 from "/src/images/cards/mimg3.png";
import mcard4 from "/src/images/cards/mimg4.png";
import mcard5 from "/src/images/cards/mimg5.png";
import mcard6 from "/src/images/cards/mimg6.png";
import mcard7 from "/src/images/cards/mimg7.png";
import mcard8 from "/src/images/cards/mimg8.png";
import mcard9 from "/src/images/cards/mimg9.png";
import mcard10 from "/src/images/cards/mimg10.png";

class Chapter extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={"chapter-page banner"}>
                    <div className={"banner-content"}>
                        <h1 className={"banner-title b80 m-b30"}>Жилье</h1>
                        <p className={"banner-text n20 m-n14-20"}>Жильё это про комфорт и ощущение опоры. Здесь собраны
                            материалы,
                            которые помогают навести порядок без спешки.</p>
                    </div>
                    <img className={"banner-img desktop"} src={house}/>
                    <img className={"banner-img mobile"} src={mhouse}/>
                </section>
                <div className={'block'}>
                    <section className={'sort-section'}>
                        <div className={'sort-btns'}>
                            <Sort_Btn active={true} text={'Время чтения'} icon={time}/>
                            <Sort_Btn active={true} text={'Сортировка'} icon={asc}/>
                        </div>
                        <div className={'asort-btns'}>
                            <Sort_Btn active={true} text={'Все'}/>
                            <Sort_Btn active={false} text={'Видео'}/>
                            <Sort_Btn active={false} text={'Шаблоны'}/>
                            <Sort_Btn active={false} text={'Интервью'}/>
                            <Sort_Btn active={false} text={'Подкасты'}/>
                            <Sort_Btn active={false} text={'Чек-листы'}/>
                            <Sort_Btn active={false} text={'Разбор кейсов'}/>
                        </div>
                    </section>
                    <section className={'cards-section'}>
                        <div className={'cards-list'} style={{gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
                            <a href='#/article'>
                            <Card title={'Как снять квартиру в чужом городе?'} tags={['Статья']} mimage={mcard1}
                                  image={card1}/>
                            </a>
                            <Card title={'Как снять показания счетчиков'} tags={['Статья']} mimage={mcard2}
                                  image={card2}/>
                            <Card title={'Переехал в Москву и остался без денег'} type={"lower"} mimage={mcard3}
                                  tags={['Разбор кейса']} image={card3}/>
                            <Card title={'Акт приема-передачи квартиры: шаблон'} type={'black-text'} mimage={mcard4}
                                  tags={['Шаблон']} image={card4}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
                            <Card title={'Как найти идеальное жилье?'} type={"lower"} tags={['Разбор-кейса']}
                                  mimage={mcard5} image={card5}/>
                            <Card title={'Что должно быть в корзине у каждого'} tags={['Статья']} mimage={mcard6}
                                  image={card6}/>
                            <Card title={'Лайфхаки для жизни в одиночку'} type={'black-text'} mimage={mcard4}
                                  tags={['Чек-лист']} image={card4}/>
                            <Card title={'Статья для тех, у кого нет времени на уборку'} tags={['Стетья']}
                                  mimage={mcard7} image={card7}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "285px 285px 590px"}}>
                            <Card title={'Что проверить до приезда хозяина квартиры'} tags={['Статья']} mimage={mcard8}
                                  image={card8}/>
                            <Card title={'Как снять квартиру и не стать обманутым'} type={"lower"}
                                  tags={['Разбор кейса']} mimage={mcard9} image={card9}/>
                            <Card title={'Как распределить бытовые задачи с соседом в общаге'} tags={['Статья']}
                                  mimage={mcard10} image={card10}/>
                        </div>
                    </section>
                </div>
                <Footer/>
            </>
        );
    }
}

export default Chapter;
