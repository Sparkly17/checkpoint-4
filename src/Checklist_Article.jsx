import React from 'react';
import Header from "./react/Header.jsx";
import Footer from "./react/Footer.jsx";
import './stylesheets/checklist_article.scss'
import banner from "/src/images/checklist/banner.png"
import Banner from "./react/Banner.jsx";
import Table from "./react/Table.jsx";
import checkpoint from "/src/images/icons/checkpoint.svg"
import Tag from "./react/Tag.jsx";
import img3 from "./images/article/img3.png";
import Card from "./react/Card.jsx";
import card6 from "/src/images/main/img6.png";
import card7 from "/src/images/main/img7.png";
import mcard6 from "/src/images/main/mimg6.png";
import mcard7 from "/src/images/main/mimg7.png";
import arrowBlack from "/src/images/icons/arrow-right-black.svg"

class Checklist_Article extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <div className={'checklist_article'}>
                    <Banner title={'Как найти хорошее объявление о сдаче жилья'} tags={['Подборка']} image={banner}/>
                </div>
                <article className={'article checklist-article'}>
                    <section>
                        <div className={'a-check-table'}>
                            <h2 className={'b32-32'}>На каких сайтах искать квартиру</h2>
                            <Table/>
                        </div>
                        <p className={'s20'}>
                            Если не хотите иметь дел с риелтором, отправляйтесь в соцсети. Там с большей вероятностью
                            можно встретить объявление от собственника. А еще посмотреть профиль арендодателя и хотя бы
                            приблизительно понять, комфортно ли вам будет с ним общаться.
                        </p>
                        <div className={'a-house-list'}>
                            <h3 className={'a-house-list-title b32-32'}>Чек-лист: что проверить</h3>
                            <div className={'a-house-list-point'}>
                                <h4 className={'a-house-list-p-title b24-24'}>
                                    <img src={checkpoint}/>
                                    Цена
                                </h4>
                                <p className={'a-house-list-p-text s20'}>
                                    Однушки в соседних домах стоят 45 тысяч в месяц, а вы нашли вариант за 25 тысяч?
                                    Скорее всего, это не подарок судьбы, а развод. Возможно, этой квартиры даже не
                                    существует, а объявление разместили риелторы, чтобы собрать побольше звонков.
                                </p>
                            </div>
                            <div className={'a-house-list-point'}>
                                <h4 className={'a-house-list-p-title b24-24'}>
                                    <img src={checkpoint}/>
                                    Номер телефона
                                </h4>
                                <p className={'a-house-list-p-text s20'}>
                                    Поищите в интернете телефон хозяина объявления. Если в объявлении написано
                                    «собственник», а Гугл говорит, что по такому номеру еще десятки объявлений о сдаче
                                    недвижимости, — возможно, это риелтор.
                                </p>
                            </div>
                            <div className={'a-house-list-point'}>
                                <h4 className={'a-house-list-p-title b24-24'}>
                                    <img src={checkpoint}/>
                                    Раздел «Продажа»
                                </h4>
                                <p className={'a-house-list-p-text s20'}>
                                    Найдите все квартиры и комнаты, которые сдают и продают по этому адресу:
                                    проштудируйте «Циан», «Авито» и «Яндекс-недвижимость». В объявлениях о продаже
                                    обычно указывают планировку. Так вы поймете тип дома — хрущевка, сталинка,
                                    новостройка — и стандартный метраж у однушки. Если окажется, что дом — хрущевка с
                                    32-метровыми квартирами, а вам по этому же адресу предлагают снять 40-метровую
                                    однушку в новостройке — бегите, это развод.
                                </p>
                            </div>
                            <div className={'a-house-list-point'}>
                                <h4 className={'a-house-list-p-title b24-24'}>
                                    <img src={checkpoint}/>
                                    Даты капремонта
                                </h4>
                                <p className={'a-house-list-p-text s20'}>
                                    Зная адрес квартиры, можно проверить даты, в которые в доме будет проводиться
                                    капитальный ремонт. Капремонт — это шум, пыль и отключение электричества. Если вы не
                                    готовы страдать, проверьте, когда планируется ремонт дома. Узнать даты в российских
                                    городах можно на сайте ГИС ЖКХ.
                                </p>
                            </div>
                        </div>

                        <div className={'other'}>
                            <div className={'other-image'}>
                                <div className={'card-tags'}>
                                    <Tag tag={'Разбор кейса'}/>
                                    <Tag tag={'Жилье'}/>
                                </div>
                                <img src={img3}/>
                            </div>
                            <div className={'other-info'}>
                                <h4 className={'b24-24'}>Сменил пять квартир за год: как найти идеальное жилье?</h4>
                                <p className={'n16'}>Мы не знаем, какие дома вам больше нравятся — хрущевки, сталинки или новостройки:
                                    в каждой постройке есть свои прелести и недостатки. Почитайте про опыт человека,
                                    который сменил пять квартир в разных типах домов, возможно, он поможет вам
                                    определиться.</p>
                            </div>
                        </div>

                        <p className={'n20-20'}>
                            А теперь страшная история. Одна девочка так тщательно проверяла объявления, что осталась без
                            жилья: пока телефон пробьет, пока адрес проверит — квартиру уже и сдадут другому человеку. А
                            все потому, что хорошие варианты разбирают мгновенно и медлить нельзя. Поэтому сначала
                            позвоните и договоритесь о встрече, а проверить объявление можно и до нее. Если найдете
                            что-то подозрительное — просто отмените встречу и на всякий случай пожалуйтесь модератору.
                        </p>
                    </section>
                </article>
                <section className={'chapter collection block'}>
                    <div className={'chapter-top'}>
                        <h2 className={'chapter-top-title sb32 m-sb24'}>Сборники чек-листов и шаблонов</h2>
                        <p className={'chapter-top-link n20 m-n20'}>Все подборки <img src={arrowBlack}/></p>
                    </div>
                    <div className={'chapter-items'}>
                        <a href={'#/category'}>
                            <Card fonts={'b40 m-b24'} mimage={mcard6} image={card6} title={'Набор выживания для переезда: самые важные шпаргалки'} tags={['Жилье', 'Документы', 'Финансы']}/>
                        </a>
                        <Card fonts={'b40 m-b24'} mimage={mcard7} image={card7} title={'Подборка «Финансовая грамотность»'} tags={['Документы', 'Финансы']}/>
                    </div>
                </section>
                <Footer/>
            </>
        );
    }
}

export default Checklist_Article;
