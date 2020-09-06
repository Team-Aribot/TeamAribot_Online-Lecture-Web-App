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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Navigation */ \"./src/components/Navigation.ts\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.ts\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer.ts\");\n\n\n\n\nvar App = function () {\n  function App($target) {\n    this.$target = $target;\n    this.$navigation = new _components_Navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      $target: $target\n    });\n    this.$header = new _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      $target: $target\n    });\n    this.$footer = new _components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      $target: $target\n    });\n  }\n\n  return App;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.ts?");

/***/ }),

/***/ "./src/components/Footer.ts":
/*!**********************************!*\
  !*** ./src/components/Footer.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Footer = function () {\n  function Footer(_a) {\n    var $target = _a.$target;\n    var $footer = document.createElement('footer');\n    this.$footer = $footer;\n    $footer.innerHTML = \"\\n      <div class=\\\"logo footer\\\" id=\\\"logo-footer\\\">\\uD83D\\uDCFD</div>\\n      <p>\\xA9 \" + new Date().getFullYear() + \" Team-Aribot, Inc.</p>\\n    \";\n    $target.appendChild($footer);\n  }\n\n  Footer.prototype.render = function () {};\n\n  return Footer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/Footer.ts?");

/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Header = function () {\n  function Header(_a) {\n    var $target = _a.$target;\n    var $header = document.createElement('header');\n    this.$header = $header;\n    $header.innerHTML = '<h1>This area will be img-slider</h1>';\n    $target.appendChild($header);\n  }\n\n  Header.prototype.render = function () {};\n\n  return Header;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/Header.ts?");

/***/ }),

/***/ "./src/components/Navigation.ts":
/*!**************************************!*\
  !*** ./src/components/Navigation.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Navigation = function () {\n  function Navigation(_a) {\n    var $target = _a.$target;\n    var $navigation = document.createElement('nav');\n    this.$navigation = $navigation;\n    this.$navigation.innerHTML = \"\\n      <div class=\\\"logo navigation\\\">\\uD83D\\uDCFD</div>\\n      <input class=\\\"input search\\\" id=\\\"nav-search\\\" placeholder=\\\"Search term\\\"></input>\\n      <ul>\\n        <li>My Lectures</li>\\n        <li>Log Out</li>\\n      </ul>\\n    \";\n    $target.appendChild($navigation);\n  }\n\n  Navigation.prototype.render = function () {};\n\n  return Navigation;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\n//# sourceURL=webpack:///./src/components/Navigation.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ \"./src/App.ts\");\n\n\nnew _App__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.querySelector('#root'));\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ })

/******/ });