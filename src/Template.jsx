import React from 'react';
import Header from "./react/Header.jsx";
import Footer from "./react/Footer.jsx";
import './stylesheets/template.scss';
import Crumbs from "./react/Crumbs.jsx";
import download from "/src/images/icons/download-white.svg"
import telegram from "/src/images/icons/telegram.svg"
import vk from "/src/images/icons/vk.svg"
import template from "/src/images/template/template-top.png"
import mtemplate from "/src/images/template/m-template-top.png"
import Banner from "./react/Banner.jsx";
import Act_Doc from "./react/Act_Doc.jsx";

class Template extends React.Component {
    render() {
        return (
            <>
                <Header/>
                    <div className={'doc-crumbs block desktop'}>
                        <Crumbs crumbs={['Статьи', 'Жилье', 'Акт приема-передачи квартиры: шаблон']}/>
                    </div>

                    <Banner title={'Акт приема-передачи квартиры: шаблон'} tags={['Документы', 'Чек-лист']} mimage={mtemplate} image={template}/>
                    <div className={'act-doc'}>
                        <Act_Doc/>
                    </div>
                    <div className={'temp-buttons'}>
                        <button className={'temp-button-get-pdf n20-20 m-n16 '}>
                            Скачать PDF
                            <img src={download}/>
                        </button>
                        <div className={'temp-buttons-share'}>
                            <p className={'b16'}>Поделиться</p>
                            <img src={telegram}/>
                            <img src={vk}/>
                        </div>
                    </div>
                <Footer/>
            </>
        );
    }
}

export default Template;
