import React from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { update_books } from '../actions';
import Book from '../components/Book';
import { QUERY_BOOKS } from '../utils/queries';

const BookList = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useQuery(QUERY_BOOKS, {
    onCompleted: data => {
      console.log(data.books);
      dispatch(update_books(data.books));
    },
    onError: error => {
      console.log(error);
    },
    fetchPolicy: 'cache-and-network',
  });

  if (!books?.length) {
    return <h3>There are no books in this library!</h3>;
  }

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book._id}
          bookId={book._id}
          title={book.title}
          author={book.author}
          pages={book.pages}
        />
      ))}
    </div>
  );
};

export default BookList;