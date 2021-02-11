import { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {

	componentDidMount(){
		this.props.handleSearch(this.props.query);  
		console.log('PhotoContainer mounted');
	}

	componentDidUpdate(prevProps) {
    if (this.props.match.url !== prevProps.match.url) {
      this.props.handleSearch(this.props.query);
    }
  }
	
	render() {

		return(
            <div className="photo-container">
            <h2>Results</h2>
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