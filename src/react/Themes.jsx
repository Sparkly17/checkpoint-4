import React from 'react';
import classNames from 'classnames';
import docs from "/src/images/themes/docs.png"
import finance from "/src/images/themes/finance.png"
import house from "/src/images/themes/house.png"
import learn from "/src/images/themes/learn.png"
import soc from "/src/images/themes/soc.png"
import work from "/src/images/themes/work.png"
import mdocs from "/src/images/themes/mdocs.png"
import mfinance from "/src/images/themes/mfinance.png"
import mhouse from "/src/images/themes/mhouse.png"
import mlearn from "/src/images/themes/mlearn.png"
import msoc from "/src/images/themes/msoc.png"
import mwork from "/src/images/themes/mwork.png"
import {Link} from "react-router-dom";

class Themes extends React.Component {
    render() {
        return (
            <div className={'themes-block'}>
                <h2 className={'b48 m-b30-30'}>Тематики</h2>
                <div className={'themes'}>
                    <div className={'themes-row'}>
                            <Link to={'/category/living'} style={{backgroundColor: '#E8E2DA'}} className="theme">
                                <h3 className={'theme-title b24 m-b20'}>Жилье</h3>
                                <img className={'theme-img desktop'} src={house}/>
                                <img className={'theme-img mobile'} src={mhouse}/>
                            </Link>
                        <Link to={'/category/finance'} style={{backgroundColor: '#255E55', color: "white"}} className="theme">
                            <h3 className={'theme-title b24 m-b20'}>Финансы</h3>
                            <img className={'theme-img desktop'} src={finance}/>
                            <img className={'theme-img mobile'} src={mfinance}/>
                        </Link>
                        <Link to={'/category/docs'} style={{backgroundColor: '#E9A6C7'}} className="theme">
                            <h3 className={'theme-title b24 m-b20'}>Документы</h3>
                            <img className={'theme-img desktop'} src={docs}/>
                            <img className={'theme-img mobile'} src={mdocs}/>
                        </Link>
                        <Link to={'/category/work'} style={{backgroundColor: '#EAC01B'}} className="theme">
                            <h3 className={'theme-title b24 m-b20'}>Работа</h3>
                            <img className={'theme-img desktop'} src={work}/>
                            <img className={'theme-img mobile'} src={mwork}/>
                        </Link>
                        <Link to={'/category/learn'} style={{backgroundColor: '#9DD6DF'}} className="theme">
                            <h3 className={'theme-title b24 m-b20'}>Учеба</h3>
                            <img className={'theme-img desktop'} src={learn}/>
                            <img className={'theme-img mobile'} src={mlearn}/>
                        </Link>
                        <Link to={'/category/social'} style={{backgroundColor: '#C63E3E', color: "white"}} className="theme">
                            <h3 className={'theme-title b24 m-b20'}>Социализация</h3>
                            <img className={'theme-img desktop'} src={soc}/>
                            <img className={'theme-img mobile'} src={msoc}/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Themes;
