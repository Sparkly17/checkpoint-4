import React from 'react';

class Crumbs extends React.Component {
    render() {
        const { crumbs } = this.props;
        return (
            <div className="crumbs">
                {crumbs.map( (crumb, index) =>
                    <>
                        <p className={'n16 m-sb-14 crumb'}>{crumb}</p>
                        {index !== crumbs.length-1 && <p className={'sb16'}>/</p>}
                    </>
                )}
            </div>
        );
    }
}

export default Crumbs;
