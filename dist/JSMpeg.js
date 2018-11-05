/*!
 * jsmpeg-player v1.3.2
 * Homepage: https://github.com/cycdpo/jsmpeg-player#readme
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JSMpeg"] = factory();
	else
		root["JSMpeg"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./static/theme/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/sass-loader/lib/loader.js??ref--5-2!./static/theme/style.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".static-theme-style__canvas,\n.static-theme-style__poster, .static-theme-style__unmuteButton, .static-theme-style__playButton, .static-theme-style__unmuteButtonSvg {\n  position: absolute;\n  z-index: 1;\n}\n\n.static-theme-style__canvas,\n.static-theme-style__poster, .static-theme-style__unmuteButton {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.static-theme-style__playButton {\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.static-theme-style__container {\n  position: relative;\n  width: 100%;\n  min-width: 80px;\n  height: 0;\n}\n\n.static-theme-style__canvas,\n.static-theme-style__poster {\n  display: block;\n}\n\n.static-theme-style__playButton, .static-theme-style__unmuteButton {\n  opacity: .7;\n  cursor: pointer;\n}\n\n.static-theme-style__playButton, .static-theme-style__playButtonSvg {\n  max-width: 60px;\n  max-height: 60px;\n}\n\n.static-theme-style__playButton {\n  z-index: 2;\n}\n\n.static-theme-style__playButtonSvg {\n  fill: #fff;\n}\n\n.static-theme-style__unmuteButton {\n  z-index: 2;\n}\n\n.static-theme-style__unmuteButtonSvg {\n  bottom: 15px;\n  right: 15px;\n  width: 40px;\n  height: 40px;\n  fill: #fff;\n}\n", ""]);

// exports
exports.locals = {
	"canvas": "static-theme-style__canvas",
	"poster": "static-theme-style__poster",
	"unmuteButton": "static-theme-style__unmuteButton",
	"playButton": "static-theme-style__playButton",
	"unmuteButtonSvg": "static-theme-style__unmuteButtonSvg",
	"container": "static-theme-style__container",
	"playButtonSvg": "static-theme-style__playButtonSvg"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/player */ "./src/lib/player.js");
/* harmony import */ var _lib_video_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/video-element */ "./src/lib/video-element.js");
/* harmony import */ var _lib_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/buffer */ "./src/lib/buffer.js");
/* harmony import */ var _lib_ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ajax */ "./src/lib/ajax.js");
/* harmony import */ var _lib_ajax_progressive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/ajax-progressive */ "./src/lib/ajax-progressive.js");
/* harmony import */ var _lib_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/websocket */ "./src/lib/websocket.js");
/* harmony import */ var _lib_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/ts */ "./src/lib/ts.js");
/* harmony import */ var _lib_decoder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/decoder */ "./src/lib/decoder.js");
/* harmony import */ var _lib_mpeg1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/mpeg1 */ "./src/lib/mpeg1.js");
/* harmony import */ var _lib_mpeg1_wasm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/mpeg1-wasm */ "./src/lib/mpeg1-wasm.js");
/* harmony import */ var _lib_mp2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/mp2 */ "./src/lib/mp2.js");
/* harmony import */ var _lib_mp2_wasm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/mp2-wasm */ "./src/lib/mp2-wasm.js");
/* harmony import */ var _lib_webgl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/webgl */ "./src/lib/webgl.js");
/* harmony import */ var _lib_canvas2d__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/canvas2d */ "./src/lib/canvas2d.js");
/* harmony import */ var _lib_webaudio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/webaudio */ "./src/lib/webaudio.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _lib_wasm_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/wasm-module */ "./src/lib/wasm-module.js");
/* harmony import */ var _lib_wasm_WASM_BINARY__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/wasm/WASM_BINARY */ "./src/lib/wasm/WASM_BINARY.js");
/**
 * According to jsmpeg project(https://github.com/phoboslab/jsmpeg)
 */
// ES6 modular

















 // This sets up the JSMpeg "Namespace". The object is empty apart from the Now()
// utility function and the automatic CreateVideoElements() after DOMReady.

var JSMpeg = {
  // The Player sets up the connections between source, demuxer, decoders,
  // renderer and audio output. It ties everything together, is responsible
  // of scheduling decoding and provides some convenience methods for
  // external users.
  Player: _lib_player__WEBPACK_IMPORTED_MODULE_0__["default"],
  // A Video Element wraps the Player, shows HTML controls to start/pause
  // the video and handles Audio unlocking on iOS. VideoElements can be
  // created directly in HTML using the <div class="jsmpeg"/> tag.
  VideoElement: _lib_video_element__WEBPACK_IMPORTED_MODULE_1__["default"],
  // The BitBuffer wraps a Uint8Array and allows reading an arbitrary number
  // of bits at a time. On writing, the BitBuffer either expands its
  // internal buffer (for static files) or deletes old data (for streaming).
  BitBuffer: _lib_buffer__WEBPACK_IMPORTED_MODULE_2__["default"],
  // A Source provides raw data from HTTP, a WebSocket connection or any
  // other mean. Sources must support the following API:
  //   .connect(destinationNode)
  //   .write(buffer)
  //   .start() - start reading
  //   .resume(headroom) - continue reading; headroom to play pos in seconds
  //   .established - boolean, true after connection is established
  //   .completed - boolean, true if the source is completely loaded
  //   .progress - float 0-1
  Source: {
    Ajax: _lib_ajax__WEBPACK_IMPORTED_MODULE_3__["default"],
    AjaxProgressive: _lib_ajax_progressive__WEBPACK_IMPORTED_MODULE_4__["default"],
    WebSocket: _lib_websocket__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  // A Demuxer may sit between a Source and a Decoder. It separates the
  // incoming raw data into Video, Audio and other Streams. API:
  //   .connect(streamId, destinationNode)
  //   .write(buffer)
  //   .currentTime – float, in seconds
  //   .startTime - float, in seconds
  Demuxer: {
    TS: _lib_ts__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  // A Decoder accepts an incoming Stream of raw Audio or Video data, buffers
  // it and upon `.decode()` decodes a single frame of data. Video decoders
  // call `destinationNode.render(Y, Cr, CB)` with the decoded pixel data;
  // Audio decoders call `destinationNode.play(left, right)` with the decoded
  // PCM data. API:
  //   .connect(destinationNode)
  //   .write(pts, buffer)
  //   .decode()
  //   .seek(time)
  //   .currentTime - float, in seconds
  //   .startTime - float, in seconds
  Decoder: {
    Base: _lib_decoder__WEBPACK_IMPORTED_MODULE_7__["default"],
    MPEG1Video: _lib_mpeg1__WEBPACK_IMPORTED_MODULE_8__["default"],
    MPEG1VideoWASM: _lib_mpeg1_wasm__WEBPACK_IMPORTED_MODULE_9__["default"],
    MP2Audio: _lib_mp2__WEBPACK_IMPORTED_MODULE_10__["default"],
    MP2AudioWASM: _lib_mp2_wasm__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  // A Renderer accepts raw YCrCb data in 3 separate buffers via the render()
  // method. Renderers typically convert the data into the RGBA color space
  // and draw it on a Canvas, but other output - such as writing PNGs - would
  // be conceivable. API:
  //   .render(y, cr, cb) - pixel data as Uint8Arrays
  //   .enabled - wether the renderer does anything upon receiving data
  Renderer: {
    WebGL: _lib_webgl__WEBPACK_IMPORTED_MODULE_12__["default"],
    Canvas2D: _lib_canvas2d__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  // Audio Outputs accept raw Stero PCM data in 2 separate buffers via the
  // play() method. Outputs typically play the audio on the user's device.
  // API:
  //   .play(sampleRate, left, right) - rate in herz; PCM data as Uint8Arrays
  //   .stop()
  //   .enqueuedTime - float, in seconds
  //   .enabled - wether the output does anything upon receiving data
  AudioOutput: {
    WebAudio: _lib_webaudio__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  WASMModule: _lib_wasm_module__WEBPACK_IMPORTED_MODULE_16__["default"],
  // functions
  Now: _utils__WEBPACK_IMPORTED_MODULE_15__["Now"],
  CreateVideoElements: _utils__WEBPACK_IMPORTED_MODULE_15__["CreateVideoElements"],
  Fill: _utils__WEBPACK_IMPORTED_MODULE_15__["Fill"],
  Base64ToArrayBuffer: _utils__WEBPACK_IMPORTED_MODULE_15__["Base64ToArrayBuffer"],
  // The build process may append `JSMpeg.WASM_BINARY_INLINED = base64data;`
  // to the minified source.
  // If this property is present, jsmpeg will use the inlined binary data
  // instead of trying to load a jsmpeg.wasm file via Ajax.
  WASM_BINARY_INLINED: _lib_wasm_WASM_BINARY__WEBPACK_IMPORTED_MODULE_17__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (JSMpeg);

/***/ }),

/***/ "./src/lib/ajax-progressive.js":
/*!*************************************!*\
  !*** ./src/lib/ajax-progressive.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


var AjaxProgressiveSource = function AjaxProgressiveSource(url, options) {
  this.url = url;
  this.destination = null;
  this.request = null;
  this.completed = false;
  this.established = false;
  this.progress = 0;
  this.fileSize = 0;
  this.loadedSize = 0;
  this.chunkSize = options.chunkSize || 1024 * 1024;
  this.isLoading = false;
  this.loadStartTime = 0;
  this.throttled = options.throttled !== false;
  this.aborted = false;
};

AjaxProgressiveSource.prototype.connect = function (destination) {
  this.destination = destination;
};

AjaxProgressiveSource.prototype.start = function () {
  this.request = new XMLHttpRequest();

  this.request.onreadystatechange = function () {
    if (this.request.readyState === this.request.DONE) {
      this.fileSize = parseInt(this.request.getResponseHeader("Content-Length"));
      this.loadNextChunk();
    }
  }.bind(this);

  this.request.onprogress = this.onProgress.bind(this);
  this.request.open('HEAD', this.url);
  this.request.send();
};

AjaxProgressiveSource.prototype.resume = function (secondsHeadroom) {
  if (this.isLoading || !this.throttled) {
    return;
  } // Guess the worst case loading time with lots of safety margin. This is
  // somewhat arbitrary...


  var worstCaseLoadingTime = this.loadTime * 8 + 2;

  if (worstCaseLoadingTime > secondsHeadroom) {
    this.loadNextChunk();
  }
};

AjaxProgressiveSource.prototype.destroy = function () {
  this.request.abort();
  this.aborted = true;
};

AjaxProgressiveSource.prototype.loadNextChunk = function () {
  var start = this.loadedSize,
      end = Math.min(this.loadedSize + this.chunkSize - 1, this.fileSize - 1);

  if (start >= this.fileSize || this.aborted) {
    this.completed = true;
    return;
  }

  this.isLoading = true;
  this.loadStartTime = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["Now"])();
  this.request = new XMLHttpRequest();

  this.request.onreadystatechange = function () {
    if (this.request.readyState === this.request.DONE && this.request.status >= 200 && this.request.status < 300) {
      this.onChunkLoad(this.request.response);
    } else if (this.request.readyState === this.request.DONE) {
      // Retry?
      if (this.loadFails++ < 3) {
        this.loadNextChunk();
      }
    }
  }.bind(this);

  if (start === 0) {
    this.request.onprogress = this.onProgress.bind(this);
  }

  this.request.open('GET', this.url + '?' + start + "-" + end);
  this.request.setRequestHeader("Range", "bytes=" + start + "-" + end);
  this.request.responseType = "arraybuffer";
  this.request.send();
};

AjaxProgressiveSource.prototype.onProgress = function (ev) {
  this.progress = ev.loaded / ev.total;
};

AjaxProgressiveSource.prototype.onChunkLoad = function (data) {
  this.established = true;
  this.progress = 1;
  this.loadedSize += data.byteLength;
  this.loadFails = 0;
  this.isLoading = false;

  if (this.destination) {
    this.destination.write(data);
  }

  this.loadTime = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["Now"])() - this.loadStartTime;

  if (!this.throttled) {
    this.loadNextChunk();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (AjaxProgressiveSource);

/***/ }),

/***/ "./src/lib/ajax.js":
/*!*************************!*\
  !*** ./src/lib/ajax.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AjaxSource = function AjaxSource(url, options) {
  this.url = url;
  this.destination = null;
  this.request = null;
  this.completed = false;
  this.established = false;
  this.progress = 0;
};

AjaxSource.prototype.connect = function (destination) {
  this.destination = destination;
};

AjaxSource.prototype.start = function () {
  this.request = new XMLHttpRequest();

  this.request.onreadystatechange = function () {
    if (this.request.readyState === this.request.DONE && this.request.status === 200) {
      this.onLoad(this.request.response);
    }
  }.bind(this);

  this.request.onprogress = this.onProgress.bind(this);
  this.request.open('GET', this.url);
  this.request.responseType = "arraybuffer";
  this.request.send();
};

AjaxSource.prototype.resume = function (secondsHeadroom) {// Nothing to do here
};

AjaxSource.prototype.destroy = function () {
  this.request.abort();
};

AjaxSource.prototype.onProgress = function (ev) {
  this.progress = ev.loaded / ev.total;
};

AjaxSource.prototype.onLoad = function (data) {
  this.established = true;
  this.completed = true;
  this.progress = 1;

  if (this.destination) {
    this.destination.write(data);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (AjaxSource);

/***/ }),

/***/ "./src/lib/buffer.js":
/*!***************************!*\
  !*** ./src/lib/buffer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BitBuffer = function BitBuffer(bufferOrLength, mode) {
  if (typeof bufferOrLength === 'object') {
    this.bytes = bufferOrLength instanceof Uint8Array ? bufferOrLength : new Uint8Array(bufferOrLength);
    this.byteLength = this.bytes.length;
  } else {
    this.bytes = new Uint8Array(bufferOrLength || 1024 * 1024);
    this.byteLength = 0;
  }

  this.mode = mode || BitBuffer.MODE.EXPAND;
  this.index = 0;
};

BitBuffer.prototype.resize = function (size) {
  var newBytes = new Uint8Array(size);

  if (this.byteLength !== 0) {
    this.byteLength = Math.min(this.byteLength, size);
    newBytes.set(this.bytes, 0, this.byteLength);
  }

  this.bytes = newBytes;
  this.index = Math.min(this.index, this.byteLength << 3);
};

BitBuffer.prototype.evict = function (sizeNeeded) {
  var bytePos = this.index >> 3,
      available = this.bytes.length - this.byteLength; // If the current index is the write position, we can simply reset both
  // to 0. Also reset (and throw away yet unread data) if we won't be able
  // to fit the new data in even after a normal eviction.

  if (this.index === this.byteLength << 3 || sizeNeeded > available + bytePos // emergency evac
  ) {
      this.byteLength = 0;
      this.index = 0;
      return;
    } else if (bytePos === 0) {
    // Nothing read yet - we can't evict anything
    return;
  } // Some browsers don't support copyWithin() yet - we may have to do
  // it manually using set and a subarray


  if (this.bytes.copyWithin) {
    this.bytes.copyWithin(0, bytePos, this.byteLength);
  } else {
    this.bytes.set(this.bytes.subarray(bytePos, this.byteLength));
  }

  this.byteLength = this.byteLength - bytePos;
  this.index -= bytePos << 3;
};

BitBuffer.prototype.write = function (buffers) {
  var isArrayOfBuffers = typeof buffers[0] === 'object';
  var totalLength = 0,
      available = this.bytes.length - this.byteLength; // Calculate total byte length

  if (isArrayOfBuffers) {
    totalLength = 0;

    for (var i = 0; i < buffers.length; i++) {
      totalLength += buffers[i].byteLength;
    }
  } else {
    totalLength = buffers.byteLength;
  } // Do we need to resize or evict?


  if (totalLength > available) {
    if (this.mode === BitBuffer.MODE.EXPAND) {
      var newSize = Math.max(this.bytes.length * 2, totalLength - available);
      this.resize(newSize);
    } else {
      this.evict(totalLength);
    }
  }

  if (isArrayOfBuffers) {
    for (var _i = 0; _i < buffers.length; _i++) {
      this.appendSingleBuffer(buffers[_i]);
    }
  } else {
    this.appendSingleBuffer(buffers);
  }

  return totalLength;
};

BitBuffer.prototype.appendSingleBuffer = function (buffer) {
  buffer = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  this.bytes.set(buffer, this.byteLength);
  this.byteLength += buffer.length;
};

BitBuffer.prototype.findNextStartCode = function () {
  for (var i = this.index + 7 >> 3; i < this.byteLength; i++) {
    if (this.bytes[i] == 0x00 && this.bytes[i + 1] == 0x00 && this.bytes[i + 2] == 0x01) {
      this.index = i + 4 << 3;
      return this.bytes[i + 3];
    }
  }

  this.index = this.byteLength << 3;
  return -1;
};

BitBuffer.prototype.findStartCode = function (code) {
  var current = 0;

  while (true) {
    current = this.findNextStartCode();

    if (current === code || current === -1) {
      return current;
    }
  }

  return -1;
};

BitBuffer.prototype.nextBytesAreStartCode = function () {
  var i = this.index + 7 >> 3;
  return i >= this.byteLength || this.bytes[i] == 0x00 && this.bytes[i + 1] == 0x00 && this.bytes[i + 2] == 0x01;
};

BitBuffer.prototype.peek = function (count) {
  var offset = this.index;
  var value = 0;

  while (count) {
    var currentByte = this.bytes[offset >> 3],
        remaining = 8 - (offset & 7),
        // remaining bits in byte
    read = remaining < count ? remaining : count,
        // bits in this run
    shift = remaining - read,
        mask = 0xff >> 8 - read;
    value = value << read | (currentByte & mask << shift) >> shift;
    offset += read;
    count -= read;
  }

  return value;
};

BitBuffer.prototype.read = function (count) {
  var value = this.peek(count);
  this.index += count;
  return value;
};

BitBuffer.prototype.skip = function (count) {
  return this.index += count;
};

BitBuffer.prototype.rewind = function (count) {
  this.index = Math.max(this.index - count, 0);
};

BitBuffer.prototype.has = function (count) {
  return (this.byteLength << 3) - this.index >= count;
};

BitBuffer.MODE = {
  EVICT: 1,
  EXPAND: 2
};
/* harmony default export */ __webpack_exports__["default"] = (BitBuffer);

/***/ }),

/***/ "./src/lib/canvas2d.js":
/*!*****************************!*\
  !*** ./src/lib/canvas2d.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


var CanvasRenderer = function CanvasRenderer(options) {
  this.canvas = options.canvas || document.createElement('canvas');
  this.width = this.canvas.width;
  this.height = this.canvas.height;
  this.enabled = true;
  this.context = this.canvas.getContext('2d');
};

CanvasRenderer.prototype.destroy = function () {// Nothing to do here
};

CanvasRenderer.prototype.resize = function (width, height) {
  this.width = width | 0;
  this.height = height | 0;
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.imageData = this.context.getImageData(0, 0, this.width, this.height);
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["Fill"])(this.imageData.data, 255);
};

CanvasRenderer.prototype.renderProgress = function (progress) {
  var w = this.canvas.width,
      h = this.canvas.height,
      ctx = this.context;
  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, h - h * progress, w, h * progress);
};

CanvasRenderer.prototype.render = function (y, cb, cr) {
  this.YCbCrToRGBA(y, cb, cr, this.imageData.data);
  this.context.putImageData(this.imageData, 0, 0);
};

CanvasRenderer.prototype.YCbCrToRGBA = function (y, cb, cr, rgba) {
  if (!this.enabled) {
    return;
  } // Chroma values are the same for each block of 4 pixels, so we proccess
  // 2 lines at a time, 2 neighboring pixels each.
  // I wish we could use 32bit writes to the RGBA buffer instead of writing
  // each byte separately, but we need the automatic clamping of the RGBA
  // buffer.


  var w = this.width + 15 >> 4 << 4,
      w2 = w >> 1;
  var yIndex1 = 0,
      yIndex2 = w,
      yNext2Lines = w + (w - this.width);
  var cIndex = 0,
      cNextLine = w2 - (this.width >> 1);
  var rgbaIndex1 = 0,
      rgbaIndex2 = this.width * 4,
      rgbaNext2Lines = this.width * 4;
  var cols = this.width >> 1,
      rows = this.height >> 1;
  var ccb, ccr, r, g, b;

  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      ccb = cb[cIndex];
      ccr = cr[cIndex];
      cIndex++;
      r = ccb + (ccb * 103 >> 8) - 179;
      g = (ccr * 88 >> 8) - 44 + (ccb * 183 >> 8) - 91;
      b = ccr + (ccr * 198 >> 8) - 227; // Line 1

      var y1 = y[yIndex1++];
      var y2 = y[yIndex1++];
      rgba[rgbaIndex1] = y1 + r;
      rgba[rgbaIndex1 + 1] = y1 - g;
      rgba[rgbaIndex1 + 2] = y1 + b;
      rgba[rgbaIndex1 + 4] = y2 + r;
      rgba[rgbaIndex1 + 5] = y2 - g;
      rgba[rgbaIndex1 + 6] = y2 + b;
      rgbaIndex1 += 8; // Line 2

      var y3 = y[yIndex2++];
      var y4 = y[yIndex2++];
      rgba[rgbaIndex2] = y3 + r;
      rgba[rgbaIndex2 + 1] = y3 - g;
      rgba[rgbaIndex2 + 2] = y3 + b;
      rgba[rgbaIndex2 + 4] = y4 + r;
      rgba[rgbaIndex2 + 5] = y4 - g;
      rgba[rgbaIndex2 + 6] = y4 + b;
      rgbaIndex2 += 8;
    }

    yIndex1 += yNext2Lines;
    yIndex2 += yNext2Lines;
    rgbaIndex1 += rgbaNext2Lines;
    rgbaIndex2 += rgbaNext2Lines;
    cIndex += cNextLine;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (CanvasRenderer);

/***/ }),

/***/ "./src/lib/decoder.js":
/*!****************************!*\
  !*** ./src/lib/decoder.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BaseDecoder = function BaseDecoder(options) {
  this.destination = null;
  this.canPlay = false;
  this.collectTimestamps = !options.streaming;
  this.bytesWritten = 0;
  this.timestamps = [];
  this.timestampIndex = 0;
  this.startTime = 0;
  this.decodedTime = 0;
  Object.defineProperty(this, 'currentTime', {
    get: this.getCurrentTime
  });
};

BaseDecoder.prototype.destroy = function () {};

BaseDecoder.prototype.connect = function (destination) {
  this.destination = destination;
};

BaseDecoder.prototype.bufferGetIndex = function () {
  return this.bits.index;
};

BaseDecoder.prototype.bufferSetIndex = function (index) {
  this.bits.index = index;
};

BaseDecoder.prototype.bufferWrite = function (buffers) {
  return this.bits.write(buffers);
};

BaseDecoder.prototype.write = function (pts, buffers) {
  if (this.collectTimestamps) {
    if (this.timestamps.length === 0) {
      this.startTime = pts;
      this.decodedTime = pts;
    }

    this.timestamps.push({
      index: this.bytesWritten << 3,
      time: pts
    });
  }

  this.bytesWritten += this.bufferWrite(buffers);
  this.canPlay = true;
};

BaseDecoder.prototype.seek = function (time) {
  if (!this.collectTimestamps) {
    return;
  }

  this.timestampIndex = 0;

  for (var i = 0; i < this.timestamps.length; i++) {
    if (this.timestamps[i].time > time) {
      break;
    }

    this.timestampIndex = i;
  }

  var ts = this.timestamps[this.timestampIndex];

  if (ts) {
    this.bufferSetIndex(ts.index);
    this.decodedTime = ts.time;
  } else {
    this.bits.index = 0;
    this.decodedTime = this.startTime;
  }
};

BaseDecoder.prototype.decode = function () {
  this.advanceDecodedTime(0);
};

BaseDecoder.prototype.advanceDecodedTime = function (seconds) {
  if (this.collectTimestamps) {
    var newTimestampIndex = -1;
    var currentIndex = this.bufferGetIndex();

    for (var i = this.timestampIndex; i < this.timestamps.length; i++) {
      if (this.timestamps[i].index > currentIndex) {
        break;
      }

      newTimestampIndex = i;
    } // Did we find a new PTS, different from the last? If so, we don't have
    // to advance the decoded time manually and can instead sync it exactly
    // to the PTS.


    if (newTimestampIndex !== -1 && newTimestampIndex !== this.timestampIndex) {
      this.timestampIndex = newTimestampIndex;
      this.decodedTime = this.timestamps[this.timestampIndex].time;
      return;
    }
  }

  this.decodedTime += seconds;
};

BaseDecoder.prototype.getCurrentTime = function () {
  return this.decodedTime;
};

/* harmony default export */ __webpack_exports__["default"] = (BaseDecoder);

/***/ }),

/***/ "./src/lib/mp2-wasm.js":
/*!*****************************!*\
  !*** ./src/lib/mp2-wasm.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./src/lib/decoder.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer */ "./src/lib/buffer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
