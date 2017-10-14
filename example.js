require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactGist = require('react-gist');

var _reactGist2 = _interopRequireDefault(_reactGist);

var _reactMagnificPopup = require('react-magnific-popup');

var App = (function (_Component) {
	_inherits(App, _Component);

	function App(props, context) {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props, context);
		this.state = {
			singleSample: 'hide',
			lightBoxSample: 'hide',
			zoomGallery: 'hide',
			popupVideo: 'hide',
			popupZoom: 'hide',
			popupForm: 'hide',
			popupAjax: 'hide'
		};
	}

	_createClass(App, [{
		key: 'onToggle',
		value: function onToggle(type, e) {
			e.preventDefault();
			var newState = {};

			newState[type] = this.state[type] === 'hide' ? 'show' : 'hide';
			this.setState(newState);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'div',
					{ className: 'row' },
					_react2['default'].createElement(
						'div',
						{ className: 'col s12 m6' },
						_react2['default'].createElement(
							'h3',
							null,
							'Single Image Lightbox ',
							_react2['default'].createElement(
								'small',
								null,
								_react2['default'].createElement(
									'a',
									{ href: '#', onClick: this.onToggle.bind(this, 'singleSample') },
									'view source'
								)
							)
						),
						_react2['default'].createElement(
							_reactMagnificPopup.SingleImage,
							{
								className: 'image-popup-vertical-fit',
								href: 'http://farm9.staticflickr.com/8241/8589392310_7b6127e243_b.jpg',
								title: 'Caption. Can be aligned to any side and contain any HTML.',
								config: SingleImageConfig_1,
								style: { marginRight: '10px' }
							},
							_react2['default'].createElement('img', { src: 'http://farm9.staticflickr.com/8241/8589392310_7b6127e243_s.jpg', width: '75', height: '75' })
						),
						_react2['default'].createElement(
							_reactMagnificPopup.SingleImage,
							{
								className: 'image-popup-fit-width',
								href: 'http://farm9.staticflickr.com/8379/8588290361_ecf8c27021_b.jpg',
								title: 'This image fits only horizontally.',
								config: SingleImageConfig_2,
								style: { marginRight: '10px' }
							},
							_react2['default'].createElement('img', { src: 'http://farm9.staticflickr.com/8379/8588290361_ecf8c27021_s.jpg', width: '75', height: '75' })
						),
						_react2['default'].createElement(
							_reactMagnificPopup.SingleImage,
							{
								className: 'image-popup-no-margins',
								href: 'http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg',
								config: SingleImageConfig_3
							},
							_react2['default'].createElement('img', { src: 'http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg', width: '107', height: '75' })
						),
						_react2['default'].createElement(
							'div',
							{ id: 'single-gist', style: this.state.singleSample === 'hide' ? { height: '0px', overflow: 'hidden' } : { height: '300px', overflow: 'scroll' } },
							_react2['default'].createElement(_reactGist2['default'], { id: '226e4a27fddba82c464d8ab34bd6a259' })
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'col s12 m6' },
						_react2['default'].createElement(
							'h3',
							null,
							'Light Box Gallery ',
							_react2['default'].createElement(
								'small',
								null,
								_react2['default'].createElement(
									'a',
									{ href: '#', onClick: this.onToggle.bind(this, 'lightBoxSample') },
									'view source'
								)
							)
						),
						_react2['default'].createElement(
							_reactMagnificPopup.LightBoxGallery,
							{
								className: 'popup-gallery',
								config: galleryConfig
							},
							_react2['default'].createElement(
								_reactMagnificPopup.GalleryItem,
								{
									href: 'http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg',
									title: 'The Cleaner'
								},
								_react2['default'].createElement('img', { src: 'http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_s.jpg', width: '75', height: '75' })
							),
							_react2['default'].createElement(
								_reactMagnificPopup.GalleryItem,
								{
									href: 'http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg',
									title: 'The Cleaner'
								},
								_react2['default'].createElement('img', { src: 'http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_s.jpg', width: '75', height: '75' })
							),
							_react2['default'].createElement(
								_reactMagnificPopup.GalleryItem,
								{
									href: 'http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_b.jpg',
									title: 'The Uninvited Guest'
								},
								_react2['default'].createElement('img', { src: 'http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_s.jpg', width: '75', height: '75' })
							),
							_react2['default'].createElement(
								_reactMagnificPopup.GalleryItem,
								{
									href: 'http://farm9.staticflickr.com/8383/8563475581_df05e9906d_b.jpg',
									title: 'Oh no, not again!'
								},
								_react2['default'].createElement('img', { src: 'http://farm9.staticflickr.com/8383/8563475581_df05e9906d_s.jpg', width: '75', height: '75' })
							),
							_react2['default'].createElement(
								_reactMagnificPopup.GalleryItem,
								{
									href: 'http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_b.jpg',
									title: 'Swan Lake'
								},
								_react2['default'].createElement('img', { src: 'http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_s.jpg', width: '75', height: '75' })
							),
							_react2['default'].createElement(
								_reactMagnificPopup.GalleryItem,
								{
									href: 'http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg',
									title: 'The Shake'
								},
								_react2['default'].createElement('img', { src: 'http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_s.jpg', width: '75', height: '75' })
							),
							_react2['default'].createElement(
								_reactMagnificPopup.GalleryItem,
								{
									href: 'http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_b.jpg',
									title: 'Who\'s that, mommy?'
								},
								_react2['default'].createElement('img', { src: 'http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_s.jpg', width: '75', height: '75' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ id: 'single-gist', style: this.state.lightBoxSample === 'hide' ? { height: '0px', overflow: 'hidden' } : { height: '300px', overflow: 'scroll' } },
							_react2['default'].createElement(_reactGist2['default'], { id: '0d68ec113e65bcfd35ebd9f05c671c26' })
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'row' },
					_react2['default'].createElement(
						'div',
						{ className: 'col s12 m6' },
						_react2['default'].createElement(
							'h3',
							null,
							'Zoom Gallery ',
							_react2['default'].createElement(
								'small',
								null,
								_react2['default'].createElement(
									'a',
									{ href: '#', onClick: this.onToggle.bind(this, 'zoomGallery') },
									'view source'
								)
							)
						),
						_react2['default'].createElement(
							_reactMagnificPopup.LightBoxGallery,
							{
								className: 'popup-gallery',
								config: zoomGalleryConfig
							},
							_react2['default'].createElement(
								_reactMagnificPopup.GalleryItem,
								{
									href: 'http://farm4.staticflickr.com/3763/9204547649_0472680945_o.jpg',
									'data-source': 'http://500px.com/photo/32736307',
									title: 'Into The Blue',
									style: { width: '193px', height: '125px' }
								},
								_react2['default'].createElement('img', { src: 'http://farm4.staticflickr.com/3763/9204547649_7de96ee188_t.jpg', width: '193', height: '125' })
							),
							_react2['default'].createElement(
								_reactMagnificPopup.GalleryItem,
								{
									href: 'http://farm3.staticflickr.com/2856/9207329420_7f2a668b06_o.jpg',
									'data-source': 'http://500px.com/photo/32554131',
									title: 'Light Sabre',
									style: { width: '82px', height: '125px' }
								},
								_react2['default'].createElement('img', { src: 'http://farm3.staticflickr.com/2856/9207329420_e485948b01_t.jpg', width: '82px', height: '125' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ id: 'single-gist', style: this.state.zoomGallery === 'hide' ? { height: '0px', overflow: 'hidden' } : { height: '300px', overflow: 'scroll' } },
							_react2['default'].createElement(_reactGist2['default'], { id: 'd23cd4528613e9d026d3a35969f15e30' })
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'col s12 m6' },
						_react2['default'].createElement(
							'h3',
							null,
							'Popup with Video or Map ',
							_react2['default'].createElement(
								'small',
								null,
								_react2['default'].createElement(
									'a',
									{ href: '#', onClick: this.onToggle.bind(this, 'popupVideo') },
									'view source'
								)
							)
						),
						_react2['default'].createElement(
							'p',
							null,
							_react2['default'].createElement(
								_reactMagnificPopup.Popup,
								{
									className: 'popup-youtube',
									href: 'http://www.youtube.com/watch?v=0O2aH4XLbto',
									savefrom_lm_index: '0',
									savefrom_lm: '1',
									config: popupConfig },
								'Open YouTube video'
							)
						),
						_react2['default'].createElement(
							'p',
							null,
							_react2['default'].createElement(
								_reactMagnificPopup.Popup,
								{
									className: 'popup-vimeo',
									href: 'https://vimeo.com/45830194',
									config: popupConfig
								},
								'Open Vimeo video'
							)
						),
						_react2['default'].createElement(
							'p',
							null,
							_react2['default'].createElement(
								_reactMagnificPopup.Popup,
								{
									className: 'popup-gmaps',
									config: popupConfig,
									href: 'https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom'
								},
								'Open Google Map'
							)
						),
						_react2['default'].createElement(
							'div',
							{ id: 'single-gist', style: this.state.popupVideo === 'hide' ? { height: '0px', overflow: 'hidden' } : { height: '300px', overflow: 'scroll' } },
							_react2['default'].createElement(_reactGist2['default'], { id: '0bb8fe8d96cf145b831f0f93989e41f1' })
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'row' },
					_react2['default'].createElement(
						'div',
						{ className: 'col s12 m6' },
						_react2['default'].createElement(
							'h3',
							null,
							'Dialog with CSS transitions ',
							_react2['default'].createElement(
								'small',
								null,
								_react2['default'].createElement(
									'a',
									{ href: '#', onClick: this.onToggle.bind(this, 'popupZoom') },
									'view source'
								)
							)
						),
						_react2['default'].createElement(
							'p',
							null,
							_react2['default'].createElement(
								_reactMagnificPopup.Popup,
								{
									className: 'popup-with-zoom-anim',
									href: '#small-dialog',
									config: dialogZoomConfig
								},
								'Open with fade-zoom animation'
							)
						),
						_react2['default'].createElement(
							'p',
							null,
							_react2['default'].createElement(
								_reactMagnificPopup.Popup,
								{
									className: 'popup-with-move-anim',
									href: '#small-dialog',
									config: dialogMoveConfig
								},
								'Open with fade-slide animation'
							)
						),
						_react2['default'].createElement(
							'div',
							{
								id: 'small-dialog',
								className: 'zoom-anim-dialog mfp-hide'
							},
							_react2['default'].createElement(
								'h1',
								null,
								'Dialog example'
							),
							_react2['default'].createElement(
								'p',
								null,
								'This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.'
							)
						),
						_react2['default'].createElement(
							'div',
							{ id: 'single-gist', style: this.state.popupZoom === 'hide' ? { height: '0px', overflow: 'hidden' } : { height: '300px', overflow: 'scroll' } },
							_react2['default'].createElement(_reactGist2['default'], { id: '12caf5894f8773dff7d993184daac980' })
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'col s12 m6' },
						_react2['default'].createElement(
							'h3',
							null,
							'Popup with Form ',
							_react2['default'].createElement(
								'small',
								null,
								_react2['default'].createElement(
									'a',
									{ href: '#', onClick: this.onToggle.bind(this, 'popupForm') },
									'view source'
								)
							)
						),
						_react2['default'].createElement(
							_reactMagnificPopup.Popup,
							{
								className: 'popup-with-form',
								href: '#test-form',
								config: formConfig
							},
							'Open form'
						),
						_react2['default'].createElement(
							'form',
							{ id: 'test-form', className: 'white-popup-block mfp-hide' },
							_react2['default'].createElement(
								'h1',
								null,
								'Form'
							),
							_react2['default'].createElement(
								'ol',
								null,
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'label',
										{ htmlFor: 'name' },
										'Name'
									),
									_react2['default'].createElement('input', { id: 'name', name: 'name', type: 'text', placeholder: 'Name', required: '' })
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'label',
										{ htmlFor: 'email' },
										'Email'
									),
									_react2['default'].createElement('input', { id: 'email', name: 'email', type: 'email', placeholder: 'example@domain.com', required: '' })
								),
								_react2['default'].createElement(
									'li',
									null,
									_react2['default'].createElement(
										'label',
										{ htmlFor: 'phone' },
										'Phone'
									),
									_react2['default'].createElement('input', { id: 'phone', name: 'phone', type: 'tel', placeholder: 'Eg. +447500000000', required: '' })
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ id: 'single-gist', style: this.state.popupForm === 'hide' ? { height: '0px', overflow: 'hidden' } : { height: '300px', overflow: 'scroll' } },
							_react2['default'].createElement(_reactGist2['default'], { id: 'e390f598b516c09908db98488f03d40a' })
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'row' },
					_react2['default'].createElement(
						'div',
						{ className: 'col s12 m6' },
						_react2['default'].createElement(
							'h3',
							null,
							'Ajax Popup ',
							_react2['default'].createElement(
								'small',
								null,
								_react2['default'].createElement(
									'a',
									{ href: '#', onClick: this.onToggle.bind(this, 'popupAjax') },
									'view source'
								)
							)
						),
						_react2['default'].createElement(
							'p',
							null,
							_react2['default'].createElement(
								_reactMagnificPopup.Popup,
								{
									className: 'simple-ajax-popup-align-top',
									href: 'http://dimsemenov.com/plugins/magnific-popup/site-assets/ajax/test-ajax.html',
									config: ajaxConfig_1
								},
								'Load content via ajax'
							)
						),
						_react2['default'].createElement(
							'p',
							null,
							_react2['default'].createElement(
								_reactMagnificPopup.Popup,
								{
									className: 'simple-ajax-popup',
									href: 'http://dimsemenov.com/plugins/magnific-popup/site-assets/ajax/test-ajax-2.html',
									config: { type: 'ajax' }
								},
								'Load another content via ajax'
							)
						),
						_react2['default'].createElement(
							'div',
							{ id: 'single-gist', style: this.state.popupAjax === 'hide' ? { height: '0px', overflow: 'hidden' } : { height: '300px', overflow: 'scroll' } },
							_react2['default'].createElement(_reactGist2['default'], { id: '5f8b53d458d3baa89b4c9d030db37f01' })
						)
					)
				)
			);
		}
	}]);

	return App;
})(_react.Component);

var SingleImageConfig_1 = {
	type: 'image',
	closeOnContentClick: true,
	mainClass: 'mfp-img-mobile',
	image: {
		verticalFit: true
	}
};

var SingleImageConfig_2 = {
	type: 'image',
	closeOnContentClick: true,
	image: {
		verticalFit: false
	}
};

var SingleImageConfig_3 = {
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
};

var galleryConfig = {
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
	},
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function titleSrc(item) {
			return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
		}
	}
};

