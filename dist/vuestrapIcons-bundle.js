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

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * IMPORT EACH COMPONENT
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _srcComponentsIcons = __webpack_require__(1);

	var _srcComponentsIcons2 = _interopRequireDefault(_srcComponentsIcons);

	var vuestrapIcons = {
	  icons: _srcComponentsIcons2['default']
	};

	exports['default'] = vuestrapIcons;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(2);

	var _iconsHtml = __webpack_require__(6);

	var _iconsHtml2 = _interopRequireDefault(_iconsHtml);

	// enable support for svg in all browsers

	__webpack_require__(7);

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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./icons.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./icons.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".icons-vuestrap {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative; }\n  .icons-vuestrap .icon {\n    width: 100%;\n    height: 100%;\n    top: 0%;\n    left: 0%;\n    position: absolute;\n    z-index: 2; }\n  .icons-vuestrap .icon-background {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1; }\n  .icons-vuestrap.icons-bg-fill .icon, .icons-vuestrap.icons-bg-outline .icon {\n    width: 50%;\n    height: 50%;\n    top: 25%;\n    left: 25%; }\n  .icons-vuestrap .text {\n    position: relative;\n    color: #fff;\n    z-index: 3;\n    font-size: 70%;\n    width: 100%;\n    height: 100%;\n    display: table;\n    text-align: center; }\n    .icons-vuestrap .text > span {\n      display: table-cell;\n      vertical-align: middle; }\n  .icons-vuestrap.icons-right {\n    margin-left: 0.2em;\n    margin-right: 0; }\n  .icons-vuestrap.icons-left {\n    margin-left: 0;\n    margin-right: 0.2em; }\n  .icons-vuestrap .hidden {\n    display: none; }\n\n.icons-vuestrap.icons-sm {\n  font-size: 1rem;\n  line-height: 1rem;\n  width: 1rem;\n  height: 1rem; }\n\n.icons-vuestrap.icons-md {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem; }\n\n.icons-vuestrap.icons-lg {\n  font-size: 2rem;\n  line-height: 2rem;\n  width: 2rem;\n  height: 2rem; }\n\n.icons-vuestrap.icons-xl {\n  font-size: 3rem;\n  line-height: 3rem;\n  width: 3rem;\n  height: 3rem; }\n\n.icons-vuestrap.icons-xxl {\n  font-size: 3.5rem;\n  line-height: 3.5rem;\n  width: 3.5rem;\n  height: 3.5rem; }\n\n.icons-vuestrap .icon {\n  fill: #818a91; }\n\n.icons-vuestrap.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-bg-fill .icon-background {\n  fill: #818a91; }\n\n.icons-vuestrap.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-bg-outline .icon-background {\n  fill: #818a91; }\n\n.icons-vuestrap.icons-bg-outline .text {\n  color: #818a91; }\n\n.icons-vuestrap.icons-primary .icon {\n  fill: #563d7c; }\n\n.icons-vuestrap.icons-primary.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-primary.icons-bg-fill .icon-background {\n  fill: #563d7c; }\n\n.icons-vuestrap.icons-primary.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-primary.icons-bg-outline .icon-background {\n  fill: #563d7c; }\n\n.icons-vuestrap.icons-primary.icons-bg-outline .text {\n  color: #563d7c; }\n\n.icons-vuestrap.icons-info .icon {\n  fill: #5bc0de; }\n\n.icons-vuestrap.icons-info.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-info.icons-bg-fill .icon-background {\n  fill: #5bc0de; }\n\n.icons-vuestrap.icons-info.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-info.icons-bg-outline .icon-background {\n  fill: #5bc0de; }\n\n.icons-vuestrap.icons-info.icons-bg-outline .text {\n  color: #5bc0de; }\n\n.icons-vuestrap.icons-success .icon {\n  fill: #42b983; }\n\n.icons-vuestrap.icons-success.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-success.icons-bg-fill .icon-background {\n  fill: #42b983; }\n\n.icons-vuestrap.icons-success.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-success.icons-bg-outline .icon-background {\n  fill: #42b983; }\n\n.icons-vuestrap.icons-success.icons-bg-outline .text {\n  color: #42b983; }\n\n.icons-vuestrap.icons-warning .icon {\n  fill: #f0ad4e; }\n\n.icons-vuestrap.icons-warning.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-warning.icons-bg-fill .icon-background {\n  fill: #f0ad4e; }\n\n.icons-vuestrap.icons-warning.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-warning.icons-bg-outline .icon-background {\n  fill: #f0ad4e; }\n\n.icons-vuestrap.icons-warning.icons-bg-outline .text {\n  color: #f0ad4e; }\n\n.icons-vuestrap.icons-danger .icon {\n  fill: #d9534f; }\n\n.icons-vuestrap.icons-danger.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-danger.icons-bg-fill .icon-background {\n  fill: #d9534f; }\n\n.icons-vuestrap.icons-danger.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-danger.icons-bg-outline .icon-background {\n  fill: #d9534f; }\n\n.icons-vuestrap.icons-danger.icons-bg-outline .text {\n  color: #d9534f; }\n\n.icons-vuestrap.icons-dark .icon {\n  fill: #000; }\n\n.icons-vuestrap.icons-dark.icons-bg-fill .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-dark.icons-bg-fill .icon-background {\n  fill: #000; }\n\n.icons-vuestrap.icons-dark.icons-bg-fill .text {\n  color: #fff; }\n\n.icons-vuestrap.icons-dark.icons-bg-outline .icon-background {\n  fill: #000; }\n\n.icons-vuestrap.icons-dark.icons-bg-outline .text {\n  color: #000; }\n\n.icons-vuestrap.icons-light .icon {\n  fill: #fff; }\n\n.icons-vuestrap.icons-light.icons-bg-fill .icon {\n  fill: #000; }\n\n.icons-vuestrap.icons-light.icons-bg-fill .icon-background {\n  fill: #fff; }\n\n.icons-vuestrap.icons-light.icons-bg-fill .text {\n  color: #000; }\n\n.icons-vuestrap.icons-light.icons-bg-outline .icon-background {\n  fill: #fff; }\n\n.icons-vuestrap.icons-light.icons-bg-outline .text {\n  color: #fff; }\n\n.btn.disabled svg {\n  opacity: 0.5; }\n\n.btn:hover svg {\n  fill: #fff; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<span class=\"icons icons-vuestrap {{iconsSize}} {{iconsVariant}} {{iconsBackground}} {{iconsAlign}}\" aria-hidden=\"true\">\r\n\t<span v-if=\"name\">\r\n\t\t<svg role=\"img\" class=\"icon\">\r\n\t\t\t<use v-bind:xlink:href=\"path + '#' + name\"></use>\r\n\t\t</svg>\r\n\t</span>\r\n\t<span v-if=\"background\">\r\n\t\t<svg role=\"img\" class=\"icon-background\">\r\n\t\t\t<use v-bind:xlink:href=\"path + '#' + background\"></use>\r\n\t\t</svg>\r\n\t</span>\r\n\t<span class=\"text\" v-show=\"text.length\">\r\n\t\t<span><slot>{{text}}</slot></span>\r\n\t</span>\r\n</span>";

/***/ },
/* 7 */
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