// Based on kjmp2 by Martin J. Fiedler
// http://keyj.emphy.de/kjmp2/




var MP2WASM = function MP2WASM(options) {
  _decoder__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, options);
  this.onDecodeCallback = options.onAudioDecode;
  this.module = options.wasmModule;
  this.bufferSize = options.audioBufferSize || 128 * 1024;
  this.bufferMode = options.streaming ? _buffer__WEBPACK_IMPORTED_MODULE_1__["default"].MODE.EVICT : _buffer__WEBPACK_IMPORTED_MODULE_1__["default"].MODE.EXPAND;
  this.sampleRate = 0;
};

MP2WASM.prototype = Object.create(_decoder__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
MP2WASM.prototype.constructor = MP2WASM;

MP2WASM.prototype.initializeWasmDecoder = function () {
  if (!this.module.instance) {
    console.warn('JSMpeg: WASM module not compiled yet');
    return;
  }

  this.instance = this.module.instance;
  this.functions = this.module.instance.exports;
  this.decoder = this.functions._mp2_decoder_create(this.bufferSize, this.bufferMode);
};

MP2WASM.prototype.destroy = function () {
  if (!this.decoder) {
    return;
  }

  this.functions._mp2_decoder_destroy(this.decoder);
};

MP2WASM.prototype.bufferGetIndex = function () {
  if (!this.decoder) {
    return;
  }

  return this.functions._mp2_decoder_get_index(this.decoder);
};

MP2WASM.prototype.bufferSetIndex = function (index) {
  if (!this.decoder) {
    return;
  }

  this.functions._mp2_decoder_set_index(this.decoder, index);
};

MP2WASM.prototype.bufferWrite = function (buffers) {
  if (!this.decoder) {
    this.initializeWasmDecoder();
  }

  var totalLength = 0;

  for (var i = 0; i < buffers.length; i++) {
    totalLength += buffers[i].length;
  }

  var ptr = this.functions._mp2_decoder_get_write_ptr(this.decoder, totalLength);

  for (var _i = 0; _i < buffers.length; _i++) {
    this.instance.heapU8.set(buffers[_i], ptr);
    ptr += buffers[_i].length;
  }

  this.functions._mp2_decoder_did_write(this.decoder, totalLength);

  return totalLength;
};

MP2WASM.prototype.decode = function () {
  var startTime = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["Now"])();

  if (!this.decoder) {
    return false;
  }

  var decodedBytes = this.functions._mp2_decoder_decode(this.decoder);

  if (decodedBytes === 0) {
    return false;
  }

  if (!this.sampleRate) {
    this.sampleRate = this.functions._mp2_decoder_get_sample_rate(this.decoder);
  }

  if (this.destination) {
    // Create a Float32 View into the modules output channel data
    var leftPtr = this.functions._mp2_decoder_get_left_channel_ptr(this.decoder),
        rightPtr = this.functions._mp2_decoder_get_right_channel_ptr(this.decoder);

    var leftOffset = leftPtr / Float32Array.BYTES_PER_ELEMENT,
        rightOffset = rightPtr / Float32Array.BYTES_PER_ELEMENT;
    var left = this.instance.heapF32.subarray(leftOffset, leftOffset + MP2WASM.SAMPLES_PER_FRAME),
        right = this.instance.heapF32.subarray(rightOffset, rightOffset + MP2WASM.SAMPLES_PER_FRAME);
    this.destination.play(this.sampleRate, left, right);
  }

  this.advanceDecodedTime(MP2WASM.SAMPLES_PER_FRAME / this.sampleRate);
  var elapsedTime = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["Now"])() - startTime;

  if (this.onDecodeCallback) {
    this.onDecodeCallback(this, elapsedTime);
  }

  return true;
};

MP2WASM.prototype.getCurrentTime = function () {
  var enqueuedTime = this.destination ? this.destination.enqueuedTime : 0;
  return this.decodedTime - enqueuedTime;
};

MP2WASM.SAMPLES_PER_FRAME = 1152;
/* harmony default export */ __webpack_exports__["default"] = (MP2WASM);

/***/ }),

/***/ "./src/lib/mp2.js":
/*!************************!*\
  !*** ./src/lib/mp2.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./src/lib/decoder.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer */ "./src/lib/buffer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
// Based on kjmp2 by Martin J. Fiedler
// http://keyj.emphy.de/kjmp2/




var MP2 = function MP2(options) {
  _decoder__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, options);
  this.onDecodeCallback = options.onAudioDecode;
  var bufferSize = options.audioBufferSize || 128 * 1024;
  var bufferMode = options.streaming ? _buffer__WEBPACK_IMPORTED_MODULE_1__["default"].MODE.EVICT : _buffer__WEBPACK_IMPORTED_MODULE_1__["default"].MODE.EXPAND;
  this.bits = new _buffer__WEBPACK_IMPORTED_MODULE_1__["default"](bufferSize, bufferMode);
  this.left = new Float32Array(1152);
  this.right = new Float32Array(1152);
  this.sampleRate = 44100;
  this.D = new Float32Array(1024);
  this.D.set(MP2.SYNTHESIS_WINDOW, 0);
  this.D.set(MP2.SYNTHESIS_WINDOW, 512);
  this.V = new Float32Array(1024);
  this.U = new Int32Array(32);
  this.VPos = 0;
  this.allocation = [new Array(32), new Array(32)];
  this.scaleFactorInfo = [new Uint8Array(32), new Uint8Array(32)];
  this.scaleFactor = [new Array(32), new Array(32)];
  this.sample = [new Array(32), new Array(32)];

  for (var j = 0; j < 2; j++) {
    for (var i = 0; i < 32; i++) {
      this.scaleFactor[j][i] = [0, 0, 0];
      this.sample[j][i] = [0, 0, 0];
    }
  }
};

MP2.prototype = Object.create(_decoder__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
MP2.prototype.constructor = MP2;

MP2.prototype.decode = function () {
  var startTime = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["Now"])();
  var pos = this.bits.index >> 3;

  if (pos >= this.bits.byteLength) {
    return false;
  }

  var decoded = this.decodeFrame(this.left, this.right);
  this.bits.index = pos + decoded << 3;

  if (!decoded) {
    return false;
  }

  if (this.destination) {
    this.destination.play(this.sampleRate, this.left, this.right);
  }

  this.advanceDecodedTime(this.left.length / this.sampleRate);
  var elapsedTime = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["Now"])() - startTime;

  if (this.onDecodeCallback) {
    this.onDecodeCallback(this, elapsedTime);
  }

  return true;
};

MP2.prototype.getCurrentTime = function () {
  var enqueuedTime = this.destination ? this.destination.enqueuedTime : 0;
  return this.decodedTime - enqueuedTime;
};

MP2.prototype.decodeFrame = function (left, right) {
  // Check for valid header: syncword OK, MPEG-Audio Layer 2
  var sync = this.bits.read(11),
      version = this.bits.read(2),
      layer = this.bits.read(2),
      hasCRC = !this.bits.read(1);

  if (sync !== MP2.FRAME_SYNC || version !== MP2.VERSION.MPEG_1 || layer !== MP2.LAYER.II) {
    return 0; // Invalid header or unsupported version
  }

  var bitrateIndex = this.bits.read(4) - 1;

  if (bitrateIndex > 13) {
    return 0; // Invalid bit rate or 'free format'
  }

  var sampleRateIndex = this.bits.read(2);
  var sampleRate = MP2.SAMPLE_RATE[sampleRateIndex];

  if (sampleRateIndex === 3) {
    return 0; // Invalid sample rate
  }

  if (version === MP2.VERSION.MPEG_2) {
    sampleRateIndex += 4;
    bitrateIndex += 14;
  }

  var padding = this.bits.read(1),
      privat = this.bits.read(1),
      mode = this.bits.read(2); // Parse the mode_extension, set up the stereo bound

  var bound = 0;

  if (mode === MP2.MODE.JOINT_STEREO) {
    bound = this.bits.read(2) + 1 << 2;
  } else {
    this.bits.skip(2);
    bound = mode === MP2.MODE.MONO ? 0 : 32;
  } // Discard the last 4 bits of the header and the CRC value, if present


  this.bits.skip(4);

  if (hasCRC) {
    this.bits.skip(16);
  } // Compute the frame size


  var bitrate = MP2.BIT_RATE[bitrateIndex];
  sampleRate = MP2.SAMPLE_RATE[sampleRateIndex];
  var frameSize = 144000 * bitrate / sampleRate + padding | 0; // Prepare the quantizer table lookups

  var tab3 = 0;
  var sblimit = 0;

  if (version === MP2.VERSION.MPEG_2) {
    // MPEG-2 (LSR)
    tab3 = 2;
    sblimit = 30;
  } else {
    // MPEG-1
    var tab1 = mode === MP2.MODE.MONO ? 0 : 1;
    var tab2 = MP2.QUANT_LUT_STEP_1[tab1][bitrateIndex];
    tab3 = MP2.QUANT_LUT_STEP_2[tab2][sampleRateIndex];
    sblimit = tab3 & 63;
    tab3 >>= 6;
  }

  if (bound > sblimit) {
    bound = sblimit;
  } // Read the allocation information


  for (var sb = 0; sb < bound; sb++) {
    this.allocation[0][sb] = this.readAllocation(sb, tab3);
    this.allocation[1][sb] = this.readAllocation(sb, tab3);
  }

  for (var _sb = bound; _sb < sblimit; _sb++) {
    this.allocation[0][_sb] = this.allocation[1][_sb] = this.readAllocation(_sb, tab3);
  } // Read scale factor selector information


  var channels = mode === MP2.MODE.MONO ? 1 : 2;

  for (var _sb2 = 0; _sb2 < sblimit; _sb2++) {
    for (var ch = 0; ch < channels; ch++) {
      if (this.allocation[ch][_sb2]) {
        this.scaleFactorInfo[ch][_sb2] = this.bits.read(2);
      }
    }

    if (mode === MP2.MODE.MONO) {
      this.scaleFactorInfo[1][_sb2] = this.scaleFactorInfo[0][_sb2];
    }
  } // Read scale factors


  for (var _sb3 = 0; _sb3 < sblimit; _sb3++) {
    for (var _ch = 0; _ch < channels; _ch++) {
      if (this.allocation[_ch][_sb3]) {
        var sf = this.scaleFactor[_ch][_sb3];

        switch (this.scaleFactorInfo[_ch][_sb3]) {
          case 0:
            sf[0] = this.bits.read(6);
            sf[1] = this.bits.read(6);
            sf[2] = this.bits.read(6);
            break;

          case 1:
            sf[0] = sf[1] = this.bits.read(6);
            sf[2] = this.bits.read(6);
            break;

          case 2:
            sf[0] = sf[1] = sf[2] = this.bits.read(6);
            break;

          case 3:
            sf[0] = this.bits.read(6);
            sf[1] = sf[2] = this.bits.read(6);
            break;
        }
      }
    }

    if (mode === MP2.MODE.MONO) {
      this.scaleFactor[1][_sb3][0] = this.scaleFactor[0][_sb3][0];
      this.scaleFactor[1][_sb3][1] = this.scaleFactor[0][_sb3][1];
      this.scaleFactor[1][_sb3][2] = this.scaleFactor[0][_sb3][2];
    }
  } // Coefficient input and reconstruction


  var outPos = 0;

  for (var part = 0; part < 3; part++) {
    for (var granule = 0; granule < 4; granule++) {
      // Read the samples
      for (var _sb4 = 0; _sb4 < bound; _sb4++) {
        this.readSamples(0, _sb4, part);
        this.readSamples(1, _sb4, part);
      }

      for (var _sb5 = bound; _sb5 < sblimit; _sb5++) {
        this.readSamples(0, _sb5, part);
        this.sample[1][_sb5][0] = this.sample[0][_sb5][0];
        this.sample[1][_sb5][1] = this.sample[0][_sb5][1];
        this.sample[1][_sb5][2] = this.sample[0][_sb5][2];
      }

      for (var _sb6 = sblimit; _sb6 < 32; _sb6++) {
        this.sample[0][_sb6][0] = 0;
        this.sample[0][_sb6][1] = 0;
        this.sample[0][_sb6][2] = 0;
        this.sample[1][_sb6][0] = 0;
        this.sample[1][_sb6][1] = 0;
        this.sample[1][_sb6][2] = 0;
      } // Synthesis loop


      for (var p = 0; p < 3; p++) {
        // Shifting step
        this.VPos = this.VPos - 64 & 1023;

        for (var _ch2 = 0; _ch2 < 2; _ch2++) {
          MP2.MatrixTransform(this.sample[_ch2], p, this.V, this.VPos); // Build U, windowing, calculate output

          Object(_utils__WEBPACK_IMPORTED_MODULE_2__["Fill"])(this.U, 0);
          var dIndex = 512 - (this.VPos >> 1);
          var vIndex = this.VPos % 128 >> 1;

          while (vIndex < 1024) {
            for (var i = 0; i < 32; ++i) {
              this.U[i] += this.D[dIndex++] * this.V[vIndex++];
            }

            vIndex += 128 - 32;
            dIndex += 64 - 32;
          }

          vIndex = 128 - 32 + 1024 - vIndex;
          dIndex -= 512 - 32;

          while (vIndex < 1024) {
            for (var _i = 0; _i < 32; ++_i) {
              this.U[_i] += this.D[dIndex++] * this.V[vIndex++];
            }

            vIndex += 128 - 32;
            dIndex += 64 - 32;
          } // Output samples


          var outChannel = _ch2 === 0 ? left : right;

          for (var j = 0; j < 32; j++) {
            outChannel[outPos + j] = this.U[j] / 2147418112;
          }
        } // End of synthesis channel loop


        outPos += 32;
      } // End of synthesis sub-block loop

    } // Decoding of the granule finished

  }

  this.sampleRate = sampleRate;
  return frameSize;
};

MP2.prototype.readAllocation = function (sb, tab3) {
  var tab4 = MP2.QUANT_LUT_STEP_3[tab3][sb];
  var qtab = MP2.QUANT_LUT_STEP4[tab4 & 15][this.bits.read(tab4 >> 4)];
  return qtab ? MP2.QUANT_TAB[qtab - 1] : 0;
};

MP2.prototype.readSamples = function (ch, sb, part) {
  var q = this.allocation[ch][sb],
      sf = this.scaleFactor[ch][sb][part],
      sample = this.sample[ch][sb],
      val = 0;

  if (!q) {
    // No bits allocated for this subband
    sample[0] = sample[1] = sample[2] = 0;
    return;
  } // Resolve scalefactor


  if (sf === 63) {
    sf = 0;
  } else {
    var shift = sf / 3 | 0;
    sf = MP2.SCALEFACTOR_BASE[sf % 3] + (1 << shift >> 1) >> shift;
  } // Decode samples


  var adj = q.levels;

  if (q.group) {
    // Decode grouped samples
    val = this.bits.read(q.bits);
    sample[0] = val % adj;
    val = val / adj | 0;
    sample[1] = val % adj;
    sample[2] = val / adj | 0;
  } else {
    // Decode direct samples
    sample[0] = this.bits.read(q.bits);
    sample[1] = this.bits.read(q.bits);
    sample[2] = this.bits.read(q.bits);
  } // Postmultiply samples


  var scale = 65536 / (adj + 1) | 0;
  adj = (adj + 1 >> 1) - 1;
  val = (adj - sample[0]) * scale;
  sample[0] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
  val = (adj - sample[1]) * scale;
  sample[1] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
  val = (adj - sample[2]) * scale;
  sample[2] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
};

MP2.MatrixTransform = function (s, ss, d, dp) {
  var t01, t02, t03, t04, t05, t06, t07, t08, t09, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33;
  t01 = s[0][ss] + s[31][ss];
  t02 = (s[0][ss] - s[31][ss]) * 0.500602998235;
  t03 = s[1][ss] + s[30][ss];
  t04 = (s[1][ss] - s[30][ss]) * 0.505470959898;
  t05 = s[2][ss] + s[29][ss];
  t06 = (s[2][ss] - s[29][ss]) * 0.515447309923;
  t07 = s[3][ss] + s[28][ss];
  t08 = (s[3][ss] - s[28][ss]) * 0.53104259109;
  t09 = s[4][ss] + s[27][ss];
  t10 = (s[4][ss] - s[27][ss]) * 0.553103896034;
  t11 = s[5][ss] + s[26][ss];
  t12 = (s[5][ss] - s[26][ss]) * 0.582934968206;
  t13 = s[6][ss] + s[25][ss];
  t14 = (s[6][ss] - s[25][ss]) * 0.622504123036;
  t15 = s[7][ss] + s[24][ss];
  t16 = (s[7][ss] - s[24][ss]) * 0.674808341455;
  t17 = s[8][ss] + s[23][ss];
  t18 = (s[8][ss] - s[23][ss]) * 0.744536271002;
  t19 = s[9][ss] + s[22][ss];
  t20 = (s[9][ss] - s[22][ss]) * 0.839349645416;
  t21 = s[10][ss] + s[21][ss];
  t22 = (s[10][ss] - s[21][ss]) * 0.972568237862;
  t23 = s[11][ss] + s[20][ss];
  t24 = (s[11][ss] - s[20][ss]) * 1.16943993343;
  t25 = s[12][ss] + s[19][ss];
  t26 = (s[12][ss] - s[19][ss]) * 1.48416461631;
  t27 = s[13][ss] + s[18][ss];
  t28 = (s[13][ss] - s[18][ss]) * 2.05778100995;
  t29 = s[14][ss] + s[17][ss];
  t30 = (s[14][ss] - s[17][ss]) * 3.40760841847;
  t31 = s[15][ss] + s[16][ss];
  t32 = (s[15][ss] - s[16][ss]) * 10.1900081235;
  t33 = t01 + t31;
  t31 = (t01 - t31) * 0.502419286188;
  t01 = t03 + t29;
  t29 = (t03 - t29) * 0.52249861494;
  t03 = t05 + t27;
  t27 = (t05 - t27) * 0.566944034816;
  t05 = t07 + t25;
  t25 = (t07 - t25) * 0.64682178336;
  t07 = t09 + t23;
  t23 = (t09 - t23) * 0.788154623451;
  t09 = t11 + t21;
  t21 = (t11 - t21) * 1.06067768599;
  t11 = t13 + t19;
  t19 = (t13 - t19) * 1.72244709824;
  t13 = t15 + t17;
  t17 = (t15 - t17) * 5.10114861869;
  t15 = t33 + t13;
  t13 = (t33 - t13) * 0.509795579104;
  t33 = t01 + t11;
  t01 = (t01 - t11) * 0.601344886935;
  t11 = t03 + t09;
  t09 = (t03 - t09) * 0.899976223136;
  t03 = t05 + t07;
  t07 = (t05 - t07) * 2.56291544774;
  t05 = t15 + t03;
  t15 = (t15 - t03) * 0.541196100146;
  t03 = t33 + t11;
  t11 = (t33 - t11) * 1.30656296488;
  t33 = t05 + t03;
  t05 = (t05 - t03) * 0.707106781187;
  t03 = t15 + t11;
  t15 = (t15 - t11) * 0.707106781187;
  t03 += t15;
  t11 = t13 + t07;
  t13 = (t13 - t07) * 0.541196100146;
  t07 = t01 + t09;
  t09 = (t01 - t09) * 1.30656296488;
  t01 = t11 + t07;
  t07 = (t11 - t07) * 0.707106781187;
  t11 = t13 + t09;
  t13 = (t13 - t09) * 0.707106781187;
  t11 += t13;
  t01 += t11;
  t11 += t07;
  t07 += t13;
  t09 = t31 + t17;
  t31 = (t31 - t17) * 0.509795579104;
  t17 = t29 + t19;
  t29 = (t29 - t19) * 0.601344886935;
  t19 = t27 + t21;
  t21 = (t27 - t21) * 0.899976223136;
  t27 = t25 + t23;
  t23 = (t25 - t23) * 2.56291544774;
  t25 = t09 + t27;
  t09 = (t09 - t27) * 0.541196100146;
  t27 = t17 + t19;
  t19 = (t17 - t19) * 1.30656296488;
  t17 = t25 + t27;
  t27 = (t25 - t27) * 0.707106781187;
  t25 = t09 + t19;
  t19 = (t09 - t19) * 0.707106781187;
  t25 += t19;
  t09 = t31 + t23;
  t31 = (t31 - t23) * 0.541196100146;
  t23 = t29 + t21;
  t21 = (t29 - t21) * 1.30656296488;
  t29 = t09 + t23;
  t23 = (t09 - t23) * 0.707106781187;
  t09 = t31 + t21;
  t31 = (t31 - t21) * 0.707106781187;
  t09 += t31;
  t29 += t09;
  t09 += t23;
  t23 += t31;
  t17 += t29;
  t29 += t25;
  t25 += t09;
  t09 += t27;
  t27 += t23;
  t23 += t19;
  t19 += t31;
  t21 = t02 + t32;
  t02 = (t02 - t32) * 0.502419286188;
  t32 = t04 + t30;
  t04 = (t04 - t30) * 0.52249861494;
  t30 = t06 + t28;
  t28 = (t06 - t28) * 0.566944034816;
  t06 = t08 + t26;
  t08 = (t08 - t26) * 0.64682178336;
  t26 = t10 + t24;
  t10 = (t10 - t24) * 0.788154623451;
  t24 = t12 + t22;
  t22 = (t12 - t22) * 1.06067768599;
  t12 = t14 + t20;
  t20 = (t14 - t20) * 1.72244709824;
  t14 = t16 + t18;
  t16 = (t16 - t18) * 5.10114861869;
  t18 = t21 + t14;
  t14 = (t21 - t14) * 0.509795579104;
  t21 = t32 + t12;
  t32 = (t32 - t12) * 0.601344886935;
  t12 = t30 + t24;
  t24 = (t30 - t24) * 0.899976223136;
  t30 = t06 + t26;
  t26 = (t06 - t26) * 2.56291544774;
  t06 = t18 + t30;
  t18 = (t18 - t30) * 0.541196100146;
  t30 = t21 + t12;
  t12 = (t21 - t12) * 1.30656296488;
  t21 = t06 + t30;
  t30 = (t06 - t30) * 0.707106781187;
  t06 = t18 + t12;
  t12 = (t18 - t12) * 0.707106781187;
  t06 += t12;
  t18 = t14 + t26;
  t26 = (t14 - t26) * 0.541196100146;
  t14 = t32 + t24;
  t24 = (t32 - t24) * 1.30656296488;
  t32 = t18 + t14;
  t14 = (t18 - t14) * 0.707106781187;
  t18 = t26 + t24;
  t24 = (t26 - t24) * 0.707106781187;
  t18 += t24;
  t32 += t18;
  t18 += t14;
  t26 = t14 + t24;
  t14 = t02 + t16;
  t02 = (t02 - t16) * 0.509795579104;
  t16 = t04 + t20;
  t04 = (t04 - t20) * 0.601344886935;
  t20 = t28 + t22;
  t22 = (t28 - t22) * 0.899976223136;
  t28 = t08 + t10;
  t10 = (t08 - t10) * 2.56291544774;
  t08 = t14 + t28;
  t14 = (t14 - t28) * 0.541196100146;
  t28 = t16 + t20;
  t20 = (t16 - t20) * 1.30656296488;
  t16 = t08 + t28;
  t28 = (t08 - t28) * 0.707106781187;
  t08 = t14 + t20;
  t20 = (t14 - t20) * 0.707106781187;
  t08 += t20;
  t14 = t02 + t10;
  t02 = (t02 - t10) * 0.541196100146;
  t10 = t04 + t22;
  t22 = (t04 - t22) * 1.30656296488;
  t04 = t14 + t10;
  t10 = (t14 - t10) * 0.707106781187;
  t14 = t02 + t22;
  t02 = (t02 - t22) * 0.707106781187;
  t14 += t02;
  t04 += t14;
  t14 += t10;
  t10 += t02;
  t16 += t04;
  t04 += t08;
  t08 += t14;
  t14 += t28;
  t28 += t10;
  t10 += t20;
  t20 += t02;
  t21 += t16;
  t16 += t32;
  t32 += t04;
  t04 += t06;
  t06 += t08;
  t08 += t18;
  t18 += t14;
  t14 += t30;
  t30 += t28;
  t28 += t26;
  t26 += t10;
  t10 += t12;
  t12 += t20;
  t20 += t24;
  t24 += t02;
  d[dp + 48] = -t33;
  d[dp + 49] = d[dp + 47] = -t21;
  d[dp + 50] = d[dp + 46] = -t17;
  d[dp + 51] = d[dp + 45] = -t16;
  d[dp + 52] = d[dp + 44] = -t01;
  d[dp + 53] = d[dp + 43] = -t32;
  d[dp + 54] = d[dp + 42] = -t29;
  d[dp + 55] = d[dp + 41] = -t04;
  d[dp + 56] = d[dp + 40] = -t03;
  d[dp + 57] = d[dp + 39] = -t06;
  d[dp + 58] = d[dp + 38] = -t25;
  d[dp + 59] = d[dp + 37] = -t08;
  d[dp + 60] = d[dp + 36] = -t11;
  d[dp + 61] = d[dp + 35] = -t18;
  d[dp + 62] = d[dp + 34] = -t09;
  d[dp + 63] = d[dp + 33] = -t14;
  d[dp + 32] = -t05;
  d[dp + 0] = t05;
  d[dp + 31] = -t30;
  d[dp + 1] = t30;
  d[dp + 30] = -t27;
  d[dp + 2] = t27;
  d[dp + 29] = -t28;
  d[dp + 3] = t28;
  d[dp + 28] = -t07;
  d[dp + 4] = t07;
  d[dp + 27] = -t26;
  d[dp + 5] = t26;
  d[dp + 26] = -t23;
  d[dp + 6] = t23;
  d[dp + 25] = -t10;
  d[dp + 7] = t10;
  d[dp + 24] = -t15;
  d[dp + 8] = t15;
  d[dp + 23] = -t12;
  d[dp + 9] = t12;
  d[dp + 22] = -t19;
  d[dp + 10] = t19;
  d[dp + 21] = -t20;
  d[dp + 11] = t20;
  d[dp + 20] = -t13;
  d[dp + 12] = t13;
  d[dp + 19] = -t24;
  d[dp + 13] = t24;
  d[dp + 18] = -t31;
  d[dp + 14] = t31;
  d[dp + 17] = -t02;
  d[dp + 15] = t02;
  d[dp + 16] = 0.0;
};

