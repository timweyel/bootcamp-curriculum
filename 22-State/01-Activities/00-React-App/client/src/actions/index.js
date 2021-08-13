export const UPDATE_BOOKS = 'UPDATE_BOOKS';
export const UPDATE_CURRENT_BOOK = 'UPDATE_CURRENT_BOOK';
export const update_books = (books) => {
  return {
    type: UPDATE_BOOKS,
    payload: books,
  };
};
export const update_current_book = (book) => {
  return {
    type: UPDATE_CURRENT_BOOK,
    payload: book,
  };
};