import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import BookList from './pages/BookList';
import Detail from './pages/Detail';



function App() {

  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route
            exact
            path="/book/:bookId"
            component={Detail}
          />
          <Route render={() => <h1>404! Wrong Page</h1>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
