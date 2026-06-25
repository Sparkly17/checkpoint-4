import React from 'react';
import Header from "./react/Header.jsx";
import Footer from "./react/Footer.jsx";
import './stylesheets/styleguide.scss';
import bannerLogo from "/src/images/styleguide/banner-logo.png";
import logoInfo from "/src/images/styleguide/logo-info.png";
import color1  from "/src/images/styleguide/color1.png";
import color2  from "/src/images/styleguide/color2.png";
import color3  from "/src/images/styleguide/color3.png";
import color4  from "/src/images/styleguide/color4.png";
import color5  from "/src/images/styleguide/color5.png";
import color6  from "/src/images/styleguide/color6.png";
import color7  from "/src/images/styleguide/color7.png";

import desktopGap  from "/src/images/styleguide/desktop_gap.png";
import mobileGap  from "/src/images/styleguide/mobile_gap.png";

import layout1  from "/src/images/styleguide/layout1.png";
import layout2  from "/src/images/styleguide/layout2.png";
import icons  from "/src/images/styleguide/icons.png";
import card  from "/src/images/styleguide/card.png";
import checklist  from "/src/images/styleguide/checklist.png";
import act  from "/src/images/styleguide/act.png";


class Chapter extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={'style-banner'}>
                    <h1 className={'b80-80'}>Стайлгайд <br/>Чекпоинта</h1>
                    <p className={'n20'}>Помогаем зумерам во взрослой жизни:<br/> обьясняем просто и понятно, что, как и
                        где</p>
                    <img className={'style-banner-logo'} src={bannerLogo}/>
                </section>
                <section className={'style-about block'}>
                    <h2 className={'style-about-title b48-48'}>О проекте</h2>
                    <p className={'style-about-text s24'}><strong>Чекпоинт — это цифровой гид по взрослой жизни для
                        поколения Z.</strong> Мы превращаем сложные темы
                        (налоги, аренда, карьера, быт) в практические инструкции, подкреплённые опытом ровесников. Наша
                        цель — заменить растерянность и страх на ясность и уверенность, помогая подросткам и молодым
                        взрослым на ключевых поворотах взросления.</p>
                </section>
                <section className={'style-brand block'}>
                    <h2 className={'b48-48'}>Платформа бренда</h2>
                    <div className={'style-brand-points'} style={{height: "256px" }}>
                        <div className={'style-brand-point'} style={{backgroundColor: "#EAC01B", width: "590px"}} >
                            <h3 className={'style-brand-point-title b32-32'}>Сущность бренда</h3>
                            <p className={'style-brand-point-text n24-31'}>Чекпоинт — это цифровая точка сохранения и перезагрузки на карте взросления. Мы заменяем
                                растерянность инструкцией, страх — уверенностью, а сложность — понятными шагами.</p>
                        </div>
                        <div className={'style-brand-point'} style={{backgroundColor: "#255E55", width: "590px", color: "white"}}>
                            <h3 className={'style-brand-point-title b32-32'}>Миссия</h3>
                            <p className={'style-brand-point-text n24-31'}>Помочь каждому молодому взрослому пройти ключевые точки взросления без паники, с ясным
                                планом и поддержкой ровесников.</p>
                        </div>
                    </div>
                    <div className={'style-brand-points'} style={{height: "277px" }}>
                        <div className={'style-brand-point'} style={{backgroundColor: "#315A9F", width: "488px", color: "white"}} >
                            <h3 className={'style-brand-point-title b32-32'}>Ценности</h3>
                            <ul className={'style-brand-ul'}>
                                <li className={'style-brand-li n24-31'}>Ясность вместо хаоса</li>
                                <li className={'style-brand-li n24-31'}>Действие вместо теории</li>
                                <li className={'style-brand-li n24-31'}>Равенство вместо назидания</li>
                                <li className={'style-brand-li n24-31'}>Поддержка вместо осуждения</li>
                            </ul>
                        </div>
                        <div className={'style-brand-point'} style={{backgroundColor: "#E9A6C7", width: "692px"}}>
                            <h3 className={'style-brand-point-title b32-32'}>Аудитория</h3>
                            <h3 className={'style-brand-point-title2 b24-24'}><strong>Поколение Z (18-25 лет), которое:</strong></h3>
                            <ul className={'style-brand-ul'}>
                                <li className={'style-brand-li n24-31'}>Впервые сталкивается с «взрослыми» задачами</li>
                                <li className={'style-brand-li n24-31'}>Ищет информацию у ровесников</li>
                                <li className={'style-brand-li n24-31'}>Хочет разобраться сам, но без лишнего стресса</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'style-brand-points'} style={{height: "302px" }}>
                        <div className={'style-brand-point'} style={{backgroundColor: "#C63E3E", width: "692px", color: "white"}} >
                            <h3 className={'style-brand-point-title b32-32'}>Обещание бренда</h3>
                            <ul className={'style-brand-ul'}>
                                <li className={'style-brand-li n24-31'}><strong>Чёткий план</strong> — от первого до последнего шага</li>
                                <li className={'style-brand-li n24-31'}><strong>Готовые инструменты</strong> — шаблоны, чек-листы</li>
                                <li className={'style-brand-li n24-31'}><strong>Поддержку ровесников</strong> — реальный опыт</li>
                                <li className={'style-brand-li n24-31'}><strong>Уверенность</strong> — ты справишься, даже если делаешь это впервые</li>
                            </ul>
                        </div>
                        <div className={'style-brand-point'} style={{backgroundColor: "#9DD6DF", width: "488px"}}>
                            <h3 className={'style-brand-point-title b32-32'}>Тон голоса</h3>
                            <ul className={'style-brand-ul'}>
                                <li className={'style-brand-li n24-31'}>Дружеский, но не панибратский</li>
                                <li className={'style-brand-li n24-31'}>Уважительный, но не официальный</li>
                                <li className={'style-brand-li n24-31'}>Прямой, но не грубый</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className={'style-logo block'}>
                    <h2 className={'b48-48'}>Логотип и его использование</h2>
                    <div className={'style-logo-info'}>
                        <div className={'n24'}>
                            стрелка как путь<br/>
                            во взрослую жизнь
                        </div>
                        <img src={logoInfo}/>
                        <div className={'n24'}>
                            деления как поворот<br/>
                            жизни на 180 градусов
                        </div>
                    </div>
                    <div className={'style-logo-points'}>
                        <div className={'style-logo-point'}>
                            <h3 className={'b32-32'}>Правила применения</h3>
                            <ul className={'style-default-ul'}>
                                <li className={'n24-31'}>Минимальная зона свободного пространства: 25% от высоты
                                    логотипа.
                                </li>
                                <li className={'n24-31'}>Размещение на светлом или контрастном фоне.</li>
                                <li className={'n24-31'}>Нельзя: искажать, добавлять эффекты, менять цвета
                                    произвольно.
                                </li>
                            </ul>
                        </div>
                        <div className={'style-logo-point'}>
                            <h3 className={'b32-32'}>Логотип сочетает в себе:</h3>
                            <ul className={'style-default-ul'}>
                                <li className={'n24-31'}>Стрелку как символ пути, направления и прогресса.</li>
                                <li className={'n24-31'}>Деления как точки контроля, сохранения и поворотные моменты
                                    (разворот на 180°).
                                </li>
                                <li className={'n24-31'}>Геометричную форму, отражающую структуру и ясность.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className={'style-colors block'}>
                    <img src={color1} className={'style-colors1'}/>
                    <img src={color2} className={'style-colors2'}/>
                    <img src={color3} className={'style-colors3'}/>
                    <img src={color4} className={'style-colors4'}/>
                    <img src={color5} className={'style-colors5'}/>
                    <img src={color6} className={'style-colors6'}/>
                    <img src={color7} className={'style-colors7'}/>
                    <h2 className={'b48-48'}>Цветовая палитра</h2>
                    <div className={'style-colors-table'}>
                        <div className={'style-colors-table-row'}>
                            <div className={'b24-24'}>Категория</div>
                            <div className={'b24-24'}>Цвет (HEX)</div>
                        </div>
                        <div className={'style-colors-table-row'}>
                            <div className={'sb20-20'}>Жилье</div>
                            <div className={'s20-20'}>#262626</div>
                        </div>
                        <div className={'style-colors-table-row'}>
                            <div className={'sb20-20'}>Финансы</div>
                            <div className={'s20-20'}>#255E55</div>
                        </div>
                        <div className={'style-colors-table-row'}>
                            <div className={'sb20-20'}>Документы</div>
                            <div className={'s20-20'}>#E9A6C7</div>
                        </div>
                        <div className={'style-colors-table-row'}>
                            <div className={'sb20-20'}>Работа</div>
                            <div className={'s20-20'}>#EAC01B</div>
                        </div>
                        <div className={'style-colors-table-row'}>
                            <div className={'sb20-20'}>Учеба</div>
                            <div className={'s20-20'}>#9DD6DF</div>
                        </div>
                        <div className={'style-colors-table-row'}>
                            <div className={'sb20-20'}>Социализация</div>
                            <div className={'s20-20'}>#C63E3E</div>
                        </div>
                    </div>
                </section>
                <section className={'style-typo block'}>
                    <h2 className={'b48-48'}>Типографика</h2>
                    <h3 className={'style-font'}>Onest</h3>
                    <div className={'style-fonts-table'}>
                        <div className={'style-fonts-table-row b80'}>
                            <div>h1</div>
                            <div>80px</div>
                        </div>
                        <div className={'style-fonts-table-row b48'}>
                            <div>h2</div>
                            <div>48px</div>
                        </div>
                        <div className={'style-fonts-table-row b40'}>
                            <div>h3</div>
                            <div>40px</div>
                        </div>
                        <div className={'style-fonts-table-row b32'}>
                            <div>h4</div>
                            <div>32px</div>
                        </div>
                        <div className={'style-fonts-table-row n24'}>
                            <div>p1</div>
                            <div>24px</div>
                        </div>
                        <div className={'style-fonts-table-row n20'}>
                            <div>p2</div>
                            <div>20px</div>
                        </div>
                        <div className={'style-fonts-table-row n16'}>
                            <div>p3</div>
                            <div>16px</div>
                        </div>
                    </div>
                </section>
                <section className={'style-grid block'}>
                    <h2 className={'b48-48'}>Сетка и отступы</h2>
                    <h3 className={'n32 style-grid-title'}>Десктоп</h3>
                    <img className={'style-grid-img'} src={layout1}/>
                    <img className={'style-gap'} src={desktopGap}/>
                    <h3 className={'n32 style-grid-title'}>Мобайл</h3>
                    <img className={'style-grid-img'} src={layout2}/>
                    <img className={'style-gap'} src={mobileGap}/>
                </section>
                <section className={'style-graph block'}>
                    <h2 className={'b48-48'}>Графические элементы</h2>
                    <div className={'style-graph-content'}>
                        <div>
                            <h3 className={'b32-32'}>Иконки</h3>
                            <ul className={'style-default-ul'}>
                                <li className={'n24-31'}>Стиль: линейные, минималистичные</li>
                                <li className={'n24-31'}>Толщина штриха: 2px</li>
                                <li className={'n24-31'}>Размеры: 16x16px, 24x24px, 32x32px</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={'b32-32'}>Фото</h3>
                            <ul className={'style-default-ul'}>
                                <li className={'n24-31'}>Ч/б на обложках раздела; цветные на всех остальных</li>
                                <li className={'n24-31'}>Объясняют текст</li>
                            </ul>
                        </div>
                        <img src={icons}/>
                        <img src={card}/>
                    </div>
                </section>
                <section className={'style-inter block'}>
                    <h2 className={'b48-48'}>Интерфейс и компоненты</h2>
                    <div className={'style-inter-content'}>
                        <div>
                            <h3 className={'b32-32'}>Чек-лист</h3>
                            <ul className={'style-default-ul'}>
                                <li className={'n24-31'}>Интерактивные пункты с возможностью отмечать</li>
                                <li className={'n24-31'}>Возможность скачать файл</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={'b32-32'}>Фото</h3>
                            <ul className={'style-default-ul'}>
                                <li className={'n24-31'}>Оформление под официальный документ, но с улучшенной читаемостью</li>
                                <li className={'n24-31'}>Простые формулировки с примерами в сложных полях</li>
                            </ul>
                        </div>
                        <img src={checklist}/>
                        <img src={act}/>
                    </div>
                </section>
                <Footer/>
            </>
        );
    }
}

export default Chapter;
