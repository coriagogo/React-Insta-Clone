import React from 'react';
import styled from 'styled-components';

const CommentsForm = styled.form`
    width: 90%
    margin: 20px auto;
    border: none;    
    text-align: left;
    font-size: 14px;    
    border-top: 1px solid lightgrey;
    padding-top: 15px;
    border-radius: 0;
`

const CommentInput = styled.input`
    border: none;
    width: 100%;
    height: 30px;
`

const CommentForm = props => {
    return (
        <CommentsForm onSubmit={props.onSubmit}>
            <CommentInput
            type="text" 
            name="newComment"
            value={props.commentField}
            onChange={props.onChange}
            placeholder="Add a comment..." />           
        </CommentsForm>   
    );
}

export default CommentForm;