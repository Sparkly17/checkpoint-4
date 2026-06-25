import React from 'react';
import classNames from 'classnames';
import Tag from "./Tag.jsx";

class Card extends React.Component {
    render() {
        const { title, tags, image, mimage, type, fonts } = this.props;
        return (
            <div
                className={classNames(
                    "card",
                    type
                )}
            >
                <img className="card-img desktop" src={image} alt={title}/>
                <img className="card-img mobile" src={mimage} alt={title}/>
                <div className="card-overlay">
                    <h3 className={classNames(fonts || 'b24-24 m-b24', 'card-title')}>{title}</h3>
                </div>
                <div className="card-tags">
                    {tags?.map((tag) => (
                        <Tag key={tag} tag={tag}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Card;
