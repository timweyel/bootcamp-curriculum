// In order for us to create a store, we need at least 1 reducer
// the createStore function that redux gives us can only take 1 reducer
// redux gives us a way to combine many reducers into 1 jumbo reducer
import { createStore, combineReducers } from 'redux';
import bookReducer from './bookReducer';

export default combineReducers({
  books: bookReducer,
  
});