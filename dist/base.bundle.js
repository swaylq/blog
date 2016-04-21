/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var articles = __webpack_require__(5);

	$(document).ready(function () {
	  NProgress.start();
	});

	$(window).load(function () {
	  NProgress.done();
	});

	var blog = angular.module('blog', ['ui.router'])
	  .config(function ($stateProvider, $urlRouterProvider) {
	    $stateProvider
	      .state('work', {
	        url: '/work',
	        templateUrl: 'templates/work.html',
	        controller: 'WorkCtrl'
	      })
	      .state('about', {
	        url: '/about',
	        templateUrl: 'templates/about.html',
	        controller: 'AboutCtrl'
	      })
	      .state('blog', {
	        url: '/blog',
	        templateUrl: 'templates/blog.html',
	        controller: 'BlogCtrl'
	      })
	      .state('contact', {
	        url: '/contact',
	        templateUrl: 'templates/contact.html',
	        controller: 'ContactCtrl'
	      })
	      .state('article', {
	        url: '/article/:articleID',
	        templateUrl: '/templates/article.html',
	        controller: 'ArticleCtrl'
	      });
	    $urlRouterProvider.otherwise('/blog');
	  });

	blog.controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
	  $scope.nav = $location.path();
	  $scope.goto = function (path) {
	    $location.path(path);
	    $scope.nav = '/' + path;
	  }
	}]);

	blog.controller('WorkCtrl', ['$scope', function ($scope) {
	  console.log('work controller');
	}]);

	blog.controller('AboutCtrl', ['$scope', function ($scope) {
	  console.log('about controller');
	}]);

	blog.controller('BlogCtrl', ['$scope', function ($scope) {
	  console.log('blog controller');

	  $scope.types = ['Technical articles', 'Literary notes'];
	  $scope.currentType = 'Technical articles';
	  $scope.articles = articles;
	  
	  $scope.showArticle = function (article) {
	    if (article.url != '') {
	      window.location.href = article.url;
	    } else {
	      window.location.href = '/#/article/' + article.id;
	    }
	  }
	}]);

	blog.controller('ContactCtrl', ['$scope', function ($scope) {
	  console.log('contact controller');
	}]);

	blog.controller('ArticleCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
	  var id = $stateParams.articleID
	  articles.forEach(function (article) {
	    if (article.id == Number(id)) {
	      $scope.article = article;
	    }
	  });
	}]);

	blog.directive('markdownData', ['$http', function ($http) {
	  return {
	    restrict: 'EA',
	    scope: {
	      file: '=file'
	    },
	    link: function (scope, element, attr) {
	      var file = attr.markdownData;
	      $http.get('/markdowns/' + file).success(function (data) {
	        htmlContent = marked(data);
	        element.html(htmlContent);
	      })
	    }
	  }
	}])

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./base.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./base.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".clear-both, .header:after, .footer:after, #about .content .part > .part-content .item:after, #about .content:after, #blog .list:after {\n  content: \" \";\n  display: table;\n  clear: both; }\n\n.separate-line {\n  border-top: 1px solid #DFDFDF;\n  width: 90px;\n  margin: 30px 0px; }\n\n@media (min-width: 980px) {\n  .header {\n    padding: 85px 122px 0px 122px; } }\n\n.header .brand {\n  font-size: 25px;\n  float: left;\n  color: #303030; }\n  @media (max-width: 980px) {\n    .header .brand {\n      display: none; } }\n\n.header .nav {\n  padding-top: 12px;\n  float: right; }\n  .header .nav li {\n    color: #999999;\n    font-size: 16px;\n    width: 80px;\n    cursor: pointer;\n    text-align: center;\n    display: inline-block; }\n    .header .nav li.active {\n      color: #303030; }\n\n.footer {\n  background-color: #F2F2F2; }\n  @media (min-width: 980px) {\n    .footer {\n      margin-top: 135px;\n      height: 215px;\n      padding: 81px 122px; }\n      .footer .left {\n        float: left; }\n        .footer .left .resume {\n          margin-top: 17px; }\n      .footer .right {\n        float: right; } }\n  @media (max-width: 980px) {\n    .footer {\n      margin-top: 55px;\n      height: 115px;\n      padding: 10px; }\n      .footer .left {\n        margin-left: 15px; }\n      .footer .right {\n        margin-top: 10px; } }\n  .footer .left .copyright {\n    color: #303030; }\n  .footer .left .resume {\n    color: #999999; }\n  .footer .right .nav li {\n    display: inline-block; }\n\n#about {\n  color: #141414;\n  font-family: 'PingFang SC'; }\n  @media (min-width: 980px) {\n    #about {\n      padding: 100px 122px; } }\n  @media (max-width: 980px) {\n    #about {\n      padding: 10px; } }\n  #about * {\n    box-sizing: border-box; }\n  #about p {\n    margin: 0px; }\n  #about a {\n    display: inline;\n    color: #141414;\n    text-decoration: underline; }\n  #about .resume-title {\n    border-bottom: 2px solid #D1D0D2;\n    padding-bottom: 5px; }\n    #about .resume-title .cn-name, #about .resume-title .zn-name {\n      letter-spacing: 2px;\n      font-size: 28px;\n      font-weight: bold; }\n    #about .resume-title .position {\n      line-height: 30px;\n      font-size: 15px;\n      color: #8B898D; }\n  @media (min-width: 980px) {\n    #about .content .left {\n      width: 25%;\n      float: left; }\n    #about .content .right {\n      border-left: 2px solid #D1D0D2;\n      padding-left: 20px;\n      width: 74%;\n      float: left; } }\n  #about .content .part {\n    margin-top: 16px;\n    padding-bottom: 5px; }\n    #about .content .part > .title {\n      white-space: nowrap;\n      letter-spacing: 3px;\n      width: 34px;\n      font-weight: bold;\n      font-size: 15px;\n      border-bottom: 3px solid black;\n      padding-bottom: 8px; }\n    #about .content .part > .part-content {\n      margin-top: 18px; }\n      #about .content .part > .part-content .item {\n        font-size: 10px;\n        margin-bottom: 10px; }\n        #about .content .part > .part-content .item .title {\n          font-size: 11px;\n          font-weight: bold;\n          line-height: 20px; }\n        #about .content .part > .part-content .item .time {\n          width: 25%;\n          float: left; }\n        #about .content .part > .part-content .item .details {\n          margin-top: -1px;\n          width: 75%;\n          line-height: 14px;\n          float: left; }\n          @media (max-width: 980px) {\n            #about .content .part > .part-content .item .details {\n              padding-left: 5px; } }\n          #about .content .part > .part-content .item .details a {\n            font-weight: bold; }\n          #about .content .part > .part-content .item .details i {\n            float: right;\n            color: #8B898D;\n            font-size: 8px; }\n        #about .content .part > .part-content .item p {\n          line-height: 14px; }\n  @media (max-width: 980px) {\n    #about .content #skills, #about .content #work-experiment {\n      border-bottom: 2px solid #D1D0D2; } }\n  @media (min-width: 980px) {\n    #about .content #education, #about .content #work-experiment {\n      border-bottom: 2px solid #D1D0D2; } }\n\n#blog .select {\n  margin: 100px 0 0 122px; }\n  #blog .select .current-type {\n    display: inline-block;\n    color: #303030;\n    font-size: 30px; }\n  #blog .select i {\n    margin-left: 15px;\n    vertical-align: super;\n    color: #999999;\n    cursor: pointer; }\n  @media (max-width: 980px) {\n    #blog .select {\n      margin: 5% 10%; } }\n\n#blog .list {\n  margin-top: 80px; }\n  #blog .list .article {\n    float: left;\n    width: 50%;\n    height: 430px;\n    padding: 88px 122px; }\n    #blog .list .article.active {\n      background-color: #F2F2F2; }\n    #blog .list .article .title {\n      cursor: pointer;\n      color: #303030;\n      font-size: 30px;\n      text-align: left; }\n    #blog .list .article .summary {\n      color: #999999;\n      font-size: 18px;\n      line-height: 40px;\n      height: 120px;\n      word-break: break-all;\n      overflow-y: hidden; }\n    #blog .list .article .create-time {\n      margin-top: 20px;\n      color: #999999;\n      font-size: 18px;\n      text-align: right; }\n    @media (max-width: 980px) {\n      #blog .list .article {\n        width: 100%;\n        padding: 5% 10%;\n        margin-top: 0; } }\n\n.arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  border-top: 20px solid #f00; }\n\n@media (min-width: 980px) {\n  #article {\n    padding: 100px 122px; } }\n\n#article .title {\n  text-align: center;\n  color: #303030;\n  font-size: 30px; }\n\n#article .markdown {\n  margin-top: 60px; }\n\n#article #disqus_thread {\n  margin: 80px 30px 0px 30px; }\n\nbody {\n  background-color: white;\n  font-family: PingHei, \"PingFang SC\", \"Helvetica Neue\", Helvetica, STHeitiSC-Light, Arial, sans-serif; }\n\n.markdown {\n  color: #303030; }\n  .markdown img {\n    max-width: 500px;\n    max-height: 800px;\n    margin: 20px 0px; }\n  .markdown ul {\n    margin-top: 5px;\n    margin-bottom: 15px; }\n  .markdown em {\n    font-size: 13px; }\n  .markdown h3 {\n    margin-top: 30px;\n    color: #2F2F2F; }\n\na:hover, a:focus, a:active {\n  text-decoration: none; }\n", ""]);

	// exports


