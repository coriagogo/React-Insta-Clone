import React from 'react';
import './postcontainer.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <div className="img-cont">
                <img className="user-img" src={props.thumbnailUrl} />
            </div>
            <div className="user-name">
                {props.username}
            </div>
        </div>
    );
}

export default PostHeader;