import { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {

	state = {

	};

	render() {
		return(
            <div class="photo-container">
            <h2>Results</h2>
            <ul>
				<li>
					<Photo url="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="test" />
				</li>
            </ul>
          </div>
		);
	}

}

export default PhotoContainer;