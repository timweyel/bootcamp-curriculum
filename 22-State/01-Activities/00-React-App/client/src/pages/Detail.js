import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch, } from 'react-redux';
import Book from '../components/Book';
import { update_current_book } from '../actions';

const Detail = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const { books, currentBook } = useSelector(({ books }) => books);
  // useEffect is 3 react lifecycle methods in 1 function
  // it is componentDidMount, componentWillUnmount, shouldComponentUpdate
  // componentWillUnmount gets called when the component leaves the page
  
  useEffect(() => {
    dispatch(update_current_book(books.find(({ _id }) => _id === bookId)));
    return () => {
      console.log('im out');
      dispatch(update_current_book(''));
    };
  }, []);

  return (
    <main>
      <div className="m-5">
        {currentBook ? <Book {...currentBook} /> : <h2>Loading...</h2>}
      </div>
    </main>
  );
};
export default Detail;