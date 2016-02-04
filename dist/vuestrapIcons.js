(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuestrapIcons"] = factory();
	else
		root["vuestrapIcons"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * IMPORT GLOBAL STYLING
	 */
	// import normalize, grid, utilities and
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(1);
	
	/**
	 * IMPORT EACH COMPONENT
	 */
	
	var _srcComponentsIcons = __webpack_require__(6);
	
	var _srcComponentsIcons2 = _interopRequireDefault(_srcComponentsIcons);
	
	var vuestrapIcons = {
	  icons: _srcComponentsIcons2['default']
	};
	
	exports['default'] = vuestrapIcons;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// import core stuff
	'use strict';
	
	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(7);
	
	var _iconsHtml = __webpack_require__(9);
	
	var _iconsHtml2 = _interopRequireDefault(_iconsHtml);
	
	// enable support for svg in all browsers
	
	__webpack_require__(10);
	
	// export component object
	exports['default'] = {
	  template: _iconsHtml2['default'],
	  replace: true,
	  computed: {
	    iconsSize: function iconsSize() {
	      return !this.size ? 'icons-sm' : 'icons-' + this.size;
	    },
	    iconsAlign: function iconsAlign() {
	      return !this.align ? '' : 'icons-' + this.align;
	    },
	    iconsVariant: function iconsVariant() {
	      return !this.variant ? '' : 'icons-' + this.variant;
	    },
	    iconsBackground: function iconsBackground() {
	      var bg = this.background.split('-');
	      bg = bg[1] ? bg[1] : 'fill';
	      return !this.background ? '' : 'icons-bg-' + bg;
	    }
	  },
	  props: {
	    name: {
	      type: String
	    },
	    background: {
	      type: String,
	      'default': ''
	    },
	    align: {
	      type: String,
	      'default': ''
	    },
	    size: {
	      type: String,
	      'default': 'sm'
	    },
	    text: {
	      type: String,
	      'default': ''
	    },
	    variant: {
	      type: String,
	      'default': 'standard'
	    },
	    path: {
	      type: String,
	      'default': function _default() {
	        if (false) {
	          return 'bower_components/vuestrap-icons/assets/icons.min.svg';
	        }
	        if (false) {
	          return 'assets/icons.min.svg';
	        }
	        return 'node_modules/vuestrap-icons/assets/icons.min.svg';
	      }
	    },
	    ready: function ready() {
	      if (!this.path && this.$options.vuestrapIconsPath) {
	        this.path = this.$options.vuestrapIconsPath;
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	module.exports = "<span class=\"icons icons-vuestrap {{iconsSize}} {{iconsVariant}} {{iconsBackground}} {{iconsAlign}}\" aria-hidden=\"true\">\r\n\t<span v-if=\"name\">\r\n\t\t<svg role=\"img\" class=\"icon\">\r\n\t\t\t<use v-bind:xlink:href=\"path + '#' + name\"></use>\r\n\t\t</svg>\r\n\t</span>\r\n\t<span v-if=\"background\">\r\n\t\t<svg role=\"img\" class=\"icon-background\">\r\n\t\t\t<use v-bind:xlink:href=\"path + '#' + background\"></use>\r\n\t\t</svg>\r\n\t</span>\r\n\t<span class=\"text\" v-show=\"text.length\">\r\n\t\t<span><slot>{{text}}</slot></span>\r\n\t</span>\r\n</span>";

/***/ },
/* 10 */
/***/ function(module, exports) {

	/*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var LEGACY_SUPPORT = false;
	
	function embed(svg, g) {
		if (g) {
			var viewBox = !svg.getAttribute('viewBox') && g.getAttribute('viewBox');
			var fragment = document.createDocumentFragment();
			var clone = g.cloneNode(true);
	
			if (viewBox) {
				svg.setAttribute('viewBox', viewBox);
			}
	
			while (clone.childNodes.length) {
				fragment.appendChild(clone.firstChild);
			}
	
			svg.appendChild(fragment);
		}
	}
	
	function loadreadystatechange(xhr) {
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				var x = document.createElement('x');
	
				x.innerHTML = xhr.responseText;
	
				xhr.s.splice(0).map(function (array) {
					embed(array[0], x.querySelector('#' + array[1].replace(/(\W)/g, '\\$1')));
				});
			}
		};
	
		xhr.onreadystatechange();
	}
	
	function svg4everybody(opts) {
		opts = opts || {};
	
		var uses = document.getElementsByTagName('use');
		var nosvg;
	
		if (LEGACY_SUPPORT) {
			var fallback = opts.fallback || function (src) {
				return src.replace(/\?[^#]+/, '').replace('#', '.').replace(/^\./, '') + '.png' + (/\?[^#]+/.exec(src) || [''])[0];
			};
	
			nosvg = 'nosvg' in opts ? opts.nosvg : /\bMSIE [1-8]\b/.test(navigator.userAgent);
	
			if (nosvg) {
				document.createElement('svg');
				document.createElement('use');
			}
		}
	
		var polyfill = 'polyfill' in opts ? opts.polyfill : LEGACY_SUPPORT ? nosvg || /\bEdge\/12\b|\bMSIE [1-8]\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537 : /\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537;
	
		var validate = opts.validate;
		var requestAnimationFrame = window.requestAnimationFrame || setTimeout;
		var svgCache = {};
	
		function oninterval() {
			var use;
	
			while (use = uses[0]) {
				var svg = use.parentNode;
	
				if (svg && /svg/i.test(svg.nodeName)) {
					var src = use.getAttribute('xlink:href');
	
					if (LEGACY_SUPPORT && nosvg) {
						var img = new Image();
						var width = svg.getAttribute('width');
						var height = svg.getAttribute('height');
	
						img.src = fallback(src, svg, use);
	
						if (width) {
							img.setAttribute('width', width);
						}
	
						if (height) {
							img.setAttribute('height', height);
						}
	
						svg.replaceChild(img, use);
					} else if (polyfill) {
						if (!validate || validate(src, svg, use)) {
							var url = src.split('#');
							var url_root = url[0];
							var url_hash = url[1];
	
							svg.removeChild(use);
	
							if (url_root.length) {
								var xhr = svgCache[url_root] = svgCache[url_root] || new XMLHttpRequest();
	
								if (!xhr.s) {
									xhr.s = [];
	
									xhr.open('GET', url_root);
	
									xhr.send();
								}
	
								xhr.s.push([svg, url_hash]);
	
								loadreadystatechange(xhr);
							} else {
								embed(svg, document.getElementById(url_hash));
							}
						}
					}
				}
			}
	
			requestAnimationFrame(oninterval, 17);
		}
	
		if (polyfill) {
			oninterval();
		}
	}
	
	var svgPolyfill = {
		svg4everybody: svg4everybody()
	};
	exports.svgPolyfill = svgPolyfill;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vuestrapIcons.js.map