import React from 'react';

const Likes = props => {
    return (
        <div className="likes-container">
            <div className="likes-icons">
                <i className="far fa-heart" onClick={props.addLike} />
                <i className="far fa-comment" />
            </div>
            <div className="likes-number">
                {props.likes}
            </div>
        </div>
    );
}

export default Likes;