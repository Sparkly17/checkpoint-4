import React from 'react';
import Header from "../../react/Header.jsx";
import Footer from "../../react/Footer.jsx";
import '../../stylesheets/article.scss'
import splash from "/src/images/article/break-contract/splash.png"
import msplash from "/src/images/article/break-contract/m-splash.png"
import Card from "../../react/Card.jsx";

import arrow from "/src/images/icons/arrow-right-black.svg"
import ArticleBanner from "../../react/ArticleBanner.jsx";
import ArticleQuote from "../../react/ArticleQuote.jsx";
import CircleCard from "../../react/CircleCard.jsx";

import img2 from "/src/images/article/break-contract/2.png"
import img3 from "/src/images/article/break-contract/3.png"
import img4 from "/src/images/article/break-contract/4.png"
import img5 from "/src/images/article/break-contract/5.png"
import img6 from "/src/images/article/break-contract/6.png"
import img7 from "/src/images/article/break-contract/7.png"
import img8 from "/src/images/article/break-contract/8.png"
import img9 from "/src/images/article/break-contract/9.png"
import mimg2 from "/src/images/article/break-contract/m-2.png"
import mimg3 from "/src/images/article/break-contract/m-3.png"
import mimg4 from "/src/images/article/break-contract/m-4.png"
import mimg5 from "/src/images/article/break-contract/m-5.png"
import mimg6 from "/src/images/article/break-contract/m-6.png"
import mimg7 from "/src/images/article/break-contract/m-7.png"
import mimg8 from "/src/images/article/break-contract/m-8.png"

import banner from "/src/images/article/break-contract/banner.png"

import more_img1 from "/src/images/main/card1.png";
import more_img2 from "/src/images/main/card2.png";
import more_img3 from "/src/images/main/card3.png";
import more_mimg1 from "/src/images/main/mcard1.png";
import more_mimg2 from "/src/images/main/mcard2.png";
import more_mimg3 from "/src/images/main/mcard3.png";