MP2.FRAME_SYNC = 0x7ff;
MP2.VERSION = {
  MPEG_2_5: 0x0,
  MPEG_2: 0x2,
  MPEG_1: 0x3
};
MP2.LAYER = {
  III: 0x1,
  II: 0x2,
  I: 0x3
};
MP2.MODE = {
  STEREO: 0x0,
  JOINT_STEREO: 0x1,
  DUAL_CHANNEL: 0x2,
  MONO: 0x3
};
MP2.SAMPLE_RATE = new Uint16Array([44100, 48000, 32000, 0, // MPEG-1
22050, 24000, 16000, 0 // MPEG-2
]);
MP2.BIT_RATE = new Uint16Array([32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, // MPEG-1
8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160 // MPEG-2
]);
MP2.SCALEFACTOR_BASE = new Uint32Array([0x02000000, 0x01965FEA, 0x01428A30]);
MP2.SYNTHESIS_WINDOW = new Float32Array([0.0, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -1.0, -1.0, -1.0, -1.0, -1.5, -1.5, -2.0, -2.0, -2.5, -2.5, -3.0, -3.5, -3.5, -4.0, -4.5, -5.0, -5.5, -6.5, -7.0, -8.0, -8.5, -9.5, -10.5, -12.0, -13.0, -14.5, -15.5, -17.5, -19.0, -20.5, -22.5, -24.5, -26.5, -29.0, -31.5, -34.0, -36.5, -39.5, -42.5, -45.5, -48.5, -52.0, -55.5, -58.5, -62.5, -66.0, -69.5, -73.5, -77.0, -80.5, -84.5, -88.0, -91.5, -95.0, -98.0, -101.0, -104.0, 106.5, 109.0, 111.0, 112.5, 113.5, 114.0, 114.0, 113.5, 112.0, 110.5, 107.5, 104.0, 100.0, 94.5, 88.5, 81.5, 73.0, 63.5, 53.0, 41.5, 28.5, 14.5, -1.0, -18.0, -36.0, -55.5, -76.5, -98.5, -122.0, -147.0, -173.5, -200.5, -229.5, -259.5, -290.5, -322.5, -355.5, -389.5, -424.0, -459.5, -495.5, -532.0, -568.5, -605.0, -641.5, -678.0, -714.0, -749.0, -783.5, -817.0, -849.0, -879.5, -908.5, -935.0, -959.5, -981.0, -1000.5, -1016.0, -1028.5, -1037.5, -1042.5, -1043.5, -1040.0, -1031.5, 1018.5, 1000.0, 976.0, 946.5, 911.0, 869.5, 822.0, 767.5, 707.0, 640.0, 565.5, 485.0, 397.0, 302.5, 201.0, 92.5, -22.5, -144.0, -272.5, -407.0, -547.5, -694.0, -846.0, -1003.0, -1165.0, -1331.5, -1502.0, -1675.5, -1852.5, -2031.5, -2212.5, -2394.0, -2576.5, -2758.5, -2939.5, -3118.5, -3294.5, -3467.5, -3635.5, -3798.5, -3955.0, -4104.5, -4245.5, -4377.5, -4499.0, -4609.5, -4708.0, -4792.5, -4863.5, -4919.0, -4958.0, -4979.5, -4983.0, -4967.5, -4931.5, -4875.0, -4796.0, -4694.5, -4569.5, -4420.0, -4246.0, -4046.0, -3820.0, -3567.0, 3287.0, 2979.5, 2644.0, 2280.5, 1888.0, 1467.5, 1018.5, 541.0, 35.0, -499.0, -1061.0, -1650.0, -2266.5, -2909.0, -3577.0, -4270.0, -4987.5, -5727.5, -6490.0, -7274.0, -8077.5, -8899.5, -9739.0, -10594.5, -11464.5, -12347.0, -13241.0, -14144.5, -15056.0, -15973.5, -16895.5, -17820.0, -18744.5, -19668.0, -20588.0, -21503.0, -22410.5, -23308.5, -24195.0, -25068.5, -25926.5, -26767.0, -27589.0, -28389.0, -29166.5, -29919.0, -30644.5, -31342.0, -32009.5, -32645.0, -33247.0, -33814.5, -34346.0, -34839.5, -35295.0, -35710.0, -36084.5, -36417.5, -36707.5, -36954.0, -37156.5, -37315.0, -37428.0, -37496.0, 37519.0, 37496.0, 37428.0, 37315.0, 37156.5, 36954.0, 36707.5, 36417.5, 36084.5, 35710.0, 35295.0, 34839.5, 34346.0, 33814.5, 33247.0, 32645.0, 32009.5, 31342.0, 30644.5, 29919.0, 29166.5, 28389.0, 27589.0, 26767.0, 25926.5, 25068.5, 24195.0, 23308.5, 22410.5, 21503.0, 20588.0, 19668.0, 18744.5, 17820.0, 16895.5, 15973.5, 15056.0, 14144.5, 13241.0, 12347.0, 11464.5, 10594.5, 9739.0, 8899.5, 8077.5, 7274.0, 6490.0, 5727.5, 4987.5, 4270.0, 3577.0, 2909.0, 2266.5, 1650.0, 1061.0, 499.0, -35.0, -541.0, -1018.5, -1467.5, -1888.0, -2280.5, -2644.0, -2979.5, 3287.0, 3567.0, 3820.0, 4046.0, 4246.0, 4420.0, 4569.5, 4694.5, 4796.0, 4875.0, 4931.5, 4967.5, 4983.0, 4979.5, 4958.0, 4919.0, 4863.5, 4792.5, 4708.0, 4609.5, 4499.0, 4377.5, 4245.5, 4104.5, 3955.0, 3798.5, 3635.5, 3467.5, 3294.5, 3118.5, 2939.5, 2758.5, 2576.5, 2394.0, 2212.5, 2031.5, 1852.5, 1675.5, 1502.0, 1331.5, 1165.0, 1003.0, 846.0, 694.0, 547.5, 407.0, 272.5, 144.0, 22.5, -92.5, -201.0, -302.5, -397.0, -485.0, -565.5, -640.0, -707.0, -767.5, -822.0, -869.5, -911.0, -946.5, -976.0, -1000.0, 1018.5, 1031.5, 1040.0, 1043.5, 1042.5, 1037.5, 1028.5, 1016.0, 1000.5, 981.0, 959.5, 935.0, 908.5, 879.5, 849.0, 817.0, 783.5, 749.0, 714.0, 678.0, 641.5, 605.0, 568.5, 532.0, 495.5, 459.5, 424.0, 389.5, 355.5, 322.5, 290.5, 259.5, 229.5, 200.5, 173.5, 147.0, 122.0, 98.5, 76.5, 55.5, 36.0, 18.0, 1.0, -14.5, -28.5, -41.5, -53.0, -63.5, -73.0, -81.5, -88.5, -94.5, -100.0, -104.0, -107.5, -110.5, -112.0, -113.5, -114.0, -114.0, -113.5, -112.5, -111.0, -109.0, 106.5, 104.0, 101.0, 98.0, 95.0, 91.5, 88.0, 84.5, 80.5, 77.0, 73.5, 69.5, 66.0, 62.5, 58.5, 55.5, 52.0, 48.5, 45.5, 42.5, 39.5, 36.5, 34.0, 31.5, 29.0, 26.5, 24.5, 22.5, 20.5, 19.0, 17.5, 15.5, 14.5, 13.0, 12.0, 10.5, 9.5, 8.5, 8.0, 7.0, 6.5, 5.5, 5.0, 4.5, 4.0, 3.5, 3.5, 3.0, 2.5, 2.5, 2.0, 2.0, 1.5, 1.5, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]); // Quantizer lookup, step 1: bitrate classes

MP2.QUANT_LUT_STEP_1 = [// 32, 48, 56, 64, 80, 96,112,128,160,192,224,256,320,384 <- bitrate
[0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2], // mono
// 16, 24, 28, 32, 40, 48, 56, 64, 80, 96,112,128,160,192 <- bitrate / chan
[0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2] // stereo
]; // Quantizer lookup, step 2: bitrate class, sample rate -> B2 table idx, sblimit

MP2.QUANT_TAB = {
  A: 27 | 64,
  // Table 3-B.2a: high-rate, sblimit = 27
  B: 30 | 64,
  // Table 3-B.2b: high-rate, sblimit = 30
  C: 8,
  // Table 3-B.2c:  low-rate, sblimit =  8
  D: 12 // Table 3-B.2d:  low-rate, sblimit = 12

};
MP2.QUANT_LUT_STEP_2 = [//   44.1 kHz,        48 kHz,          32 kHz
[MP2.QUANT_TAB.C, MP2.QUANT_TAB.C, MP2.QUANT_TAB.D], // 32 - 48 kbit/sec/ch
[MP2.QUANT_TAB.A, MP2.QUANT_TAB.A, MP2.QUANT_TAB.A], // 56 - 80 kbit/sec/ch
[MP2.QUANT_TAB.B, MP2.QUANT_TAB.A, MP2.QUANT_TAB.B] // 96+	 kbit/sec/ch
]; // Quantizer lookup, step 3: B2 table, subband -> nbal, row index
// (upper 4 bits: nbal, lower 4 bits: row index)

MP2.QUANT_LUT_STEP_3 = [// Low-rate table (3-B.2c and 3-B.2d)
[0x44, 0x44, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34], // High-rate table (3-B.2a and 3-B.2b)
[0x43, 0x43, 0x43, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20], // MPEG-2 LSR table (B.2 in ISO 13818-3)
[0x45, 0x45, 0x45, 0x45, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24]]; // Quantizer lookup, step 4: table row, allocation[] value -> quant table index

MP2.QUANT_LUT_STEP4 = [[0, 1, 2, 17], [0, 1, 2, 3, 4, 5, 6, 17], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17], [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]];
MP2.QUANT_TAB = [{
  levels: 3,
  group: 1,
  bits: 5
}, //  1
{
  levels: 5,
  group: 1,
  bits: 7
}, //  2
{
  levels: 7,
  group: 0,
  bits: 3
}, //  3
{
  levels: 9,
  group: 1,
  bits: 10
}, //  4
{
  levels: 15,
  group: 0,
  bits: 4
}, //  5
{
  levels: 31,
  group: 0,
  bits: 5
}, //  6
{
  levels: 63,
  group: 0,
  bits: 6
}, //  7
{
  levels: 127,
  group: 0,
  bits: 7
}, //  8
{
  levels: 255,
  group: 0,
  bits: 8
}, //  9
{
  levels: 511,
  group: 0,
  bits: 9
}, // 10
{
  levels: 1023,
  group: 0,
  bits: 10
}, // 11
{
  levels: 2047,
  group: 0,
  bits: 11
}, // 12
{
  levels: 4095,
  group: 0,
  bits: 12
}, // 13
{
  levels: 8191,
  group: 0,
  bits: 13
}, // 14
{
  levels: 16383,
  group: 0,
  bits: 14
}, // 15
{
  levels: 32767,
  group: 0,
  bits: 15
}, // 16
{
  levels: 65535,
  group: 0,
  bits: 16 // 17

}];
/* harmony default export */ __webpack_exports__["default"] = (MP2);

/***/ }),

/***/ "./src/lib/mpeg1-wasm.js":
/*!*******************************!*\
  !*** ./src/lib/mpeg1-wasm.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./src/lib/decoder.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer */ "./src/lib/buffer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");




var MPEG1WASM = function MPEG1WASM(options) {
  _decoder__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, options);
  this.onDecodeCallback = options.onVideoDecode;
  this.module = options.wasmModule;
  this.bufferSize = options.videoBufferSize || 512 * 1024;
  this.bufferMode = options.streaming ? _buffer__WEBPACK_IMPORTED_MODULE_1__["default"].MODE.EVICT : _buffer__WEBPACK_IMPORTED_MODULE_1__["default"].MODE.EXPAND;
  this.decodeFirstFrame = options.decodeFirstFrame !== false;
  this.hasSequenceHeader = false;
};

MPEG1WASM.prototype = Object.create(_decoder__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
MPEG1WASM.prototype.constructor = MPEG1WASM;

MPEG1WASM.prototype.initializeWasmDecoder = function () {
  if (!this.module.instance) {
    console.warn('JSMpeg: WASM module not compiled yet');
    return;
  }

  this.instance = this.module.instance;
  this.functions = this.module.instance.exports;
  this.decoder = this.functions._mpeg1_decoder_create(this.bufferSize, this.bufferMode);
};

MPEG1WASM.prototype.destroy = function () {
  if (!this.decoder) {
    return;
  }

  this.functions._mpeg1_decoder_destroy(this.decoder);
};

MPEG1WASM.prototype.bufferGetIndex = function () {
  if (!this.decoder) {
    return;
  }

  return this.functions._mpeg1_decoder_get_index(this.decoder);
};

MPEG1WASM.prototype.bufferSetIndex = function (index) {
  if (!this.decoder) {
    return;
  }

  this.functions._mpeg1_decoder_set_index(this.decoder, index);
};

MPEG1WASM.prototype.bufferWrite = function (buffers) {
  if (!this.decoder) {
    this.initializeWasmDecoder();
  }

  var totalLength = 0;

  for (var i = 0; i < buffers.length; i++) {
    totalLength += buffers[i].length;
  }

  var ptr = this.functions._mpeg1_decoder_get_write_ptr(this.decoder, totalLength);

  for (var _i = 0; _i < buffers.length; _i++) {
    this.instance.heapU8.set(buffers[_i], ptr);
    ptr += buffers[_i].length;
  }

  this.functions._mpeg1_decoder_did_write(this.decoder, totalLength);

  return totalLength;
};

MPEG1WASM.prototype.write = function (pts, buffers) {
  _decoder__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.write.call(this, pts, buffers);

  if (!this.hasSequenceHeader && this.functions._mpeg1_decoder_has_sequence_header(this.decoder)) {
    this.loadSequnceHeader();
  }
};

MPEG1WASM.prototype.loadSequnceHeader = function () {
  this.hasSequenceHeader = true;
  this.frameRate = this.functions._mpeg1_decoder_get_frame_rate(this.decoder);
  this.codedSize = this.functions._mpeg1_decoder_get_coded_size(this.decoder);

  if (this.destination) {
    var w = this.functions._mpeg1_decoder_get_width(this.decoder);

    var h = this.functions._mpeg1_decoder_get_height(this.decoder);

    this.destination.resize(w, h);
  }

  if (this.decodeFirstFrame) {
    this.decode();
  }
};

MPEG1WASM.prototype.decode = function () {
  var startTime = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["Now"])();

  if (!this.decoder) {
    return false;
  }

  var didDecode = this.functions._mpeg1_decoder_decode(this.decoder);

  if (!didDecode) {
    return false;
  } // Invoke decode callbacks


  if (this.destination) {
    var ptrY = this.functions._mpeg1_decoder_get_y_ptr(this.decoder),
        ptrCr = this.functions._mpeg1_decoder_get_cr_ptr(this.decoder),
        ptrCb = this.functions._mpeg1_decoder_get_cb_ptr(this.decoder);

    var dy = this.instance.heapU8.subarray(ptrY, ptrY + this.codedSize);
    var dcr = this.instance.heapU8.subarray(ptrCr, ptrCr + (this.codedSize >> 2));
    var dcb = this.instance.heapU8.subarray(ptrCb, ptrCb + (this.codedSize >> 2));
    this.destination.render(dy, dcr, dcb, false);
  }

  this.advanceDecodedTime(1 / this.frameRate);
  var elapsedTime = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["Now"])() - startTime;

  if (this.onDecodeCallback) {
    this.onDecodeCallback(this, elapsedTime);
  }

  return true;
};

/* harmony default export */ __webpack_exports__["default"] = (MPEG1WASM);

/***/ }),

/***/ "./src/lib/mpeg1.js":
/*!**************************!*\
  !*** ./src/lib/mpeg1.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./src/lib/decoder.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer */ "./src/lib/buffer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
// Inspired by Java MPEG-1 Video Decoder and Player by Zoltan Korandi
// https://sourceforge.net/projects/javampeg1video/




var MPEG1 = function MPEG1(options) {
  _decoder__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, options);
  this.onDecodeCallback = options.onVideoDecode;
  var bufferSize = options.videoBufferSize || 512 * 1024;
  var bufferMode = options.streaming ? _buffer__WEBPACK_IMPORTED_MODULE_1__["default"].MODE.EVICT : _buffer__WEBPACK_IMPORTED_MODULE_1__["default"].MODE.EXPAND;
  this.bits = new _buffer__WEBPACK_IMPORTED_MODULE_1__["default"](bufferSize, bufferMode);
  this.customIntraQuantMatrix = new Uint8Array(64);
  this.customNonIntraQuantMatrix = new Uint8Array(64);
  this.blockData = new Int32Array(64);
  this.currentFrame = 0;
  this.decodeFirstFrame = options.decodeFirstFrame !== false;
};

MPEG1.prototype = Object.create(_decoder__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
MPEG1.prototype.constructor = MPEG1;

MPEG1.prototype.write = function (pts, buffers) {
  _decoder__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.write.call(this, pts, buffers);

  if (!this.hasSequenceHeader) {
    if (this.bits.findStartCode(MPEG1.START.SEQUENCE) === -1) {
      return false;
    }

    this.decodeSequenceHeader();

    if (this.decodeFirstFrame) {
      this.decode();
    }
  }
};

MPEG1.prototype.decode = function () {
  var startTime = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["Now"])();

  if (!this.hasSequenceHeader) {
    return false;
  }

  if (this.bits.findStartCode(MPEG1.START.PICTURE) === -1) {
    var bufferedBytes = this.bits.byteLength - (this.bits.index >> 3);
    return false;
  }

  this.decodePicture();
  this.advanceDecodedTime(1 / this.frameRate);
  var elapsedTime = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["Now"])() - startTime;

  if (this.onDecodeCallback) {
    this.onDecodeCallback(this, elapsedTime);
  }

  return true;
};

MPEG1.prototype.readHuffman = function (codeTable) {
  var state = 0;

  do {
    state = codeTable[state + this.bits.read(1)];
  } while (state >= 0 && codeTable[state] !== 0);

  return codeTable[state + 2];
}; // Sequence Layer


MPEG1.prototype.frameRate = 30;

MPEG1.prototype.decodeSequenceHeader = function () {
  var newWidth = this.bits.read(12),
      newHeight = this.bits.read(12); // skip pixel aspect ratio

  this.bits.skip(4);
  this.frameRate = MPEG1.PICTURE_RATE[this.bits.read(4)]; // skip bitRate, marker, bufferSize and constrained bit

  this.bits.skip(18 + 1 + 10 + 1);

  if (newWidth !== this.width || newHeight !== this.height) {
    this.width = newWidth;
    this.height = newHeight;
    this.initBuffers();

    if (this.destination) {
      this.destination.resize(newWidth, newHeight);
    }
  }

  if (this.bits.read(1)) {
    // load custom intra quant matrix?
    for (var i = 0; i < 64; i++) {
      this.customIntraQuantMatrix[MPEG1.ZIG_ZAG[i]] = this.bits.read(8);
    }

    this.intraQuantMatrix = this.customIntraQuantMatrix;
  }

  if (this.bits.read(1)) {
    // load custom non intra quant matrix?
    for (var _i = 0; _i < 64; _i++) {
      var idx = MPEG1.ZIG_ZAG[_i];
      this.customNonIntraQuantMatrix[idx] = this.bits.read(8);
    }

    this.nonIntraQuantMatrix = this.customNonIntraQuantMatrix;
  }

  this.hasSequenceHeader = true;
};

MPEG1.prototype.initBuffers = function () {
  this.intraQuantMatrix = MPEG1.DEFAULT_INTRA_QUANT_MATRIX;
  this.nonIntraQuantMatrix = MPEG1.DEFAULT_NON_INTRA_QUANT_MATRIX;
  this.mbWidth = this.width + 15 >> 4;
  this.mbHeight = this.height + 15 >> 4;
  this.mbSize = this.mbWidth * this.mbHeight;
  this.codedWidth = this.mbWidth << 4;
  this.codedHeight = this.mbHeight << 4;
  this.codedSize = this.codedWidth * this.codedHeight;
  this.halfWidth = this.mbWidth << 3;
  this.halfHeight = this.mbHeight << 3; // Allocated buffers and resize the canvas

  this.currentY = new Uint8ClampedArray(this.codedSize);
  this.currentY32 = new Uint32Array(this.currentY.buffer);
  this.currentCr = new Uint8ClampedArray(this.codedSize >> 2);
  this.currentCr32 = new Uint32Array(this.currentCr.buffer);
  this.currentCb = new Uint8ClampedArray(this.codedSize >> 2);
  this.currentCb32 = new Uint32Array(this.currentCb.buffer);
  this.forwardY = new Uint8ClampedArray(this.codedSize);
  this.forwardY32 = new Uint32Array(this.forwardY.buffer);
  this.forwardCr = new Uint8ClampedArray(this.codedSize >> 2);
  this.forwardCr32 = new Uint32Array(this.forwardCr.buffer);
  this.forwardCb = new Uint8ClampedArray(this.codedSize >> 2);
  this.forwardCb32 = new Uint32Array(this.forwardCb.buffer);
}; // Picture Layer


MPEG1.prototype.currentY = null;
MPEG1.prototype.currentCr = null;
MPEG1.prototype.currentCb = null;
MPEG1.prototype.pictureType = 0; // Buffers for motion compensation

MPEG1.prototype.forwardY = null;
MPEG1.prototype.forwardCr = null;
MPEG1.prototype.forwardCb = null;
MPEG1.prototype.fullPelForward = false;
MPEG1.prototype.forwardFCode = 0;
MPEG1.prototype.forwardRSize = 0;
MPEG1.prototype.forwardF = 0;

MPEG1.prototype.decodePicture = function (skipOutput) {
  this.currentFrame++;
  this.bits.skip(10); // skip temporalReference

  this.pictureType = this.bits.read(3);
  this.bits.skip(16); // skip vbv_delay
  // Skip B and D frames or unknown coding type

  if (this.pictureType <= 0 || this.pictureType >= MPEG1.PICTURE_TYPE.B) {
    return;
  } // full_pel_forward, forward_f_code


  if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
    this.fullPelForward = this.bits.read(1);
    this.forwardFCode = this.bits.read(3);

    if (this.forwardFCode === 0) {
      // Ignore picture with zero forward_f_code
      return;
    }

    this.forwardRSize = this.forwardFCode - 1;
    this.forwardF = 1 << this.forwardRSize;
  }

  var code = 0;

  do {
    code = this.bits.findNextStartCode();
  } while (code === MPEG1.START.EXTENSION || code === MPEG1.START.USER_DATA);

  while (code >= MPEG1.START.SLICE_FIRST && code <= MPEG1.START.SLICE_LAST) {
    this.decodeSlice(code & 0x000000FF);
    code = this.bits.findNextStartCode();
  }

  if (code !== -1) {
    // We found the next start code; rewind 32bits and let the main loop
    // handle it.
    this.bits.rewind(32);
  } // Invoke decode callbacks


  if (this.destination) {
    this.destination.render(this.currentY, this.currentCr, this.currentCb, true);
  } // If this is a reference picutre then rotate the prediction pointers


  if (this.pictureType === MPEG1.PICTURE_TYPE.INTRA || this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
    var tmpY = this.forwardY,
        tmpY32 = this.forwardY32,
        tmpCr = this.forwardCr,
        tmpCr32 = this.forwardCr32,
        tmpCb = this.forwardCb,
        tmpCb32 = this.forwardCb32;
    this.forwardY = this.currentY;
    this.forwardY32 = this.currentY32;
    this.forwardCr = this.currentCr;
    this.forwardCr32 = this.currentCr32;
    this.forwardCb = this.currentCb;
    this.forwardCb32 = this.currentCb32;
    this.currentY = tmpY;
    this.currentY32 = tmpY32;
    this.currentCr = tmpCr;
    this.currentCr32 = tmpCr32;
    this.currentCb = tmpCb;
    this.currentCb32 = tmpCb32;
  }
}; // Slice Layer


