import React from 'react';
import { useQuery } from '@apollo/client';
import BookList from '../components/BookList';
// import QUERY_BOOKS
import { QUERY_BOOKS } from '../utils/queries';

const Home = () => {
  // use useQuery hook to make query request
  // YOUR CODE HERE
  //
  const { loading, data } = useQuery(QUERY_BOOKS, {
    onCompleted: data => {
      console.log('I am done running!');
    },
    onError: error => {
      console.log(error);
    },
  });

  const books = data?.books || [];

  return (
    <main>
      <div>{loading ? <div>Loading...</div> : <BookList books={books} />}</div>
    </main>
  );
};

export default Home;
