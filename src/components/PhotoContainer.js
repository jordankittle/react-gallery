import { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {

	state = {
		images: [],
		loading: true
	}
	
	
	componentDidMount(){
		this.handleSearch(this.props.query);  
		console.log('PhotoContainer mounted');
	}

	componentDidUpdate(prevProps) {

        if (this.props.match.path !== prevProps.match.path) {
            this.handleSearch(this.props.query);
        }
    }

	
	handleSearch = (query = 'cats') => {
		const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.apiKey}&text=${query}&privacy_filter=1&per_page=24&format=json&nojsoncallback=1`;
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
	
	render() {

		return(
            <div className="photo-container">
            <h2>Results</h2>
            <ul>
				{
					this.state.images.map((image, index) => {
						return <Photo url={image.url} alt={image.alt} key={image.id} />
					})
				}
            </ul>
          </div>
		);
	}

}

export default PhotoContainer;