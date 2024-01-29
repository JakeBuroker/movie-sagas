import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import './App.css';
import DetailsView from '../DetailsView/DetailsView';

function App() {
  return (
    <div className="App">
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/DetailsView" exact>
          <DetailsView/>
        </Route>

        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
