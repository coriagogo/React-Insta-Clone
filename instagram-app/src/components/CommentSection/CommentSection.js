import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import PropTypes from 'prop-types';



class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            commentField: ''
        };
    } 
    
    handleNewComment = e => {
        this.setState({
            commentField: e.target.value
        })
    }

    addComment = e => {
        e.preventDefault();

        const newComments = this.state.comments;
        newComments.push({text: this.state.commentField, username: 'coriagogo'})

        //Clearing out field 
        //Be sure to pass commentField to CommentForm
        this.setState({ comments: newComments, commentField: ''});
    }
    

    render() {
        return (
            <div>
                {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}                
                <CommentForm onSubmit={this.addComment} onChange={this.handleNewComment} comment={this.state.comment} commentField={this.state.commentField}/>
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