var zoomGalleryConfig = {
	delegate: 'a',
	type: 'image',
	closeOnContentClick: false,
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom mfp-img-mobile',
	image: {
		verticalFit: true,
		titleSrc: function titleSrc(item) {
			return item.el.attr('title') + ' &middot; <a className="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
		}
	},
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true,
		duration: 300, // don't foget to change the duration also in CSS
		opener: function opener(element) {
			return element.find('img');
		}
	}
};

var popupConfig = {
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
};

var dialogZoomConfig = {
	type: 'inline',
	fixedContentPos: false,
	fixedBgPos: true,
	overflowY: 'auto',
	closeBtnInside: true,
	preloader: false,
	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-zoom-in'
};

var dialogMoveConfig = {
	type: 'inline',
	fixedContentPos: false,
	fixedBgPos: true,
	overflowY: 'auto',
	closeBtnInside: true,
	preloader: false,
	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-slide-bottom'
};

var formConfig = {
	type: 'inline',
	preloader: false,
	focus: '#name'
};

var ajaxConfig_1 = {
	type: 'ajax',
	alignTop: true,
	overflowY: 'scroll'
};

var modalConfig = {
	type: 'inline',
	preloader: false,
	focus: '#username',
	modal: true
};

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));
/* <div className="col s12 m6">
<h3>Modal Popup</h3>
<Popup 
	className="popup-modal" 
	href="#test-modal"
	config={modalConfig}
>
	Open modal
</Popup>
<div 
	id="test-modal" 
	className="white-popup-block mfp-hide">
		<h1>Modal dialog</h1>
		<p>You won't be able to dismiss this by usual means (escape or click button), but you can close it programatically based on user choices or actions.</p>
	<span onClick={this.onClose}>Dismiss</span>
</div>
</div> */

},{"react":undefined,"react-dom":undefined,"react-gist":2,"react-magnific-popup":undefined}],2:[function(require,module,exports){
"use strict";

var React = require('react');

var Gist = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        file: React.PropTypes.string
    },

    shouldComponentUpdate: function(nextProps) {
        return (this.props.id !== nextProps.id) || (this.props.file != nextProps.file);
    },

    componentDidMount: function() {
        this._updateIframeContent();
    },
    componentDidUpdate: function(prevProps, prevState) {
        this._updateIframeContent();
    },

    _calculateUrl: function() {
        if (this.props.file) {
            return 'https://gist.github.com/' + this.props.id + '.js?file=' + this.props.file
        } else {
            return 'https://gist.github.com/' + this.props.id + '.js'
        }
    },

    _updateIframeContent: function() {
        var iframe = this.refs.iframe.getDOMNode();

        var doc = iframe.document;
        if (iframe.contentDocument) doc = iframe.contentDocument;
        else if (iframe.contentWindow) doc = iframe.contentWindow.document;

        var gistLink = this._calculateUrl()
        var gistScript = '<script type="text/javascript" src="' + gistLink + '"></script>';
        var styles = '<style>*{font-size:12px;}</style>';
        var resizeScript = 'onload="parent.document.getElementById(\'gist-' + this.props.id + '\').style.height=document.body.scrollHeight + \'px\'"';
        var iframeHtml = '<html><head><base target="_parent">'+styles+'</head><body '+resizeScript+'>'+gistScript+'</body></html>';

        doc.open();
        doc.writeln(iframeHtml);
        doc.close();
    },

    render: function() {
        return React.createElement('iframe', {
            ref: 'iframe',
            width: '100%',
            frameBorder: 0,
            id: "gist-" + this.props.id
        });
    }
});

module.exports = Gist;

},{"react":undefined}]},{},[1]);
