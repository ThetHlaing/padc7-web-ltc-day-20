import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";
export default class Article extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>
          <Link to={"/articles/"+this.props.article.id}>{this.props.article.title} by {this.props.author.name}</Link>
        </h2>
        <p>{this.props.article.content}</p>
        <hr />
      </React.Fragment>
    );
  }
}
