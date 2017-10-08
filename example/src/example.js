import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
	SingleImage, 
	LightBoxGallery, 
	GalleryItem
} from 'react-magnific-popup';

class App extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s12 m6">
					<h3>Single Image Lightbox</h3>
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
				<div className="col s12 m6">
					<h3>Light Box Gallery</h3>
					<LightBoxGallery 
						className="popup-gallery"
						config={galleryConfig}
					>
						<GalleryItem
							href="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg" 
							title="The Cleaner"
						>
							<img src="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_s.jpg" width="75" height="75" />
						</GalleryItem>
						<GalleryItem
							href="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg" 
							title="The Cleaner"
						>
							<img src="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_s.jpg" width="75" height="75" />
						</GalleryItem>
						<GalleryItem
						 	href="http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_b.jpg" 
							title="The Uninvited Guest"
						>
							<img src="http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_s.jpg" width="75" height="75" />
						</GalleryItem>
						<GalleryItem
						 	href="http://farm9.staticflickr.com/8383/8563475581_df05e9906d_b.jpg" 
							title="Oh no, not again!"
						>
							<img src="http://farm9.staticflickr.com/8383/8563475581_df05e9906d_s.jpg" width="75" height="75" />
						</GalleryItem>
						<GalleryItem
						 	href="http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_b.jpg" 
							title="Swan Lake"
						>
							<img src="http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_s.jpg" width="75" height="75" />
						</GalleryItem>
						<GalleryItem
						 	href="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg" 
							title="The Shake"
						>
							<img src="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_s.jpg" width="75" height="75" />
						</GalleryItem>
						<GalleryItem
						 	href="http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_b.jpg" 
							title="Who's that, mommy?"
						>
							<img src="http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_s.jpg" width="75" height="75" />
						</GalleryItem>
					</LightBoxGallery>
				</div>
				<div className="col s12 m6">
					<h3>Zoom Gallery</h3>
					<LightBoxGallery 
						className="popup-gallery"
						config={zoomGalleryConfig}
					>
						<GalleryItem
							href="http://farm4.staticflickr.com/3763/9204547649_0472680945_o.jpg" 
							data-source="http://500px.com/photo/32736307" 
							title="Into The Blue" 
							style={{width: '193px', height:'125px'}}
						>
							<img src="http://farm4.staticflickr.com/3763/9204547649_7de96ee188_t.jpg" width="193" height="125" />
						</GalleryItem>
						<GalleryItem
							href="http://farm3.staticflickr.com/2856/9207329420_7f2a668b06_o.jpg" 
							data-source="http://500px.com/photo/32554131" 
							title="Light Sabre" 
							style={{width: '82px', height: '125px'}}
						>
							<img src="http://farm3.staticflickr.com/2856/9207329420_e485948b01_t.jpg" width="82px" height="125" />
						</GalleryItem>
					</LightBoxGallery>
				</div>
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

const galleryConfig = {
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
			return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
		}
	}
}

const zoomGalleryConfig = {
	delegate: 'a',
	type: 'image',
	closeOnContentClick: false,
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom mfp-img-mobile',
	image: {
		verticalFit: true,
		titleSrc: function(item) {
			return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
		}
	},
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true,
		duration: 300, // don't foget to change the duration also in CSS
		opener: function(element) {
			return element.find('img');
		}
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