MPEG1.prototype.quantizerScale = 0;
MPEG1.prototype.sliceBegin = false;

MPEG1.prototype.decodeSlice = function (slice) {
  this.sliceBegin = true;
  this.macroblockAddress = (slice - 1) * this.mbWidth - 1; // Reset motion vectors and DC predictors

  this.motionFwH = this.motionFwHPrev = 0;
  this.motionFwV = this.motionFwVPrev = 0;
  this.dcPredictorY = 128;
  this.dcPredictorCr = 128;
  this.dcPredictorCb = 128;
  this.quantizerScale = this.bits.read(5); // skip extra bits

  while (this.bits.read(1)) {
    this.bits.skip(8);
  }

  do {
    this.decodeMacroblock();
  } while (!this.bits.nextBytesAreStartCode());
}; // Macroblock Layer


MPEG1.prototype.macroblockAddress = 0;
MPEG1.prototype.mbRow = 0;
MPEG1.prototype.mbCol = 0;
MPEG1.prototype.macroblockType = 0;
MPEG1.prototype.macroblockIntra = false;
MPEG1.prototype.macroblockMotFw = false;
MPEG1.prototype.motionFwH = 0;
MPEG1.prototype.motionFwV = 0;
MPEG1.prototype.motionFwHPrev = 0;
MPEG1.prototype.motionFwVPrev = 0;

MPEG1.prototype.decodeMacroblock = function () {
  // Decode macroblock_address_increment
  var increment = 0,
      t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT);

  while (t === 34) {
    // macroblock_stuffing
    t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT);
  }

  while (t === 35) {
    // macroblock_escape
    increment += 33;
    t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT);
  }

  increment += t; // Process any skipped macroblocks

  if (this.sliceBegin) {
    // The first macroblock_address_increment of each slice is relative
    // to beginning of the preverious row, not the preverious macroblock
    this.sliceBegin = false;
    this.macroblockAddress += increment;
  } else {
    if (this.macroblockAddress + increment >= this.mbSize) {
      // Illegal (too large) macroblock_address_increment
      return;
    }

    if (increment > 1) {
      // Skipped macroblocks reset DC predictors
      this.dcPredictorY = 128;
      this.dcPredictorCr = 128;
      this.dcPredictorCb = 128; // Skipped macroblocks in P-pictures reset motion vectors

      if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
        this.motionFwH = this.motionFwHPrev = 0;
        this.motionFwV = this.motionFwVPrev = 0;
      }
    } // Predict skipped macroblocks


    while (increment > 1) {
      this.macroblockAddress++;
      this.mbRow = this.macroblockAddress / this.mbWidth | 0;
      this.mbCol = this.macroblockAddress % this.mbWidth;
      this.copyMacroblock(this.motionFwH, this.motionFwV, this.forwardY, this.forwardCr, this.forwardCb);
      increment--;
    }

    this.macroblockAddress++;
  }

  this.mbRow = this.macroblockAddress / this.mbWidth | 0;
  this.mbCol = this.macroblockAddress % this.mbWidth; // Process the current macroblock

  var mbTable = MPEG1.MACROBLOCK_TYPE[this.pictureType];
  this.macroblockType = this.readHuffman(mbTable);
  this.macroblockIntra = this.macroblockType & 0x01;
  this.macroblockMotFw = this.macroblockType & 0x08; // Quantizer scale

  if ((this.macroblockType & 0x10) !== 0) {
    this.quantizerScale = this.bits.read(5);
  }

  if (this.macroblockIntra) {
    // Intra-coded macroblocks reset motion vectors
    this.motionFwH = this.motionFwHPrev = 0;
    this.motionFwV = this.motionFwVPrev = 0;
  } else {
    // Non-intra macroblocks reset DC predictors
    this.dcPredictorY = 128;
    this.dcPredictorCr = 128;
    this.dcPredictorCb = 128;
    this.decodeMotionVectors();
    this.copyMacroblock(this.motionFwH, this.motionFwV, this.forwardY, this.forwardCr, this.forwardCb);
  } // Decode blocks


  var cbp = (this.macroblockType & 0x02) !== 0 ? this.readHuffman(MPEG1.CODE_BLOCK_PATTERN) : this.macroblockIntra ? 0x3f : 0;

  for (var block = 0, mask = 0x20; block < 6; block++) {
    if ((cbp & mask) !== 0) {
      this.decodeBlock(block);
    }

    mask >>= 1;
  }
};

MPEG1.prototype.decodeMotionVectors = function () {
  var code,
      d,
      r = 0; // Forward

  if (this.macroblockMotFw) {
    // Horizontal forward
    code = this.readHuffman(MPEG1.MOTION);

    if (code !== 0 && this.forwardF !== 1) {
      r = this.bits.read(this.forwardRSize);
      d = (Math.abs(code) - 1 << this.forwardRSize) + r + 1;

      if (code < 0) {
        d = -d;
      }
    } else {
      d = code;
    }

    this.motionFwHPrev += d;

    if (this.motionFwHPrev > (this.forwardF << 4) - 1) {
      this.motionFwHPrev -= this.forwardF << 5;
    } else if (this.motionFwHPrev < -this.forwardF << 4) {
      this.motionFwHPrev += this.forwardF << 5;
    }

    this.motionFwH = this.motionFwHPrev;

    if (this.fullPelForward) {
      this.motionFwH <<= 1;
    } // Vertical forward


    code = this.readHuffman(MPEG1.MOTION);

    if (code !== 0 && this.forwardF !== 1) {
      r = this.bits.read(this.forwardRSize);
      d = (Math.abs(code) - 1 << this.forwardRSize) + r + 1;

      if (code < 0) {
        d = -d;
      }
    } else {
      d = code;
    }

    this.motionFwVPrev += d;

    if (this.motionFwVPrev > (this.forwardF << 4) - 1) {
      this.motionFwVPrev -= this.forwardF << 5;
    } else if (this.motionFwVPrev < -this.forwardF << 4) {
      this.motionFwVPrev += this.forwardF << 5;
    }

    this.motionFwV = this.motionFwVPrev;

    if (this.fullPelForward) {
      this.motionFwV <<= 1;
    }
  } else if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
    // No motion information in P-picture, reset vectors
    this.motionFwH = this.motionFwHPrev = 0;
    this.motionFwV = this.motionFwVPrev = 0;
  }
};

MPEG1.prototype.copyMacroblock = function (motionH, motionV, sY, sCr, sCb) {
  var width, scan, H, V, oddH, oddV, src, dest, last; // We use 32bit writes here

  var dY = this.currentY32,
      dCb = this.currentCb32,
      dCr = this.currentCr32; // Luminance

  width = this.codedWidth;
  scan = width - 16;
  H = motionH >> 1;
  V = motionV >> 1;
  oddH = (motionH & 1) === 1;
  oddV = (motionV & 1) === 1;
  src = ((this.mbRow << 4) + V) * width + (this.mbCol << 4) + H;
  dest = this.mbRow * width + this.mbCol << 2;
  last = dest + (width << 2);
  var x, y1, y2, y;

  if (oddH) {
    if (oddV) {
      while (dest < last) {
        y1 = sY[src] + sY[src + width];
        src++;

        for (x = 0; x < 4; x++) {
          y2 = sY[src] + sY[src + width];
          src++;
          y = y1 + y2 + 2 >> 2 & 0xff;
          y1 = sY[src] + sY[src + width];
          src++;
          y |= y1 + y2 + 2 << 6 & 0xff00;
          y2 = sY[src] + sY[src + width];
          src++;
          y |= y1 + y2 + 2 << 14 & 0xff0000;
          y1 = sY[src] + sY[src + width];
          src++;
          y |= y1 + y2 + 2 << 22 & 0xff000000;
          dY[dest++] = y;
        }

        dest += scan >> 2;
        src += scan - 1;
      }
    } else {
      while (dest < last) {
        y1 = sY[src++];

        for (x = 0; x < 4; x++) {
          y2 = sY[src++];
          y = y1 + y2 + 1 >> 1 & 0xff;
          y1 = sY[src++];
          y |= y1 + y2 + 1 << 7 & 0xff00;
          y2 = sY[src++];
          y |= y1 + y2 + 1 << 15 & 0xff0000;
          y1 = sY[src++];
          y |= y1 + y2 + 1 << 23 & 0xff000000;
          dY[dest++] = y;
        }

        dest += scan >> 2;
        src += scan - 1;
      }
    }
  } else {
    if (oddV) {
      while (dest < last) {
        for (x = 0; x < 4; x++) {
          y = sY[src] + sY[src + width] + 1 >> 1 & 0xff;
          src++;
          y |= sY[src] + sY[src + width] + 1 << 7 & 0xff00;
          src++;
          y |= sY[src] + sY[src + width] + 1 << 15 & 0xff0000;
          src++;
          y |= sY[src] + sY[src + width] + 1 << 23 & 0xff000000;
          src++;
          dY[dest++] = y;
        }

        dest += scan >> 2;
        src += scan;
      }
    } else {
      while (dest < last) {
        for (x = 0; x < 4; x++) {
          y = sY[src];
          src++;
          y |= sY[src] << 8;
          src++;
          y |= sY[src] << 16;
          src++;
          y |= sY[src] << 24;
          src++;
          dY[dest++] = y;
        }

        dest += scan >> 2;
        src += scan;
      }
    }
  } // Chrominance


  width = this.halfWidth;
  scan = width - 8;
  H = motionH / 2 >> 1;
  V = motionV / 2 >> 1;
  oddH = (motionH / 2 & 1) === 1;
  oddV = (motionV / 2 & 1) === 1;
  src = ((this.mbRow << 3) + V) * width + (this.mbCol << 3) + H;
  dest = this.mbRow * width + this.mbCol << 1;
  last = dest + (width << 1);
  var cr1, cr2, cr, cb1, cb2, cb;

  if (oddH) {
    if (oddV) {
      while (dest < last) {
        cr1 = sCr[src] + sCr[src + width];
        cb1 = sCb[src] + sCb[src + width];
        src++;

        for (x = 0; x < 2; x++) {
          cr2 = sCr[src] + sCr[src + width];
          cb2 = sCb[src] + sCb[src + width];
          src++;
          cr = cr1 + cr2 + 2 >> 2 & 0xff;
          cb = cb1 + cb2 + 2 >> 2 & 0xff;
          cr1 = sCr[src] + sCr[src + width];
          cb1 = sCb[src] + sCb[src + width];
          src++;
          cr |= cr1 + cr2 + 2 << 6 & 0xff00;
          cb |= cb1 + cb2 + 2 << 6 & 0xff00;
          cr2 = sCr[src] + sCr[src + width];
          cb2 = sCb[src] + sCb[src + width];
          src++;
          cr |= cr1 + cr2 + 2 << 14 & 0xff0000;
          cb |= cb1 + cb2 + 2 << 14 & 0xff0000;
          cr1 = sCr[src] + sCr[src + width];
          cb1 = sCb[src] + sCb[src + width];
          src++;
          cr |= cr1 + cr2 + 2 << 22 & 0xff000000;
          cb |= cb1 + cb2 + 2 << 22 & 0xff000000;
          dCr[dest] = cr;
          dCb[dest] = cb;
          dest++;
        }

        dest += scan >> 2;
        src += scan - 1;
      }
    } else {
      while (dest < last) {
        cr1 = sCr[src];
        cb1 = sCb[src];
        src++;

        for (x = 0; x < 2; x++) {
          cr2 = sCr[src];
          cb2 = sCb[src++];
          cr = cr1 + cr2 + 1 >> 1 & 0xff;
          cb = cb1 + cb2 + 1 >> 1 & 0xff;
          cr1 = sCr[src];
          cb1 = sCb[src++];
          cr |= cr1 + cr2 + 1 << 7 & 0xff00;
          cb |= cb1 + cb2 + 1 << 7 & 0xff00;
          cr2 = sCr[src];
          cb2 = sCb[src++];
          cr |= cr1 + cr2 + 1 << 15 & 0xff0000;
          cb |= cb1 + cb2 + 1 << 15 & 0xff0000;
          cr1 = sCr[src];
          cb1 = sCb[src++];
          cr |= cr1 + cr2 + 1 << 23 & 0xff000000;
          cb |= cb1 + cb2 + 1 << 23 & 0xff000000;
          dCr[dest] = cr;
          dCb[dest] = cb;
          dest++;
        }

        dest += scan >> 2;
        src += scan - 1;
      }
    }
  } else {
    if (oddV) {
      while (dest < last) {
        for (x = 0; x < 2; x++) {
          cr = sCr[src] + sCr[src + width] + 1 >> 1 & 0xff;
          cb = sCb[src] + sCb[src + width] + 1 >> 1 & 0xff;
          src++;
          cr |= sCr[src] + sCr[src + width] + 1 << 7 & 0xff00;
          cb |= sCb[src] + sCb[src + width] + 1 << 7 & 0xff00;
          src++;
          cr |= sCr[src] + sCr[src + width] + 1 << 15 & 0xff0000;
          cb |= sCb[src] + sCb[src + width] + 1 << 15 & 0xff0000;
          src++;
          cr |= sCr[src] + sCr[src + width] + 1 << 23 & 0xff000000;
          cb |= sCb[src] + sCb[src + width] + 1 << 23 & 0xff000000;
          src++;
          dCr[dest] = cr;
          dCb[dest] = cb;
          dest++;
        }

        dest += scan >> 2;
        src += scan;
      }
    } else {
      while (dest < last) {
        for (x = 0; x < 2; x++) {
          cr = sCr[src];
          cb = sCb[src];
          src++;
          cr |= sCr[src] << 8;
          cb |= sCb[src] << 8;
          src++;
          cr |= sCr[src] << 16;
          cb |= sCb[src] << 16;
          src++;
          cr |= sCr[src] << 24;
          cb |= sCb[src] << 24;
          src++;
          dCr[dest] = cr;
          dCb[dest] = cb;
          dest++;
        }

        dest += scan >> 2;
        src += scan;
      }
    }
  }
}; // Block layer


MPEG1.prototype.dcPredictorY = 0;
MPEG1.prototype.dcPredictorCr = 0;
MPEG1.prototype.dcPredictorCb = 0;
MPEG1.prototype.blockData = null;

MPEG1.prototype.decodeBlock = function (block) {
  var n = 0,
      quantMatrix; // Decode DC coefficient of intra-coded blocks

  if (this.macroblockIntra) {
    var predictor, dctSize; // DC prediction

    if (block < 4) {
      predictor = this.dcPredictorY;
      dctSize = this.readHuffman(MPEG1.DCT_DC_SIZE_LUMINANCE);
    } else {
      predictor = block === 4 ? this.dcPredictorCr : this.dcPredictorCb;
      dctSize = this.readHuffman(MPEG1.DCT_DC_SIZE_CHROMINANCE);
    } // Read DC coeff


    if (dctSize > 0) {
      var differential = this.bits.read(dctSize);

      if ((differential & 1 << dctSize - 1) !== 0) {
        this.blockData[0] = predictor + differential;
      } else {
        this.blockData[0] = predictor + (-1 << dctSize | differential + 1);
      }
    } else {
      this.blockData[0] = predictor;
    } // Save predictor value


    if (block < 4) {
      this.dcPredictorY = this.blockData[0];
    } else if (block === 4) {
      this.dcPredictorCr = this.blockData[0];
    } else {
      this.dcPredictorCb = this.blockData[0];
    } // Dequantize + premultiply


    this.blockData[0] <<= 3 + 5;
    quantMatrix = this.intraQuantMatrix;
    n = 1;
  } else {
    quantMatrix = this.nonIntraQuantMatrix;
  } // Decode AC coefficients (+DC for non-intra)


  var level = 0;

  while (true) {
    var run = 0,
        coeff = this.readHuffman(MPEG1.DCT_COEFF);

    if (coeff === 0x0001 && n > 0 && this.bits.read(1) === 0) {
      // end_of_block
      break;
    }

    if (coeff === 0xffff) {
      // escape
      run = this.bits.read(6);
      level = this.bits.read(8);

      if (level === 0) {
        level = this.bits.read(8);
      } else if (level === 128) {
        level = this.bits.read(8) - 256;
      } else if (level > 128) {
        level = level - 256;
      }
    } else {
      run = coeff >> 8;
      level = coeff & 0xff;

      if (this.bits.read(1)) {
        level = -level;
      }
    }

    n += run;
    var dezigZagged = MPEG1.ZIG_ZAG[n];
    n++; // Dequantize, oddify, clip

    level <<= 1;

    if (!this.macroblockIntra) {
      level += level < 0 ? -1 : 1;
    }

    level = level * this.quantizerScale * quantMatrix[dezigZagged] >> 4;

    if ((level & 1) === 0) {
      level -= level > 0 ? 1 : -1;
    }

    if (level > 2047) {
      level = 2047;
    } else if (level < -2048) {
      level = -2048;
    } // Save premultiplied coefficient


    this.blockData[dezigZagged] = level * MPEG1.PREMULTIPLIER_MATRIX[dezigZagged];
  } // Move block to its place


  var destArray, destIndex, scan;

  if (block < 4) {
    destArray = this.currentY;
    scan = this.codedWidth - 8;
    destIndex = this.mbRow * this.codedWidth + this.mbCol << 4;

    if ((block & 1) !== 0) {
      destIndex += 8;
    }

    if ((block & 2) !== 0) {
      destIndex += this.codedWidth << 3;
    }
  } else {
    destArray = block === 4 ? this.currentCb : this.currentCr;
    scan = (this.codedWidth >> 1) - 8;
    destIndex = (this.mbRow * this.codedWidth << 2) + (this.mbCol << 3);
  }

  if (this.macroblockIntra) {
    // Overwrite (no prediction)
    if (n === 1) {
      MPEG1.CopyValueToDestination(this.blockData[0] + 128 >> 8, destArray, destIndex, scan);
      this.blockData[0] = 0;
    } else {
      MPEG1.IDCT(this.blockData);
      MPEG1.CopyBlockToDestination(this.blockData, destArray, destIndex, scan);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["Fill"])(this.blockData, 0);
    }
  } else {
    // Add data to the predicted macroblock
    if (n === 1) {
      MPEG1.AddValueToDestination(this.blockData[0] + 128 >> 8, destArray, destIndex, scan);
      this.blockData[0] = 0;
    } else {
      MPEG1.IDCT(this.blockData);
      MPEG1.AddBlockToDestination(this.blockData, destArray, destIndex, scan);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["Fill"])(this.blockData, 0);
    }
  }

  n = 0;
};

MPEG1.CopyBlockToDestination = function (block, dest, index, scan) {
  for (var n = 0; n < 64; n += 8, index += scan + 8) {
    dest[index + 0] = block[n + 0];
    dest[index + 1] = block[n + 1];
    dest[index + 2] = block[n + 2];
    dest[index + 3] = block[n + 3];
    dest[index + 4] = block[n + 4];
    dest[index + 5] = block[n + 5];
    dest[index + 6] = block[n + 6];
    dest[index + 7] = block[n + 7];
  }
};

MPEG1.AddBlockToDestination = function (block, dest, index, scan) {
  for (var n = 0; n < 64; n += 8, index += scan + 8) {
    dest[index + 0] += block[n + 0];
    dest[index + 1] += block[n + 1];
    dest[index + 2] += block[n + 2];
    dest[index + 3] += block[n + 3];
    dest[index + 4] += block[n + 4];
    dest[index + 5] += block[n + 5];
    dest[index + 6] += block[n + 6];
    dest[index + 7] += block[n + 7];
  }
};

MPEG1.CopyValueToDestination = function (value, dest, index, scan) {
  for (var n = 0; n < 64; n += 8, index += scan + 8) {
    dest[index + 0] = value;
    dest[index + 1] = value;
    dest[index + 2] = value;
    dest[index + 3] = value;
    dest[index + 4] = value;
    dest[index + 5] = value;
    dest[index + 6] = value;
    dest[index + 7] = value;
  }
};

MPEG1.AddValueToDestination = function (value, dest, index, scan) {
  for (var n = 0; n < 64; n += 8, index += scan + 8) {
    dest[index + 0] += value;
    dest[index + 1] += value;
    dest[index + 2] += value;
    dest[index + 3] += value;
    dest[index + 4] += value;
    dest[index + 5] += value;
    dest[index + 6] += value;
    dest[index + 7] += value;
  }
};

MPEG1.IDCT = function (block) {
  // See http://vsr.informatik.tu-chemnitz.de/~jan/MPEG/HTML/IDCT.html
  // for more info.
  var b1, b3, b4, b6, b7, tmp1, tmp2, m0, x0, x1, x2, x3, x4, y3, y4, y5, y6, y7; // Transform columns

  for (var i = 0; i < 8; ++i) {
    b1 = block[4 * 8 + i];
    b3 = block[2 * 8 + i] + block[6 * 8 + i];
    b4 = block[5 * 8 + i] - block[3 * 8 + i];
    tmp1 = block[1 * 8 + i] + block[7 * 8 + i];
    tmp2 = block[3 * 8 + i] + block[5 * 8 + i];
    b6 = block[1 * 8 + i] - block[7 * 8 + i];
    b7 = tmp1 + tmp2;
    m0 = block[0 * 8 + i];
    x4 = (b6 * 473 - b4 * 196 + 128 >> 8) - b7;
    x0 = x4 - ((tmp1 - tmp2) * 362 + 128 >> 8);
    x1 = m0 - b1;
    x2 = ((block[2 * 8 + i] - block[6 * 8 + i]) * 362 + 128 >> 8) - b3;
    x3 = m0 + b1;
    y3 = x1 + x2;
    y4 = x3 + b3;
    y5 = x1 - x2;
    y6 = x3 - b3;
    y7 = -x0 - (b4 * 473 + b6 * 196 + 128 >> 8);
    block[0 * 8 + i] = b7 + y4;
    block[1 * 8 + i] = x4 + y3;
    block[2 * 8 + i] = y5 - x0;
    block[3 * 8 + i] = y6 - y7;
    block[4 * 8 + i] = y6 + y7;
    block[5 * 8 + i] = x0 + y5;
    block[6 * 8 + i] = y3 - x4;
    block[7 * 8 + i] = y4 - b7;
  } // Transform rows


  for (var _i2 = 0; _i2 < 64; _i2 += 8) {
    b1 = block[4 + _i2];
    b3 = block[2 + _i2] + block[6 + _i2];
    b4 = block[5 + _i2] - block[3 + _i2];
    tmp1 = block[1 + _i2] + block[7 + _i2];
    tmp2 = block[3 + _i2] + block[5 + _i2];
    b6 = block[1 + _i2] - block[7 + _i2];
    b7 = tmp1 + tmp2;
    m0 = block[0 + _i2];
    x4 = (b6 * 473 - b4 * 196 + 128 >> 8) - b7;
    x0 = x4 - ((tmp1 - tmp2) * 362 + 128 >> 8);
    x1 = m0 - b1;
    x2 = ((block[2 + _i2] - block[6 + _i2]) * 362 + 128 >> 8) - b3;
    x3 = m0 + b1;
    y3 = x1 + x2;
    y4 = x3 + b3;
    y5 = x1 - x2;
    y6 = x3 - b3;
    y7 = -x0 - (b4 * 473 + b6 * 196 + 128 >> 8);
    block[0 + _i2] = b7 + y4 + 128 >> 8;
    block[1 + _i2] = x4 + y3 + 128 >> 8;
    block[2 + _i2] = y5 - x0 + 128 >> 8;
    block[3 + _i2] = y6 - y7 + 128 >> 8;
    block[4 + _i2] = y6 + y7 + 128 >> 8;
    block[5 + _i2] = x0 + y5 + 128 >> 8;
    block[6 + _i2] = y3 - x4 + 128 >> 8;
    block[7 + _i2] = y4 - b7 + 128 >> 8;
  }
}; // VLC Tables and Constants


