import { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {

	componentDidMount(){
		this.props.handleSearch(this.props.query);  
		console.log('PhotoContainer mounted');
	}
	// Check if url has changed and fetch new data if so
	componentDidUpdate(prevProps) {
    if (this.props.match.url !== prevProps.match.url) {
      this.props.handleSearch(this.props.query);
	}
	console.log(this.props.images.length)
  }
	
	render() {

		return(
            <div className="photo-container">
			{	
				this.props.loading ?
					<h2 className="loading">Loading...</h2> :
					this.props.images.length > 0 ?
           				<h2>{this.props.query}</h2> :
						<h2>No Images Found</h2>
			}
            <ul>
				{
					this.props.images.map((image, index) => {
						return <Photo url={image.url} alt={image.alt} key={image.id} />
					})
				}
            </ul>
			
          </div>
		);
	}

}

export default PhotoContainer;