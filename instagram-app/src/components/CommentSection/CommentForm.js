import React from 'react';

const CommentForm = props => {
    return (
        <form>
            <input className="comment-form" type="text" placeholder="Add a comment..." />
        </form>
    );
}

export default CommentForm;