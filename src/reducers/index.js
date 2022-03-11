import { combineReducers } from 'redux';
import { albumReducer } from './albumReducer';
import { postReducer } from './postReducer';

export const appBaseReducer = combineReducers({
  album: albumReducer,
  post: postReducer,
});