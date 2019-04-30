import React from 'react';

const CommentForm = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <input className="comment-form" 
            type="text" 
            name="newComment"
            value={props.commentField}
            onChange={props.onChange}
            placeholder="Add a comment..." />
            
            <i className="fas fa-ellipsis-h" />

        </form>
    );
}

export default CommentForm;