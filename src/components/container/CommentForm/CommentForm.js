import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import { connect } from "react-redux";
import { insertComment } from '../../../actions/articleActions';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.comment = React.createRef();
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const newComment = {
      comment: this.comment.current.value,      
      author : this.props.currentUser
    };
    console.log(newComment);
    this.props.insertComment(newComment,this.props.article);
    
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" required ref={this.comment} />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  currentUser : state.currentUser
})


const mapDispatchToProps = {
  insertComment
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentForm);