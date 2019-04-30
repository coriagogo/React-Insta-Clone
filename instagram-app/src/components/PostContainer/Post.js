import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import './postcontainer.css';

const Post = props => {
    return (
        <div className="post-container">
            <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
            <div className="img-container">
                <img className="post-img" src={props.post.imageUrl} />
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    );
}

export default Post;