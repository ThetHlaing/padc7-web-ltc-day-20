import React from "react";
import Article from "../../presentional/Article";
import { connect } from "react-redux";
import { fetchArticles } from '../../../actions/articleActions';
import { fetchUsers } from '../../../actions/userActions'

class ArticleList extends React.Component {
  constructor(props){
    super(props);
    this.props.fetchArticles();
    
    
  }
  render() {
    
    const articles = this.props.articles;
    
    if(articles !== undefined){
      return articles.map((article, index) => {  
        return <Article key={index} article={article} author={article.author} />;
      });
    }

    return null;
    
  }
}

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = {
  fetchArticles,
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleList);