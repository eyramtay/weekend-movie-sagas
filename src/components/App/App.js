import {HashRouter as Router, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';

function App() {

  const [details, setDetails] = useState({});

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList setDetails={setDetails}/>
        </Route>
        
        {/* Details page */}
        <Route path="/details">
          <Details details={details} />
        </Route>
        {/* Add Movie page */}
        <Route path="/add-movie">
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
