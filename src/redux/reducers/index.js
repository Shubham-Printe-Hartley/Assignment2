import {combineReducers} from 'redux';

import { userLoginReducer } from './userReducer';
import { loaderReducer } from './loaderReducer';
// likewise we can import more reducers and combine them here

export default combineReducers({
  userLogin: userLoginReducer,
  loading: loaderReducer
});