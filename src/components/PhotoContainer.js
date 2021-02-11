import { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {

	componentDidMount(){
		this.props.handleSearch(this.props.query);  
	}
	// Check if url has changed and fetch new data if so
	componentDidUpdate(prevProps) {
    if (this.props.match.url !== prevProps.match.url) {
      this.props.handleSearch(this.props.query);
	}
  }
	
	render() {

		return(
            <div className="photo-container">
			{	
				this.props.searchPage ?
					<h2>Please Enter Search Query</h2> :
					this.props.loading ?
						<h2 className="loading">Loading...</h2> :
						this.props.images.length > 0 ?
							<h2>{this.props.query}</h2> :
							<h2>No Images Found</h2>
			}
            <ul>
				{
					this.props.images.map(image => {
						return <Photo url={image.url} alt={image.alt} key={image.id} />
					})
				}
            </ul>
			
          </div>
		);
	}

}

export default PhotoContainer;