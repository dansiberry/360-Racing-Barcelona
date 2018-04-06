/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_html__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_styles_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_toggleMobileMenu_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_toggleMobileMenu_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_toggleMobileMenu_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_carousel_js__ = __webpack_require__(4);





/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

window.toggleMobileMenu = function () {
  var menu = document.getElementsByClassName("nav")[0];
  menu.classList.toggle("nav--mobile-active");
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__owners_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__owners_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__owners_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__racing_html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__racing_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__racing_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collection_html__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collection_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__collection_html__);
var items = Array.from(document.getElementsByClassName("b-carousel__carousel-item"));
var frame = document.getElementsByClassName("b-carousel__carousel-frame")[0];
var order = items.length;
var count = 0;

window.carouselBack = function () {
  if (items[count]) {
    frame.classList.add('hide');
    setTimeout(function () {
      items[count].style.order = order + 1;
      count++;
      order++;
      frame.classList.remove('hide');
    }, 300);
  } else {
    count = 0;
    window.carouselBack();
  }
};

window.carouselForward = function () {
  if (items[count - 1]) {
    frame.classList.add('hide');
    setTimeout(function () {
      items[count - 1].style.order = order - items.length;
      count--;
      order--;
      frame.classList.remove('hide');
    }, 300);
  } else {
    count = items.length;
    window.carouselForward();
  }
};





/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "owners.html";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "racing.html";

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "collection.html";

/***/ })
/******/ ]);