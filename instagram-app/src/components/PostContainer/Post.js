import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import Likes from './Likes';
import './postcontainer.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }

    addLike = () => {
        let likes = this.state.likes +1;
        this.setState({ likes });
    }

    render() {
        return (
            <div className="post-container">
                <PostHeader username={this.props.post.username} thumbnailUrl={this.props.post.thumbnailUrl} />
                <div className="img-container">
                    <img className="post-img" src={this.props.post.imageUrl} />
                </div>                
                <Likes addLike={this.addLike} likes={this.state.likes} />
                <CommentSection comments={this.props.post.comments} handleInput={this.props.handleInput} />
            </div>
        );
    }
}

export default Post;