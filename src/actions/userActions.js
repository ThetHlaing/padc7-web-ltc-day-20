import {
  retrieveData,
  storeData
} from "../utilies/localStorage";
import firestore from '../utilies/firebase';

export const fetchUsers = () => dispatch => {

  const userData = firestore.collection('users').get();
  userData.then( (snapshot) => {
    const users = [];
    snapshot.docs.forEach( item => {
      const user = item.data();
      user.id = item.id;
      users.push(user);
    });
    console.log('Users',users);
    dispatch({
      type: 'FETCH_USERS',
      payload: users
    });
  });
  
};

export const insertUser = (user, cb) => dispatch => {
  firestore.collection('users').add(user).then( (data) => {
    user.id = data.id;
    dispatch({
      type: 'ADD_NEW_USER',
      user: user
    });
  
    cb();
  })
  

};

export const loginUserEvent = (user,cb) => dispatch =>{
  dispatch({
    type : "LOGIN",
    user : user
  });
  cb();
}