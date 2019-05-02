import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import Likes from './Likes';
import styled from 'styled-components';


const PostContainer = styled.div`
    border: 1px solid lightgrey;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        max-width: 90%;
        margin: 0 auto;
    }
`

const PostImage = styled.img`
    width: 100%;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    
`

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
            <PostContainer>
                <PostHeader username={this.props.post.username} thumbnailUrl={this.props.post.thumbnailUrl} />
                <PostImage src={this.props.post.imageUrl} />                              
                <Likes addLike={this.addLike} likes={this.state.likes} />
                <CommentSection comments={this.props.post.comments} />
            </PostContainer>
        );
    }
}

export default Post;