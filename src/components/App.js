import { Component } from 'react';
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
import apiKey from '../config.js';

class App extends Component {
 

  

  render(){
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" render={ ({match}) => <PhotoContainer query ="cats" apiKey={apiKey} match={match} />} />
            <Route path="/cats" render={ ({match}) => <PhotoContainer query ="cats" apiKey={apiKey} match={match} />} />
            <Route path="/dogs" render={ ({match}) => <PhotoContainer query="dogs" apiKey={apiKey} match={match} />} />
            <Route path="/birds" render={ ({match}) => <PhotoContainer query="birds" apiKey={apiKey} match={match} />} />
            <Route path="/search/:query" render={ ({match}) => <PhotoContainer query={match.params.query} apiKey={apiKey} match={match} />} />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;