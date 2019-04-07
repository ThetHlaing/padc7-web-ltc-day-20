const articles = (state = [], action) => {
    switch (action.type) {
      case 'ADD_NEW_ARTICLE':
        return [
          ...state,
          action.article          
        ];
      case 'FETCH_ARTICLES':
        return [...action.data]
      case 'DELETE_ARTICLE':
        return state.filter(item => item.id !== action.id)
      case 'UPDATE_ARTICLE' :
        return [
          ...state.filter(item => item.id !== action.article.id),
          action.article
        ]
      default:
        return state
    }
  }

  export default articles