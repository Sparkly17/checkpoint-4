import React from 'react';
import Header from "./react/Header.jsx";
import Footer from "./react/Footer.jsx";
import './stylesheets/article.scss'
import Crumbs from "./react/Crumbs.jsx";
import img1 from "/src/images/article/img1.png"
import img2 from "/src/images/article/img2.png"
import img3 from "/src/images/article/img3.png"
import splash from "/src/images/article/rent_flat/splash.png"
import img4 from "/src/images/article/img4.png"
import img5 from "/src/images/article/img5.png"
import img6 from "/src/images/article/img6.png"
import img7 from "/src/images/article/img7.png"
import img8 from "/src/images/article/img8.png"
import img9 from "/src/images/article/img9.png"
import img10 from "/src/images/article/img10.png"
import cian from "/src/images/article/cian.png"
import redCross from "/src/images/icons/red-cross.svg"
import download from "/src/images/icons/download.svg"
import checkpoint from "/src/images/icons/checkpoint.svg"
import qr from "/src/images/article/qr.png"
import checkLogo from "/src/images/article/check-logo.png"
import Tag from "./react/Tag.jsx";
import goto from "/src/images/icons/goto-white.svg"
import Table from "./react/Table.jsx";
import Card from "./react/Card.jsx";

import card_3 from "/src/images/cards/img3.png";
import card_8 from "/src/images/cards/img8.png";
import card_10 from "/src/images/cards/img10.png";
import mcard_3 from "/src/images/cards/mimg3.png";
import mcard_8 from "/src/images/cards/mimg8.png";
import mcard_10 from "/src/images/cards/mimg10.png";
import arrow from "/src/images/icons/arrow-right-black.svg"
import FlatCheck from "./react/FlatCheck.jsx";
import ArticleBanner from "./react/ArticleBanner.jsx";
import ArticleQuote from "./react/ArticleQuote.jsx";
import mimg1 from "./images/main/mcard1.png";
import mimg2 from "./images/main/mcard2.png";
import CircleCard from "./react/CircleCard.jsx";
import mimg3 from "./images/main/mcard3.png";

import banner from "/src/images/article/banner.png"

import more_img1 from "/src/images/main/card1.png";
import more_img2 from "/src/images/main/card2.png";
import more_img3 from "/src/images/main/card3.png";
import more_mimg1 from "/src/images/main/mcard1.png";
import more_mimg2 from "/src/images/main/mcard2.png";
import more_mimg3 from "/src/images/main/mcard3.png";

