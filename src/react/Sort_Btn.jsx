import React from 'react';
import classNames from 'classnames';

class Sort_Btn extends React.Component {
    render() {
        const { text, active, icon } = this.props;
        return (
            <button className={classNames('sort-btn', 'sb16', 'm-sb14', {active})}>
                {icon && <img className={'sort-btn-img'} src={icon}/>}
                {text}
            </button>
        );
    }
}

export default Sort_Btn;
