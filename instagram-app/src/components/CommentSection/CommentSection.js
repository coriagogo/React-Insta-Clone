import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    } 

    render() {
        return (
            <div>
                {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
                <CommentForm />
            </div>
        )
    };
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ 
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
}

export default CommentSection;

