import { UPDATE_BOOKS, UPDATE_CURRENT_BOOK } from '../actions/index';

const INITIAL_STATE = {
  books: [],
  currentBook: undefined,
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_BOOKS:
      return { ...state, books: action.payload };
    case UPDATE_CURRENT_BOOK:
      return { ...state, currentBook: action.payload };
    default: 
      return state;
  }
}