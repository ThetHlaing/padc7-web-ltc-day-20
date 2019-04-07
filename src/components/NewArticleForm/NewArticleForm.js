import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import { connect } from "react-redux";
import { insertArticle } from '../../actions/articleActions';

class NewArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.title = React.createRef();
    this.content = React.createRef();
    this.state = {
      completeArticle: false
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const newArticle = {
      title: this.title.current.value,
      content: this.content.current.value,
      created_by : this.props.currentUser.id
    };
    console.log(newArticle);
    this.props.insertArticle(newArticle);
    this.setState({
      completeArticle: true
    });
  };

  render() {
    if (this.state.completeArticle) return <Redirect to="/" />;

    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="title">Title : </label>
        <input id="title" required ref={this.title} />
        <br />
        <label htmlFor="content">Content</label>
        <textarea id="content" required ref={this.content} />
        <br />
        <button type="submit">Save</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  currentUser : state.currentUser
})


const mapDispatchToProps = {
  insertArticle
}

export default connect(mapStateToProps,mapDispatchToProps)(NewArticleForm);