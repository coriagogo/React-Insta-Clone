import React from 'react';

const CommentForm = props => {
    return (
        <form >
            <input className="comment-form" type="text" placeholder="Add a comment..." />
            <i className="fas fa-ellipsis-h" />
        </form>
    );
}

export default CommentForm;