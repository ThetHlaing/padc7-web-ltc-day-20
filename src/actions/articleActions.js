import {retrieveData,storeData} from "../utilies/localStorage";
import firestore from '../utilies/firebase';

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

export const insertArticle = (article) => dispatch => {  
  // article.id = 12;
  firestore.collection('articles').add(article).then( (data) => {
    article.id = data.id;
    dispatch({
      type: 'ADD_NEW_ARTICLE',
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
    cb();
  });
  

  
}
