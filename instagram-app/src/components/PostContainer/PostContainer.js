import React from 'react';
import Post from './Post';
import './postcontainer.css';

const PostContainer = props => {
    return (
        <div className="post-wrap">
            
            {props.posts.map(post => <Post key={post.imageUrl} post={post} />)}
        </div>
    );
}

export default PostContainer;