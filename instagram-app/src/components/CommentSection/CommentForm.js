import React from 'react';

const CommentForm = props => {
    return (
        <div className="comments">
            <form onSubmit={props.onSubmit}>
                <input className="comment-form" 
                type="text" 
                name="newComment"
                value={props.commentField}
                onChange={props.onChange}
                placeholder="Add a comment..." />                     
                <button type="submit" onSubmit={props.onSubmit}><i className="fas fa-ellipsis-h" /></button>
            </form>
            
        </div>
    );
}

export default CommentForm;