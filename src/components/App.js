import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import '../css/index.css';
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';
import { apiKey } from '../config.js';

function App() {
	return (
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />
        <Switch>
          <Route exact path="/" render={ () => <PhotoContainer query ="cats" />} />
          <Route exact path="/cats" render={ () => <PhotoContainer query ="cats" />} />
          <Route exact path="/dogs" render={ () => <PhotoContainer query="dogs" />} />
          <Route exact path="/computers" render={ () => <PhotoContainer query="computers" />} />
          <Route path="/search/:query" render={ ({match}) => <PhotoContainer query={match.params.query} />} />
          <Route component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
	);
}

export default App;