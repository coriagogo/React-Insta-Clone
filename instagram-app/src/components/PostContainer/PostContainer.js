import React from 'react';
import Post from './Post';
import './postcontainer.css';

const PostContainer = props => {
    return (
        <div className="post-cont">            
            {props.posts.map(post => <Post key={post.imageUrl} post={post} handleInput={props.handleInput}/>)}
        </div>
    );
}

export default PostContainer;