MPEG1.PICTURE_RATE = [0.000, 23.976, 24.000, 25.000, 29.970, 30.000, 50.000, 59.940, 60.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000];
MPEG1.ZIG_ZAG = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
MPEG1.DEFAULT_INTRA_QUANT_MATRIX = new Uint8Array([8, 16, 19, 22, 26, 27, 29, 34, 16, 16, 22, 24, 27, 29, 34, 37, 19, 22, 26, 27, 29, 34, 34, 38, 22, 22, 26, 27, 29, 34, 37, 40, 22, 26, 27, 29, 32, 35, 40, 48, 26, 27, 29, 32, 35, 40, 48, 58, 26, 27, 29, 34, 38, 46, 56, 69, 27, 29, 35, 38, 46, 56, 69, 83]);
MPEG1.DEFAULT_NON_INTRA_QUANT_MATRIX = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]);
MPEG1.PREMULTIPLIER_MATRIX = new Uint8Array([32, 44, 42, 38, 32, 25, 17, 9, 44, 62, 58, 52, 44, 35, 24, 12, 42, 58, 55, 49, 42, 33, 23, 12, 38, 52, 49, 44, 38, 30, 20, 10, 32, 44, 42, 38, 32, 25, 17, 9, 25, 35, 33, 30, 25, 20, 14, 7, 17, 24, 23, 20, 17, 14, 9, 5, 9, 12, 12, 10, 9, 7, 5, 2]); // MPEG-1 VLC
//  macroblock_stuffing decodes as 34.
//  macroblock_escape decodes as 35.

MPEG1.MACROBLOCK_ADDRESS_INCREMENT = new Int16Array([1 * 3, 2 * 3, 0, //   0
3 * 3, 4 * 3, 0, //   1  0
0, 0, 1, //   2  1.
5 * 3, 6 * 3, 0, //   3  00
7 * 3, 8 * 3, 0, //   4  01
9 * 3, 10 * 3, 0, //   5  000
11 * 3, 12 * 3, 0, //   6  001
0, 0, 3, //   7  010.
0, 0, 2, //   8  011.
13 * 3, 14 * 3, 0, //   9  0000
15 * 3, 16 * 3, 0, //  10  0001
0, 0, 5, //  11  0010.
0, 0, 4, //  12  0011.
17 * 3, 18 * 3, 0, //  13  0000 0
19 * 3, 20 * 3, 0, //  14  0000 1
0, 0, 7, //  15  0001 0.
0, 0, 6, //  16  0001 1.
21 * 3, 22 * 3, 0, //  17  0000 00
23 * 3, 24 * 3, 0, //  18  0000 01
25 * 3, 26 * 3, 0, //  19  0000 10
27 * 3, 28 * 3, 0, //  20  0000 11
-1, 29 * 3, 0, //  21  0000 000
-1, 30 * 3, 0, //  22  0000 001
31 * 3, 32 * 3, 0, //  23  0000 010
33 * 3, 34 * 3, 0, //  24  0000 011
35 * 3, 36 * 3, 0, //  25  0000 100
37 * 3, 38 * 3, 0, //  26  0000 101
0, 0, 9, //  27  0000 110.
0, 0, 8, //  28  0000 111.
39 * 3, 40 * 3, 0, //  29  0000 0001
41 * 3, 42 * 3, 0, //  30  0000 0011
43 * 3, 44 * 3, 0, //  31  0000 0100
45 * 3, 46 * 3, 0, //  32  0000 0101
0, 0, 15, //  33  0000 0110.
0, 0, 14, //  34  0000 0111.
0, 0, 13, //  35  0000 1000.
0, 0, 12, //  36  0000 1001.
0, 0, 11, //  37  0000 1010.
0, 0, 10, //  38  0000 1011.
47 * 3, -1, 0, //  39  0000 0001 0
-1, 48 * 3, 0, //  40  0000 0001 1
49 * 3, 50 * 3, 0, //  41  0000 0011 0
51 * 3, 52 * 3, 0, //  42  0000 0011 1
53 * 3, 54 * 3, 0, //  43  0000 0100 0
55 * 3, 56 * 3, 0, //  44  0000 0100 1
57 * 3, 58 * 3, 0, //  45  0000 0101 0
59 * 3, 60 * 3, 0, //  46  0000 0101 1
61 * 3, -1, 0, //  47  0000 0001 00
-1, 62 * 3, 0, //  48  0000 0001 11
63 * 3, 64 * 3, 0, //  49  0000 0011 00
65 * 3, 66 * 3, 0, //  50  0000 0011 01
67 * 3, 68 * 3, 0, //  51  0000 0011 10
69 * 3, 70 * 3, 0, //  52  0000 0011 11
71 * 3, 72 * 3, 0, //  53  0000 0100 00
73 * 3, 74 * 3, 0, //  54  0000 0100 01
0, 0, 21, //  55  0000 0100 10.
0, 0, 20, //  56  0000 0100 11.
0, 0, 19, //  57  0000 0101 00.
0, 0, 18, //  58  0000 0101 01.
0, 0, 17, //  59  0000 0101 10.
0, 0, 16, //  60  0000 0101 11.
0, 0, 35, //  61  0000 0001 000. -- macroblock_escape
0, 0, 34, //  62  0000 0001 111. -- macroblock_stuffing
0, 0, 33, //  63  0000 0011 000.
0, 0, 32, //  64  0000 0011 001.
0, 0, 31, //  65  0000 0011 010.
0, 0, 30, //  66  0000 0011 011.
0, 0, 29, //  67  0000 0011 100.
0, 0, 28, //  68  0000 0011 101.
0, 0, 27, //  69  0000 0011 110.
0, 0, 26, //  70  0000 0011 111.
0, 0, 25, //  71  0000 0100 000.
0, 0, 24, //  72  0000 0100 001.
0, 0, 23, //  73  0000 0100 010.
0, 0, 22 //  74  0000 0100 011.
]); //  macroblock_type bitmap:
//    0x10  macroblock_quant
//    0x08  macroblock_motion_forward
//    0x04  macroblock_motion_backward
//    0x02  macrobkock_pattern
//    0x01  macroblock_intra
//

MPEG1.MACROBLOCK_TYPE_INTRA = new Int8Array([1 * 3, 2 * 3, 0, //   0
-1, 3 * 3, 0, //   1  0
0, 0, 0x01, //   2  1.
0, 0, 0x11 //   3  01.
]);
MPEG1.MACROBLOCK_TYPE_PREDICTIVE = new Int8Array([1 * 3, 2 * 3, 0, //  0
3 * 3, 4 * 3, 0, //  1  0
0, 0, 0x0a, //  2  1.
5 * 3, 6 * 3, 0, //  3  00
0, 0, 0x02, //  4  01.
7 * 3, 8 * 3, 0, //  5  000
0, 0, 0x08, //  6  001.
9 * 3, 10 * 3, 0, //  7  0000
11 * 3, 12 * 3, 0, //  8  0001
-1, 13 * 3, 0, //  9  00000
0, 0, 0x12, // 10  00001.
0, 0, 0x1a, // 11  00010.
0, 0, 0x01, // 12  00011.
0, 0, 0x11 // 13  000001.
]);
MPEG1.MACROBLOCK_TYPE_B = new Int8Array([1 * 3, 2 * 3, 0, //  0
3 * 3, 5 * 3, 0, //  1  0
4 * 3, 6 * 3, 0, //  2  1
8 * 3, 7 * 3, 0, //  3  00
0, 0, 0x0c, //  4  10.
9 * 3, 10 * 3, 0, //  5  01
0, 0, 0x0e, //  6  11.
13 * 3, 14 * 3, 0, //  7  001
12 * 3, 11 * 3, 0, //  8  000
0, 0, 0x04, //  9  010.
0, 0, 0x06, // 10  011.
18 * 3, 16 * 3, 0, // 11  0001
15 * 3, 17 * 3, 0, // 12  0000
0, 0, 0x08, // 13  0010.
0, 0, 0x0a, // 14  0011.
-1, 19 * 3, 0, // 15  00000
0, 0, 0x01, // 16  00011.
20 * 3, 21 * 3, 0, // 17  00001
0, 0, 0x1e, // 18  00010.
0, 0, 0x11, // 19  000001.
0, 0, 0x16, // 20  000010.
0, 0, 0x1a // 21  000011.
]);
MPEG1.MACROBLOCK_TYPE = [null, MPEG1.MACROBLOCK_TYPE_INTRA, MPEG1.MACROBLOCK_TYPE_PREDICTIVE, MPEG1.MACROBLOCK_TYPE_B];
MPEG1.CODE_BLOCK_PATTERN = new Int16Array([2 * 3, 1 * 3, 0, //   0
3 * 3, 6 * 3, 0, //   1  1
4 * 3, 5 * 3, 0, //   2  0
8 * 3, 11 * 3, 0, //   3  10
12 * 3, 13 * 3, 0, //   4  00
9 * 3, 7 * 3, 0, //   5  01
10 * 3, 14 * 3, 0, //   6  11
20 * 3, 19 * 3, 0, //   7  011
18 * 3, 16 * 3, 0, //   8  100
23 * 3, 17 * 3, 0, //   9  010
27 * 3, 25 * 3, 0, //  10  110
21 * 3, 28 * 3, 0, //  11  101
15 * 3, 22 * 3, 0, //  12  000
24 * 3, 26 * 3, 0, //  13  001
0, 0, 60, //  14  111.
35 * 3, 40 * 3, 0, //  15  0000
44 * 3, 48 * 3, 0, //  16  1001
38 * 3, 36 * 3, 0, //  17  0101
42 * 3, 47 * 3, 0, //  18  1000
29 * 3, 31 * 3, 0, //  19  0111
39 * 3, 32 * 3, 0, //  20  0110
0, 0, 32, //  21  1010.
45 * 3, 46 * 3, 0, //  22  0001
33 * 3, 41 * 3, 0, //  23  0100
43 * 3, 34 * 3, 0, //  24  0010
0, 0, 4, //  25  1101.
30 * 3, 37 * 3, 0, //  26  0011
0, 0, 8, //  27  1100.
0, 0, 16, //  28  1011.
0, 0, 44, //  29  0111 0.
50 * 3, 56 * 3, 0, //  30  0011 0
0, 0, 28, //  31  0111 1.
0, 0, 52, //  32  0110 1.
0, 0, 62, //  33  0100 0.
61 * 3, 59 * 3, 0, //  34  0010 1
52 * 3, 60 * 3, 0, //  35  0000 0
0, 0, 1, //  36  0101 1.
55 * 3, 54 * 3, 0, //  37  0011 1
0, 0, 61, //  38  0101 0.
0, 0, 56, //  39  0110 0.
57 * 3, 58 * 3, 0, //  40  0000 1
0, 0, 2, //  41  0100 1.
0, 0, 40, //  42  1000 0.
51 * 3, 62 * 3, 0, //  43  0010 0
0, 0, 48, //  44  1001 0.
64 * 3, 63 * 3, 0, //  45  0001 0
49 * 3, 53 * 3, 0, //  46  0001 1
0, 0, 20, //  47  1000 1.
0, 0, 12, //  48  1001 1.
80 * 3, 83 * 3, 0, //  49  0001 10
0, 0, 63, //  50  0011 00.
77 * 3, 75 * 3, 0, //  51  0010 00
65 * 3, 73 * 3, 0, //  52  0000 00
84 * 3, 66 * 3, 0, //  53  0001 11
0, 0, 24, //  54  0011 11.
0, 0, 36, //  55  0011 10.
0, 0, 3, //  56  0011 01.
69 * 3, 87 * 3, 0, //  57  0000 10
81 * 3, 79 * 3, 0, //  58  0000 11
68 * 3, 71 * 3, 0, //  59  0010 11
70 * 3, 78 * 3, 0, //  60  0000 01
67 * 3, 76 * 3, 0, //  61  0010 10
72 * 3, 74 * 3, 0, //  62  0010 01
86 * 3, 85 * 3, 0, //  63  0001 01
88 * 3, 82 * 3, 0, //  64  0001 00
-1, 94 * 3, 0, //  65  0000 000
95 * 3, 97 * 3, 0, //  66  0001 111
0, 0, 33, //  67  0010 100.
0, 0, 9, //  68  0010 110.
106 * 3, 110 * 3, 0, //  69  0000 100
102 * 3, 116 * 3, 0, //  70  0000 010
0, 0, 5, //  71  0010 111.
0, 0, 10, //  72  0010 010.
93 * 3, 89 * 3, 0, //  73  0000 001
0, 0, 6, //  74  0010 011.
0, 0, 18, //  75  0010 001.
0, 0, 17, //  76  0010 101.
0, 0, 34, //  77  0010 000.
113 * 3, 119 * 3, 0, //  78  0000 011
103 * 3, 104 * 3, 0, //  79  0000 111
90 * 3, 92 * 3, 0, //  80  0001 100
109 * 3, 107 * 3, 0, //  81  0000 110
117 * 3, 118 * 3, 0, //  82  0001 001
101 * 3, 99 * 3, 0, //  83  0001 101
98 * 3, 96 * 3, 0, //  84  0001 110
100 * 3, 91 * 3, 0, //  85  0001 011
114 * 3, 115 * 3, 0, //  86  0001 010
105 * 3, 108 * 3, 0, //  87  0000 101
112 * 3, 111 * 3, 0, //  88  0001 000
121 * 3, 125 * 3, 0, //  89  0000 0011
0, 0, 41, //  90  0001 1000.
0, 0, 14, //  91  0001 0111.
0, 0, 21, //  92  0001 1001.
124 * 3, 122 * 3, 0, //  93  0000 0010
120 * 3, 123 * 3, 0, //  94  0000 0001
0, 0, 11, //  95  0001 1110.
0, 0, 19, //  96  0001 1101.
0, 0, 7, //  97  0001 1111.
0, 0, 35, //  98  0001 1100.
0, 0, 13, //  99  0001 1011.
0, 0, 50, // 100  0001 0110.
0, 0, 49, // 101  0001 1010.
0, 0, 58, // 102  0000 0100.
0, 0, 37, // 103  0000 1110.
0, 0, 25, // 104  0000 1111.
0, 0, 45, // 105  0000 1010.
0, 0, 57, // 106  0000 1000.
0, 0, 26, // 107  0000 1101.
0, 0, 29, // 108  0000 1011.
0, 0, 38, // 109  0000 1100.
0, 0, 53, // 110  0000 1001.
0, 0, 23, // 111  0001 0001.
0, 0, 43, // 112  0001 0000.
0, 0, 46, // 113  0000 0110.
0, 0, 42, // 114  0001 0100.
0, 0, 22, // 115  0001 0101.
0, 0, 54, // 116  0000 0101.
0, 0, 51, // 117  0001 0010.
0, 0, 15, // 118  0001 0011.
0, 0, 30, // 119  0000 0111.
0, 0, 39, // 120  0000 0001 0.
0, 0, 47, // 121  0000 0011 0.
0, 0, 55, // 122  0000 0010 1.
0, 0, 27, // 123  0000 0001 1.
0, 0, 59, // 124  0000 0010 0.
0, 0, 31 // 125  0000 0011 1.
]);
MPEG1.MOTION = new Int16Array([1 * 3, 2 * 3, 0, //   0
4 * 3, 3 * 3, 0, //   1  0
0, 0, 0, //   2  1.
6 * 3, 5 * 3, 0, //   3  01
8 * 3, 7 * 3, 0, //   4  00
0, 0, -1, //   5  011.
0, 0, 1, //   6  010.
9 * 3, 10 * 3, 0, //   7  001
12 * 3, 11 * 3, 0, //   8  000
0, 0, 2, //   9  0010.
0, 0, -2, //  10  0011.
14 * 3, 15 * 3, 0, //  11  0001
16 * 3, 13 * 3, 0, //  12  0000
20 * 3, 18 * 3, 0, //  13  0000 1
0, 0, 3, //  14  0001 0.
0, 0, -3, //  15  0001 1.
17 * 3, 19 * 3, 0, //  16  0000 0
-1, 23 * 3, 0, //  17  0000 00
27 * 3, 25 * 3, 0, //  18  0000 11
26 * 3, 21 * 3, 0, //  19  0000 01
24 * 3, 22 * 3, 0, //  20  0000 10
32 * 3, 28 * 3, 0, //  21  0000 011
29 * 3, 31 * 3, 0, //  22  0000 101
-1, 33 * 3, 0, //  23  0000 001
36 * 3, 35 * 3, 0, //  24  0000 100
0, 0, -4, //  25  0000 111.
30 * 3, 34 * 3, 0, //  26  0000 010
0, 0, 4, //  27  0000 110.
0, 0, -7, //  28  0000 0111.
0, 0, 5, //  29  0000 1010.
37 * 3, 41 * 3, 0, //  30  0000 0100
0, 0, -5, //  31  0000 1011.
0, 0, 7, //  32  0000 0110.
38 * 3, 40 * 3, 0, //  33  0000 0011
42 * 3, 39 * 3, 0, //  34  0000 0101
0, 0, -6, //  35  0000 1001.
0, 0, 6, //  36  0000 1000.
51 * 3, 54 * 3, 0, //  37  0000 0100 0
50 * 3, 49 * 3, 0, //  38  0000 0011 0
45 * 3, 46 * 3, 0, //  39  0000 0101 1
52 * 3, 47 * 3, 0, //  40  0000 0011 1
43 * 3, 53 * 3, 0, //  41  0000 0100 1
44 * 3, 48 * 3, 0, //  42  0000 0101 0
0, 0, 10, //  43  0000 0100 10.
0, 0, 9, //  44  0000 0101 00.
0, 0, 8, //  45  0000 0101 10.
0, 0, -8, //  46  0000 0101 11.
57 * 3, 66 * 3, 0, //  47  0000 0011 11
0, 0, -9, //  48  0000 0101 01.
60 * 3, 64 * 3, 0, //  49  0000 0011 01
56 * 3, 61 * 3, 0, //  50  0000 0011 00
55 * 3, 62 * 3, 0, //  51  0000 0100 00
58 * 3, 63 * 3, 0, //  52  0000 0011 10
0, 0, -10, //  53  0000 0100 11.
59 * 3, 65 * 3, 0, //  54  0000 0100 01
0, 0, 12, //  55  0000 0100 000.
0, 0, 16, //  56  0000 0011 000.
0, 0, 13, //  57  0000 0011 110.
0, 0, 14, //  58  0000 0011 100.
0, 0, 11, //  59  0000 0100 010.
0, 0, 15, //  60  0000 0011 010.
0, 0, -16, //  61  0000 0011 001.
0, 0, -12, //  62  0000 0100 001.
0, 0, -14, //  63  0000 0011 101.
0, 0, -15, //  64  0000 0011 011.
0, 0, -11, //  65  0000 0100 011.
0, 0, -13 //  66  0000 0011 111.
]);
MPEG1.DCT_DC_SIZE_LUMINANCE = new Int8Array([2 * 3, 1 * 3, 0, //   0
6 * 3, 5 * 3, 0, //   1  1
3 * 3, 4 * 3, 0, //   2  0
0, 0, 1, //   3  00.
0, 0, 2, //   4  01.
9 * 3, 8 * 3, 0, //   5  11
7 * 3, 10 * 3, 0, //   6  10
0, 0, 0, //   7  100.
12 * 3, 11 * 3, 0, //   8  111
0, 0, 4, //   9  110.
0, 0, 3, //  10  101.
13 * 3, 14 * 3, 0, //  11  1111
0, 0, 5, //  12  1110.
0, 0, 6, //  13  1111 0.
16 * 3, 15 * 3, 0, //  14  1111 1
17 * 3, -1, 0, //  15  1111 11
0, 0, 7, //  16  1111 10.
0, 0, 8 //  17  1111 110.
]);
MPEG1.DCT_DC_SIZE_CHROMINANCE = new Int8Array([2 * 3, 1 * 3, 0, //   0
4 * 3, 3 * 3, 0, //   1  1
6 * 3, 5 * 3, 0, //   2  0
8 * 3, 7 * 3, 0, //   3  11
0, 0, 2, //   4  10.
0, 0, 1, //   5  01.
0, 0, 0, //   6  00.
10 * 3, 9 * 3, 0, //   7  111
0, 0, 3, //   8  110.
12 * 3, 11 * 3, 0, //   9  1111
0, 0, 4, //  10  1110.
14 * 3, 13 * 3, 0, //  11  1111 1
0, 0, 5, //  12  1111 0.
16 * 3, 15 * 3, 0, //  13  1111 11
0, 0, 6, //  14  1111 10.
17 * 3, -1, 0, //  15  1111 111
0, 0, 7, //  16  1111 110.
0, 0, 8 //  17  1111 1110.
]); //  dct_coeff bitmap:
//    0xff00  run
//    0x00ff  level
//  Decoded values are unsigned. Sign bit follows in the stream.
//  Interpretation of the value 0x0001
//    for dc_coeff_first:  run=0, level=1
//    for dc_coeff_next:   If the next bit is 1: run=0, level=1
//                         If the next bit is 0: end_of_block
//  escape decodes as 0xffff.

