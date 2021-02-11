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
 
	state = {
		images: [],
		loading: true
	}
	
	handleSearch = (query = 'cats') => {
    this.setState({
      loading: true
    });
		const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&privacy_filter=1&per_page=24&format=json&nojsoncallback=1`;
		fetch(url)
		.then ( response => response.json())
		.then( response => {
			// handle success
			const imagesReturned = response.photos.photo.map( photo => {
				return {
				  url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
				  id: photo.id,
				  alt: photo.title
				};
		  });
	
			this.setState({
				images: imagesReturned,
				loading: false
			});

		})
		.catch( error => {
			// handle error
			console.log('Error fetching and parsing data', error);
		})
		.then( () => {
			// always executed
			console.log('Fetch attempt complete');
		});  
	} 
  

  render(){
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" render={ ({match}) => <PhotoContainer match={match} query ="cats" images={this.state.images} handleSearch={this.handleSearch} loading={this.state.loading} />} />
            <Route path="/cats" render={ ({match}) => <PhotoContainer match={match} query ="cats" images={this.state.images} handleSearch={this.handleSearch} loading={this.state.loading}  />} />
            <Route path="/dogs" render={ ({match}) => <PhotoContainer match={match} query="dogs" images={this.state.images} handleSearch={this.handleSearch} loading={this.state.loading} />} />
            <Route path="/birds" render={ ({match}) => <PhotoContainer match={match} query="birds" images={this.state.images} handleSearch={this.handleSearch} loading={this.state.loading} />} />
            <Route exact path ="/search" render={ ({match}) => <PhotoContainer match={match} query="" images={this.state.images} handleSearch={this.handleSearch} loading={this.state.loading} searchPage="true"  />} />
            <Route path="/search/:query" render={ ({match}) => <PhotoContainer match={match} query={match.params.query} images={this.state.images} handleSearch={this.handleSearch} loading={this.state.loading} />} />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;