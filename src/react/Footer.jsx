import React from 'react';
import logo from "/src/images/icons/logo-big.svg"
import classNames from 'classnames';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <footer className={classNames("footer")}>
                <div className={classNames("footer-links first")}>
                    <Link className={"sb20 m-b14"} to={'/category/living'}>Жилье</Link>
                    <Link to={'/category/finance'}><p className={"sb20 m-b14"}>Финансы</p></Link>
                    <Link to={'/category/docs'}><p className={"sb20 m-b14"}>Документы</p></Link>
                    <Link to={'/category/work'}><p className={"sb20 m-b14"}>Работа</p></Link>
                    <Link to={'/category/learn'}><p className={"sb20 m-b14"}>Учеба</p></Link>
                    <Link to={'/category/social'}><p className={"sb20 m-b14"}>Социализация</p></Link>
                    <p className={"sb20 m-b14"}><br/></p>
                    <Link to={'/styleguide'} className={"sb20 m-b14"}>Стайлгайд</Link>
                </div>
                <div className={classNames("footer-links second")}>
                    <Link to={'/chapter-2'} className={"sb20 m-b14"}>Подборки</Link>
                    <Link to={'/about'} className={"sb20 m-b14"}>О нас</Link>
                    <p className={"sb20 m-b14"}>Статьи</p>
                    <p className={"sb20 m-b14"}>Гайды</p>
                    <p className={"sb20 m-b14"}>Чек-листы</p>
                    <p className={"sb20 m-b14"}>Разбор кейсов</p>
                    <p className={"sb20 m-b14"}>Подкасты</p>
                    <p className={"sb20 m-b14"}>Интервью</p>
                    <p className={"sb20 m-b14"}>Спецпроекты</p>
                </div>
                <div className={classNames("footer-contacts")}>
                    <div className={classNames("footer-contact")}>
                        <h2 className={classNames("contact-title", "b32", "m-b20")}>Контакты</h2>
                        <p className={classNames("contact-text", "sb20", "m-b14")}>chp@hse</p>
                        <p className={classNames("contact-text", "sb20", "m-b14")}>8 952 812 00 00</p>
                    </div>
                    <div className={classNames("footer-contact", "b32")}>
                        <h2 className={classNames("contact-title", "m-b20")}>Соц. сети</h2>
                        <p className={classNames("contact-text", "sb20", "m-b14")}>Telegram</p>
                        <p className={classNames("contact-text", "sb20", "m-b14")}>RuTube</p>
                    </div>
                </div>
                <div className={classNames("footer-icon")}>
                    <img src={logo}/>
                </div>

            </footer>
        );
    }
}

export default Header;