class Article extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={'intro'}>
                    <ArticleBanner title={"Снимаем квартиру в новом городе правильно"}
                                   crumbs={['Главная', 'Быт', 'Снимаем квартиру в новом городе правильно']}/>
                    <img className={'desktop intro-img'} style={{top: "252px", right: "0"}} src={banner}/>
                </section>
                <article className={'article rent-article'}>
                    <section className={'a-start article-block'}>
                        <h2 className={'a-start-title b40 m-b32-36'}>Как не нарваться на мошенников</h2>
                        <p className={'m-s16 s20'}>Когда повзрослевший ребенок хочет съехать в съемное жилье, это счастье для
                            родителей. А еще —
                            для мошенников. На студенте нажиться проще простого: прав не знает, договоров не требует. У
                            недобросовестных риелторов не будет шансов отобрать ваши деньги, если знать их уловки.</p>
                        <div className={'a-start-images'}>
                            <img className={'desktop'} src={img1}/>
                            <img className={'desktop'} src={img2}/>
                            <img className={'mobile'} src={img5}/>
                            <img className={'mobile'} src={img6}/>
                        </div>
                        <div>
                            <div className={'a-start-point'}>
                                <img src={redCross}/>
                                <h3 className={'m-sb20 b24-24'}>«У нас недорого, мы из агенства»</h3>
                            </div>
                            <p className={'s20 m-s16'}>
                                Если стоимость аренды низкая, а расположение квартиры отличное, это может быть
                                «магнитом» — так называют объявления, в которых рекламируют несуществующие квартиры,
                                чтобы привлечь больше клиентов.
                            </p>
                        </div>
                        <div>
                            <div className={'a-start-point'}>
                                <img src={redCross}/>
                                <h3 className={'m-sb20 b24-24'}>«Вас тут много, а я один»</h3>
                            </div>
                            <p className={'s20 m-s16'}>
                                Мошенники могут попросить деньги за просмотр: якобы на жилье очередь и, чтобы успеть
                                снять квартиру, нужно внести предоплату — тогда и посмотрите первыми. Честные риелторы
                                так не делают.
                            </p>
                        </div>
                        <div>
                            <div className={'a-start-point'}>
                                <img src={redCross}/>
                                <h3 className={'m-sb20 b24-24'}>«За эту цену только голые стены»</h3>
                            </div>
                            <p className={'s20 m-s16'}>
                                Недобросовестным риелторам не хватает комиссии за найденного клиента, и они хотят
                                заработать больше: говорят, что аренду мебели тоже нужно оплатить. Якобы за цену в
                                объявлении сдается только само помещение, а мебель и техника — за дополнительную плату.
                                Собственник об этом, как правило, не знает: он уверен, что сдает сразу все — и квартиру,
                                и мебель, и технику.
                            </p>
                        </div>
                        <div>
                            <div className={'a-start-point'}>
                                <img src={redCross}/>
                                <h3 className={'m-sb20 b24-24'}>«И вообще я собственник»</h3>
                            </div>
                            <p className={'s20 m-s16'}>
                                Мошенник представляется собственником и находит «жильцов». Договор заключать
                                отказывается, но деньги за месяц вперед все-таки берет. Обещает приехать в выходные с
                                документами на квартиру — тогда и можно будет заключить договор.<br/>
                                А вечером приходит настоящий хозяин и говорит: «Вообще-то квартира сдается посуточно, вы
                                кто такие, уходите, я вам ничего не должен». И он прав: искать правду теперь придется в
                                полиции.
                            </p>
                        </div>
                    </section>
                    <section className={'a-find article-block'}>
                        <h2 className={'a-start-title b40 m-b20'}>Как найти квартиру</h2>
                        <p className={'s20 m-s16'}>
                            Найти квартиру «по знакомству» сложно, поэтому идем в интернет. Некоторые
                            сайты не заморачиваются безопасностью арендатора и не следят за тем, кто размещает
                            объявления и что в них написано.
                            Другие — проверяют паспорт и документы на собственность. Такие объявления обычно помечены
                            плашкой «Надежный» или «Проверенный».
                        </p>

                        <div className={'desktop'}>
                            <ArticleQuote author={'Анна Новикова'} quote={'На просмотре легко влюбиться в интерьер, но жить ты будешь не в картинке, а в реальности'}/>
                        </div>

                        <img className={'desktop'} src={cian}/>
                        <img className={'mobile'} src={img7}/>
                        <p className={'s20 m-s16'}>
                            Мы собрали сервисы, которые проверяют документы собственников и отмечают аккаунты
                            верифицированных арендодателей.
                        </p>
                        <div>
                            <h3 className={'b24-24 m-b20'}>На каких сайтах искать квартиру</h3>
                            <Table/>
                        </div>
                        <p className={'s20 m-s16'}>
                            Если не хотите иметь дел с риелтором, отправляйтесь в соцсети. Там с большей вероятностью
                            можно встретить объявление от собственника. А еще посмотреть профиль арендодателя и хотя бы
                            приблизительно понять, комфортно ли вам будет с ним общаться.
                        </p>

                        <div>
                            <div className={'flex'}>
                                <h3 className={'b32-32 m-b20'}>Чек-лист: что проверить</h3>
                                <img src={download}/>
                            </div>
                            <div className={'article-checklist desktop'}>
                                <FlatCheck/>
                            </div>
                            <div className={'img-checklist mobile'}>
                                <img src={img8}/>
                            </div>
                            <p className={'s20 m-s16'}>
                                А теперь страшная история. Одна девочка так тщательно проверяла объявления, что осталась
                                без жилья: пока телефон пробьет, пока адрес проверит — квартиру уже и сдадут другому
                                человеку. А все потому, что хорошие варианты разбирают мгновенно и медлить нельзя.
                                Поэтому сначала позвоните и договоритесь о встрече, а проверить объявление можно и до
                                нее. Если найдете что-то подозрительное — просто отмените встречу и на всякий случай
                                пожалуйтесь модератору.
                            </p>
                        </div>

                    </section>
                    <section className={'a-check article-block'}>
                        <h2 className={'a-start-title b40 m-b32-36'}>Как проверить документы</h2>
                        <p className={'s20 m-s16'}>Чтобы не пожалеть потом, сначала надо изучить документы на квартиру, а уже
                            после обсуждать, что писать в договоре. Это действительно важно: если квартиру «сдаст» не
                            собственник, то в любой момент явится настоящий хозяин и выставит жильцов на улицу. И будет
                            прав. Вот что должно быть у человека, который сдает квартиру.</p>
                        <div className={'article-splash-img'}>
                            <img src={splash}/>
                        </div>
                        <div className={'a-check-point'}>
                            <h3 className={'b24-24 m-sb20'}>Паспорт</h3>
                            <p className={'s20 m-s16'}>Не водительское удостоверение, не СНИЛС, не копия паспорта — вам должны
                                показать оригиналы паспорта все собственники квартиры. «Забыл паспорт, вечером привезу»
                                — это отговорка человека, который снял квартиру на сутки и теперь «сдает» ее еще
                                десятерым. Он покажет квартиру, возьмет предоплату и пропадет.</p>
                        </div>
                        <div className={'a-check-point'}>
                            <h3 className={'b24-24 m-sb20'}>Выписка из ЕГРН</h3>
                            <p className={'s20 m-s16'}> Это документ из Росреестра, в котором указаны основные характеристики
                                квартиры и перечислены ее собственники. Выписка должна быть свежей: в законах нет срока,
                                сколько дней она действует, но хорошо, если выписка датирована за один-два дня до
                                сделки, тогда вы точно будете уверены, что квартиру сдает собственник. Тем более что
                                получить выписку сейчас просто — это можно сделать онлайн.
                                <br/><br/>Если выписке 10 дней или даже месяц, это тоже нормально. Но если она годичной
                                давности, попросите показать документ поновее. Если все законно, нет никаких причин
                                отказывать. А если вам все же отказывают, то это повод насторожиться. Иногда наймодатель
                                может сослаться на квитанции — смотрите, мол, в платежках за свет та же фамилия. Такой
                                аргумент не подойдет: данные прежних собственников могут быть годами указаны в
                                квитанциях после продажи квартиры.
                                <br/><br/>Выписку заказывает сам собственник, потому что с 1 марта 2023 года в
                                документах на чужую недвижимость нельзя посмотреть данные владельца, если только он сам
                                это не разрешил. На госуслугах собственнику выдадут выписку бесплатно за несколько
                                минут.</p>
                            <div className={'other'}>
                                <div className={'other-image'}>
                                    <div className={'card-tags'}>
                                        <Tag tag={'Разбор кейса'}/>
                                        <Tag tag={'Жилье'}/>
                                    </div>
                                    <img className={'desktop'} src={img3}/>
                                    <img className={'mobile'} src={img10}/>
                                </div>
                                <div className={'other-info'}>
                                    <h4 className={'b24-24 m-sb20'}>Сменил пять квартир за год: как найти идеальное жилье?</h4>
                                    <p className={'n16 m-s14'}>Мы не знаем, какие дома вам больше нравятся — хрущевки, сталинки или новостройки:
                                        в каждой постройке есть свои прелести и недостатки. Почитайте про опыт человека,
                                        который сменил пять квартир в разных типах домов, возможно, он поможет вам
                                        определиться.</p>
                                </div>
                            </div>
                        </div>
                        <div className={'a-check-point'}>
                            <h3 className={'b24-24 m-sb20'}>Доверенность</h3>
                            <p className={'s20 m-s16'}> Бывает, договор аренды заключает родственник: сын, брат или сват. В
                                этом случае нужен документ, который составляет нотариус, — доверенность. В ней должен
                                быть пункт о том, что собственник дает право этому человеку сдавать квартиру в наем.
                                Проверить, действительна лидоверенность, можно в сервисе нотариальной палаты, это
                                бесплатно.<br/><br/>
                                Если в доверенности нет срока ее действия, документ будет иметь силу один год.
                                Максимального срока действия доверенности нет.
                                Та же история с риелтором. Если он подписывает договор аренды за собственника, то пусть
                                покажет доверенность. Причем в доверенности должно быть согласие всех собственников,
                                перечисленных в выписке ЕГРН. Нотариальная доверенность не нужна, если семья купила
                                квартиру в браке, а вы заключаете договор меньше чем на год с одним из супругов.</p>
                            <div></div>
                        </div>
                        <div className={'a-check-list'}>
                            <img className={'a-check-list-img desktop'} src={img4}/>
                            <img className={'a-check-list-img mobile'} src={img9}/>
                            <div className={'a-check-list-desc'}>
                                <p className={'a-check-list-point sb24 m-sb14-14'}>1/4</p>
                                <p className={'a-check-list-text s16 m-s14'}>Так выглядит электронная выписка из ЕГРН правообладателя об основных характеристиках и зарегистрированных правах на объект недвижимости</p>
                            </div>
                        </div>
                        <p className={'s20 m-n18'}>
                            В следующих уроках мы разберемся, как платить коммуналку и устроиться на работу, чтобы были деньги на аренду. А пока пройдите тест, чтобы убедиться, что снять квартиру вы уже готовы.
                        </p>
                    </section>
                    <section className={'ready-test article-block'}>
                        <h3 className={'b48-48 m-b32-36'}>Тест: готов ли ты к переезду?</h3>
                        <img className={'ready-test-icon'} src={goto}/>
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

export default Article;
