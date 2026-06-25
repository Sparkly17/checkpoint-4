import React from 'react';
import act from "/src/images/template/actdoc.png"
import mact from "/src/images/template/m-actdoc.png"

class Banner extends React.Component {
    render() {
        return (
            <section className='actdoc'>
                <img className={'desktop'} src={act}/>
                <img className={'mobile'} src={mact}/>
            </section>
        );
    }
}

export default Banner;
