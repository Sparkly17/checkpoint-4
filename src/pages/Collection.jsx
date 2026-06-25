import React from 'react';
import Header from "../react/Header.jsx";
import Footer from "../react/Footer.jsx";
import '../stylesheets/collection.scss'
import Banner from "../react/Banner.jsx";
import banner from "../images/collection/banner.png";
import mbanner from "../images/collection/mbanner.png";
import checkpoint from "../images/icons/checkpoint.svg";
import Act_Doc from "../react/Act_Doc.jsx";
import FlatCheck from "../react/FlatCheck.jsx";

class Collection extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <div className={'collection'}>
                    <Banner title={'Набор выживания для переезда: самые важные шпаргалки'}
                            image={banner} mimage={mbanner} />
                </div>
                <section className={'block mobile'}>
                    <h2 className={'checklist-report-title b32-32 m-sb24'}>Чек-лист обьявления</h2>
                    <div className={'checklist-report'}>
                        <div className={'checklist-report-point'}>
                            <h3 className={'checklist-report-p-title sb24 m-sb20'}>
                                <img src={checkpoint}/>
                                Цена
                            </h3>
                            <p className={'checklist-report-p-text s20 m-n14'}>Однушки в соседних домах стоят 45 тысяч в
                                месяц, а вы нашли вариант за 25 тысяч? Скорее всего, это не подарок судьбы, а развод.
                                Возможно, этой квартиры даже не существует, а объявление разместили риелторы, чтобы
                                собрать побольше звонков.</p>
                        </div>
                        <div className={'checklist-report-point'}>
                            <h3 className={'checklist-report-p-title sb24 m-sb20'}>
                                <img src={checkpoint}/>
                                Раздел «Продажа»
                            </h3>
                            <p className={'checklist-report-p-text s20 m-n14'}>Найдите все квартиры и комнаты, которые сдают и
                                продают по этому адресу: проштудируйте «Циан», «Авито» и «Яндекс-недвижимость». В
                                объявлениях о продаже обычно указывают планировку. Так вы поймете тип дома — хрущевка,
                                сталинка, новостройка — и стандартный метраж у однушки. Если окажется, что дом —
                                хрущевка с 32-метровыми квартирами, а вам по этому же адресу предлагают снять
                                40-метровую однушку в новостройке — бегите, это развод.</p>
                        </div>
                        <div className={'checklist-report-point'}>
                            <h3 className={'checklist-report-p-title sb24 m-sb20'}>
                                <img src={checkpoint}/>
                                Номер телефона
                            </h3>
                            <p className={'checklist-report-p-text s20 m-n14'}>Поищите в интернете телефон хозяина объявления.
                                Если в объявлении написано «собственник», а Гугл говорит, что по такому номеру еще
                                десятки объявлений о сдаче недвижимости, — возможно, это риелтор.</p>
                        </div>
                        <div className={'checklist-report-point'}>
                            <h3 className={'checklist-report-p-title sb24 m-sb20'}>
                                <img src={checkpoint}/>
                                Даты капремонта
                            </h3>
                            <p className={'checklist-report-p-text s20 m-n14'}>Зная адрес квартиры, можно проверить даты, в
                                которые в доме будет проводиться капитальный ремонт. Капремонт — это шум, пыль и
                                отключение электричества. Если вы не готовы страдать, проверьте, когда планируется
                                ремонт дома. Узнать даты в российских городах можно на сайте ГИС ЖКХ.</p>
                        </div>
                    </div>
                </section>

                <div className={'collection-flat-check desktop'}>
                    <FlatCheck/>
                </div>

                <div className={'collection-act-doc'}>
                    <Act_Doc/>
                </div>

                <section className={'block mobile'}>
                    <h2 className={'checklist-report-title b32-32 m-sb24'}>Как проверить документы</h2>
                    <div className={'checklist-report'}>
                        <div className={'checklist-report-point'}>
                            <h3 className={'checklist-report-p-title sb24 m-sb20'}>
                                <img src={checkpoint}/>
                                Паспорт
                            </h3>
                            <p className={'checklist-report-p-text s20 m-n14'}>Не водительское удостоверение, не СНИЛС, не
                                копия паспорта — вам должны показать оригиналы паспорта все собственники квартиры.
                                «Забыл паспорт, вечером привезу» — это отговорка человека, который снял квартиру на
                                сутки и теперь «сдает» ее еще десятерым. Он покажет квартиру, возьмет предоплату и
                                пропадет.</p>
                        </div>
                        <div className={'checklist-report-point'}>
                            <h3 className={'checklist-report-p-title sb24 m-sb20'}>
                                <img src={checkpoint}/>
                                Доверенность
                            </h3>
                            <p className={'checklist-report-p-text s20 m-n14'}>Бывает, договор аренды заключает родственник:
                                сын, брат или сват. В этом случае нужен документ, который составляет нотариус, —
                                доверенность. В ней должен быть пункт о том, что собственник дает право этому человеку
                                сдавать квартиру в наем. Проверить, действительна лидоверенность, можно в сервисе
                                нотариальной палаты, это бесплатно.</p>
                        </div>
                        <div className={'checklist-report-point'}>
                            <h3 className={'checklist-report-p-title sb24 m-sb20'}>
                                <img src={checkpoint}/>
                                Выписка из ЕГРН
                            </h3>
                            <p className={'checklist-report-p-text s20 m-n14'}>Это документ из Росреестра, в котором указаны
                                основные характеристики квартиры и перечислены ее собственники. Выписка должна быть
                                свежей: в законах нет срока, сколько дней она действует, но хорошо, если выписка
                                датирована за один-два дня до сделки, тогда вы точно будете уверены, что квартиру сдает
                                собственник. Тем более что получить выписку сейчас просто — это можно сделать
                                онлайн.</p>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        );
    }
}

export default Collection;
