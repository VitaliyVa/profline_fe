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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/common_componentc/footer/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/footer/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/footer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/footer/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/footer/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/header/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/header/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


window.onload = function () {
  var delivery_hint_close = document.getElementsByClassName('delivery_hint_close')[0];
  delivery_hint_close.addEventListener("click", hide_hint);

  function hide_hint() {
    var hint_delivery__block = document.getElementsByClassName('delivery_hint__block')[0];
    var header_nav = document.getElementsByClassName('header_navigation')[0];
    hint_delivery__block.classList.add('hidden');
    header_nav.classList.remove('header_navigation_delivery');
    var bottom_navigation = document.getElementsByClassName('bottom_navigation')[0];
    bottom_navigation.classList.remove('delivery');
  }

  {
    var navigation_phone_arrow = document.getElementsByClassName('navigation_phone_arrow')[0];
    navigation_phone_arrow.addEventListener("click", open_phones);

    function open_phones() {
      var navigation_another_phone = document.getElementsByClassName('navigation_another_phone')[0];
      navigation_another_phone.classList.toggle('active');
    }
  }
  var header_navigation = document.getElementsByClassName('header_navigation')[0];
  var menu_btn = document.getElementsByClassName('menu_btn')[0];
  menu_btn.addEventListener("click", menu_action);

  function menu_action() {
    var header_navigation = document.getElementsByClassName('header_navigation')[0];
    var menu_btn = document.getElementsByClassName('menu_btn')[0];
    menu_btn.classList.toggle('active');
    header_navigation.classList.toggle('active');
  }

  window.addEventListener('scroll', function (e) {
    var scrollTop = getBodyScrollTop();

    if (scrollTop >= 350) {
      header_navigation.classList.add('scroll');
      header_navigation.classList.add('fixed');
      hide_hint();
    } else if (scrollTop >= 220 && scrollTop <= 350) {
      header_navigation.classList.add('animation');
      header_navigation.classList.remove('active');
      menu_btn.classList.remove('active');
    } else {
      header_navigation.classList.remove('scroll');
      header_navigation.classList.remove('animation');
      header_navigation.classList.remove('fixed');
    }
  });

  function getBodyScrollTop() {
    return self.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop;
  }

  var location__block = document.getElementsByClassName('location__block')[0];
  var mobile__block = document.getElementsByClassName('mobile__block')[0];
  var location_triger = document.querySelectorAll('.location_triger');
  var mobile_triger = document.querySelectorAll('.mobile_triger');
  var mini_modal_close = document.querySelectorAll('.mini_modal_close');
  location_triger.forEach(function (item) {
    item.addEventListener("click", function () {
      mobile__block.classList.remove('active');
      location__block.classList.toggle('active');
    });
  });
  mobile_triger.forEach(function (item) {
    item.addEventListener("click", function () {
      location__block.classList.remove('active');
      mobile__block.classList.toggle('active');
    });
  });
  mini_modal_close.forEach(function (item) {
    item.addEventListener("click", function () {
      // this.target.classList.remove('active');
      this.closest(".mini_modal").classList.remove('active');
    });
  }); // document.onclick = function (e) {
  //     let check_location_triger = event.target.classList.contains('location_triger');
  //     let check_mobile_triger = event.target.classList.contains('mobile_triger');
  //     let check_mobile_active = mobile__block.classList.contains('active');
  //     let check_location_active = location__block.classList.contains('active');
  //     if (check_location_triger == false && check_location_active == true) {
  //         location__block.classList.remove('active');
  //     }
  //     if (check_mobile_triger == false && check_mobile_active == true) {
  //         mobile__block.classList.remove('active');
  //     }
  // };
};

/***/ }),

/***/ "../components/common_componentc/header/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/header/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/normalize/index.js":
/*!**********************************************************!*\
  !*** ../components/common_componentc/normalize/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/normalize/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/normalize/index.scss":
/*!************************************************************!*\
  !*** ../components/common_componentc/normalize/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/button/index.js":
/*!***********************************************!*\
  !*** ../components/interface/button/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/button/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/button/index.scss":
/*!*************************************************!*\
  !*** ../components/interface/button/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/index.js":
/*!*********************************************!*\
  !*** ../components/interface/form/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/form/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/form/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/grid/fontsAndColors.scss":
/*!********************************************************!*\
  !*** ../components/interface/grid/fontsAndColors.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/grid/index.js":
/*!*********************************************!*\
  !*** ../components/interface/grid/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/grid/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fontsAndColors_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fontsAndColors.scss */ "../components/interface/grid/fontsAndColors.scss");
/* harmony import */ var _fontsAndColors_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontsAndColors_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../components/interface/grid/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/grid/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/catalog_elements/index.js":
/*!******************************************************!*\
  !*** ../components/module/catalog_elements/index.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _star_rate_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star_rate.scss */ "../components/module/catalog_elements/star_rate.scss");
/* harmony import */ var _star_rate_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_star_rate_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "../components/module/catalog_elements/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


var swiper = new Swiper(".card_swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    1200: {
      slidesPerView: 4
    },
    992: {
      slidesPerView: 3
    },
    600: {
      slidesPerView: 2
    },
    300: {
      slidesPerView: 1
    }
  }
});

/***/ }),

/***/ "../components/module/catalog_elements/index.scss":
/*!********************************************************!*\
  !*** ../components/module/catalog_elements/index.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/catalog_elements/star_rate.scss":
/*!************************************************************!*\
  !*** ../components/module/catalog_elements/star_rate.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/subscribe_section/index.js":
/*!*******************************************************!*\
  !*** ../components/module/subscribe_section/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/module/subscribe_section/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/module/subscribe_section/index.scss":
/*!*********************************************************!*\
  !*** ../components/module/subscribe_section/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/index/index.js":
/*!******************************************!*\
  !*** ../components/pages/index/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

var swiper = new Swiper(".main_slider__block", {
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var width = document.documentElement.clientWidth;

if (width <= 1350) {
  var _swiper = new Swiper(".best_sales_swiper", {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      992: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    }
  });

  var sponsor_swiper = new Swiper(".sponsor_swiper", {
    speed: 1000,
    slidesPerView: 'auto',
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      992: {
        slidesPerView: 5
      },
      800: {
        slidesPerView: 3
      },
      420: {
        slidesPerView: 2
      }
    }
  });
}

/***/ }),

/***/ "../components/pages/index/index.scss":
/*!********************************************!*\
  !*** ../components/pages/index/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_componentc_normalize_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/common_componentc/normalize/index */ "../components/common_componentc/normalize/index.js");
/* harmony import */ var _components_interface_grid_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/interface/grid/index */ "../components/interface/grid/index.js");
/* harmony import */ var _components_interface_form_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/interface/form/index */ "../components/interface/form/index.js");
/* harmony import */ var _components_interface_button_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/interface/button/index */ "../components/interface/button/index.js");
/* harmony import */ var _components_module_catalog_elements_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/module/catalog_elements/index */ "../components/module/catalog_elements/index.js");
/* harmony import */ var _components_module_subscribe_section_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/module/subscribe_section/index */ "../components/module/subscribe_section/index.js");
/* harmony import */ var _components_common_componentc_header_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common_componentc/header/index */ "../components/common_componentc/header/index.js");
/* harmony import */ var _components_common_componentc_footer_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common_componentc/footer/index */ "../components/common_componentc/footer/index.js");
/* harmony import */ var _components_pages_index_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/pages/index/index */ "../components/pages/index/index.js");
// script interface



 // script common elements


 // script pages





/***/ })

/******/ });
//# sourceMappingURL=index.js.map