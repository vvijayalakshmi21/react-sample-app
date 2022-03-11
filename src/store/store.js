import { createStore } from 'redux';
import { appBaseReducer } from '../reducers';

export const appStore = createStore(
  appBaseReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);