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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_styles_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_toggleMobileMenu_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_toggleMobileMenu_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_toggleMobileMenu_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_carousel_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_carousel_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__js_carousel_js__);





/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Evolution7 Test</title>\n  </head>\n  <body>\n    <header>\n      <div class=\"logo\">\n        <h2 class=\"logo__text\">ROSA</h2>\n      </div>\n      <nav class=\"nav\">\n        <div class=\"burger-icon\" onclick=\"window.toggleMobileMenu()\">\n          <div class=\"burger-icon__bar\"></div>\n        </div>\n        <div class=\"menu\">\n          <a class=\"menu__item menu__item--active\" href=\"\">Welcome</a>\n          <a class=\"menu__item\" href=\"\">Menu</a>\n          <a class=\"menu__item\" href=\"\">Reservations</a>\n          <a class=\"menu__item\" href=\"\">News</a>\n          <a class=\"menu__item\" href=\"\">Contact</a>\n        </div>\n      </nav>\n    </header>\n    <main>\n      <section class=\"hero carousel\">\n          <button class=\"carousel__carousel-control\" onclick=\"window.carouselForward()\">></button>\n          <button class=\"carousel__carousel-control\" onclick=\"window.carouselBack()\"><</button>\n          <div class=\"carousel__carousel-frame\">\n            <div class=\"carousel__carousel-item\">\n              <h2 class=\"hero__pretext\">Welcome</h2>\n              <h1 class=\"hero__logo-text\">THE ROSA</h1>\n              <h2 class=\"hero__tagline\">READY TO BE OPENED</h2>\n            </div>\n            <div class=\"carousel__carousel-item\">\n              <h2 class=\"hero__pretext\">Welcome</h2>\n              <h1 class=\"hero__logo-text\">THE ROSA</h1>\n              <h2 class=\"hero__tagline\">READY TO BE OPENED</h2>\n            </div>\n            <div class=\"carousel__carousel-item\">\n              <h2 class=\"hero__pretext\">Welcome</h2>\n              <h1 class=\"hero__logo-text\">THE ROSA</h1>\n              <h2 class=\"hero__tagline\">READY TO BE OPENED</h2>\n            </div>\n          </div>\n      </section>\n      <section class=\"feature-2-col\">\n        <div class=\"feature-2-col__text-block\">\n          <h2 class=\"feature-2-col__pretext\">Discover</h2>\n          <h2 class=\"feature-2-col__headline\">OUR STORY</h2>\n          <p class=\"feature-2-col__body\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit delectus velit voluptatum maxime adipisci, porro consectetur, alias molestias vel quas, quae illum mollitia odio distinctio ipsam aliquid numquam, officia ut.\n          </p>\n          <a href=\"\" class=\"feature-2-col__link\">About us</a>\n        </div>\n        <div class=\"feature-2-col__image-container\">\n          <img inline class=\"feature-2-col__image\" src=\"" + __webpack_require__(3) + "\">\n        </div>\n      </section>\n      <section class=\"feature-1-col\">\n        <h2 class=\"feature-1-col__pretext\">Tasteful</h2>\n        <h2 class=\"feature-1-col__title\">RECIPIES</h2>\n      </section>\n      <section class=\"feature-2-col\">\n        <div class=\"feature-2-col__image-container-bands\">\n          <img inline class=\"feature-2-col__image-band\" src=\"" + __webpack_require__(13) + "\">\n          <img inline class=\"feature-2-col__image-band\" src=\"" + __webpack_require__(13) + "\">\n        </div>\n        <div class=\"feature-2-col__text-block\">\n          <h2 class=\"feature-2-col__pretext\">Discover</h2>\n          <h2 class=\"feature-2-col__headline\">MENU</h2>\n          <p class=\"feature-2-col__body\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit delectus velit voluptatum maxime adipisci, porro consectetur, alias molestias vel quas, quae illum mollitia odio distinctio ipsam aliquid numquam, officia ut.\n          </p>\n          <a href=\"\" class=\"feature-2-col__link\">View the full menu</a>\n        </div>\n      </section>\n      <section class=\"feature-1-col\">\n        <h2 class=\"feature-1-col__pretext\">The perfect</h2>\n        <h2 class=\"feature-1-col__title\">BLEND</h2>\n      </section>\n      <section class=\"feature-2-col\">\n        <div class=\"feature-2-col__text-block\">\n          <h2 class=\"feature-2-col__pretext\">Culinary</h2>\n          <h2 class=\"feature-2-col__headline\">DELIGHT</h2>\n          <p class=\"feature-2-col__body\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit delectus velit voluptatum maxime adipisci, porro consectetur, alias molestias vel quas, quae illum mollitia odio distinctio ipsam aliquid numquam, officia ut.\n          </p>\n          <a href=\"\" class=\"feature-2-col__link\">Make a reservation</a>\n        </div>\n        <div class=\"feature-2-col__image-container-grid\">\n          <img inline class=\"feature-2-col__image-grid\" src=\"" + __webpack_require__(12) + "\">\n          <img inline class=\"feature-2-col__image-grid\" src=\"" + __webpack_require__(12) + "\">\n          <img inline class=\"feature-2-col__image-grid\" src=\"" + __webpack_require__(12) + "\">\n          <img inline class=\"feature-2-col__image-grid\" src=\"" + __webpack_require__(12) + "\">\n        </div>\n      </section>\n      <section class=\"contact-info-container\">\n        <div class=\"contact-info\">\n          <h3 class=\"contact-info__title\">Locations</h3>\n          <h4 class=\"contact-info__text-block\">123 Fake street </br> Brooklyn NYC</h4>\n          <h4 class=\"contact-info__text-block\">123 Fake street </br> Brooklyn NYC</h4>\n        </div>\n        <div class=\"contact-info\">\n          <h3 class=\"contact-info__title\">Hours</h3>\n          <h4 class=\"contact-info__text-block\">Mon - Fri </br>8.00 - 18.00</h4>\n          <h4 class=\"contact-info__text-block\">Mon - Fri </br>8.00 - 18.00</h4>\n          <h4 class=\"contact-info__text-block\">Mon - Fri </br>8.00 - 18.00</h4>\n        </div>\n      </section>\n    </main>\n    <footer>\n        <p class=\"footer-text\">Copyright our Company</p>\n        <p class=\"footer-text\">All rights reserved</p>\n    </footer>\n  </body>\n</html>\n";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/food1.jpg";

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

window.toggleMobileMenu = function () {
  var menu = document.getElementsByClassName("nav")[0];
  menu.classList.toggle("nav--mobile-active");
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var items = document.getElementsByClassName("carousel__carousel-item");
var frame = document.getElementsByClassName("carousel__carousel-frame")[0];
var width = items.length * 100;
var count = 1;
initializeCarousel();

function initializeCarousel() {
  console.log(width);
  frame.style.width = width + "vw";
}

window.carouselForward = function () {
  if (count < items.length) {
    count++;
    frame.style.transform = "translate(-" + (count * 100 - 100) + "vw, 0vw)";
  }
};

window.carouselBack = function () {
  if (count > 1) {
    count--;
    frame.style.transform = "translate(-" + (count * 100 - 100) + "vw, 0vw)";
  }
};

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/food3-2.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/food2-2.jpg";

/***/ })
/******/ ]);