MPEG1.DCT_COEFF = new Int32Array([1 * 3, 2 * 3, 0, //   0
4 * 3, 3 * 3, 0, //   1  0
0, 0, 0x0001, //   2  1.
7 * 3, 8 * 3, 0, //   3  01
6 * 3, 5 * 3, 0, //   4  00
13 * 3, 9 * 3, 0, //   5  001
11 * 3, 10 * 3, 0, //   6  000
14 * 3, 12 * 3, 0, //   7  010
0, 0, 0x0101, //   8  011.
20 * 3, 22 * 3, 0, //   9  0011
18 * 3, 21 * 3, 0, //  10  0001
16 * 3, 19 * 3, 0, //  11  0000
0, 0, 0x0201, //  12  0101.
17 * 3, 15 * 3, 0, //  13  0010
0, 0, 0x0002, //  14  0100.
0, 0, 0x0003, //  15  0010 1.
27 * 3, 25 * 3, 0, //  16  0000 0
29 * 3, 31 * 3, 0, //  17  0010 0
24 * 3, 26 * 3, 0, //  18  0001 0
32 * 3, 30 * 3, 0, //  19  0000 1
0, 0, 0x0401, //  20  0011 0.
23 * 3, 28 * 3, 0, //  21  0001 1
0, 0, 0x0301, //  22  0011 1.
0, 0, 0x0102, //  23  0001 10.
0, 0, 0x0701, //  24  0001 00.
0, 0, 0xffff, //  25  0000 01. -- escape
0, 0, 0x0601, //  26  0001 01.
37 * 3, 36 * 3, 0, //  27  0000 00
0, 0, 0x0501, //  28  0001 11.
35 * 3, 34 * 3, 0, //  29  0010 00
39 * 3, 38 * 3, 0, //  30  0000 11
33 * 3, 42 * 3, 0, //  31  0010 01
40 * 3, 41 * 3, 0, //  32  0000 10
52 * 3, 50 * 3, 0, //  33  0010 010
54 * 3, 53 * 3, 0, //  34  0010 001
48 * 3, 49 * 3, 0, //  35  0010 000
43 * 3, 45 * 3, 0, //  36  0000 001
46 * 3, 44 * 3, 0, //  37  0000 000
0, 0, 0x0801, //  38  0000 111.
0, 0, 0x0004, //  39  0000 110.
0, 0, 0x0202, //  40  0000 100.
0, 0, 0x0901, //  41  0000 101.
51 * 3, 47 * 3, 0, //  42  0010 011
55 * 3, 57 * 3, 0, //  43  0000 0010
60 * 3, 56 * 3, 0, //  44  0000 0001
59 * 3, 58 * 3, 0, //  45  0000 0011
61 * 3, 62 * 3, 0, //  46  0000 0000
0, 0, 0x0a01, //  47  0010 0111.
0, 0, 0x0d01, //  48  0010 0000.
0, 0, 0x0006, //  49  0010 0001.
0, 0, 0x0103, //  50  0010 0101.
0, 0, 0x0005, //  51  0010 0110.
0, 0, 0x0302, //  52  0010 0100.
0, 0, 0x0b01, //  53  0010 0011.
0, 0, 0x0c01, //  54  0010 0010.
76 * 3, 75 * 3, 0, //  55  0000 0010 0
67 * 3, 70 * 3, 0, //  56  0000 0001 1
73 * 3, 71 * 3, 0, //  57  0000 0010 1
78 * 3, 74 * 3, 0, //  58  0000 0011 1
72 * 3, 77 * 3, 0, //  59  0000 0011 0
69 * 3, 64 * 3, 0, //  60  0000 0001 0
68 * 3, 63 * 3, 0, //  61  0000 0000 0
66 * 3, 65 * 3, 0, //  62  0000 0000 1
81 * 3, 87 * 3, 0, //  63  0000 0000 01
91 * 3, 80 * 3, 0, //  64  0000 0001 01
82 * 3, 79 * 3, 0, //  65  0000 0000 11
83 * 3, 86 * 3, 0, //  66  0000 0000 10
93 * 3, 92 * 3, 0, //  67  0000 0001 10
84 * 3, 85 * 3, 0, //  68  0000 0000 00
90 * 3, 94 * 3, 0, //  69  0000 0001 00
88 * 3, 89 * 3, 0, //  70  0000 0001 11
0, 0, 0x0203, //  71  0000 0010 11.
0, 0, 0x0104, //  72  0000 0011 00.
0, 0, 0x0007, //  73  0000 0010 10.
0, 0, 0x0402, //  74  0000 0011 11.
0, 0, 0x0502, //  75  0000 0010 01.
0, 0, 0x1001, //  76  0000 0010 00.
0, 0, 0x0f01, //  77  0000 0011 01.
0, 0, 0x0e01, //  78  0000 0011 10.
105 * 3, 107 * 3, 0, //  79  0000 0000 111
111 * 3, 114 * 3, 0, //  80  0000 0001 011
104 * 3, 97 * 3, 0, //  81  0000 0000 010
125 * 3, 119 * 3, 0, //  82  0000 0000 110
96 * 3, 98 * 3, 0, //  83  0000 0000 100
-1, 123 * 3, 0, //  84  0000 0000 000
95 * 3, 101 * 3, 0, //  85  0000 0000 001
106 * 3, 121 * 3, 0, //  86  0000 0000 101
99 * 3, 102 * 3, 0, //  87  0000 0000 011
113 * 3, 103 * 3, 0, //  88  0000 0001 110
112 * 3, 116 * 3, 0, //  89  0000 0001 111
110 * 3, 100 * 3, 0, //  90  0000 0001 000
124 * 3, 115 * 3, 0, //  91  0000 0001 010
117 * 3, 122 * 3, 0, //  92  0000 0001 101
109 * 3, 118 * 3, 0, //  93  0000 0001 100
120 * 3, 108 * 3, 0, //  94  0000 0001 001
127 * 3, 136 * 3, 0, //  95  0000 0000 0010
139 * 3, 140 * 3, 0, //  96  0000 0000 1000
130 * 3, 126 * 3, 0, //  97  0000 0000 0101
145 * 3, 146 * 3, 0, //  98  0000 0000 1001
128 * 3, 129 * 3, 0, //  99  0000 0000 0110
0, 0, 0x0802, // 100  0000 0001 0001.
132 * 3, 134 * 3, 0, // 101  0000 0000 0011
155 * 3, 154 * 3, 0, // 102  0000 0000 0111
0, 0, 0x0008, // 103  0000 0001 1101.
137 * 3, 133 * 3, 0, // 104  0000 0000 0100
143 * 3, 144 * 3, 0, // 105  0000 0000 1110
151 * 3, 138 * 3, 0, // 106  0000 0000 1010
142 * 3, 141 * 3, 0, // 107  0000 0000 1111
0, 0, 0x000a, // 108  0000 0001 0011.
0, 0, 0x0009, // 109  0000 0001 1000.
0, 0, 0x000b, // 110  0000 0001 0000.
0, 0, 0x1501, // 111  0000 0001 0110.
0, 0, 0x0602, // 112  0000 0001 1110.
0, 0, 0x0303, // 113  0000 0001 1100.
0, 0, 0x1401, // 114  0000 0001 0111.
0, 0, 0x0702, // 115  0000 0001 0101.
0, 0, 0x1101, // 116  0000 0001 1111.
0, 0, 0x1201, // 117  0000 0001 1010.
0, 0, 0x1301, // 118  0000 0001 1001.
148 * 3, 152 * 3, 0, // 119  0000 0000 1101
0, 0, 0x0403, // 120  0000 0001 0010.
153 * 3, 150 * 3, 0, // 121  0000 0000 1011
0, 0, 0x0105, // 122  0000 0001 1011.
131 * 3, 135 * 3, 0, // 123  0000 0000 0001
0, 0, 0x0204, // 124  0000 0001 0100.
149 * 3, 147 * 3, 0, // 125  0000 0000 1100
172 * 3, 173 * 3, 0, // 126  0000 0000 0101 1
162 * 3, 158 * 3, 0, // 127  0000 0000 0010 0
170 * 3, 161 * 3, 0, // 128  0000 0000 0110 0
168 * 3, 166 * 3, 0, // 129  0000 0000 0110 1
157 * 3, 179 * 3, 0, // 130  0000 0000 0101 0
169 * 3, 167 * 3, 0, // 131  0000 0000 0001 0
174 * 3, 171 * 3, 0, // 132  0000 0000 0011 0
178 * 3, 177 * 3, 0, // 133  0000 0000 0100 1
156 * 3, 159 * 3, 0, // 134  0000 0000 0011 1
164 * 3, 165 * 3, 0, // 135  0000 0000 0001 1
183 * 3, 182 * 3, 0, // 136  0000 0000 0010 1
175 * 3, 176 * 3, 0, // 137  0000 0000 0100 0
0, 0, 0x0107, // 138  0000 0000 1010 1.
0, 0, 0x0a02, // 139  0000 0000 1000 0.
0, 0, 0x0902, // 140  0000 0000 1000 1.
0, 0, 0x1601, // 141  0000 0000 1111 1.
0, 0, 0x1701, // 142  0000 0000 1111 0.
0, 0, 0x1901, // 143  0000 0000 1110 0.
0, 0, 0x1801, // 144  0000 0000 1110 1.
0, 0, 0x0503, // 145  0000 0000 1001 0.
0, 0, 0x0304, // 146  0000 0000 1001 1.
0, 0, 0x000d, // 147  0000 0000 1100 1.
0, 0, 0x000c, // 148  0000 0000 1101 0.
0, 0, 0x000e, // 149  0000 0000 1100 0.
0, 0, 0x000f, // 150  0000 0000 1011 1.
0, 0, 0x0205, // 151  0000 0000 1010 0.
0, 0, 0x1a01, // 152  0000 0000 1101 1.
0, 0, 0x0106, // 153  0000 0000 1011 0.
180 * 3, 181 * 3, 0, // 154  0000 0000 0111 1
160 * 3, 163 * 3, 0, // 155  0000 0000 0111 0
196 * 3, 199 * 3, 0, // 156  0000 0000 0011 10
0, 0, 0x001b, // 157  0000 0000 0101 00.
203 * 3, 185 * 3, 0, // 158  0000 0000 0010 01
202 * 3, 201 * 3, 0, // 159  0000 0000 0011 11
0, 0, 0x0013, // 160  0000 0000 0111 00.
0, 0, 0x0016, // 161  0000 0000 0110 01.
197 * 3, 207 * 3, 0, // 162  0000 0000 0010 00
0, 0, 0x0012, // 163  0000 0000 0111 01.
191 * 3, 192 * 3, 0, // 164  0000 0000 0001 10
188 * 3, 190 * 3, 0, // 165  0000 0000 0001 11
0, 0, 0x0014, // 166  0000 0000 0110 11.
184 * 3, 194 * 3, 0, // 167  0000 0000 0001 01
0, 0, 0x0015, // 168  0000 0000 0110 10.
186 * 3, 193 * 3, 0, // 169  0000 0000 0001 00
0, 0, 0x0017, // 170  0000 0000 0110 00.
204 * 3, 198 * 3, 0, // 171  0000 0000 0011 01
0, 0, 0x0019, // 172  0000 0000 0101 10.
0, 0, 0x0018, // 173  0000 0000 0101 11.
200 * 3, 205 * 3, 0, // 174  0000 0000 0011 00
0, 0, 0x001f, // 175  0000 0000 0100 00.
0, 0, 0x001e, // 176  0000 0000 0100 01.
0, 0, 0x001c, // 177  0000 0000 0100 11.
0, 0, 0x001d, // 178  0000 0000 0100 10.
0, 0, 0x001a, // 179  0000 0000 0101 01.
0, 0, 0x0011, // 180  0000 0000 0111 10.
0, 0, 0x0010, // 181  0000 0000 0111 11.
189 * 3, 206 * 3, 0, // 182  0000 0000 0010 11
187 * 3, 195 * 3, 0, // 183  0000 0000 0010 10
218 * 3, 211 * 3, 0, // 184  0000 0000 0001 010
0, 0, 0x0025, // 185  0000 0000 0010 011.
215 * 3, 216 * 3, 0, // 186  0000 0000 0001 000
0, 0, 0x0024, // 187  0000 0000 0010 100.
210 * 3, 212 * 3, 0, // 188  0000 0000 0001 110
0, 0, 0x0022, // 189  0000 0000 0010 110.
213 * 3, 209 * 3, 0, // 190  0000 0000 0001 111
221 * 3, 222 * 3, 0, // 191  0000 0000 0001 100
219 * 3, 208 * 3, 0, // 192  0000 0000 0001 101
217 * 3, 214 * 3, 0, // 193  0000 0000 0001 001
223 * 3, 220 * 3, 0, // 194  0000 0000 0001 011
0, 0, 0x0023, // 195  0000 0000 0010 101.
0, 0, 0x010b, // 196  0000 0000 0011 100.
0, 0, 0x0028, // 197  0000 0000 0010 000.
0, 0, 0x010c, // 198  0000 0000 0011 011.
0, 0, 0x010a, // 199  0000 0000 0011 101.
0, 0, 0x0020, // 200  0000 0000 0011 000.
0, 0, 0x0108, // 201  0000 0000 0011 111.
0, 0, 0x0109, // 202  0000 0000 0011 110.
0, 0, 0x0026, // 203  0000 0000 0010 010.
0, 0, 0x010d, // 204  0000 0000 0011 010.
0, 0, 0x010e, // 205  0000 0000 0011 001.
0, 0, 0x0021, // 206  0000 0000 0010 111.
0, 0, 0x0027, // 207  0000 0000 0010 001.
0, 0, 0x1f01, // 208  0000 0000 0001 1011.
0, 0, 0x1b01, // 209  0000 0000 0001 1111.
0, 0, 0x1e01, // 210  0000 0000 0001 1100.
0, 0, 0x1002, // 211  0000 0000 0001 0101.
0, 0, 0x1d01, // 212  0000 0000 0001 1101.
0, 0, 0x1c01, // 213  0000 0000 0001 1110.
0, 0, 0x010f, // 214  0000 0000 0001 0011.
0, 0, 0x0112, // 215  0000 0000 0001 0000.
0, 0, 0x0111, // 216  0000 0000 0001 0001.
0, 0, 0x0110, // 217  0000 0000 0001 0010.
0, 0, 0x0603, // 218  0000 0000 0001 0100.
0, 0, 0x0b02, // 219  0000 0000 0001 1010.
0, 0, 0x0e02, // 220  0000 0000 0001 0111.
0, 0, 0x0d02, // 221  0000 0000 0001 1000.
0, 0, 0x0c02, // 222  0000 0000 0001 1001.
0, 0, 0x0f02 // 223  0000 0000 0001 0110.
]);
MPEG1.PICTURE_TYPE = {
  INTRA: 1,
  PREDICTIVE: 2,
  B: 3
};
MPEG1.START = {
  SEQUENCE: 0xB3,
  SLICE_FIRST: 0x01,
  SLICE_LAST: 0xAF,
  PICTURE: 0x00,
  EXTENSION: 0xB5,
  USER_DATA: 0xB2
};
/* harmony default export */ __webpack_exports__["default"] = (MPEG1);

/***/ }),

/***/ "./src/lib/player.js":
/*!***************************!*\
  !*** ./src/lib/player.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ "./src/lib/ajax.js");
/* harmony import */ var _ajax_progressive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax-progressive */ "./src/lib/ajax-progressive.js");
/* harmony import */ var _websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./websocket */ "./src/lib/websocket.js");
/* harmony import */ var _ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts */ "./src/lib/ts.js");
/* harmony import */ var _mpeg1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mpeg1 */ "./src/lib/mpeg1.js");
/* harmony import */ var _mpeg1_wasm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mpeg1-wasm */ "./src/lib/mpeg1-wasm.js");
/* harmony import */ var _mp2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mp2 */ "./src/lib/mp2.js");
/* harmony import */ var _mp2_wasm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mp2-wasm */ "./src/lib/mp2-wasm.js");
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webgl */ "./src/lib/webgl.js");
/* harmony import */ var _canvas2d__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./canvas2d */ "./src/lib/canvas2d.js");
/* harmony import */ var _webaudio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./webaudio */ "./src/lib/webaudio.js");
/* harmony import */ var _wasm_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wasm-module */ "./src/lib/wasm-module.js");
/* harmony import */ var _wasm_WASM_BINARY__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wasm/WASM_BINARY */ "./src/lib/wasm/WASM_BINARY.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils */ "./src/utils.js");














/**
 * @param url
 * @param options
 * @param cbUI {play: function, pause: function, stop: function} 插入UI回调
 * @constructor
 */

var Player = function Player(url, options, cbUI) {
  this.options = options || {};
  this.cbUI = cbUI || {};

  if (options.source) {
    this.source = new options.source(url, options);
    options.streaming = !!this.source.streaming;
  } else if (url.match(/^wss?:\/\//)) {
    this.source = new _websocket__WEBPACK_IMPORTED_MODULE_2__["default"](url, options);
    options.streaming = true;
  } else if (options.progressive) {
    this.source = new _ajax_progressive__WEBPACK_IMPORTED_MODULE_1__["default"](url, options);
    options.streaming = false;
  } else {
    this.source = new _ajax__WEBPACK_IMPORTED_MODULE_0__["default"](url, options);
    options.streaming = false;
  }

  this.maxAudioLag = options.maxAudioLag || 0.25;
  this.loop = options.loop !== false;
  this.autoplay = !!options.autoplay || options.streaming;
  this.demuxer = new _ts__WEBPACK_IMPORTED_MODULE_3__["default"](options);
  this.source.connect(this.demuxer);

  if (!options.disableWebAssembly && _wasm_module__WEBPACK_IMPORTED_MODULE_11__["default"].IsSupported()) {
    this.wasmModule = new _wasm_module__WEBPACK_IMPORTED_MODULE_11__["default"]();
    options.wasmModule = this.wasmModule;
  }

  if (options.video !== false) {
    this.video = options.wasmModule ? new _mpeg1_wasm__WEBPACK_IMPORTED_MODULE_5__["default"](options) : new _mpeg1__WEBPACK_IMPORTED_MODULE_4__["default"](options);
    this.renderer = !options.disableGl && _webgl__WEBPACK_IMPORTED_MODULE_8__["default"].IsSupported() ? new _webgl__WEBPACK_IMPORTED_MODULE_8__["default"](options) : new _canvas2d__WEBPACK_IMPORTED_MODULE_9__["default"](options);
    this.demuxer.connect(_ts__WEBPACK_IMPORTED_MODULE_3__["default"].STREAM.VIDEO_1, this.video);
    this.video.connect(this.renderer);
  }

  if (options.audio !== false && _webaudio__WEBPACK_IMPORTED_MODULE_10__["default"].IsSupported()) {
    this.audio = options.wasmModule ? new _mp2_wasm__WEBPACK_IMPORTED_MODULE_7__["default"](options) : new _mp2__WEBPACK_IMPORTED_MODULE_6__["default"](options);
    this.audioOut = new _webaudio__WEBPACK_IMPORTED_MODULE_10__["default"](options);
    this.demuxer.connect(_ts__WEBPACK_IMPORTED_MODULE_3__["default"].STREAM.AUDIO_1, this.audio);
    this.audio.connect(this.audioOut);
  }

  Object.defineProperty(this, 'currentTime', {
    get: this.getCurrentTime,
    set: this.setCurrentTime
  });
  Object.defineProperty(this, 'volume', {
    get: this.getVolume,
    set: this.setVolume
  });
  this.unpauseOnShow = false;

  if (options.pauseWhenHidden !== false) {
    document.addEventListener('visibilitychange', this.showHide.bind(this));
  } // If we have WebAssembly support, wait until the module is compiled before
  // loading the source. Otherwise the decoders won't know what to do with
  // the source data.


  if (this.wasmModule) {
    if (_wasm_WASM_BINARY__WEBPACK_IMPORTED_MODULE_12__["default"]) {
      var wasm = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["Base64ToArrayBuffer"])(_wasm_WASM_BINARY__WEBPACK_IMPORTED_MODULE_12__["default"]);
      this.wasmModule.loadFromBuffer(wasm, this.startLoading.bind(this));
    } else {
      this.wasmModule.loadFromFile('jsmpeg.wasm', this.startLoading.bind(this));
    }
  } else {
    this.startLoading();
  }
};

Player.prototype.startLoading = function () {
  this.source.start();

  if (this.autoplay) {
    this.play();
  }
};

Player.prototype.showHide = function (ev) {
  if (document.visibilityState === 'hidden') {
    this.unpauseOnShow = this.wantsToPlay;
    this.pause();
  } else if (this.unpauseOnShow) {
    this.play();
  }
};

Player.prototype.play = function (ev) {
  this.animationId = requestAnimationFrame(this.update.bind(this));
  this.wantsToPlay = true;

  if (this.cbUI.play) {
    this.cbUI.play();
  }
};

Player.prototype.pause = function (ev) {
  cancelAnimationFrame(this.animationId);
  this.wantsToPlay = false;
  this.isPlaying = false;

  if (this.audio && this.audio.canPlay) {
    // Seek to the currentTime again - audio may already be enqueued a bit
    // further, so we have to rewind it.
    this.audioOut.stop();
    this.seek(this.currentTime);
  }

  if (this.cbUI.pause) {
    this.cbUI.pause();
  }
};

Player.prototype.getVolume = function () {
  return this.audioOut ? this.audioOut.volume : 0;
};

Player.prototype.setVolume = function (volume) {
  if (this.audioOut) {
    this.audioOut.volume = volume;
  }
};

Player.prototype.stop = function (ev) {
  this.pause();
  this.seek(0);

  if (this.video && this.options.decodeFirstFrame !== false) {
    this.video.decode();
  }

  if (this.cbUI.stop) {
    this.cbUI.stop();
  }
};

Player.prototype.destroy = function () {
  this.pause();
  this.source.destroy();
  this.video && this.video.destroy();
  this.renderer && this.renderer.destroy();
  this.audio && this.audio.destroy();
  this.audioOut && this.audioOut.destroy();
};

Player.prototype.seek = function (time) {
  var startOffset = this.audio && this.audio.canPlay ? this.audio.startTime : this.video.startTime;

  if (this.video) {
    this.video.seek(time + startOffset);
  }

  if (this.audio) {
    this.audio.seek(time + startOffset);
  }

  this.startTime = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["Now"])() - time;
};

Player.prototype.getCurrentTime = function () {
  return this.audio && this.audio.canPlay ? this.audio.currentTime - this.audio.startTime : this.video.currentTime - this.video.startTime;
};

Player.prototype.setCurrentTime = function (time) {
  this.seek(time);
};

Player.prototype.update = function () {
  this.animationId = requestAnimationFrame(this.update.bind(this));

  if (!this.source.established) {
    if (this.renderer) {
      this.renderer.renderProgress(this.source.progress);
    }

    return;
  }

  if (!this.isPlaying) {
    this.isPlaying = true;
    this.startTime = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["Now"])() - this.currentTime;
  }

  if (this.options.streaming) {
    this.updateForStreaming();
  } else {
    this.updateForStaticFile();
  }
};

Player.prototype.updateForStreaming = function () {
  // When streaming, immediately decode everything we have buffered up until
  // now to minimize playback latency.
  if (this.video) {
    this.video.decode();
  }

  if (this.audio) {
    var decoded = false;

    do {
      // If there's a lot of audio enqueued already, disable output and
      // catch up with the encoding.
      if (this.audioOut.enqueuedTime > this.maxAudioLag) {
        this.audioOut.resetEnqueuedTime();
        this.audioOut.enabled = false;
      }

      decoded = this.audio.decode();
    } while (decoded);

    this.audioOut.enabled = true;
  }
};

Player.prototype.updateForStaticFile = function () {
  var notEnoughData = false,
      headroom = 0; // If we have an audio track, we always try to sync the video to the audio.
  // Gaps and discontinuities are far more percetable in audio than in video.

  if (this.audio && this.audio.canPlay) {
    // Do we have to decode and enqueue some more audio data?
    while (!notEnoughData && this.audio.decodedTime - this.audio.currentTime < 0.25) {
      notEnoughData = !this.audio.decode();
    } // Sync video to audio


    if (this.video && this.video.currentTime < this.audio.currentTime) {
      notEnoughData = !this.video.decode();
    }

    headroom = this.demuxer.currentTime - this.audio.currentTime;
  } else if (this.video) {
    // Video only - sync it to player's wallclock
    var targetTime = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["Now"])() - this.startTime + this.video.startTime,
        lateTime = targetTime - this.video.currentTime,
        frameTime = 1 / this.video.frameRate;

    if (this.video && lateTime > 0) {
      // If the video is too far behind (>2 frames), simply reset the
      // target time to the next frame instead of trying to catch up.
      if (lateTime > frameTime * 2) {
        this.startTime += lateTime;
      }

      notEnoughData = !this.video.decode();
    }

    headroom = this.demuxer.currentTime - targetTime;
  } // Notify the source of the playhead headroom, so it can decide whether to
  // continue loading further data.


  this.source.resume(headroom); // If we failed to decode and the source is complete, it means we reached
  // the end of our data. We may want to loop.

  if (notEnoughData && this.source.completed) {
    if (this.loop) {
      this.seek(0);
    } else {
      // this.pause();
      this.stop();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/lib/ts.js":
/*!***********************!*\
  !*** ./src/lib/ts.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer */ "./src/lib/buffer.js");


var TS = function TS(options) {
  this.bits = null;
  this.leftoverBytes = null;
  this.guessVideoFrameEnd = true;
  this.pidsToStreamIds = {};
  this.pesPacketInfo = {};
  this.startTime = 0;
  this.currentTime = 0;
};

TS.prototype.connect = function (streamId, destination) {
  this.pesPacketInfo[streamId] = {
    destination: destination,
    currentLength: 0,
    totalLength: 0,
    pts: 0,
    buffers: []
  };
};

TS.prototype.write = function (buffer) {
  if (this.leftoverBytes) {
    var totalLength = buffer.byteLength + this.leftoverBytes.byteLength;
    this.bits = new _buffer__WEBPACK_IMPORTED_MODULE_0__["default"](totalLength);
    this.bits.write([this.leftoverBytes, buffer]);
  } else {
    this.bits = new _buffer__WEBPACK_IMPORTED_MODULE_0__["default"](buffer);
  }

  while (this.bits.has(188 << 3) && this.parsePacket()) {}

  var leftoverCount = this.bits.byteLength - (this.bits.index >> 3);
  this.leftoverBytes = leftoverCount > 0 ? this.bits.bytes.subarray(this.bits.index >> 3) : null;
};

TS.prototype.parsePacket = function () {
  // Check if we're in sync with packet boundaries; attempt to resync if not.
  if (this.bits.read(8) !== 0x47) {
    if (!this.resync()) {
      // Couldn't resync; maybe next time...
      return false;
    }
  }

  var end = (this.bits.index >> 3) + 187;
  var transportError = this.bits.read(1),
      payloadStart = this.bits.read(1),
      transportPriority = this.bits.read(1),
      pid = this.bits.read(13),
      transportScrambling = this.bits.read(2),
      adaptationField = this.bits.read(2),
      continuityCounter = this.bits.read(4); // If this is the start of a new payload; signal the end of the previous
  // frame, if we didn't do so already.

  var streamId = this.pidsToStreamIds[pid];

  if (payloadStart && streamId) {
    var pi = this.pesPacketInfo[streamId];

    if (pi && pi.currentLength) {
      this.packetComplete(pi);
    }
  } // Extract current payload


  if (adaptationField & 0x1) {
    if (adaptationField & 0x2) {
      var adaptationFieldLength = this.bits.read(8);
      this.bits.skip(adaptationFieldLength << 3);
    }

    if (payloadStart && this.bits.nextBytesAreStartCode()) {
      this.bits.skip(24);
      streamId = this.bits.read(8);
      this.pidsToStreamIds[pid] = streamId;
      var packetLength = this.bits.read(16);
      this.bits.skip(8);
      var ptsDtsFlag = this.bits.read(2);
      this.bits.skip(6);
      var headerLength = this.bits.read(8);
      var payloadBeginIndex = this.bits.index + (headerLength << 3);
      var _pi = this.pesPacketInfo[streamId];

      if (_pi) {
        var pts = 0;

        if (ptsDtsFlag & 0x2) {
          // The Presentation Timestamp is encoded as 33(!) bit
          // integer, but has a "marker bit" inserted at weird places
          // in between, making the whole thing 5 bytes in size.
          // You can't make this shit up...
          this.bits.skip(4);
          var p32_30 = this.bits.read(3);
          this.bits.skip(1);
          var p29_15 = this.bits.read(15);
          this.bits.skip(1);
          var p14_0 = this.bits.read(15);
          this.bits.skip(1); // Can't use bit shifts here; we need 33 bits of precision,
          // so we're using JavaScript's double number type. Also
          // divide by the 90khz clock to get the pts in seconds.

          pts = (p32_30 * 1073741824 + p29_15 * 32768 + p14_0) / 90000;
          this.currentTime = pts;

          if (this.startTime === -1) {
            this.startTime = pts;
          }
        }

        var payloadLength = packetLength ? packetLength - headerLength - 3 : 0;
        this.packetStart(_pi, pts, payloadLength);
      } // Skip the rest of the header without parsing it


      this.bits.index = payloadBeginIndex;
    }

    if (streamId) {
      // Attempt to detect if the PES packet is complete. For Audio (and
      // other) packets, we received a total packet length with the PES
      // header, so we can check the current length.
      // For Video packets, we have to guess the end by detecting if this
      // TS packet was padded - there's no good reason to pad a TS packet
      // in between, but it might just fit exactly. If this fails, we can
      // only wait for the next PES header for that stream.
      var _pi2 = this.pesPacketInfo[streamId];

      if (_pi2) {
        var start = this.bits.index >> 3;
        var complete = this.packetAddData(_pi2, start, end);
        var hasPadding = !payloadStart && adaptationField & 0x2;

        if (complete || this.guessVideoFrameEnd && hasPadding) {
          this.packetComplete(_pi2);
        }
      }
    }
  }

  this.bits.index = end << 3;
  return true;
};

TS.prototype.resync = function () {
  // Check if we have enough data to attempt a resync. We need 5 full packets.
  if (!this.bits.has(188 * 6 << 3)) {
    return false;
  }

  var byteIndex = this.bits.index >> 3; // Look for the first sync token in the first 187 bytes

  for (var i = 0; i < 187; i++) {
    if (this.bits.bytes[byteIndex + i] === 0x47) {
      // Look for 4 more sync tokens, each 188 bytes appart
      var foundSync = true;

      for (var j = 1; j < 5; j++) {
        if (this.bits.bytes[byteIndex + i + 188 * j] !== 0x47) {
          foundSync = false;
          break;
        }
      }

      if (foundSync) {
        this.bits.index = byteIndex + i + 1 << 3;
        return true;
      }
    }
  } // In theory, we shouldn't arrive here. If we do, we had enough data but
  // still didn't find sync - this can only happen if we were fed garbage
  // data. Check your source!


  console.warn('JSMpeg: Possible garbage data. Skipping.');
  this.bits.skip(187 << 3);
  return false;
};

TS.prototype.packetStart = function (pi, pts, payloadLength) {
  pi.totalLength = payloadLength;
  pi.currentLength = 0;
  pi.pts = pts;
};

TS.prototype.packetAddData = function (pi, start, end) {
  pi.buffers.push(this.bits.bytes.subarray(start, end));
  pi.currentLength += end - start;
  return pi.totalLength !== 0 && pi.currentLength >= pi.totalLength;
};

TS.prototype.packetComplete = function (pi) {
  pi.destination.write(pi.pts, pi.buffers);
  pi.totalLength = 0;
  pi.currentLength = 0;
  pi.buffers = [];
};

TS.STREAM = {
  PACK_HEADER: 0xBA,
  SYSTEM_HEADER: 0xBB,
  PROGRAM_MAP: 0xBC,
  PRIVATE_1: 0xBD,
  PADDING: 0xBE,
  PRIVATE_2: 0xBF,
  AUDIO_1: 0xC0,
  VIDEO_1: 0xE0,
  DIRECTORY: 0xFF
};
/* harmony default export */ __webpack_exports__["default"] = (TS);

/***/ }),

