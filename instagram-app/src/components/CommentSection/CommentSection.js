import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import PropTypes from 'prop-types';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    } 
    
    handleInput = event  => {
        this.setState({ comment: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        let newComment = {
            username: 'coriagogo',
            text: this.state.comment
        };
        this.setState(prevState => {
            return {
                comments: [...prevState.comments.newComment]
            }
        })
    };

    render() {
        return (
            <div>
                {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}                
                <CommentForm comment={this.state.comment} />
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

