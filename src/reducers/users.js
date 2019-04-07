const users = (state = [], action) => {
    switch (action.type) {      
      case 'FETCH_USERS':
        return action.payload;
      case 'ADD_NEW_USERS':
        return [
          ...state,
          action.user
        ]
      default:
        return state
    }
  }

  export default users