/***/ },
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	var articles = [{
	  id: 0,
	  title: 'Try Git 0x00',
	  createdAt: 'Mar 5, 2016',
	  summary: 'Git is a widely used source code management system for software development. These articles will lead you to learn it as fast as possible.',
	  file: 'try-git-0.md',
	  type: 'Technical articles',
	  url: ''
	}, {
	  id: 1,
	  title: 'Try Git 0x01',
	  createdAt: 'Mar 5, 2016',
	  summary: 'Git is a widely used source code management system for software development. These articles will lead you to learn it as fast as possible.',
	  file: 'try-git-1.md',
	  type: 'Technical articles',
	  url: ''
	}, {
	  id: 2,
	  title: 'Try Git 0x02',
	  createdAt: 'Mar 5, 2016',
	  summary: 'Git is a widely used source code management system for software development. These articles will lead you to learn it as fast as possible.',
	  file: 'try-git-2.md',
	  type: 'Technical articles',
	  url: ''
	}, {
	  id: 3,
	  title: 'Try Git 0x03',
	  createdAt: 'Mar 5, 2016',
	  summary: 'Git is a widely used source code management system for software development. These articles will lead you to learn it as fast as possible.',
	  file: 'try-git-3.md',
	  type: 'Technical articles',  
	  url: '',
	}, {
	  id: 4,
	  title: 'Git & HTML',
	  createdAt: 'Apr 4, 2016',
	  summary: 'A basic guide about Git and HTML',
	  file: '',
	  type: 'Course',
	  url: 'https://dyweb.github.io/course/web/2016_Spring/git-html/slide.html#/'
	},{
	  id: 5,
	  title: 'Learn Express in 15m',
	  createdAt: 'Apr 4, 2016',
	  summary: 'A basic guide about Express',
	  file: '',
	  type: 'Course',
	  url: 'https://swaylq.github.io/express-test/slide.html'
	},{
	  id: 6,
	  title: 'Learn AngularJS',
	  createdAt: 'Apr 17, 2016',
	  summary: 'A basic guide about AngularJS',
	  file: '',
	  type: 'Course',
	  url: 'http://swaylq.github.io/course/slider/angular.html'
	}];

	module.exports = articles;

/***/ }
/******/ ]);