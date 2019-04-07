import {combineReducers} from 'redux';
import articles from './articles';
import users from './users';
import currentUser from './currentUser';

export default combineReducers({articles,users,currentUser});