/***/ "./src/lib/video-element.js":
/*!**********************************!*\
  !*** ./src/lib/video-element.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoElement; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ "./src/index.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/lib/player.js");
/* harmony import */ var _static_theme_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/theme/style.scss */ "./static/theme/style.scss");
/* harmony import */ var _static_theme_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_theme_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_view_playButton_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/view/playButton.pug */ "./static/view/playButton.pug");
/* harmony import */ var _static_view_playButton_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_view_playButton_pug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_view_unmuteButton_pug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/view/unmuteButton.pug */ "./static/view/unmuteButton.pug");
/* harmony import */ var _static_view_unmuteButton_pug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_view_unmuteButton_pug__WEBPACK_IMPORTED_MODULE_4__);

 // style

 // template




var VideoElement =
/*#__PURE__*/
function () {
  function VideoElement(wrapper, videoUrl, options) {
    var _this = this;

    // Setup the div container, canvas and play button
    this.options = Object.assign({
      videoUrl: videoUrl,
      poster: '',
      aspectPercent: '56.25%',
      picMode: false,
      autoplay: false,
      loop: false,
      decodeFirstFrame: true,
      progressive: true,
      hookInPlay: function hookInPlay() {},
      hookInPause: function hookInPause() {},
      hookInStop: function hookInStop() {}
    }, options);
    this.wrapper = isString(wrapper) ? document.querySelector(wrapper) : wrapper;
    this.container = document.createElement('div');
    this.canvas = document.createElement('canvas');
    this.player = null;
    this.playButton = document.createElement('div');
    this.containerInit();
    this.canvasInit();
    this.playButtonInit();
    this.playerInit(); // Assignment height of wrapper. prevent page shake when destroyed.

    this.setWrapperHeight();
    window.addEventListener('resize', function () {
      return _this.setWrapperHeight();
    });
  }

  var _proto = VideoElement.prototype;

  _proto.containerInit = function containerInit() {
    this.container.classList.add(_static_theme_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container);
    addStyles(this.container, {
      paddingBottom: this.options.aspectPercent
    });
    this.wrapper.appendChild(this.container);
  };

  _proto.canvasInit = function canvasInit() {
    this.canvas.classList.add(_static_theme_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.canvas);
    this.container.appendChild(this.canvas);
  };

  _proto.playerInit = function playerInit() {
    var _this2 = this;

    // Parse the data-options - we try to decode the values as json. This way
    // we can get proper boolean and number values. If JSON.parse() fails,
    // treat it as a string.
    this.options = Object.assign(this.options, {
      canvas: this.canvas
    }); // Create the player instance

    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this.options.videoUrl, this.options, {
      play: function play() {
        _this2.playButton.style.display = 'none';

        if (_this2.poster) {
          _this2.poster.style.display = 'none';
        }

        _this2.options.hookInPlay();
      },
      pause: function pause() {
        _this2.playButton.style.display = 'block';

        _this2.options.hookInPause();
      },
      stop: function stop() {
        if (_this2.poster) {
          _this2.poster.style.display = 'block';
        }

        _this2.options.hookInStop();
      }
    });
    this.wrapper.playerInstance = this.player; // Setup the poster element, if any

    if (this.options.poster && !this.options.autoplay && !this.player.options.streaming) {
      this.options.decodeFirstFrame = false;
      this.poster = new Image();
      this.poster.src = this.options.poster;
      this.poster.classList.add(_static_theme_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.poster);
      this.container.appendChild(this.poster);
    } // Add the click handler if this video is pausable


    if (!this.player.options.streaming) {
      this.container.addEventListener('click', this.onClick.bind(this));
    } // Hide the play button if this video immediately begins playing


    if (this.options.autoplay || this.player.options.streaming) {
      this.playButton.style.display = 'none';
    } // Set up the unlock audio buton for iOS devices. iOS only allows us to
    // play audio after a user action has initiated playing. For autoplay or
    // streaming players we set up a muted speaker icon as the button. For all
    // others, we can simply use the play button.


    if (this.player.audioOut && !this.player.audioOut.unlocked) {
      var unlockAudioElement = this.container;

      if (this.options.autoplay || this.player.options.streaming) {
        this.unmuteButton = document.createElement('div');
        this.unmuteButton.innerHTML = _static_view_unmuteButton_pug__WEBPACK_IMPORTED_MODULE_4___default()({
          _style: _static_theme_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a
        });
        this.unmuteButton.classList.add(_static_theme_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.unmuteButton);
        this.container.appendChild(this.unmuteButton);
        unlockAudioElement = this.unmuteButton;
      }

      this.unlockAudioBound = this.onUnlockAudio.bind(this, unlockAudioElement);
      unlockAudioElement.addEventListener('touchstart', this.unlockAudioBound, false);
      unlockAudioElement.addEventListener('click', this.unlockAudioBound, true);
    }
  };

  _proto.playButtonInit = function playButtonInit() {
    this.playButton.innerHTML = _static_view_playButton_pug__WEBPACK_IMPORTED_MODULE_3___default()({
      _style: _static_theme_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a
    });
    this.playButton.classList.add(_static_theme_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.playButton);

    if (this.options.picMode) {
      this.playButton.style.visibility = 'hidden';
    }

    this.container.appendChild(this.playButton);
  };

  _proto.onUnlockAudio = function onUnlockAudio(element, ev) {
    if (this.unmuteButton) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    this.player.audioOut.unlock(function () {
      if (this.unmuteButton) {
        this.unmuteButton.style.display = 'none';
      }

      element.removeEventListener('touchstart', this.unlockAudioBound);
      element.removeEventListener('click', this.unlockAudioBound);
    }.bind(this));
  };

  _proto.onClick = function onClick() {
    if (this.player.isPlaying) {
      this.player.pause();
    } else {
      this.player.play();
    }
  };

  _proto.setWrapperHeight = function setWrapperHeight() {
    this.wrapper.style.height = this.container.offsetHeight + 'px';
  };

  _proto.destroy = function destroy() {
    this.player.destroy();
    this.wrapper.innerHTML = '';
    window.removeEventListener('resize', this.setWrapperHeight);
  };

  return VideoElement;
}();


;

var addStyles = function addStyles(element, styles) {
  for (var name in styles) {
    element.style[name] = styles[name];
  }
},
    isString = function isString(str) {
  return typeof str === 'string' && str.constructor === String;
};

/***/ }),

/***/ "./src/lib/wasm-module.js":
/*!********************************!*\
  !*** ./src/lib/wasm-module.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ "./src/lib/ajax.js");


var WASM = function WASM() {
  this.stackSize = 5 * 1024 * 1024; // emscripten default

  this.pageSize = 64 * 1024; // wasm page size

  this.onInitCallback = null;
};

WASM.prototype.write = function (buffer) {
  this.loadFromBuffer(buffer, this.onInitCallback);
};

WASM.prototype.loadFromFile = function (url, callback) {
  this.onInitCallback = callback;
  var ajax = new _ajax__WEBPACK_IMPORTED_MODULE_0__["default"](url);
  ajax.connect(this);
  ajax.start();
};

WASM.prototype.loadFromBuffer = function (buffer, callback) {
  this.moduleInfo = this.readDylinkSection(buffer);

  if (!this.moduleInfo) {
    this.callback && this.callback(null);
    return;
  }

  this.memory = new WebAssembly.Memory({
    initial: 256
  });
  var env = {
    memory: this.memory,
    memoryBase: 0,
    table: new WebAssembly.Table({
      initial: this.moduleInfo.tableSize,
      element: 'anyfunc'
    }),
    tableBase: 0,
    abort: this.c_abort.bind(this),
    ___assert_fail: this.c_assertFail.bind(this),
    _sbrk: this.c_sbrk.bind(this)
  };
  this.brk = this.align(this.moduleInfo.memorySize + this.stackSize);
  WebAssembly.instantiate(buffer, {
    env: env
  }).then(function (results) {
    this.instance = results.instance;

    if (this.instance.exports.__post_instantiate) {
      this.instance.exports.__post_instantiate();
    }

    this.createHeapViews();
    callback && callback(this);
  }.bind(this));
};

WASM.prototype.createHeapViews = function () {
  this.instance.heapU8 = new Uint8Array(this.memory.buffer);
  this.instance.heapU32 = new Uint32Array(this.memory.buffer);
  this.instance.heapF32 = new Float32Array(this.memory.buffer);
};

WASM.prototype.align = function (addr) {
  var a = Math.pow(2, this.moduleInfo.memoryAlignment);
  return Math.ceil(addr / a) * a;
};

WASM.prototype.c_sbrk = function (size) {
  var previousBrk = this.brk;
  this.brk += size;

  if (this.brk > this.memory.buffer.byteLength) {
    var bytesNeeded = this.brk - this.memory.buffer.byteLength;
    var pagesNeeded = Math.ceil(bytesNeeded / this.pageSize);
    this.memory.grow(pagesNeeded);
    this.createHeapViews();
  }

  return previousBrk;
};

WASM.prototype.c_abort = function (size) {
  console.warn('JSMPeg: WASM abort', arguments);
};

WASM.prototype.c_assertFail = function (size) {
  console.warn('JSMPeg: WASM ___assert_fail', arguments);
};

WASM.prototype.readDylinkSection = function (buffer) {
  // Read the WASM header and dylink section of the .wasm binary data
  // to get the needed table size and static data size.
  // https://github.com/WebAssembly/tool-conventions/blob/master/DynamicLinking.md
  // https://github.com/kripken/emscripten/blob/20602efb955a7c6c20865a495932427e205651d2/src/support.js
  var bytes = new Uint8Array(buffer);
  var next = 0;

  var readVarUint = function readVarUint() {
    var ret = 0;
    var mul = 1;

    while (1) {
      var byte = bytes[next++];
      ret += (byte & 0x7f) * mul;
      mul *= 0x80;

      if (!(byte & 0x80)) {
        return ret;
      }
    }
  };

  var matchNextBytes = function matchNextBytes(expected) {
    for (var i = 0; i < expected.length; i++) {
      var b = typeof expected[i] === 'string' ? expected[i].charCodeAt(0) : expected[i];

      if (bytes[next++] !== b) {
        return false;
      }
    }

    return true;
  }; // Make sure we have a wasm header


  if (!matchNextBytes([0, 'a', 's', 'm'])) {
    console.warn('JSMpeg: WASM header not found');
    return null;
  } // Make sure we have a dylink section


  next = 9;
  var sectionSize = readVarUint();

  if (!matchNextBytes([6, 'd', 'y', 'l', 'i', 'n', 'k'])) {
    console.warn('JSMpeg: No dylink section found in WASM');
    return null;
  }

  return {
    memorySize: readVarUint(),
    memoryAlignment: readVarUint(),
    tableSize: readVarUint(),
    tableAlignment: readVarUint()
  };
};

WASM.IsSupported = function () {
  return !!window.WebAssembly;
};

/* harmony default export */ __webpack_exports__["default"] = (WASM);

/***/ }),

/***/ "./src/lib/wasm/WASM_BINARY.js":
/*!*************************************!*\
  !*** ./src/lib/wasm/WASM_BINARY.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// get from jsmpeg
/* harmony default export */ __webpack_exports__["default"] = ('AGFzbQEAAAAADgZkeWxpbmvgzcACBCAAATgKYAF/AGAEf39/fwBgAX8Bf2ACf38Bf2ACf38AYAF/AX1gBn9/f39/fwBgA39/fwF/YAAAYAABfAJuBwNlbnYGbWVtb3J5AgCAAgNlbnYFdGFibGUBcAAgA2VudgptZW1vcnlCYXNlA38AA2Vudgl0YWJsZUJhc2UDfwADZW52BWFib3J0AAADZW52Dl9fX2Fzc2VydF9mYWlsAAEDZW52BV9zYnJrAAIDPz4DAAMCBAQAAgUCAgICAgICAAQABgAEAQABAQEDAAMCBAQCAgICAgEBAwADAgMCAwICAgIABAAAAwcHBwgICQahASB/AUEAC38BQQALfwBBGwt/AEEaC38AQRwLfwBBHQt/AEEeC38AQRALfwBBGQt/AEERC38AQRULfwBBEwt/AEEXC38AQRgLfwBBFgt/AEESC38AQRQLfwBBAQt/AEEPC38AQQILfwBBBgt/AEEOC38AQQkLfwBBDQt/AEEIC38AQQsLfwBBBAt/AEEKC38AQQMLfwBBDAt/AEEHC38AQQULB9YMPhJfX3Bvc3RfaW5zdGFudGlhdGUAPwVfZnJlZQA5B19tYWxsb2MAMgdfbWVtY3B5ADsIX21lbW1vdmUAPAdfbWVtc2V0AD0TX21wMl9kZWNvZGVyX2NyZWF0ZQAeE19tcDJfZGVjb2Rlcl9kZWNvZGUAJxRfbXAyX2RlY29kZXJfZGVzdHJveQAfFl9tcDJfZGVjb2Rlcl9kaWRfd3JpdGUAIxZfbXAyX2RlY29kZXJfZ2V0X2luZGV4ACEhX21wMl9kZWNvZGVyX2dldF9sZWZ0X2NoYW5uZWxfcHRyACUiX21wMl9kZWNvZGVyX2dldF9yaWdodF9jaGFubmVsX3B0cgAmHF9tcDJfZGVjb2Rlcl9nZXRfc2FtcGxlX3JhdGUAJBpfbXAyX2RlY29kZXJfZ2V0X3dyaXRlX3B0cgAgFl9tcDJfZGVjb2Rlcl9zZXRfaW5kZXgAIhVfbXBlZzFfZGVjb2Rlcl9jcmVhdGUAAxVfbXBlZzFfZGVjb2Rlcl9kZWNvZGUAEhZfbXBlZzFfZGVjb2Rlcl9kZXN0cm95AAQYX21wZWcxX2RlY29kZXJfZGlkX3dyaXRlAAgZX21wZWcxX2RlY29kZXJfZ2V0X2NiX3B0cgARHV9tcGVnMV9kZWNvZGVyX2dldF9jb2RlZF9zaXplAAwZX21wZWcxX2RlY29kZXJfZ2V0X2NyX3B0cgAQHV9tcGVnMV9kZWNvZGVyX2dldF9mcmFtZV9yYXRlAAsZX21wZWcxX2RlY29kZXJfZ2V0X2hlaWdodAAOGF9tcGVnMV9kZWNvZGVyX2dldF9pbmRleAAGGF9tcGVnMV9kZWNvZGVyX2dldF93aWR0aAANHF9tcGVnMV9kZWNvZGVyX2dldF93cml0ZV9wdHIABRhfbXBlZzFfZGVjb2Rlcl9nZXRfeV9wdHIADyJfbXBlZzFfZGVjb2Rlcl9oYXNfc2VxdWVuY2VfaGVhZGVyAAoYX21wZWcxX2RlY29kZXJfc2V0X2luZGV4AAcLcnVuUG9zdFNldHMAPghmcCRfZnJlZQMECmZwJF9tYWxsb2MDBQpmcCRfbWVtY3B5AwYLZnAkX21lbW1vdmUDBwpmcCRfbWVtc2V0AwgWZnAkX21wMl9kZWNvZGVyX2NyZWF0ZQMJFmZwJF9tcDJfZGVjb2Rlcl9kZWNvZGUDChdmcCRfbXAyX2RlY29kZXJfZGVzdHJveQMLGWZwJF9tcDJfZGVjb2Rlcl9kaWRfd3JpdGUDDBlmcCRfbXAyX2RlY29kZXJfZ2V0X2luZGV4Aw0kZnAkX21wMl9kZWNvZGVyX2dldF9sZWZ0X2NoYW5uZWxfcHRyAw4lZnAkX21wMl9kZWNvZGVyX2dldF9yaWdodF9jaGFubmVsX3B0cgMPH2ZwJF9tcDJfZGVjb2Rlcl9nZXRfc2FtcGxlX3JhdGUDEB1mcCRfbXAyX2RlY29kZXJfZ2V0X3dyaXRlX3B0cgMRGWZwJF9tcDJfZGVjb2Rlcl9zZXRfaW5kZXgDEhhmcCRfbXBlZzFfZGVjb2Rlcl9jcmVhdGUDExhmcCRfbXBlZzFfZGVjb2Rlcl9kZWNvZGUDFBlmcCRfbXBlZzFfZGVjb2Rlcl9kZXN0cm95AxUbZnAkX21wZWcxX2RlY29kZXJfZGlkX3dyaXRlAxYcZnAkX21wZWcxX2RlY29kZXJfZ2V0X2NiX3B0cgMXIGZwJF9tcGVnMV9kZWNvZGVyX2dldF9jb2RlZF9zaXplAxgcZnAkX21wZWcxX2RlY29kZXJfZ2V0X2NyX3B0cgMZIGZwJF9tcGVnMV9k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QQN0IQUgAEGEAWohAyAGIAFBAnEEfyAFBUEAC2oFIABBjAFqIQMgAEGIAWohBiAAKAIYIgVBAXUhAiABQQRHBEAgBiEDCyAAKAJUQQN0IAVBAnQgACgCUGxqCyEBIAJBeGohAiADKAIAIQMgBEEBRiEEIABBnAFqIQAgCCgCAARAIAQEQCAAKAIAQYABakEIdSADIAEgAhAZIABBADYCAAUgABAaIAAgAyABIAIQGyAAQQBBgAIQPRoLBSAEBEAgACgCAEGAAWpBCHUgAyABIAIQHCAAQQA2AgAFIAAQGiAAIAMgASACEB0gAEEAQYACED0aCwsL2AYAIAEgAmogAEH/AXEiADoAACABIAJBAWpqIAA6AAAgASACQQJqaiAAOgAAIAEgAkEDamogADoAACABIAJBBGpqIAA6AAAgASACQQVqaiAAOgAAIAEgAkEGamogADoAACABIAJBB2pqIAA6AAAgASADQQhqIgMgAmoiAmogADoAACABIAJBAWpqIAA6AAAgASACQQJqaiAAOgAAIAEgAkEDamogADoAACABIAJBBGpqIAA6AAAgASACQQVqaiAAOgAAIAEgAkEGamogADoAACABIAJBB2pqIAA6AAAgASADIAJqIgJqIAA6AAAgASACQQFqaiAAOgAAIAEgAkECamogADoAACABIAJBA2pqIAA6AAAgASACQQRqaiAAOgAAIAEgAkEFamogADoAACABIAJBBmpqIAA6AAAgASACQQdqaiAAOgAAIAEgAyACaiICaiAAOgAAIAEgAkEBamogADoAACABIAJBAmpqIAA6AAAgASACQQNqaiAAOgAAIAEgAkEEamogADoAACABIAJBBWpqIAA6AAAgASACQQZqaiAAOgAAIAEgAkEHamogADoAACABIAMgAmoiAmogADoAACABIAJBAWpqIAA6AAAgASACQQJqaiAAOgAAIAEgAkEDamogADoAACABIAJBBGpqIAA6AAAgASACQQVqaiAAOgAAIAEgAkEGamogADoAACABIAJBB2pqIAA6AAAgASADIAJqIgJqIAA6AAAgASACQQFqaiAAOgAAIAEgAkECamogADoAACABIAJBA2pqIAA6AAAgASACQQRqaiAAOgAAIAEgAkEFamogADoAACABIAJBBmpqIAA6AAAgASACQQdqaiAAOgAAIAEgAyACaiIC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ajoAACABIAMgAmoiAmoiBCAELQAAIABqOgAAIAEgAkEBamoiBCAELQAAIABqOgAAIAEgAkECamoiBCAELQAAIABqOgAAIAEgAkEDamoiBCAELQAAIABqOgAAIAEgAkEEamoiBCAELQAAIABqOgAAIAEgAkEFamoiBCAELQAAIABqOgAAIAEgAkEGamoiBCAELQAAIABqOgAAIAEgAkEHamoiBCAELQAAIABqOgAAIAEgAyACaiICaiIEIAQtAAAgAGo6AAAgASACQQFqaiIEIAQtAAAgAGo6AAAgASACQQJqaiIEIAQtAAAgAGo6AAAgASACQQNqaiIEIAQtAAAgAGo6AAAgASACQQRqaiIEIAQtAAAgAGo6AAAgASACQQVqaiIEIAQtAAAgAGo6AAAgASACQQZqaiIEIAQtAAAgAGo6AAAgASACQQdqaiIEIAQtAAAgAGo6AAAgASADIAJqIgJqIgQgBC0AACAAajoAACABIAJBAWpqIgQgBC0AACAAajoAACABIAJBAmpqIgQgBC0AACAAajoAACABIAJBA2pqIgQgBC0AACAAajoAACABIAJBBGpqIgQgBC0AACAAajoAACABIAJBBWpqIgQgBC0AACAAajoAACABIAJBBmpqIgQgBC0AACAAajoAACABIAJBB2pqIgQgBC0AACAAajoAACABIAMgAmoiAmoiBCAELQAAIABqOgAAIAEgAkEBamoiBCAELQAAIABqOgAAIAEgAkECamoiBCAELQAAIABqOgAAIAEgAkEDamoiBCAELQAAIABqOgAAIAEgAkEEamoiBCAELQAAIABqOgAAIAEgAkEFamoiBCAELQAAIABqOgAAIAEgAkEGamoiBCAELQAAIABqOgAAIAEgAkEHamoiBCAELQAAIABqOgAAIAEgAyACaiICaiIEIAQtAAAgAGo6AAAgASACQQFqaiIEIAQtAAAgAGo6AAAgASACQQJqaiIEIAQtAAAgAGo6AAAgASACQQNqaiIEIAQtAAAgAGo6AAAgASACQQRqaiIEIAQtAAAgAGo6AAAgASACQQVqaiIEIAQtAAAgAGo6AAAgASACQQZqaiIEIAQtAAAgAGo6AAAgASACQQdqaiIEIAQtAAAgAGo6AAAgASADIAJqIgJqIgMgAy0AACAAajoAACABIAJBAWpqIgMgAy0AACAAajoAACAB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AiADQRlqQQJ0aiA0IDqSIjSMOAIAIAIgA0EHakECdGogNDgCACACIANBGGpBAnRqIDGMOAIAIAIgA0EIakECdGogMTgCACACIANBF2pBAnRqICqMOAIAIAIgA0EJakECdGogKjgCACACIANBFmpBAnRqIDsgLpIiMYw4AgAgAiADQQpqQQJ0aiAxOAIAIAIgA0EVakECdGogQyAmkiIxjDgCACACIANBC2pBAnRqIDE4AgAgAiADQRRqQQJ0aiA1jDgCACACIANBDGpBAnRqIDU4AgAgAiADQRNqQQJ0aiAmICWSIiaMOAIAIAIgA0ENakECdGogJjgCACACIANBEmpBAnRqIC6MOAIAIAIgA0EOakECdGogLjgCACACIANBEWpBAnRqICWMOAIAIAIgA0EPakECdGogJTgCACACIANBEGpBAnRqQwAAAAA4AgALLwEBf0EUEDIiAiABNgIQIAIgABAyNgIAIAIgADYCCCACQQA2AgwgAkEANgIEIAILDQAgACgCABA5IAAQOQuEAgEGfwJAIABBCGoiAygCACIEIABBDGoiBigCACICayIFIAFJBEAgACgCEEECRgRAIAEgBWshAiAAIAAoAgAgBSAEQQF0IgVqIAFJBH8gAgUgBSICCxA6NgIAIAMgAjYCACAAQQRqIgIoAgAgBigCACIBQQN0IgNNDQIgAiADNgIADAILIAIgAEEEaiIEKAIAIgdBA3YiA0YgBSADaiABSXIEQCAGQQA2AgAgBEEANgIAQQAhAQwCCyADBEAgACgCACIBIAEgA2ogAiADaxA8GiAGIAYoAgAgA2siATYCACAEIAQoAgAgB0F4cWs2AgAFIAIhAQsFIAIhAQsLIAAoAgAgAWoLlgEBBH8CQCAAQQRqIgMoAgBBB2pBA3YiASAAKAIMIgRJBEAgACgCACECIAEhAANAAkAgAEEBaiEBIAIgAGosAABFBEAgAiABaiwAAEUEQCACIABBAmpqLAAAQQFGDQILCyABIARPDQMgASEADAELCyADIABBA3RBIGo2AgAgAiAAQQNqai0AAA8LCyADIARBA3Q2AgBBfwuyAQEEfwJAIABBBGoiBSgCAEEHakEDdiICIAAoAgwiBEkEQCAAKAIAIQMgAiEAA0ACQCAAQQFqIQICQAJAIAMgAGosAAANACADIAJqLAAADQAgAyAAQQJq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QR9LBEACQAJAAkACQCADQQNxQQFrDgMAAQIDCyADIAEoAgAiBDoAACADIAEsAAE6AAEgAyABLAACOgACIAEgAkFsakFwcSIIQRNqIglqIQcgAkFtaiEKIAJBfWohBiADQQNqIQIgAUEDaiEBA0AgAiABKAIBIgVBCHQgBEEYdnI2AgAgAiABKAIFIgRBCHQgBUEYdnI2AgQgAiABKAIJIgVBCHQgBEEYdnI2AgggAiABKAINIgRBCHQgBUEYdnI2AgwgAUEQaiEBIAJBEGohAiAGQXBqIgZBEEsNAAsgCiAIayECIAchASADIAlqIQMMBAsgAyABKAIAIgQ6AAAgAyABLAABOgABIAEgAkFsakFwcSIIQRJqIglqIQcgAkFuaiEKIAJBfmohBiADQQJqIQIgAUECaiEBA0AgAiABKAICIgVBEHQgBEEQdnI2AgAgAiABKAIGIgRBEHQgBUEQdnI2AgQgAiABKAIKIgVBEHQgBEEQdnI2AgggAiABKAIOIgRBEHQgBUEQdnI2AgwgAUEQaiEBIAJBEGohAiAGQXBqIgZBEUsNAAsgCiAIayECIAchASADIAlqIQMMAwsgAyABKAIAIgQ6AAAgASACQWxqQXBxIghBEWoiCWohByACQW9qIQogAkF/aiEGIANBAWohAiABQQFqIQEDQCACIAEoAgMiBUEYdCAEQQh2cjYCACACIAEoAgciBEEYdCAFQQh2cjYCBCACIAEoAgsiBUEYdCAEQQh2cjYCCCACIAEoAg8iBEEYdCAFQQh2cjYCDCABQRBqIQEgAkEQaiECIAZBcGoiBkESSw0ACyAKIAhrIQIgByEBIAMgCWohAwsLCyACQRBxBEAgAyABLAAAOgAAIAMgASwAAToAASADIAEsAAI6AAIgAyABLAADOgADIAMgASwABDoABCADIAEsAAU6AAUgAyABLAAGOgAGIAMgASwABzoAByADIAEsAAg6AAggAyABLAAJOgAJIAMgASwACjoACiADIAEsAAs6AAsgAyABLAAMOgAMIAMgASwADToADSADIAEsAA46AA4gAyABLAAPOgAPIAFBEGohASADQRBqIQMLIAJBCHEEQCADIAEsAAA6AAAgAyABLAABOgABIAMgASwAAjoAAiADIAEsAAM6AAMgAyABLAAEOgAEIAMgASwABToABSADIAEsAAY6AAYg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OTIrJB0WDxceJSwzOjs0LSYfJy41PD02Lzc+PwgQExYaGx0iEBAWGBsdIiUTFhobHSIiJhYWGhsdIiUoFhobHSAjKDAaGx0gIygwOhobHSImLjhFGx0jJi44RVMgLComIBkRCSw+OjQsIxgMKjo3MSohFwwmNDEsJh4UCiAsKiYgGREJGSMhHhkUDgcRGBcUEQ4JBQkMDAoJBwUCAAABAQECAgICAgICAgIAAAAAAAAAAAEBAQICAgICAAAICAxbW1teW15ERDQ0NDQ0NDQ0NDQAAAAAAAAAAAAAAAAAAAAAAAAAAENDQ0JCQkJCQkJCMTExMTExMTExMTExICAgICAgIAAARUVFRTQ0NDQ0NDQkJCQkJCQkJCQkJCQkJCQkJCQkAAAAAQIRAAAAAAAAAAAAAAAAAAECAwQFBhEAAAAAAAAAAAABAgMEBQYHCAkKCwwNDhEAAQMFBgcICQoLDA0ODxARAAECBAUGBwgJCgsMDQ4PEQABAgMEBQYHCAkKCwwNDg9zaXplID4gMABEOi9zcnYvZW1zZGsvZW1zY3JpcHRlbi8xLjM4LjUvc3lzdGVtL2xpYi9lbW1hbGxvYy5jcHAAZ2V0RnJlZUxpc3RJbmRleABNSU5fRlJFRUxJU1RfSU5ERVggPD0gaW5kZXggJiYgaW5kZXggPCBNQVhfRlJFRUxJU1RfSU5ERVgAZ2V0QWZ0ZXIocmVnaW9uKSA8PSBzYnJrKDApAGVtbWFsbG9jX21hbGxvYwByZWdpb24tPmdldFVzZWQoKQBnZXRQYXlsb2FkAChjaGFyKilleHRyYVB0ciA9PSAoY2hhciopcHRyICsgc2Jya1NpemUAYWxsb2NhdGVSZWdpb24AIWxhc3RSZWdpb24AIWZpcnN0UmVnaW9uAGZpcnN0UmVnaW9uAHB0ciA9PSBnZXRBZnRlcihsYXN0UmVnaW9uKQBleHRlbmRMYXN0UmVnaW9uAGFkZFRvRnJlZUxpc3QAZ2V0QmlnRW5vdWdoRnJlZUxpc3RJbmRleABwYXlsb2FkU2l6ZSA+PSBzaXplAHBvc3NpYmx5U3BsaXRSZW1haW5kZXIAZXh0cmEgPj0gTUlOX1JFR0lPTl9TSVpFAHRvdGFsU3BsaXRTaXplID49IE1JTl9SRUdJT05fU0laRQBtZXJnZUludG9FeGlzdGluZ0ZyZWVSZWdpb24AcmVnaW9uID09IGxhc3RSZWdpb24AZW1tYWxsb2NfcmVhbGxvYw==');

