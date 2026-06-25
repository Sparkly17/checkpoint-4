import React from 'react';
import classNames from 'classnames';
import documents from "/src/images/icons/tag/documents.svg";
import finance from "/src/images/icons/tag/finance.svg";
import house from "/src/images/icons/tag/house.svg";
import job from "/src/images/icons/tag/job.svg";
import social from "/src/images/icons/tag/social.svg";
import study from "/src/images/icons/tag/study.svg";

class Tag extends React.Component {
    render() {
        const { tag } = this.props;
        let src = '';
        switch (tag) {
            case 'Жилье':
                src = house;
                break;
            case 'Работа':
                src = job;
                break;
            case 'Документы':
                src = documents;
                break;
            case 'Финансы':
                src = finance;
                break;
            case 'Учеба':
                src = study;
                break;
            case 'Социализация':
                src = social;
                break;
        }
        return (
            <div className='tag sb16 m-sb14-14'>
                {src && <img src={src}/>}
                {tag}
            </div>
        );
    }
}

export default Tag;
