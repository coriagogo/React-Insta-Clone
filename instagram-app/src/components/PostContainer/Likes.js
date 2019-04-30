import React from 'react';

const Likes = props => {
    return (
        <div className="likes-container">
            <div className="likes-icons">
                <div className="heart-icon">
                    <i className="far fa-heart" onClick={props.addLike} />
                </div>
                <i className="far fa-comment" />
            </div>
            <div className="likes-count">
                <span>{props.likes} likes</span>
            </div>
        </div>
    );
}

export default Likes;