/***/ }),

/***/ "./src/lib/webaudio.js":
/*!*****************************!*\
  !*** ./src/lib/webaudio.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


var WebAudioOut = function WebAudioOut(options) {
  this.context = WebAudioOut.CachedContext = WebAudioOut.CachedContext || new (window.AudioContext || window.webkitAudioContext)();
  this.gain = this.context.createGain();
  this.destination = this.gain; // Keep track of the number of connections to this AudioContext, so we
  // can safely close() it when we're the only one connected to it.

  this.gain.connect(this.context.destination);
  this.context._connections = (this.context._connections || 0) + 1;
  this.startTime = 0;
  this.buffer = null;
  this.wallclockStartTime = 0;
  this.volume = 1;
  this.enabled = true;
  this.unlocked = !WebAudioOut.NeedsUnlocking();
  Object.defineProperty(this, 'enqueuedTime', {
    get: this.getEnqueuedTime
  });
};

WebAudioOut.prototype.destroy = function () {
  this.gain.disconnect();
  this.context._connections--;

  if (this.context._connections === 0) {
    this.context.close();
    WebAudioOut.CachedContext = null;
  }
};

WebAudioOut.prototype.play = function (sampleRate, left, right) {
  if (!this.enabled) {
    return;
  } // If the context is not unlocked yet, we simply advance the start time
  // to "fake" actually playing audio. This will keep the video in sync.


  if (!this.unlocked) {
    var ts = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["Now"])();

    if (this.wallclockStartTime < ts) {
      this.wallclockStartTime = ts;
    }

    this.wallclockStartTime += left.length / sampleRate;
    return;
  }

  this.gain.gain.value = this.volume;
  var buffer = this.context.createBuffer(2, left.length, sampleRate);
  buffer.getChannelData(0).set(left);
  buffer.getChannelData(1).set(right);
  var source = this.context.createBufferSource();
  source.buffer = buffer;
  source.connect(this.destination);
  var now = this.context.currentTime;
  var duration = buffer.duration;

  if (this.startTime < now) {
    this.startTime = now;
    this.wallclockStartTime = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["Now"])();
  }

  source.start(this.startTime);
  this.startTime += duration;
  this.wallclockStartTime += duration;
};

WebAudioOut.prototype.stop = function () {
  // Meh; there seems to be no simple way to get a list of currently
  // active source nodes from the Audio Context, and maintaining this
  // list ourselfs would be a pain, so we just set the gain to 0
  // to cut off all enqueued audio instantly.
  this.gain.gain.value = 0;
};

WebAudioOut.prototype.getEnqueuedTime = function () {
  // The AudioContext.currentTime is only updated every so often, so if we
  // want to get exact timing, we need to rely on the system time.
  return Math.max(this.wallclockStartTime - Object(_utils__WEBPACK_IMPORTED_MODULE_0__["Now"])(), 0);
};

WebAudioOut.prototype.resetEnqueuedTime = function () {
  this.startTime = this.context.currentTime;
  this.wallclockStartTime = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["Now"])();
};

WebAudioOut.prototype.unlock = function (callback) {
  if (this.unlocked) {
    if (callback) {
      callback();
    }

    return;
  }

  this.unlockCallback = callback; // Create empty buffer and play it

  var buffer = this.context.createBuffer(1, 1, 22050);
  var source = this.context.createBufferSource();
  source.buffer = buffer;
  source.connect(this.destination); // polyfill source.start(0);

  if (source.start) {
    source.start(0);
  } else {
    source.noteOn(0);
  }

  setTimeout(this.checkIfUnlocked.bind(this, source, 0), 0);
};

WebAudioOut.prototype.checkIfUnlocked = function (source, attempt) {
  if (source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE) {
    this.unlocked = true;

    if (this.unlockCallback) {
      this.unlockCallback();
      this.unlockCallback = null;
    }
  } else if (attempt < 10) {
    // Jeez, what a shit show. Thanks iOS!
    setTimeout(this.checkIfUnlocked.bind(this, source, attempt + 1), 100);
  }
};

WebAudioOut.NeedsUnlocking = function () {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
};

WebAudioOut.IsSupported = function () {
  return window.AudioContext || window.webkitAudioContext;
};

WebAudioOut.CachedContext = null;
/* harmony default export */ __webpack_exports__["default"] = (WebAudioOut);

/***/ }),

/***/ "./src/lib/webgl.js":
/*!**************************!*\
  !*** ./src/lib/webgl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var WebGLRenderer = function WebGLRenderer(options) {
  this.canvas = options.canvas || document.createElement('canvas');
  this.width = this.canvas.width;
  this.height = this.canvas.height;
  this.enabled = true;
  this.hasTextureData = {};
  var contextCreateOptions = {
    preserveDrawingBuffer: !!options.preserveDrawingBuffer,
    alpha: false,
    depth: false,
    stencil: false,
    antialias: false,
    premultipliedAlpha: false
  };
  this.gl = this.canvas.getContext('webgl', contextCreateOptions) || this.canvas.getContext('experimental-webgl', contextCreateOptions);

  if (!this.gl) {
    throw new Error('Failed to get WebGL Context');
  }

  var gl = this.gl;
  var vertexAttr = null;
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false); // Init buffers

  this.vertexBuffer = gl.createBuffer();
  var vertexCoords = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]);
  gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertexCoords, gl.STATIC_DRAW); // Setup the main YCrCbToRGBA shader

  this.program = this.createProgram(WebGLRenderer.SHADER.VERTEX_IDENTITY, WebGLRenderer.SHADER.FRAGMENT_YCRCB_TO_RGBA);
  vertexAttr = gl.getAttribLocation(this.program, 'vertex');
  gl.enableVertexAttribArray(vertexAttr);
  gl.vertexAttribPointer(vertexAttr, 2, gl.FLOAT, false, 0, 0);
  this.textureY = this.createTexture(0, 'textureY');
  this.textureCb = this.createTexture(1, 'textureCb');
  this.textureCr = this.createTexture(2, 'textureCr'); // Setup the loading animation shader

  this.loadingProgram = this.createProgram(WebGLRenderer.SHADER.VERTEX_IDENTITY, WebGLRenderer.SHADER.FRAGMENT_LOADING);
  vertexAttr = gl.getAttribLocation(this.loadingProgram, 'vertex');
  gl.enableVertexAttribArray(vertexAttr);
  gl.vertexAttribPointer(vertexAttr, 2, gl.FLOAT, false, 0, 0);
  this.shouldCreateUnclampedViews = !this.allowsClampedTextureData();
};

WebGLRenderer.prototype.destroy = function () {
  var gl = this.gl;
  gl.deleteTexture(this.textureY);
  gl.deleteTexture(this.textureCb);
  gl.deleteTexture(this.textureCr);
  gl.deleteProgram(this.program);
  gl.deleteProgram(this.loadingProgram);
  gl.deleteBuffer(this.vertexBuffer);
};

WebGLRenderer.prototype.resize = function (width, height) {
  this.width = width | 0;
  this.height = height | 0;
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.gl.useProgram(this.program);
  var codedWidth = this.width + 15 >> 4 << 4;
  this.gl.viewport(0, 0, codedWidth, this.height);
};

WebGLRenderer.prototype.createTexture = function (index, name) {
  var gl = this.gl;
  var texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.uniform1i(gl.getUniformLocation(this.program, name), index);
  return texture;
};

WebGLRenderer.prototype.createProgram = function (vsh, fsh) {
  var gl = this.gl;
  var program = gl.createProgram();
  gl.attachShader(program, this.compileShader(gl.VERTEX_SHADER, vsh));
  gl.attachShader(program, this.compileShader(gl.FRAGMENT_SHADER, fsh));
  gl.linkProgram(program);
  gl.useProgram(program);
  return program;
};

WebGLRenderer.prototype.compileShader = function (type, source) {
  var gl = this.gl;
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader));
  }

  return shader;
};

WebGLRenderer.prototype.allowsClampedTextureData = function () {
  var gl = this.gl;
  var texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, 1, 1, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, new Uint8ClampedArray([0]));
  return gl.getError() === 0;
};

WebGLRenderer.prototype.renderProgress = function (progress) {
  var gl = this.gl;
  gl.useProgram(this.loadingProgram);
  var loc = gl.getUniformLocation(this.loadingProgram, 'progress');
  gl.uniform1f(loc, progress);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
};

WebGLRenderer.prototype.render = function (y, cb, cr, isClampedArray) {
  if (!this.enabled) {
    return;
  }

  var gl = this.gl;
  var w = this.width + 15 >> 4 << 4,
      h = this.height,
      w2 = w >> 1,
      h2 = h >> 1; // In some browsers WebGL doesn't like Uint8ClampedArrays (this is a bug
  // and should be fixed soon-ish), so we have to create a Uint8Array view
  // for each plane.

  if (isClampedArray && this.shouldCreateUnclampedViews) {
    y = new Uint8Array(y.buffer);
    cb = new Uint8Array(cb.buffer);
    cr = new Uint8Array(cr.buffer);
  }

  gl.useProgram(this.program);
  this.updateTexture(gl.TEXTURE0, this.textureY, w, h, y);
  this.updateTexture(gl.TEXTURE1, this.textureCb, w2, h2, cb);
  this.updateTexture(gl.TEXTURE2, this.textureCr, w2, h2, cr);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
};

WebGLRenderer.prototype.updateTexture = function (unit, texture, w, h, data) {
  var gl = this.gl;
  gl.activeTexture(unit);
  gl.bindTexture(gl.TEXTURE_2D, texture);

  if (this.hasTextureData[unit]) {
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, w, h, gl.LUMINANCE, gl.UNSIGNED_BYTE, data);
  } else {
    this.hasTextureData[unit] = true;
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, w, h, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, data);
  }
};

WebGLRenderer.IsSupported = function () {
  try {
    if (!window.WebGLRenderingContext) {
      return false;
    }

    var canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch (err) {
    return false;
  }
};

WebGLRenderer.SHADER = {
  FRAGMENT_YCRCB_TO_RGBA: ['precision mediump float;', 'uniform sampler2D textureY;', 'uniform sampler2D textureCb;', 'uniform sampler2D textureCr;', 'varying vec2 texCoord;', 'mat4 rec601 = mat4(', '1.16438,  0.00000,  1.59603, -0.87079,', '1.16438, -0.39176, -0.81297,  0.52959,', '1.16438,  2.01723,  0.00000, -1.08139,', '0, 0, 0, 1', ');', 'void main() {', 'float y = texture2D(textureY, texCoord).r;', 'float cb = texture2D(textureCb, texCoord).r;', 'float cr = texture2D(textureCr, texCoord).r;', 'gl_FragColor = vec4(y, cr, cb, 1.0) * rec601;', '}'].join('\n'),
  FRAGMENT_LOADING: ['precision mediump float;', 'uniform float progress;', 'varying vec2 texCoord;', 'void main() {', 'float c = ceil(progress-(1.0-texCoord.y));', 'gl_FragColor = vec4(c,c,c,1);', '}'].join('\n'),
  VERTEX_IDENTITY: ['attribute vec2 vertex;', 'varying vec2 texCoord;', 'void main() {', 'texCoord = vertex;', 'gl_Position = vec4((vertex * 2.0 - 1.0) * vec2(1, -1), 0.0, 1.0);', '}'].join('\n')
};
/* harmony default export */ __webpack_exports__["default"] = (WebGLRenderer);

/***/ }),

/***/ "./src/lib/websocket.js":
/*!******************************!*\
  !*** ./src/lib/websocket.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var WSSource = function WSSource(url, options) {
  this.url = url;
  this.options = options;
  this.socket = null;
  this.callbacks = {
    connect: [],
    data: []
  };
  this.destination = null;
  this.reconnectInterval = options.reconnectInterval !== undefined ? options.reconnectInterval : 5;
  this.shouldAttemptReconnect = !!this.reconnectInterval;
  this.completed = false;
  this.established = false;
  this.progress = 0;
  this.reconnectTimeoutId = 0;
};

WSSource.prototype.connect = function (destination) {
  this.destination = destination;
};

WSSource.prototype.destroy = function () {
  clearTimeout(this.reconnectTimeoutId);
  this.shouldAttemptReconnect = false;
  this.socket.close();
};

WSSource.prototype.start = function () {
  this.shouldAttemptReconnect = !!this.reconnectInterval;
  this.progress = 0;
  this.established = false;
  this.socket = new WebSocket(this.url, this.options.protocols || null);
  this.socket.binaryType = 'arraybuffer';
  this.socket.onmessage = this.onMessage.bind(this);
  this.socket.onopen = this.onOpen.bind(this);
  this.socket.onerror = this.onClose.bind(this);
  this.socket.onclose = this.onClose.bind(this);
};

WSSource.prototype.resume = function (secondsHeadroom) {// Nothing to do here
};

WSSource.prototype.onOpen = function () {
  this.progress = 1;
  this.established = true;
};

WSSource.prototype.onClose = function () {
  if (this.shouldAttemptReconnect) {
    clearTimeout(this.reconnectTimeoutId);
    this.reconnectTimeoutId = setTimeout(function () {
      this.start();
    }.bind(this), this.reconnectInterval * 1000);
  }
};

WSSource.prototype.onMessage = function (ev) {
  if (this.destination) {
    this.destination.write(ev.data);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (WSSource);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: Now, CreateVideoElements, Fill, Base64ToArrayBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Now", function() { return Now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVideoElements", function() { return CreateVideoElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fill", function() { return Fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64ToArrayBuffer", function() { return Base64ToArrayBuffer; });
/* harmony import */ var _lib_video_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/video-element */ "./src/lib/video-element.js");

var Now = function Now() {
  return window.performance ? window.performance.now() / 1000 : Date.now() / 1000;
};
var CreateVideoElements = function CreateVideoElements() {
  var elements = document.querySelectorAll('.jsmpeg');

  for (var i = 0; i < elements.length; i++) {
    new _lib_video_element__WEBPACK_IMPORTED_MODULE_0__["default"](elements[i]);
  }
};
var Fill = function Fill(array, value) {
  if (array.fill) {
    array.fill(value);
  } else {
    for (var i = 0; i < array.length; i++) {
      array[i] = value;
    }
  }
};
var Base64ToArrayBuffer = function Base64ToArrayBuffer(base64) {
  var binary = window.atob(base64);
  var length = binary.length;
  var bytes = new Uint8Array(length);

  for (var i = 0; i < length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes.buffer;
};

/***/ }),

/***/ "./static/theme/style.scss":
/*!*********************************!*\
  !*** ./static/theme/style.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/sass-loader/lib/loader.js??ref--5-2!./style.scss */ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./static/theme/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./static/view/playButton.pug":
/*!************************************!*\
  !*** ./static/view/playButton.pug ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (_style) {pug_html = pug_html + "\u003Csvg" + (pug.attr("class", pug.classes([_style.playButtonSvg], [true]), false, true)+" viewBox=\"0 0 64 64\"") + "\u003E\u003Cpath d=\"M26,45.5L44,32L26,18.6v27V45.5L26,45.5z M32,2C15.4,2,2,15.5,2,32c0,16.6,13.4,30,30,30c16.6,0,30-13.4,30-30 C62,15.4,48.5,2,32,2L32,2z M32,56c-9.7,0-18.5-5.9-22.2-14.8C6.1,32.2,8.1,21.9,15,15c6.9-6.9,17.2-8.9,26.2-5.2 C50.1,13.5,56,22.3,56,32C56,45.3,45.2,56,32,56L32,56z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E";}.call(this,"_style" in locals_for_with?locals_for_with._style:typeof _style!=="undefined"?_style:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./static/view/unmuteButton.pug":
/*!**************************************!*\
  !*** ./static/view/unmuteButton.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (_style) {pug_html = pug_html + "\u003Csvg" + (pug.attr("class", pug.classes([_style.unmuteButtonSvg], [true]), false, true)+" viewBox=\"0 0 64 64\"") + "\u003E\u003Cpath d=\"M58.3,45.5l-4.8-4.3c1.4-2.9,2.2-6.2,2.2-9.6c0-11.1-8.2-20.3-18.9-21.9V3.3C50.9,4.9,62,16.9,62,31.6 C62,36.6,60.6,41.4,58.3,45.5L58.3,45.5z M30.4,5.6v15.2l-8.3-7.3L30.4,5.6L30.4,5.6z M36.7,19.9c4.6,1.9,7.9,6.4,7.9,11.7 c0,0.6-0.1,1.1-0.1,1.7l-7.8-6.9V19.9L36.7,19.9z M57.5,60.7l-7.1-6.3c-3.9,2.9-8.6,4.8-13.7,5.4v-6.4c3.2-0.5,6.2-1.7,8.8-3.4 l-8.1-7.2c-0.2,0.1-0.5,0.3-0.7,0.4v-1l-6.3-5.6v20.2L15.4,42.6H2V20.5h10.2l-9.7-8.6l4.2-4.7L61.7,56L57.5,60.7L57.5,60.7z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E";}.call(this,"_style" in locals_for_with?locals_for_with._style:typeof _style!=="undefined"?_style:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=JSMpeg.js.map