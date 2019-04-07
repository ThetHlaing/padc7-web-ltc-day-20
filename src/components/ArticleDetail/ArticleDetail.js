import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/articleActions'
import { fetchUsers } from '../../actions/userActions'

class ArticleDetail extends React.Component{

    constructor(props){
      super(props);
      this.props.fetchArticles();
      this.props.fetchUsers();
    }

    render(){
        const id = this.props.match.params.id;
        const articles = this.props.articles;
        const users = this.props.users;
        const currentUser = this.props.currentUser;
        const currentArticle =  articles.find( item => item.id == id);
        if(currentArticle === undefined) return <div>404 - Content not found</div>
        
        console.log(currentArticle);
        const author = users.find(obj => obj.id === currentArticle.created_by);
        let allowToDelete = false;
        if(currentUser){
          if(currentUser.id === author.id){
            allowToDelete = true;
          }
        }

     return (
        <React.Fragment>
        <h2>
          {currentArticle.title} by {author.name}
        </h2>        
        { allowToDelete && (
            <Link to={`/articles/delete/${currentArticle.id}`}>Delete</Link>
        ) }
        <p>{currentArticle.content}</p>

        <hr />
      </React.Fragment>
     );
    }
}

const mapStateToProps = state => ({
  articles : state.articles,
  users : state.users,
  currentUser : state.currentUser
})

const mapDispatchToProps = {
  fetchArticles,
  fetchUsers
}

export default connect (mapStateToProps,mapDispatchToProps)(ArticleDetail)