import React from 'react';
import classNames from 'classnames';
import download from "/src/images/icons/download-black.svg"
import downloadWhite from "/src/images/icons/download-white.svg"
import Tag from "./Tag.jsx";

class Banner extends React.Component {
    render() {
        const { title, image, tags, mimage="" } = this.props;
        return (
            <section className='banner-top'>
                <div className='banner-top-header block'>
                    <h1 className={'b80-80 m-sb30 banner-top-title'}>{title}</h1>
                    <img className='banner-top-header-img desktop' src={downloadWhite}/>
                    <button className={'temp-button-get-pdf n20-20 m-n16 mobile '}>
                        Скачать PDF
                        <img src={download}/>
                    </button>
                </div>
                <div className='banner-top-bottom'>
                    <img className={'desktop'} src={image}/>
                    <img className={'mobile'} src={mimage}/>
                    <div className={'card-tags'}>
                        {tags?.map(tag => <Tag tag={tag}/>)}
                    </div>
                    <div className={'banner-top-info'}>
                        <p className={'sb16'}>Автор: Иван Иванов</p>
                        <p className={'sb16'}>10.10.2024</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
