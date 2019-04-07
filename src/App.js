import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import NewArticleForm from "./components/NewArticleForm";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";
import DeleteArticle from "./components/DeleteArticle";
import { connect } from 'react-redux';


class App extends React.Component {
    constructor(props) {
      super(props); 

    }
  
    componentDidMount() {
    //   this.localStorageRetrieval("users");
    //   this.localStorageRetrieval("articles");
    }
  
    deleteArticleEvent = (id,cb) =>{
      const articles = this.state.articles;
      const newArticles =  articles.filter( item => item.id !== id);
      this.setStateAndLocalStorage('articles',newArticles);
      cb();
    }
    
    render() {
        console.log(this.props.state,this.props.currentUser.length);
      return (
          <Router>
            <div className="App">
              <h1>Welcome to My Blog!</h1>
              <Link to="/">Home</Link> | <Link to="/login">SignIn</Link>
              {this.props.currentUser.id !== undefined && (
                <React.Fragment>
                  | <Link to="/article/new">New Article</Link>
                </React.Fragment>
              )}
              <br />
            </div>
            <Route
              path="/register"
              component={RegisterForm}
            />
            <Route
              path="/login"
              component={LoginForm}
            />
            <Route
              path="/article/new"
              render={props =>
                this.props.currentUser.id !== undefined ? (
                  <NewArticleForm
                    {...props}
                  />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: props.location }
                    }}
                  />
                )
              }
            />
  
            <Route
              path="/articles/:id"
              exact
              component={ArticleDetail}             
            />
  
            <Route
              path="/articles/delete/:id"
              exact
              component={DeleteArticle}
            />
  
  
            <Route
              path="/"
              exact
              component={ArticleList}            
            />
          </Router>
      );
    }
  }

  const mapStateToProps  = state => ({ 
    currentUser : state.currentUser
  })

  export default connect (mapStateToProps) (App)