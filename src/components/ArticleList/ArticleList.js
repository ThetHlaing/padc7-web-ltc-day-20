import React from "react";
import Article from "../Article";
import { connect } from "react-redux";
import { fetchArticles } from '../../actions/articleActions';
import { fetchUsers } from '../../actions/userActions'

class ArticleList extends React.Component {
  constructor(props){
    super(props);
    this.props.fetchUsers();
    this.props.fetchArticles();
    
    
  }
  render() {
    
    const articles = this.props.articles;
    const users = this.props.users;
    console.log(articles,users);
    if(articles !== undefined && users !== undefined){
      console.log(articles);
      return articles.map((article, index) => {  
        
        const author = users.find(obj => obj.id == article.created_by);
        console.log(users,author,article.title);
        return <Article key={index} article={article} author={author} />;
      });
    }

    return null;
    
  }
}

const mapStateToProps = state => ({
  articles: state.articles,
  users: state.users
});

const mapDispatchToProps = {
  fetchArticles,
  fetchUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleList);