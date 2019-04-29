import React from 'react';
import './postcontainer.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <img className="user-img" src={props.thumbnailUrl} />
            <div>
                {props.username}
            </div>
        </div>
    );
}

export default PostHeader;