import {retrieveData,storeData} from "../utilies/localStorage";
import firestore from '../utilies/firebase';
import { join } from "path";

export const fetchArticles = () => dispatch => {  
  //const articles = retrieveData('articles');
  const articles = []
  const articlesData = firestore.collection('articles').get();
  articlesData.then( (snapshot) => {
    snapshot.docs.forEach( item => {
      const article = item.data();
      article.id = item.id;
      articles.push(article);
    });
    console.log("articles",articles);
    dispatch({
      type: 'FETCH_ARTICLES',
      data : articles
    });
  })
  
};

export const insertArticle = (article,cb) => dispatch => {  

  //article.user = firestore.doc('users/'+article.author.id);
  article.user = firestore.collection('users').doc(article.author.id);
  firestore.collection('articles').add(article).then( (data) => {
    article.id = data.id;
    
    dispatch({
      type: 'ADD_NEW_ARTICLE',
      article : article
    });
    cb();
  });
  
  
};


export const insertComment = (comment,article) => dispatch => {  
  if( article.comments == undefined){
    article.comments = [comment];
  }
  else{
    article.comments.push(comment);
  }
  
  //article.user = firestore.doc('users/'+article.author.id);
  firestore.collection('articles').doc(article.id).update({
    comments : article.comments
  }).then( () =>  {       
    dispatch({
      type: 'UPDATE_ARTICLE',
      article : article
    });
  });
  
  
};


export const deleteArticle = (id,cb) => dispatch => {
  firestore.collection('articles').doc(id).delete().then(data => {
    dispatch({
      type : 'DELETE_ARTICLE',
      id : id
    });
    //cb();
  });
  

  
}
