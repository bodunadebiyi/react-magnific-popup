import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SingleImage } from 'react-magnific-popup';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Single Image Lightbox</h1>
				<SingleImage 
					className="image-popup-vertical-fit" 
					href="http://farm9.staticflickr.com/8241/8589392310_7b6127e243_b.jpg" 
					title="Caption. Can be aligned to any side and contain any HTML."
					config={SingleImageConfig_1}
					style={{marginRight: '10px'}}
				>
					<img src="http://farm9.staticflickr.com/8241/8589392310_7b6127e243_s.jpg" width="75" height="75" />
				</SingleImage>

				<SingleImage
					className="image-popup-fit-width" 
					href="http://farm9.staticflickr.com/8379/8588290361_ecf8c27021_b.jpg" 
					title="This image fits only horizontally."
					config={SingleImageConfig_2}
					style={{marginRight: '10px'}}
				>
					<img src="http://farm9.staticflickr.com/8379/8588290361_ecf8c27021_s.jpg" width="75" height="75"/>
				</SingleImage>
				<SingleImage 
					className="image-popup-no-margins" 
					href="http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg"
					config={SingleImageConfig_3}
				>
					<img src="http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg" width="107" height="75" />
				</SingleImage>
			</div>
		)
	}
}

const SingleImageConfig_1 = {
	type: 'image',
	closeOnContentClick: true,
	mainClass: 'mfp-img-mobile',
	image: {
		verticalFit: true
	}	
};

const SingleImageConfig_2 = {
	type: 'image',
	closeOnContentClick: true,
	image: {
		verticalFit: false
	}
};

const SingleImageConfig_3 = {
	type: 'image',
	closeOnContentClick: true,
	closeBtnInside: false,
	fixedContentPos: true,
	mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	image: {
		verticalFit: true
	},
	zoom: {
		enabled: true,
		duration: 300 // don't foget to change the duration also in CSS
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
