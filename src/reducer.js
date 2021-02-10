import authreducer from './Reducer/Auth'
import {PostReducer }from './Reducer/PostReducer'

  
import { combineReducers } from 'redux';

// import posts from './posts';

export const reducers = combineReducers({ auth:authreducer,posts:PostReducer});