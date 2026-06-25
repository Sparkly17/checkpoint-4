import React from 'react';
import classNames from 'classnames';
import Tag from "./Tag.jsx";

class CircleCard extends React.Component {
    render() {
        const { title, tags, image, mimage, type, fonts } = this.props;
        return (
            <div
                className={classNames(
                    "circle-card",
                    type
                )}
            >
                <img className="circle-card-img desktop" src={image} alt={title}/>
                <img className="circle-card-img mobile" src={mimage} alt={title}/>
                <div className={"circle-card-info"}>
                    <div className="circle-card-overlay">
                        <h3 className={classNames(fonts || 'b24-24 m-b24', 'circle-card-title')}>{title}</h3>
                    </div>
                    <div className="circle-card-tags">
                        {tags?.map((tag) => (
                            <Tag key={tag} tag={tag}/>
                        ))}
                    </div>
                </div>

                <div className="vertical-circle-card-tags">
                    {tags?.map((tag) => (
                        <Tag key={tag} tag={tag}/>
                    ))}
                </div>

                <div className="vertical-circle-card-overlay">
                    <h3 className={classNames(fonts || 'b24-24 m-b24', 'circle-card-title')}>{title}</h3>
                </div>

            </div>
        );
    }
}

export default CircleCard;