class BreakConstractArticle extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={'intro'}>
                    <ArticleBanner title={"Что делать, если арендодатель нарушает договор"}
                                   crumbs={['Главная', 'Быт', 'Что делать, если арендодатель нарушает договор']}/>
                    <img className={'desktop intro-img'} style={{top: "265px", right: "0"}} src={banner}/>
                </section>
                <article className={'article break-article gap-96'}>
                    <section className={'article-block gap-96'}>
                        <div className={'gap-24'}>
                            <h2 className={'a-start-title b40 m-b24'}>Что делать, если арендодатель нарушает
                                договор</h2>
                            <p className={'m-s16 s20'}>Такие истории почти никогда не начинаются с открытого конфликта.
                                Сначала это выглядит как мелочь: хозяин зашёл «буквально на минуту», попросил чуть
                                сдвинуть дату оплаты, намекнул, что «рынок вырос» и, возможно, придётся поднять аренду.
                                В этот момент легко подумать, что ничего страшного не происходит — ну бывает, можно
                                пойти навстречу. Проблема в том, что именно из таких мелочей постепенно собирается
                                ситуация, в которой правила начинают работать только в одну сторону.
                                <br/><br/>
                                Если это вовремя не остановить, ты незаметно оказываешься в позиции, где уже не ты
                                живёшь по договору, а подстраиваешься под чужие решения. Поэтому здесь важно не ждать
                                явного «нарушения», а реагировать уже на первые сигналы.
                            </p>
                        </div>
                        <div className={'article-splash-img'}>
                            <img className={'desktop'} src={splash}/>
                            <img className={'mobile'} src={msplash}/>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-b24'}>Сначала открываем договор и разбираемся, что вы
                                на самом деле согласовали</h2>
                            <p className={'m-s16 s20'}>В любой спорной ситуации первое желание — сразу ответить и
                                отстоять свою позицию. Но если ты не опираешься на договор, разговор очень быстро
                                превращается в обмен мнениями: «мне кажется» против «я считаю». И в таком формате почти
                                всегда выигрывает тот, у кого больше уверенности или давления.
                            </p>
                            <div className={'article-two-photos-hor'}>
                                <img className={'desktop'} src={img2}/>
                                <img className={'desktop'} src={img3}/>
                                <img className={'mobile'} src={mimg2}/>
                                <img className={'mobile'} src={mimg3}/>
                            </div>
                            <p className={'m-s16 s20'}>Поэтому лучше на паузе открыть договор и спокойно пройтись по
                                ключевым пунктам. Не бегло, а действительно внимательно: как прописано повышение аренды,
                                есть ли сроки уведомления, что сказано про доступ в квартиру, на ком лежит
                                ответственность за технику и поломки, как устроен процесс съезда. Иногда выясняется, что
                                ты прав и условия чётко на твоей стороне. Иногда — что ситуация сложнее, и пункт
                                сформулирован так, что допускает разные трактовки. Бывает и неприятный вариант, когда ты
                                сам пропустил важный момент при подписании.
                            </p>
                            <div className={'desktop'}>
                                <ArticleQuote
                                    quote={'Ты больше не споришь «в целом», ты оперируешь конкретными формулировками'}/>
                            </div>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-b24'}>Дальше важно зафиксировать всё, что происходит, даже если
                                кажется, что это лишнее</h2>
                            <p className={'m-s16 s20'}>
                                На старте конфликта почти всегда есть иллюзия, что «мы же нормальные люди, договоримся».
                                И из-за этого многие оставляют разговоры в устной форме. Сегодня обсудили, завтра
                                забыли, через неделю уже другая версия событий. В итоге ты остаёшься без какой-либо
                                опоры, кроме собственной памяти.
                                <br/><br/>
                                Чтобы этого не происходило, любую важную договорённость лучше переводить в текст. Это
                                можно делать спокойно и без давления. Если разговор был по телефону, достаточно
                                короткого сообщения: «Подтверди, пожалуйста, что мы договорились вот так». Если хозяин
                                озвучивает новые условия — зафиксируй это в переписке. Если возникает проблема в
                                квартире — сними фото или видео сразу, а не потом, когда начнутся споры.
                            </p>
                            <img className={'desktop'} src={img4}/>
                            <img className={'mobile'} src={mimg4}/>
                            <p className={'m-s16 s20'}>Это не про «готовиться к худшему сценарию», а про то, чтобы не
                                терять контроль над ситуацией. Когда у тебя есть зафиксированная история, ты перестаёшь
                                зависеть от чужих интерпретаций. Даже в простом разговоре это даёт тебе больше
                                уверенности, потому что ты точно знаешь, на что можешь опереться.
                            </p>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-b24'}>После этого можно спокойно обозначить свою позицию — без
                                конфликта, но чётко</h2>
                            <p className={'m-s16 s20'}>
                                Один из самых сложных моментов — правильно выстроить тон. Когда ты чувствуешь давление
                                или несправедливость, легко либо сорваться и начать конфликт, либо, наоборот, сгладить
                                углы и согласиться, чтобы «не обострять». Обе стратегии в долгую не работают.
                            </p>
                            <div className={'article-two-photos-hor'}>
                                <img className={'desktop'} src={img5}/>
                                <img className={'desktop'} src={img6}/>
                                <img className={'mobile'} src={mimg5}/>
                                <img className={'mobile'} src={mimg6}/>
                            </div>
                            <p className={'m-s16 s20'}>Один из самых сложных моментов — правильно выстроить тон. Когда
                                ты чувствуешь давление или несправедливость, легко либо сорваться и начать конфликт,
                                либо, наоборот, сгладить углы и согласиться, чтобы «не обострять». Обе стратегии в
                                долгую не работают.
                                <br/><br/>
                                В этот момент может казаться, что ты звучишь слишком жёстко или формально. Но на
                                практике именно такая позиция воспринимается как уверенная и понятная. Она не
                                провоцирует конфликт, но и не оставляет пространства для давления.
                            </p>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-b24'}>Давление почти всегда будет — важно не втягиваться в эту
                                игру</h2>
                            <p className={'m-s16 s20'}>
                                После того как ты обозначаешь границы, часто следует попытка их размыть. Это может
                                выглядеть по-разному: от мягкого давления «ну давай по-человечески» до более жёстких
                                фраз вроде «не нравится — съезжай» или «я здесь решаю».
                                В этот момент легко начать объяснять, оправдываться, пытаться доказать, что ты хороший
                                арендатор и не хочешь проблем. Но это как раз та точка, где контроль начинает
                                ускользать. Разговор уходит в эмоции, и договор перестаёт играть роль.
                            </p>
                            <img className={'desktop'} src={img7}/>
                            <img className={'mobile'} src={mimg7}/>
                            <p className={'m-s16 s20'}>Гораздо надёжнее держаться простой линии: возвращаться к фактам и
                                не расширять обсуждение. Не спорить про «как принято» и «кто прав», а каждый раз мягко,
                                но последовательно опираться на условия, которые уже были согласованы. Это может
                                выглядеть однообразно, но именно такая повторяемость создаёт устойчивость позиции.
                                При этом важно честно оценивать, с кем ты имеешь дело. Если человек готов к диалогу,
                                этого достаточно. Если нет — это уже сигнал, что ситуация может дальше только
                                ухудшаться.
                            </p>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-b24'}>Иногда самый разумный шаг — выйти из ситуации, а не пытаться
                                её исправить</h2>
                            <div className={'article-two-photos-hor'}>
                                <img className={'desktop'} src={img8}/>
                                <img className={'desktop'} src={img9}/>
                                <img className={'mobile'} src={mimg8}/>
                            </div>
                            <p className={'m-s16 s20'}>Есть соблазн «дожать» ситуацию, особенно если ты понимаешь, что
                                прав. Но жизнь в постоянном напряжении редко того стоит. Если человек системно
                                игнорирует договор, меняет условия и давит, это, скорее всего, не изменится.
                                В какой-то момент стоит задать себе простой вопрос: тебе комфортно здесь жить? Если
                                ответ «нет», возможно, рациональнее начать планировать съезд, чем продолжать бороться за
                                каждый пункт
                            </p>
                            <div className={'desktop'}>
                                <ArticleQuote
                                    quote={'Переезд — неприятный процесс, но он конечный. А постоянный конфликт может тянуться месяцами.'}/>

                            </div>
                            <p className={'m-s16 s20'}>Такие ситуации редко решаются за счёт силы или давления. Гораздо
                                чаще всё упирается в то, насколько ты сохраняешь спокойную позицию и опираешься на
                                факты. Договор, фиксация, последовательность — звучит не очень вдохновляюще, но именно
                                это даёт ощущение контроля. И чем раньше ты начинаешь так действовать, тем меньше
                                вероятность, что ситуация выйдет из-под контроля и превратится в проблему, которую уже
                                сложно решить.
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

export default BreakConstractArticle;
