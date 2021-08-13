import {useState} from 'react';
import { TextField, button, Grid } from '@material-ui/core';
import { About } from './components/About';
import { Home } from './components/Home';

function App() {

  const [ currentPage, setCurrentPage ] = useState('Home');
  
  const renderPage = () {
    switch(currentPage){
      case 'Home': 
        return <Home/>;
      case 'About':
        return <AboutComponent/>;
      default: 
        return <h1>404 not found</h1>;
    }
  };

  return (
    <Grid container>
      <button
        onClick={() => setCurrentPage('Home')}
      >
        Home
      </button>
      
      <button
      onClick={() => setCurrentPage('About')}
      >
        About
      </button>

      { renderPage() }
    </Grid>
  )
}

export default App;
