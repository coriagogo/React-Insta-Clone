import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CommentText = styled.div`
    display: flex;
    text-align: left;
    margin-left: 30px;
    margin-top: 10px;

    @media (max-width: 500px) {
        margin-left: 10px;
    }
    
`
const User = styled.div`
    font-weight: 600;
    padding-right: 10px;
`
const Comments = styled.div`

`

const Comment = props => {
    return (
        <CommentText>
            <User>{props.comment.username}</User>            
            <Comments>{props.comment.text}</Comments>    
        </CommentText>

       
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

export default Comment;