/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger-menu */ "./src/js/components/burger-menu.js");
/* harmony import */ var _components_burger_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_burger_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scroll */ "./src/js/components/scroll.js");
/* harmony import */ var _components_snowlakes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/snowlakes */ "./src/js/components/snowlakes.js");
/* harmony import */ var _components_snowlakes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_snowlakes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_hero_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hero_animations */ "./src/js/components/hero_animations.js");
/* harmony import */ var _components_hero_animations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_hero_animations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_stars_twinking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/stars_twinking */ "./src/js/components/stars_twinking.js");
/* harmony import */ var _components_stars_twinking__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_stars_twinking__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_swiper_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/swiper-slider */ "./src/js/components/swiper-slider.js");
/* harmony import */ var _components_custom_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/custom-select */ "./src/js/components/custom-select.js");
/* harmony import */ var _components_custom_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_custom_select__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/js/components/burger-menu.js":
/*!******************************************!*\
  !*** ./src/js/components/burger-menu.js ***!
  \******************************************/
/***/ (() => {

const burgerBtn = document.querySelector('.js-burger-btn');
const navMenu = document.querySelector('.js-nav-menu');
burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('is-active');
  navMenu.classList.toggle('active');
});

/***/ }),

/***/ "./src/js/components/custom-select.js":
/*!********************************************!*\
  !*** ./src/js/components/custom-select.js ***!
  \********************************************/
/***/ (() => {

var select = document.querySelector('.custom-select');
var selected = document.querySelector('.select-selected');
var items = document.querySelector('.select-items');
var hiddenInput = document.getElementById('user-gender');
selected.addEventListener('click', function () {
  items.classList.toggle('select-hide');
  selected.classList.toggle('select-arrow-active');
});
var options = items.getElementsByTagName('div');
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener('click', function () {
    console.log(1);
    var value = this.getAttribute('data-value');
    selected.innerHTML = this.innerHTML + '<span class="select-arrow"></span>';
    hiddenInput.value = value;
    items.classList.add('select-hide');
    selected.classList.remove('select-arrow-active');
  });
}
document.addEventListener('click', function (e) {
  console.log(2);
  if (!select.contains(e.target)) {
    items.classList.add('select-hide');
    selected.classList.remove('select-arrow-active');
  }
});

/***/ }),

/***/ "./src/js/components/hero_animations.js":
/*!**********************************************!*\
  !*** ./src/js/components/hero_animations.js ***!
  \**********************************************/
/***/ (() => {

const heroText = document.querySelector('.js-hero-text');
setTimeout(() => {
  heroText.classList.add('active');
}, 3000);

/***/ }),

/***/ "./src/js/components/scroll.js":
/*!*************************************!*\
  !*** ./src/js/components/scroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fullpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fullpage.js */ "./node_modules/fullpage.js/dist/fullpage.js");
/* harmony import */ var fullpage_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fullpage_js__WEBPACK_IMPORTED_MODULE_0__);

var fullPageInstance = new (fullpage_js__WEBPACK_IMPORTED_MODULE_0___default())('#fullpage', {
  licenseKey: 'gplv3-license',
  verticalCentered: false
});

/***/ }),

/***/ "./src/js/components/snowlakes.js":
/*!****************************************!*\
  !*** ./src/js/components/snowlakes.js ***!
  \****************************************/
/***/ (() => {

const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = '#ddd';
const snowflakes = [];
const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
const createSnowflake = () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
  color: SNOWFLAKE_COLOUR,
  speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
  sway: Math.random() - 0.5
});
const drawSnowflake = snowflake => {
  ctx.beginPath();
  ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
  ctx.fillStyle = snowflake.color;
  ctx.fill();
  ctx.closePath();
};
const updateSnowflake = snowflake => {
  snowflake.y += snowflake.speed;
  snowflake.x += snowflake.sway;
  if (snowflake.y > canvas.height) {
    Object.assign(snowflake, createSnowflake());
  }
};
const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach(snowflake => {
    updateSnowflake(snowflake);
    drawSnowflake(snowflake);
  });
  requestAnimationFrame(animate);
};
for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
  snowflakes.push(createSnowflake());
}
animate();
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
window.addEventListener('scroll', () => {
  canvas.style.top = `${window.scrollY}px`;
});

/***/ }),

/***/ "./src/js/components/stars_twinking.js":
/*!*********************************************!*\
  !*** ./src/js/components/stars_twinking.js ***!
  \*********************************************/
/***/ (() => {

var timesRun = 0;
const containers = document.querySelectorAll('.section');
containers.forEach(container => {
  for (let i = 0; i < 50; i++) {
    var starCounts = document.createElement('i');
    starCounts.className = 'star';
    var wh = Math.floor(Math.random(1, 10) * 15);
    var $x = Math.floor(Math.random(0, 4) * 100);
    var $y = Math.floor(Math.random(0, 4) * 100);
    starCounts.style.position = 'absolute';
    starCounts.style.width = wh + 'px';
    starCounts.style.height = wh + 'px';
    starCounts.style.left = $x + 'vw';
    starCounts.style.top = $y + 'vh';
    container.appendChild(starCounts);
  }
});

/***/ }),

/***/ "./src/js/components/swiper-slider.js":
/*!********************************************!*\
  !*** ./src/js/components/swiper-slider.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


var swiper1 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".swiper-thumbs", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Thumbs]
});
var swiper2 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slider-lg", {
  spaceBetween: 10,
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Thumbs],
  thumbs: {
    swiper: swiper1
  }
});

/***/ }),

/***/ "./node_modules/fullpage.js/dist/fullpage.js":
/*!***************************************************!*\
  !*** ./node_modules/fullpage.js/dist/fullpage.js ***!
  \***************************************************/
/***/ (function(module) {

/*!
* fullPage 4.0.22
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/

(function (global, factory) {
     true ? module.exports = factory() :
    0;
})(this, (function () { 'use strict';

    // https://tc39.github.io/ecma262/#sec-array.prototype.find
    if (!Array.prototype.find) {
      Object.defineProperty(Array.prototype, 'find', {
        value: function value(predicate) {
          // 1. Let O be ? ToObject(this value).
          if (this == null) {
            throw new TypeError('"this" is null or not defined');
          }

          var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

          var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

          if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
          } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


          var thisArg = arguments[1]; // 5. Let k be 0.

          var k = 0; // 6. Repeat, while k < len

          while (k < len) {
            // a. Let Pk be ! ToString(k).
            // b. Let kValue be ? Get(O, Pk).
            // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
            // d. If testResult is true, return kValue.
            var kValue = o[k];

            if (predicate.call(thisArg, kValue, k, o)) {
              return kValue;
            } // e. Increase k by 1.


            k++;
          } // 7. Return undefined.


          return undefined;
        }
      });
    }

    // Production steps of ECMA-262, Edition 6, 22.1.2.1
    if (!Array.from) {
      Array.from = function () {
        var toStr = Object.prototype.toString;

        var isCallable = function isCallable(fn) {
          return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };

        var toInteger = function toInteger(value) {
          var number = Number(value);

          if (isNaN(number)) {
            return 0;
          }

          if (number === 0 || !isFinite(number)) {
            return number;
          }

          return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };

        var maxSafeInteger = Math.pow(2, 53) - 1;

        var toLength = function toLength(value) {
          var len = toInteger(value);
          return Math.min(Math.max(len, 0), maxSafeInteger);
        }; // The length property of the from method is 1.


        return function from(arrayLike
        /*, mapFn, thisArg */
        ) {
          // 1. Let C be the this value.
          var C = this; // 2. Let items be ToObject(arrayLike).

          var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

          if (arrayLike == null) {
            throw new TypeError('Array.from requires an array-like object - not null or undefined');
          } // 4. If mapfn is undefined, then let mapping be false.


          var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
          var T;

          if (typeof mapFn !== 'undefined') {
            // 5. else
            // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
            if (!isCallable(mapFn)) {
              throw new TypeError('Array.from: when provided, the second argument must be a function');
            } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


            if (arguments.length > 2) {
              T = arguments[2];
            }
          } // 10. Let lenValue be Get(items, "length").
          // 11. Let len be ToLength(lenValue).


          var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
          // 13. a. Let A be the result of calling the [[Construct]] internal method
          // of C with an argument list containing the single item len.
          // 14. a. Else, Let A be ArrayCreate(len).

          var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

          var k = 0; // 17. Repeat, while k < len… (also steps a - h)

          var kValue;

          while (k < len) {
            kValue = items[k];

            if (mapFn) {
              A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
            } else {
              A[k] = kValue;
            }

            k += 1;
          } // 18. Let putStatus be Put(A, "length", len, true).


          A.length = len; // 20. Return A.

          return A;
        };
      }();
    }

    var win = window;
    var doc = document;
    var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/) || navigator.userAgent.includes("Mac") && "ontouchend" in document; // iPad on iOS 13 detection

    var isMacDevice = /(Mac|iPhone|iPod|iPad)/i.test(win.navigator.userAgent); // @ts-ignore

    var isTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode; // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js

    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], summary:not([disabled]), [contenteditable]'; // cache common elements

    var FP = {
      test: {},
      shared: {}
    };
    var extensions = ['parallax', 'scrollOverflowReset', 'dragAndMove', 'offsetSections', 'fadingEffect', 'responsiveSlides', 'continuousHorizontal', 'interlockedSlides', 'scrollHorizontally', 'resetSliders', 'cards', 'dropEffect', 'waterEffect'];

    /**
    * forEach polyfill for IE
    * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
    */

    if (win.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;

        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }

    if (typeof Object.assign != 'function') {
      // Must be writable: true, enumerable: false, configurable: true
      Object.defineProperty(Object, 'assign', {
        value: function assign(target, varArgs) {

          if (target == null) {
            // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
          }

          var to = Object(target);

          for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource != null) {
              // Skip over if undefined or null
              for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }

          return to;
        },
        writable: true,
        configurable: true
      });
    }

    // https://stackoverflow.com/questions/51719553/padstart-not-working-in-ie11
    // https://github.com/behnammodi/polyfill/blob/master/string.polyfill.js
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
    if (!String.prototype.padStart) {
      String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;

        padString = String(typeof padString !== 'undefined' ? padString : ' ');

        if (this.length > targetLength) {
          return String(this);
        } else {
          targetLength = targetLength - this.length;

          if (targetLength > padString.length) {
            padString += Array.apply(null, Array(targetLength)).map(function () {
              return padString;
            }).join("");
          }

          return padString.slice(0, targetLength) + String(this);
        }
      };
    }

    //utils
    /**
    * Shows a message in the console of the given type.
    */

    function showError(type, text) {
      win.console && win.console[type] && win.console[type]('fullPage: ' + text);
    }
    function isVisible(el) {
      var style = win.getComputedStyle(el);
      return style.display !== 'none';
    }
    function getVisible(elements) {
      return Array.from(elements).filter(function (e) {
        return isVisible(e);
      });
    }
    /**
    * Equivalent of jQuery function $().
    */

    function $(selector, context) {
      context = arguments.length > 1 ? context : document;
      return context ? context.querySelectorAll(selector) : null;
    }
    /**
    * Extends a given Object properties and its childs.
    */

    function deepExtend(out) {
      out = out || {};

      for (var i = 1, len = arguments.length; i < len; ++i) {
        var obj = arguments[i];

        if (!obj) {
          continue;
        }

        for (var key in obj) {
          if (!obj.hasOwnProperty(key) || key == '__proto__' || key == 'constructor') {
            continue;
          } // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/


          if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
            out[key] = deepExtend(out[key], obj[key]);
            continue;
          }

          out[key] = obj[key];
        }
      }

      return out;
    }
    /**
    * Checks if the passed element contains the passed class.
    */

    function hasClass(el, className) {
      if (el == null) {
        return false;
      }

      return el.classList.contains(className);
    }
    /**
    * Gets the window height. Crossbrowser.
    */

    function getWindowHeight() {
      return 'innerHeight' in win ? win.innerHeight : doc.documentElement.offsetHeight;
    }
    /**
    * Gets the window width.
    */

    function getWindowWidth() {
      return win.innerWidth;
    }
    /**
    * Set's the CSS properties for the passed item/s.
    * @param {NodeList|HTMLElement|Object} items
    * @param {Object} props css properties and values.
    */

    function css(items, props) {
      items = getList(items);
      var key;

      for (key in props) {
        if (props.hasOwnProperty(key)) {
          if (key !== null) {
            for (var i = 0; i < items.length; i++) {
              var item = items[i];
              item.style[key] = props[key];
            }
          }
        }
      }

      return items;
    }
    /**
    * Gets the previous element to the passed element.
    */

    function prev(item) {
      return item.previousElementSibling;
    }
    /**
    * Gets the next element to the passed element.
    */

    function next(item) {
      return item.nextElementSibling;
    }
    /**
    * Gets the last element from the passed list of elements.
    */

    function last(item) {
      return item[item.length - 1];
    }
    /**
    * Gets index from the passed element.
    * @param {String} selector is optional.
    */

    function index(item, selector) {
      item = isArrayOrList(item) ? item[0] : item;
      var children = selector != null ? $(selector, item.parentNode) : item.parentNode.childNodes;
      var num = 0;

      for (var i = 0; i < children.length; i++) {
        if (children[i] == item) return num;
        if (children[i].nodeType == 1) num++;
      }

      return -1;
    }
    /**
    * Gets an iterable element for the passed element/s
    */

    function getList(item) {
      return !isArrayOrList(item) ? [item] : item;
    }
    /**
    * Adds the display=none property for the passed element/s
    */

    function hide(el) {
      el = getList(el);

      for (var i = 0; i < el.length; i++) {
        el[i].style.display = 'none';
      }

      return el;
    }
    /**
    * Adds the display=block property for the passed element/s
    */

    function show(el) {
      el = getList(el);

      for (var i = 0; i < el.length; i++) {
        el[i].style.display = 'block';
      }

      return el;
    }
    /**
    * Checks if the passed element is an iterable element or not
    */

    function isArrayOrList(el) {
      return Object.prototype.toString.call(el) === '[object Array]' || Object.prototype.toString.call(el) === '[object NodeList]';
    }
    /**
    * Adds the passed class to the passed element/s
    */

    function addClass(el, className) {
      el = getList(el);

      for (var i = 0; i < el.length; i++) {
        var item = el[i];
        item.classList.add(className);
      }

      return el;
    }
    /**
    * Removes the passed class to the passed element/s
    * @param {String} `className` can be multiple classnames separated by whitespace
    */

    function removeClass(el, className) {
      el = getList(el);
      var classNames = className.split(' ');

      for (var a = 0; a < classNames.length; a++) {
        className = classNames[a];

        for (var i = 0; i < el.length; i++) {
          var item = el[i];
          item.classList.remove(className);
        }
      }

      return el;
    }
    /**
    * Appends the given element ot the given parent.
    */

    function appendTo(el, parent) {
      parent.appendChild(el);
    }
    /**
    Usage:

    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
    https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
    */

    function wrap(toWrap, wrapper, isWrapAll) {
      var newParent;
      wrapper = wrapper || doc.createElement('div');

      for (var i = 0; i < toWrap.length; i++) {
        var item = toWrap[i];

        if (isWrapAll && !i || !isWrapAll) {
          newParent = wrapper.cloneNode(true);
          item.parentNode.insertBefore(newParent, item);
        }

        newParent.appendChild(item);
      }

      return toWrap;
    }
    /**
    Usage:
    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
    https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
    */

    function wrapAll(toWrap, wrapper) {
      wrap(toWrap, wrapper, true);
    }
    /**
    * Usage:
    * wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');
    * wrapInner(document.querySelector('#pepe'), element);
    *
    * https://jsfiddle.net/zexxz0tw/6/
    *
    * https://stackoverflow.com/a/21817590/1081396
    */

    function wrapInner(parent, wrapper) {
      parent.appendChild(wrapper);

      while (parent.firstChild !== wrapper) {
        wrapper.appendChild(parent.firstChild);
      }
    }
    /**
    * Usage:
    * unwrap(document.querySelector('#pepe'));
    * unwrap(element);
    *
    * https://jsfiddle.net/szjt0hxq/1/
    *
    */

    function unwrap(wrapper) {
      var wrapperContent = doc.createDocumentFragment();

      while (wrapper.firstChild) {
        wrapperContent.appendChild(wrapper.firstChild);
      }

      wrapper.parentNode.replaceChild(wrapperContent, wrapper);
    }
    /**
    * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
    * Returns the element or `false` if there's none
    */

    function closest(el, selector) {
      if (el && el.nodeType === 1) {
        if (matches(el, selector)) {
          return el;
        }

        return closest(el.parentNode, selector);
      }

      return null;
    }
    /**
    * Places one element (rel) after another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String|Array} el
    * https://jsfiddle.net/9s97hhzv/1/
    */

    function after(reference, el) {
      insertBefore(reference, reference.nextSibling, el);
    }
    /**
    * Places one element (rel) before another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String|Array} el
    * https://jsfiddle.net/9s97hhzv/1/
    */

    function before(reference, el) {
      insertBefore(reference, reference, el);
    }
    /**
    * Based in https://stackoverflow.com/a/19316024/1081396
    * and https://stackoverflow.com/a/4793630/1081396
    */

    function insertBefore(reference, beforeElement, el) {
      if (!isArrayOrList(el)) {
        if (typeof el == 'string') {
          el = createElementFromHTML(el);
        }

        el = [el];
      }

      for (var i = 0; i < el.length; i++) {
        reference.parentNode.insertBefore(el[i], beforeElement);
      }
    } //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll

    function getScrollTop() {
      var docElement = doc.documentElement;
      return (win.pageYOffset || docElement.scrollTop) - (docElement.clientTop || 0);
    }
    /**
    * Gets the siblings of the passed element
    */

    function siblings(el) {
      return Array.prototype.filter.call(el.parentNode.children, function (child) {
        return child !== el;
      });
    }
    function preventDefault(event) {
      event.preventDefault();
    }
    function getAttr(el, attr) {
      return el.getAttribute(attr);
    }
    function docAddEvent(event, callback, options) {
      doc.addEventListener(event, callback, options === 'undefined' ? null : options);
    }
    function windowAddEvent(event, callback, options) {
      win.addEventListener(event, callback, options === 'undefined' ? null : options);
    }
    function docRemoveEvent(event, callback, options) {
      doc.removeEventListener(event, callback, options === 'undefined' ? null : options);
    }
    function windowRemoveEvent(event, callback, options) {
      win.removeEventListener(event, callback, options === 'undefined' ? null : options);
    }
    /**
    * Determines whether the passed item is of function type.
    */

    function isFunction(item) {
      if (typeof item === 'function') {
        return true;
      }

      var type = Object.prototype.toString.call(item);
      return type === '[object Function]' || type === '[object GeneratorFunction]';
    }
    /**
    * Trigger custom events
    */

    function trigger(el, eventName, data) {
      var event;
      data = typeof data === 'undefined' ? {} : data; // Native

      if (typeof win.CustomEvent === "function") {
        event = new CustomEvent(eventName, {
          detail: data
        });
      } else {
        event = doc.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, data);
      }

      el.dispatchEvent(event);
    }
    /**
    * Polyfill of .matches()
    */

    function matches(el, selector) {
      return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    }
    /**
    * Toggles the visibility of the passed element el.
    */

    function toggle(el, value) {
      if (typeof value === "boolean") {
        for (var i = 0; i < el.length; i++) {
          el[i].style.display = value ? 'block' : 'none';
        }
      } //we don't use it in other way, so no else :)


      return el;
    }
    /**
    * Creates a HTMLElement from the passed HTML string.
    * https://stackoverflow.com/a/494348/1081396
    */

    function createElementFromHTML(htmlString) {
      var div = doc.createElement('div');
      div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes

      return div.firstChild;
    }
    /**
    * Removes the passed item/s from the DOM.
    */

    function remove(items) {
      items = getList(items);

      for (var i = 0; i < items.length; i++) {
        var item = items[i];

        if (item && item.parentElement) {
          item.parentNode.removeChild(item);
        }
      }
    } //https://jsfiddle.net/w1rktecz/

    function untilAll(item, selector, fn) {
      var sibling = item[fn];
      var siblings = [];

      while (sibling) {
        if (matches(sibling, selector) || selector == null) {
          siblings.push(sibling);
        }

        sibling = sibling[fn];
      }

      return siblings;
    }
    /**
    * Gets all next elements matching the passed selector.
    */

    function nextAll(item, selector) {
      return untilAll(item, selector, 'nextElementSibling');
    }
    /**
    * Gets all previous elements matching the passed selector.
    */

    function prevAll(item, selector) {
      return untilAll(item, selector, 'previousElementSibling');
    }
    /**
    * Converts an object to an array.
    */

    function toArray(objectData) {
      return Object.keys(objectData).map(function (key) {
        return objectData[key];
      });
    }
    function getLast(items) {
      return items[items.length - 1];
    }
    /**
    * Gets the average of the last `number` elements of the given array.
    */

    function getAverage(elements, number) {
      var sum = 0; //taking `number` elements from the end to make the average, if there are not enought, 1

      var lastElements = elements.slice(Math.max(elements.length - number, 1));

      for (var i = 0; i < lastElements.length; i++) {
        sum = sum + lastElements[i];
      }

      return Math.ceil(sum / number);
    }
    /**
    * Sets the value for the given attribute from the `data-` attribute with the same suffix
    * ie: data-srcset ==> srcset  |  data-src ==> src
    */

    function setSrc(element, attribute) {
      element.setAttribute(attribute, getAttr(element, 'data-' + attribute));
      element.removeAttribute('data-' + attribute);
    }
    function getParentsUntil(item, topParentSelector) {
      var parents = [item];

      do {
        item = item.parentNode;
        parents.push(item);
      } while (!matches(item, topParentSelector));

      return parents;
    }
    function isInsideInput() {
      var activeElement = doc.activeElement;
      return matches(activeElement, 'textarea') || matches(activeElement, 'input') || matches(activeElement, 'select') || getAttr(activeElement, 'contentEditable') == "true" || getAttr(activeElement, 'contentEditable') == '';
    } //utils are public, so we can use it wherever we want
    // @ts-ignore

    window["fp_utils"] = {
      "$": $,
      "deepExtend": deepExtend,
      "hasClass": hasClass,
      "getWindowHeight": getWindowHeight,
      "css": css,
      "prev": prev,
      "next": next,
      "last": last,
      "index": index,
      "getList": getList,
      "hide": hide,
      "show": show,
      "isArrayOrList": isArrayOrList,
      "addClass": addClass,
      "removeClass": removeClass,
      "appendTo": appendTo,
      "wrap": wrap,
      "wrapAll": wrapAll,
      "unwrap": unwrap,
      "closest": closest,
      "after": after,
      "before": before,
      "insertBefore": insertBefore,
      "getScrollTop": getScrollTop,
      "siblings": siblings,
      "preventDefault": preventDefault,
      "isFunction": isFunction,
      "trigger": trigger,
      "matches": matches,
      "toggle": toggle,
      "createElementFromHTML": createElementFromHTML,
      "remove": remove,
      // "filter": filter,
      "untilAll": untilAll,
      "nextAll": nextAll,
      "prevAll": prevAll,
      "showError": showError
    };

    var utils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        showError: showError,
        isVisible: isVisible,
        getVisible: getVisible,
        $: $,
        deepExtend: deepExtend,
        hasClass: hasClass,
        getWindowHeight: getWindowHeight,
        getWindowWidth: getWindowWidth,
        css: css,
        prev: prev,
        next: next,
        last: last,
        index: index,
        getList: getList,
        hide: hide,
        show: show,
        isArrayOrList: isArrayOrList,
        addClass: addClass,
        removeClass: removeClass,
        appendTo: appendTo,
        wrap: wrap,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        unwrap: unwrap,
        closest: closest,
        after: after,
        before: before,
        insertBefore: insertBefore,
        getScrollTop: getScrollTop,
        siblings: siblings,
        preventDefault: preventDefault,
        getAttr: getAttr,
        docAddEvent: docAddEvent,
        windowAddEvent: windowAddEvent,
        docRemoveEvent: docRemoveEvent,
        windowRemoveEvent: windowRemoveEvent,
        isFunction: isFunction,
        trigger: trigger,
        matches: matches,
        toggle: toggle,
        createElementFromHTML: createElementFromHTML,
        remove: remove,
        untilAll: untilAll,
        nextAll: nextAll,
        prevAll: prevAll,
        toArray: toArray,
        getLast: getLast,
        getAverage: getAverage,
        setSrc: setSrc,
        getParentsUntil: getParentsUntil,
        isInsideInput: isInsideInput
    });

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    var EventEmitter = {
      events: {},
      on: function on(event, listener) {
        var _this = this;

        if (_typeof(this.events[event]) !== 'object') {
          this.events[event] = [];
        }

        this.events[event].push(listener);
        return function () {
          return _this.removeListener(event, listener);
        };
      },
      removeListener: function removeListener(event, listener) {
        if (_typeof(this.events[event]) === 'object') {
          var idx = this.events[event].indexOf(listener);

          if (idx > -1) {
            this.events[event].splice(idx, 1);
          }
        }
      },
      emit: function emit(event) {
        var _this2 = this;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        if (_typeof(this.events[event]) === 'object') {
          this.events[event].forEach(function (listener) {
            return listener.apply(_this2, args);
          });
        }
      },
      once: function once(event, listener) {
        var _this3 = this;

        var remove = this.on(event, function () {
          remove();

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(_this3, args);
        });
      }
    };

    var state = {
      numSections: 0,
      numSlides: 0,
      slides: [],
      sections: [],
      activeSection: null,
      scrollTrigger: null,
      isBeyondFullpage: false,
      aboutToScrollToFullPage: false,
      slideMoving: false,
      isResizing: false,
      isScrolling: false,
      lastScrolledDestiny: undefined,
      lastScrolledSlide: undefined,
      activeAnimation: false,
      canScroll: true,
      touchDirection: 'none',
      wheelDirection: 'none',
      isGrabbing: false,
      isUsingWheel: false,
      isWindowFocused: true,
      previousDestTop: 0,
      windowsHeight: getWindowHeight(),
      isDoingContinousVertical: false,
      timeouts: {},
      scrollY: 0,
      scrollX: 0
    }; // @ts-ignore

    win.state = state;
    function setState(props) {
      Object.assign(state, props);
    }
    function getState() {
      return state;
    }
    function getActivePanel() {
      return state.activeSection && state.activeSection.activeSlide ? state.activeSection.activeSlide : state.activeSection;
    }

    var events = {
      onAfterRenderNoAnchor: 'onAfterRenderNoAnchor',
      onClickOrTouch: 'onClickOrTouch',
      moveSlideLeft: 'moveSlideLeft',
      moveSlideRight: 'moveSlideRight',
      onInitialise: 'onInitialise',
      beforeInit: 'beforeInit',
      bindEvents: 'bindEvents',
      onDestroy: 'onDestroy',
      contentChanged: 'contentChanged',
      onScrollOverflowScrolled: 'onScrollOverflowScrolled',
      onScrollPageAndSlide: 'onScrollPageAndSlide',
      onKeyDown: 'onKeyDown',
      onMenuClick: 'onMenuClick',
      scrollPage: 'scrollPage',
      landscapeScroll: 'landscapeScroll',
      scrollBeyondFullpage: 'scrollBeyondFullpage',
      onPerformMovement: 'onPerformMovement',
      onSlideLeave: 'onSlideLeave',
      onLeave: 'onLeave',
      afterSectionLoads: 'afterSectionLoads',
      afterSlideLoads: 'afterSlideLoads'
    };

    EventEmitter.on(events.bindEvents, bindEvents$c);

    function bindEvents$c() {
      //Scrolls to the section when clicking the navigation bullet
      //simulating the jQuery .on('click') event using delegation
      ['click', 'touchstart'].forEach(function (eventName) {
        docAddEvent(eventName, delegatedEvents);
      });
      windowAddEvent('focus', focusHandler);
      internalEvents();
    }

    function internalEvents() {
      EventEmitter.on(events.onDestroy, onDestroy$9);
    }

    function delegatedEvents(e) {
      EventEmitter.emit(events.onClickOrTouch, {
        e: e,
        target: e.target
      });
    }

    function onDestroy$9() {
      ['click', 'touchstart'].forEach(function (eventName) {
        docRemoveEvent(eventName, delegatedEvents);
      });
    } // changing isWindowFocused to true on focus event


    function focusHandler() {
      setState({
        isWindowFocused: true
      });
    }

    // keeping central set of classnames and selectors
    var WRAPPER = 'fullpage-wrapper';
    var WRAPPER_SEL = '.' + WRAPPER; // slimscroll

    var SCROLLABLE = 'fp-scrollable';

    var RESPONSIVE = 'fp-responsive';
    var NO_TRANSITION = 'fp-notransition';
    var DESTROYED = 'fp-destroyed';
    var ENABLED = 'fp-enabled';
    var VIEWING_PREFIX = 'fp-viewing';
    var ACTIVE = 'active';
    var ACTIVE_SEL = '.' + ACTIVE;
    var COMPLETELY = 'fp-completely';
    var COMPLETELY_SEL = '.' + COMPLETELY; // section

    var SECTION_DEFAULT_SEL = '.section';
    var SECTION = 'fp-section';
    var SECTION_SEL = '.' + SECTION;
    var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
    var TABLE_CELL = 'fp-tableCell';
    var TABLE_CELL_SEL = '.' + TABLE_CELL;
    var AUTO_HEIGHT = 'fp-auto-height';
    var AUTO_HEIGHT_SEL = '.' + AUTO_HEIGHT;
    var AUTO_HEIGHT_RESPONSIVE = 'fp-auto-height-responsive';
    var AUTO_HEIGHT_RESPONSIVE_SEL = '.' + AUTO_HEIGHT_RESPONSIVE;
    var NORMAL_SCROLL = 'fp-normal-scroll';

    var SECTION_NAV = 'fp-nav';
    var SECTION_NAV_SEL = '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP = 'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL = '.' + SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP = 'fp-show-active'; // slide

    var SLIDE_DEFAULT_SEL = '.slide';
    var SLIDE = 'fp-slide';
    var SLIDE_SEL = '.' + SLIDE;
    var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER = 'fp-slides';
    var SLIDES_WRAPPER_SEL = '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER = 'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL = '.' + SLIDES_CONTAINER;
    var TABLE = 'fp-table';
    var OVERFLOW = 'fp-overflow';
    var OVERFLOW_SEL = '.' + OVERFLOW;
    var IS_OVERFLOW = 'fp-is-overflow'; // slide nav

    var SLIDES_NAV = 'fp-slidesNav';
    var SLIDES_NAV_SEL = '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + ' a';
    var SLIDES_STYLED_ARROW = 'fp-arrow';
    var SLIDES_ARROW = 'fp-controlArrow';
    var SLIDES_ARROW_SEL = '.' + SLIDES_ARROW;
    var SLIDES_PREV = 'fp-prev';
    var SLIDES_PREV_SEL = '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT = 'fp-next';
    var SLIDES_NEXT_SEL = '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    var defaultOptions = {
      //navigation
      menu: false,
      anchors: [],
      lockAnchors: false,
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: [],
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',
      scrollBar: false,
      hybrid: false,
      licenseKey: '',
      credits: {
        "enabled": true,
        "label": 'Made with fullPage.js',
        "position": 'right'
      },
      //scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 600,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: null,
      scrollOverflow: true,
      scrollOverflowReset: false,
      touchSensitivity: 5,
      touchWrapper: null,
      bigSectionsDestination: null,
      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,
      allowCorrectDirection: false,
      //design
      scrollOverflowMacStyle: true,
      controlArrows: true,
      controlArrowsHTML: ['<div class="' + SLIDES_STYLED_ARROW + '"></div>', '<div class="' + SLIDES_STYLED_ARROW + '"></div>'],
      controlArrowColor: '#fff',
      verticalCentered: true,
      sectionsColor: [],
      paddingTop: 0,
      paddingBottom: 0,
      fixedElements: null,
      responsive: 0,
      //backwards compabitility with responsiveWiddth
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,
      parallax: false,
      parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
      },
      cards: false,
      cardsOptions: {
        perspective: 100,
        fadeContent: true,
        fadeBackground: true
      },
      //Custom selectors
      sectionSelector: SECTION_DEFAULT_SEL,
      slideSelector: SLIDE_DEFAULT_SEL,
      //events
      afterLoad: null,
      beforeLeave: null,
      onLeave: null,
      afterRender: null,
      afterResize: null,
      afterReBuild: null,
      afterSlideLoad: null,
      onSlideLeave: null,
      afterResponsive: null,
      onScrollOverflow: null,
      lazyLoading: true,
      observer: true,
      scrollBeyondFullpage: true
    };

    var container = null;
    var g_initialAnchorsInDom = false;
    var originals = deepExtend({}, defaultOptions); //deep copy

    var g_options = null;
    function getInitialAnchorsInDom() {
      return g_initialAnchorsInDom;
    }
    function setContainer(value) {
      container = value;
    }
    function getContainer(value) {
      return container;
    }
    function getOptions() {
      return g_options || defaultOptions;
    }
    function setOptions(options) {
      g_options = deepExtend({}, defaultOptions, options);
      originals = Object.assign({}, g_options);
    }
    function getOriginals() {
      return originals;
    }
    function setOption(name, value) {
      defaultOptions[name] = value;
    }
    /*
    * Sets the state for a variable with multiple states (original, and temporal)
    * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
    * This function is used to keep track of both states, the original and the temporal one.
    * If type is not 'internal', then we assume the user is globally changing the variable.
    */

    function setVariableState(variable, value, type) {
      g_options[variable] = value;

      if (type !== 'internal') {
        originals[variable] = value;
      }
    }
    /**
    * Setting options from DOM elements if they are not provided.
    */

    function setOptionsFromDOM() {
      //no anchors option? Checking for them in the DOM attributes
      if (!getOptions().anchors.length) {
        var anchorsAttribute = '[data-anchor]';
        var anchors = $(getOptions().sectionSelector.split(',').join(anchorsAttribute + ',') + anchorsAttribute, container);

        if (anchors.length && anchors.length === $(getOptions().sectionSelector, container).length) {
          g_initialAnchorsInDom = true;
          anchors.forEach(function (item) {
            getOptions().anchors.push(getAttr(item, 'data-anchor').toString());
          });
        }
      } //no tooltips option? Checking for them in the DOM attributes


      if (!getOptions().navigationTooltips.length) {
        var tooltipsAttribute = '[data-tooltip]';
        var tooltips = $(getOptions().sectionSelector.split(',').join(tooltipsAttribute + ',') + tooltipsAttribute, container);

        if (tooltips.length) {
          tooltips.forEach(function (item) {
            getOptions().navigationTooltips.push(getAttr(item, 'data-tooltip').toString());
          });
        }
      }
    }

    var plainItem = function plainItem(panel) {
      this.anchor = panel.anchor;
      this.item = panel.item;
      this.index = panel.index();
      this.isLast = this.index === panel.item.parentElement.querySelectorAll(panel.selector).length - 1;
      this.isFirst = !this.index;
      this.isActive = panel.isActive;
    };
    /**
    * Item. Slide or Section objects share the same properties.
    */

    var Item = function Item(el, selector) {
      this.parent = this.parent || null;
      this.selector = selector;
      this.anchor = getAttr(el, 'data-anchor') || getOptions().anchors[index(el, getOptions().sectionSelector)];
      this.item = el;
      this.isVisible = isVisible(el);
      this.isActive = hasClass(el, ACTIVE);
      this.hasScroll = hasClass(el, OVERFLOW) || $(OVERFLOW_SEL, el)[0] != null;
      this.isSection = selector === getOptions().sectionSelector;
      this.container = closest(el, SLIDES_CONTAINER_SEL) || closest(el, WRAPPER_SEL);

      this.index = function () {
        return this.siblings().indexOf(this);
      };
    };

    Item.prototype.siblings = function () {
      if (this.isSection) {
        if (this.isVisible) {
          return state.sections;
        } else {
          return state.sectionsIncludingHidden;
        }
      }

      return this.parent ? this.parent.slides : 0;
    };

    Item.prototype.prev = function () {
      var siblings = this.siblings();
      var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
      var prevIndex = currentIndex - 1;

      if (prevIndex >= 0) {
        return siblings[prevIndex];
      }

      return null;
    };

    Item.prototype.next = function () {
      var siblings = this.siblings();
      var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
      var nextIndex = currentIndex + 1;

      if (nextIndex < siblings.length) {
        return siblings[nextIndex];
      }

      return null;
    };

    Item.prototype["prevPanel"] = function () {
      return this.prev() || (this.parent ? this.parent.prev() : null);
    };

    Item.prototype["nextPanel"] = function () {
      return this.next() || (this.parent ? this.parent.next() : null);
    };

    Item.prototype.getSiblings = function () {
      if (this.isSection) {
        return state.sections;
      }

      return state.panels;
    };

    function getNodes(panels) {
      return panels.map(function (panel) {
        return panel.item;
      });
    }
    function getPanelByElement(panels, el) {
      return panels.find(function (panel) {
        return panel.item === el;
      });
    }
    var Section = function Section(el) {
      plainItem.call(this, el);
    };
    var Slide = function Slide(el) {
      plainItem.call(this, el);
    };

    /**
    * Gets the active slide (or section) for the given section
    */

    function getSlideOrSection(destiny) {
      var slide = $(SLIDE_ACTIVE_SEL, destiny);

      if (slide.length) {
        destiny = slide[0];
      }

      return destiny;
    }
    function getSlideOrSectionPanel(panel) {
      if (!panel) {
        return null;
      }

      return panel.activeSlide ? panel.activeSlide : panel;
    }
    function isFullPageAbove() {
      return getContainer().getBoundingClientRect().bottom >= 0;
    }
    /**
    * Gets the scrolling settings depending on the plugin autoScrolling option
    */

    function getScrollSettings(top) {
      var options = getOptions();
      var position;
      var element; //top property animation

      if (options.autoScrolling && !options.scrollBar) {
        position = -top;
        element = $(WRAPPER_SEL)[0];
      } //window real scrolling
      else {
        position = top;
        element = window;
      }

      return {
        options: position,
        element: element
      };
    }
    /**
    * Scrolls the page / slider the given number of pixels.
    * It will do it one or another way dependiong on the library's config.
    */

    function setScrolling(element, val) {
      if (!getOptions().autoScrolling || getOptions().scrollBar || element.self != window && hasClass(element, SLIDES_WRAPPER)) {
        //scrolling horizontally through the slides?
        if (element.self != window && hasClass(element, SLIDES_WRAPPER)) {
          element.scrollLeft = val;
        } //vertical scroll
        else {
          element.scrollTo(0, val);
        }
      } else {
        element.style.top = val + 'px';
      }
    }
    /**
    * Adds transition animations for the given element
    */

    function addAnimation(element) {
      var transition = 'transform ' + getOptions().scrollingSpeed + 'ms ' + getOptions().easingcss3;
      removeClass(element, NO_TRANSITION);
      return css(element, {
        '-webkit-transition': transition,
        'transition': transition
      });
    }
    /**
    * Retuns `up` or `down` depending on the scrolling movement to reach its destination
    * from the current section.
    */

    function getYmovement(activeSection, destiny) {
      var fromIndex = activeSection.index();
      var toIndex = index(destiny, SECTION_SEL);

      if (fromIndex == toIndex) {
        return 'none';
      }

      if (fromIndex > toIndex) {
        return 'up';
      }

      return 'down';
    }
    /**
    * Remove transition animations for the given element
    */

    function removeAnimation(element) {
      return addClass(element, NO_TRANSITION);
    }
    /**
    * Returns the cross-browser transform string.
    */

    function getTransforms(translate3d) {
      return {
        '-webkit-transform': translate3d,
        '-moz-transform': translate3d,
        '-ms-transform': translate3d,
        'transform': translate3d
      };
    }

    var silentScrollId;
    /**
    * Adds a css3 transform property to the container class with or without animation depending on the animated param.
    */

    function transformContainer(translate3d, animated) {
      if (animated) {
        addAnimation(getContainer());
      } else {
        removeAnimation(getContainer());
      }

      clearTimeout(silentScrollId);
      css(getContainer(), getTransforms(translate3d));
      FP.test.translate3d = translate3d; //syncronously removing the class after the animation has been applied.

      silentScrollId = setTimeout(function () {
        removeClass(getContainer(), NO_TRANSITION);
      }, 10);
    }

    /**
    * Scrolls silently (with no animation) the page to the given Y position.
    */

    function silentScroll(top) {
      // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
      // that's why we round it to 0.
      var roundedTop = Math.round(top);

      if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
        var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
        transformContainer(translate3d, false);
      } else if (getOptions().autoScrolling && !getOptions().scrollBar) {
        css(getContainer(), {
          'top': -roundedTop + 'px'
        });
        FP.test.top = -roundedTop + 'px';
      } else {
        var scrollSettings = getScrollSettings(roundedTop);
        setScrolling(scrollSettings.element, scrollSettings.options);
      }
    }

    FP.setScrollingSpeed = setScrollingSpeed;
    /**
    * Defines the scrolling speed
    */

    function setScrollingSpeed(value, type) {
      setVariableState('scrollingSpeed', value, type);
    }

    var $body = null;
    var $html = null;
    var $htmlBody = null; // caching common elements

    function setCache() {
      $body = $('body')[0];
      $html = $('html')[0];
      $htmlBody = $('html, body');
    }

    //@ts-check

    var _g_animateScroll;
    /**
    * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
    * http://stackoverflow.com/a/16136789/1081396
    */


    function scrollTo(element, to, duration, callback) {
      var start = getScrolledPosition(element);
      var change = to - start;
      var isCallbackFired = false;
      var startTime;
      var wasAnimationActive = state.activeAnimation;
      setState({
        activeAnimation: true
      }); // Cancelling any possible previous animations (io: clicking on nav dots very fast)

      if (_g_animateScroll) {
        window.cancelAnimationFrame(_g_animateScroll);
      }

      _g_animateScroll = function g_animateScroll(timestamp) {
        if (!startTime) {
          startTime = timestamp;
        }

        var currentTime = Math.floor(timestamp - startTime);

        if (state.activeAnimation) {
          //in order to stope it from other function whenever we want
          var val = to;

          if (duration) {
            // @ts-ignore
            val = win.fp_easings[getOptions().easing](currentTime, start, change, duration);
          }

          if (currentTime <= duration) {
            setScrolling(element, val);
          }

          if (currentTime < duration) {
            window.requestAnimationFrame(_g_animateScroll);
          } else if (typeof callback !== 'undefined' && !isCallbackFired) {
            callback();
            setState({
              activeAnimation: false
            });
            isCallbackFired = true;
          }
        } else if (!isCallbackFired && !wasAnimationActive) {
          callback();
          setState({
            activeAnimation: false
          });
          isCallbackFired = true;
        }
      };

      window.requestAnimationFrame(_g_animateScroll);
    }
    /**
    * Getting the position of the element to scroll when using jQuery animations
    */

    function getScrolledPosition(element) {
      var position; //is not the window element and is a slide?

      if (element.self != win && hasClass(element, SLIDES_WRAPPER)) {
        position = element.scrollLeft;
      } else if (!getOptions().autoScrolling || getOptions().scrollBar) {
        position = getScrollTop();
      } else {
        position = element.offsetTop;
      } //gets the top property of the wrapper


      return position;
    }

    /**
    * Makes sure to only create a Panel object if the element exist
    */

    function nullOrSection(el) {
      if (el && !el.item) {
        return new Section(new SectionPanel(el));
      }

      return el ? new Section(el) : null;
    }

    function nullOrSlide(el) {
      return el ? new Slide(el) : null;
    }

    /**
    * Dispatch events & callbacks
    */

    function fireCallback(eventName, v) {
      var eventData = getEventData(eventName, v);
      trigger(getContainer(), eventName, eventData);

      if (getOptions()[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false) {
        return false;
      }

      return true;
    }
    /**
    * Gets the event's data for the given event on the right format.
    */

    function getEventData(eventName, v) {
      //using functions to run only the necessary bits within the object
      var paramsPerEvent = {
        afterRender: function afterRender() {
          return {
            section: nullOrSection(getState().activeSection),
            slide: nullOrSlide(getState().activeSection.activeSlide)
          };
        },
        onLeave: function onLeave() {
          return {
            origin: nullOrSection(v.items.origin),
            destination: nullOrSection(v.items.destination),
            direction: v.direction,
            trigger: getState().scrollTrigger
          };
        },
        afterLoad: function afterLoad() {
          return paramsPerEvent.onLeave();
        },
        afterSlideLoad: function afterSlideLoad() {
          return {
            section: nullOrSection(v.items.section),
            origin: nullOrSection(v.items.origin),
            destination: nullOrSection(v.items.destination),
            direction: v.direction,
            trigger: getState().scrollTrigger
          };
        },
        onSlideLeave: function onSlideLeave() {
          return paramsPerEvent.afterSlideLoad();
        },
        beforeLeave: function beforeLeave() {
          return paramsPerEvent.onLeave();
        },
        onScrollOverflow: function onScrollOverflow() {
          return {
            section: nullOrSection(getState().activeSection),
            slide: nullOrSlide(getState().activeSection.activeSlide),
            position: v.position,
            direction: v.direction
          };
        }
      };
      return paramsPerEvent[eventName]();
    }

    /**
    * Plays video and audio elements.
    */

    function playMedia(destiny) {
      var panel = getSlideOrSection(destiny); //playing HTML5 media elements

      $('video, audio', panel).forEach(function (element) {
        if (element.hasAttribute('data-autoplay') && typeof element.play === 'function') {
          element.play();
        }
      }); //youtube videos

      $('iframe[src*="youtube.com/embed/"]', panel).forEach(function (element) {
        if (element.hasAttribute('data-autoplay')) {
          playYoutube(element);
        } //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.


        element.onload = function () {
          if (element.hasAttribute('data-autoplay')) {
            playYoutube(element);
          }
        };
      });
    }
    /**
    * Plays a youtube video
    */

    function playYoutube(element) {
      element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
    /**
    * Stops video and audio elements.
    */


    function stopMedia(destiny) {
      var panel = getSlideOrSection(destiny); //stopping HTML5 media elements

      $('video, audio', panel).forEach(function (element) {
        if (!element.hasAttribute('data-keepplaying') && typeof element.pause === 'function') {
          element.pause();
        }
      }); //youtube videos

      $('iframe[src*="youtube.com/embed/"]', panel).forEach(function (element) {
        if (/youtube\.com\/embed\//.test(getAttr(element, 'src')) && !element.hasAttribute('data-keepplaying')) {
          element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      });
    }
    /*
    * Enables the Youtube videos API so we can control their flow if necessary.
    */

    function enableYoutubeAPI() {
      $('iframe[src*="youtube.com/embed/"]', getContainer()).forEach(function (item) {
        addURLParam(item, 'enablejsapi=1');
      });
    }
    /**
    * Adds a new parameter and its value to the `src` of a given element
    */

    function addURLParam(element, newParam) {
      var originalSrc = getAttr(element, 'src');
      element.setAttribute('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
    }
    /*
    * Returns the prefix sign to use for a new parameter in an existen URL.
    *
    * @return {String}  ? | &
    */


    function getUrlParamSign(url) {
      return !/\?/.test(url) ? '?' : '&';
    }

    /**
    * Lazy loads image, video and audio elements.
    */

    function lazyLoad(destiny) {
      if (!getOptions().lazyLoading) {
        return;
      }

      var panel = getSlideOrSection(destiny);
      $('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]', panel).forEach(function (element) {
        ['src', 'srcset'].forEach(function (type) {
          var attribute = getAttr(element, 'data-' + type);

          if (attribute != null && attribute) {
            setSrc(element, type);
            element.addEventListener('load', function () {
            });
          }
        });

        if (matches(element, 'source')) {
          var elementToPlay = closest(element, 'video, audio');

          if (elementToPlay) {
            elementToPlay.load();

            elementToPlay.onloadeddata = function () {
            };
          }
        }
      });
    }

    /**
    * Sets a class for the body of the page depending on the active section / slide
    */

    function setBodyClass() {
      var section = getState().activeSection.item;
      var slide = getState().activeSection.activeSlide;
      var sectionAnchor = getAnchor(section);
      var text = String(sectionAnchor);

      if (slide) {
        var slideAnchor = getAnchor(slide.item);
        text = text + '-' + slideAnchor;
      } //changing slash for dash to make it a valid CSS style


      text = text.replace('/', '-').replace('#', ''); //removing previous anchor classes

      var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
      $body.className = $body.className.replace(classRe, ''); //adding the current anchor

      addClass($body, VIEWING_PREFIX + '-' + text);
    }
    /**
    * Gets the anchor for the given slide / section. Its index will be used if there's none.
    */

    function getAnchor(element) {
      if (!element) {
        return null;
      }

      var anchor = getAttr(element, 'data-anchor');
      var elementIndex = index(element); //Slide without anchor link? We take the index instead.

      if (anchor == null) {
        anchor = elementIndex;
      }

      return anchor;
    }

    /**
    * Sets the state of the website depending on the active section/slide.
    * It changes the URL hash when needed and updates the body class.
    */

    function setPageStatus(slideIndex, slideAnchor, anchorLink) {
      var sectionHash = '';

      if (getOptions().anchors.length && !getOptions().lockAnchors) {
        //isn't it the first slide?
        if (slideIndex) {
          if (anchorLink != null) {
            sectionHash = anchorLink;
          } //slide without anchor link? We take the index instead.


          if (slideAnchor == null) {
            slideAnchor = slideIndex;
          }

          setState({
            lastScrolledSlide: slideAnchor
          });
          setUrlHash(sectionHash + '/' + slideAnchor); //first slide won't have slide anchor, just the section one
        } else if (slideIndex != null) {
          setState({
            lastScrolledSlide: slideAnchor
          });
          setUrlHash(anchorLink);
        } //section without slides
        else {
          setUrlHash(anchorLink);
        }
      }

      setBodyClass();
    }
    /**
    * Sets the URL hash.
    */

    function setUrlHash(url) {
      if (getOptions().recordHistory) {
        location.hash = url;
      } else {
        //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
        if (isTouchDevice || isTouch) {
          win.history.replaceState(undefined, undefined, '#' + url);
        } else {
          var baseUrl = win.location.href.split('#')[0];
          win.location.replace(baseUrl + '#' + url);
        }
      }
    }

    /**
    * Gets the name for screen readers for a section/slide navigation bullet.
    */

    function getBulletLinkName(i, defaultName, item) {
      var anchor = defaultName === 'Section' ? getOptions().anchors[i] : getAttr(item, 'data-anchor');
      return encodeURI(getOptions().navigationTooltips[i] || anchor || defaultName + ' ' + (i + 1));
    }

    function slideBulletHandler(e) {
      // not all events are cancellable 
      // https://www.uriports.com/blog/easy-fix-for-intervention-ignored-attempt-to-cancel-a-touchmove-event-with-cancelable-false/
      if (e.cancelable) {
        preventDefault(e);
      }

      setState({
        scrollTrigger: 'horizontalNav'
      });
      /*jshint validthis:true */

      var sectionElem = closest(this, SECTION_SEL);
      var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
      var section = getPanelByElement(getState().sections, sectionElem);
      var destiny = section.slides[index(closest(this, 'li'))];
      EventEmitter.emit(events.landscapeScroll, {
        slides: slides,
        destination: destiny.item
      });
    }
    /**
    * Sets the state for the horizontal bullet navigations.
    */

    function activeSlidesNavigation(slidesNav, slideIndex) {
      if (getOptions().slidesNavigation && slidesNav != null) {
        removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
        addClass($('a', $('li', slidesNav)[slideIndex]), ACTIVE);
      }
    }
    /**
    * Creates a landscape navigation bar with dots for horizontal sliders.
    */

    function addSlidesNavigation(section) {
      var sectionElem = section.item;
      var numSlides = section.slides.length;
      appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), sectionElem);
      var nav = $(SLIDES_NAV_SEL, sectionElem)[0]; //top or bottom

      addClass(nav, 'fp-' + getOptions().slidesNavPosition);

      for (var i = 0; i < numSlides; i++) {
        var slide = $(SLIDE_SEL, sectionElem)[i];
        appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">' + getBulletLinkName(i, 'Slide', slide) + '</span><span></span></a></li>'), $('ul', nav)[0]);
      } //centering it


      css(nav, {
        'margin-left': '-' + nav.innerWidth / 2 + 'px'
      });
      var activeSlideIndex = section.activeSlide ? section.activeSlide.index() : 0;
      addClass($('a', $('li', nav)[activeSlideIndex]), ACTIVE);
    }

    var isScrollAllowed = {};
    isScrollAllowed.m = {
      'up': true,
      'down': true,
      'left': true,
      'right': true
    };
    isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
    /**
    * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
    * @param type m (mouse) or k (keyboard)
    */

    function setIsScrollAllowed(value, direction, type) {
      //up, down, left, right
      if (direction !== 'all') {
        isScrollAllowed[type][direction] = value;
      } //all directions?
      else {
        Object.keys(isScrollAllowed[type]).forEach(function (key) {
          isScrollAllowed[type][key] = value;
        });
      }
    }
    function getIsScrollAllowed() {
      return isScrollAllowed;
    }

    EventEmitter.on(events.onClickOrTouch, onClickOrTouch$2);

    function onClickOrTouch$2(params) {
      var target = params.target;

      if (matches(target, SLIDES_ARROW_SEL) || closest(target, SLIDES_ARROW_SEL)) {
        slideArrowHandler.call(target, params);
      }
    } //Scrolling horizontally when clicking on the slider controls.


    function slideArrowHandler() {
      /*jshint validthis:true */
      var section = closest(this, SECTION_SEL);
      /*jshint validthis:true */

      if (hasClass(this, SLIDES_PREV)) {
        if (getIsScrollAllowed().m.left) {
          setState({
            scrollTrigger: 'slideArrow'
          });
          EventEmitter.emit(events.moveSlideLeft, {
            section: section
          });
        }
      } else {
        if (getIsScrollAllowed().m.right) {
          setState({
            scrollTrigger: 'slideArrow'
          });
          EventEmitter.emit(events.moveSlideRight, {
            section: section
          });
        }
      }
    }
    /**
    * Creates the control arrows for the given section
    */


    function createSlideArrows(section) {
      var sectionElem = section.item;
      var arrows = [createElementFromHTML(getOptions().controlArrowsHTML[0]), createElementFromHTML(getOptions().controlArrowsHTML[1])];
      after($(SLIDES_WRAPPER_SEL, sectionElem)[0], arrows);
      addClass(arrows, SLIDES_ARROW);
      addClass(arrows[0], SLIDES_PREV);
      addClass(arrows[1], SLIDES_NEXT);

      if (getOptions().controlArrowColor !== '#fff') {
        css($(SLIDES_ARROW_NEXT_SEL, sectionElem), {
          'border-color': 'transparent transparent transparent ' + getOptions().controlArrowColor
        });
        css($(SLIDES_ARROW_PREV_SEL, sectionElem), {
          'border-color': 'transparent ' + getOptions().controlArrowColor + ' transparent transparent'
        });
      }

      if (!getOptions().loopHorizontal) {
        hide($(SLIDES_ARROW_PREV_SEL, sectionElem));
      }
    }
    function toggleControlArrows(v) {
      if (!getOptions().loopHorizontal && getOptions().controlArrows) {
        //hidding it for the fist slide, showing for the rest
        toggle($(SLIDES_ARROW_PREV_SEL, v.section), v.slideIndex !== 0); //hidding it for the last slide, showing for the rest

        toggle($(SLIDES_ARROW_NEXT_SEL, v.section), next(v.destiny) != null);
      }
    }

    FP.setRecordHistory = setRecordHistory;
    /**
    * Defines wheter to record the history for each hash change in the URL.
    */

    function setRecordHistory(value, type) {
      setVariableState('recordHistory', value, type);
    }

    FP.setAutoScrolling = setAutoScrolling;
    FP.test.setAutoScrolling = setAutoScrolling;
    /**
    * Sets the autoScroll option.
    * It changes the scroll bar visibility and the history of the site as a result.
    */

    function setAutoScrolling(value, type) {
      //removing the transformation
      if (!value) {
        silentScroll(0);
      }

      setVariableState('autoScrolling', value, type);
      var element = getState().activeSection.item;

      if (getOptions().autoScrolling && !getOptions().scrollBar) {
        css($htmlBody, {
          'overflow': 'hidden',
          'height': '100%'
        });
        removeClass($body, 'fp-scrollable');
        setRecordHistory(getOriginals().recordHistory, 'internal'); //for IE touch devices

        css(getContainer(), {
          '-ms-touch-action': 'none',
          'touch-action': 'none'
        });

        if (element != null) {
          //moving the container up
          silentScroll(element.offsetTop);
        }
      } else {
        css($htmlBody, {
          'overflow': 'visible',
          'height': 'initial'
        });
        addClass($body, 'fp-scrollable');
        var recordHistory = !getOptions().autoScrolling ? false : getOriginals().recordHistory;
        setRecordHistory(recordHistory, 'internal'); //for IE touch devices

        css(getContainer(), {
          '-ms-touch-action': '',
          'touch-action': ''
        }); //scrolling the page to the section with no animation

        if (element != null) {
          var scrollSettings = getScrollSettings(element.offsetTop);
          scrollSettings.element.scrollTo(0, scrollSettings.options);
        }
      }
    }

    //@ts-check
    /**
    * Adds sections before or after the current one to create the infinite effect.
    */

    function createInfiniteSections(v) {
      setState({
        isDoingContinousVertical: true
      });
      var activeSectionItem = getState().activeSection.item; // Scrolling down

      if (!v.isMovementUp) {
        // Move all previous sections to after the active section
        after(activeSectionItem, prevAll(activeSectionItem, SECTION_SEL).reverse());
      } else {
        // Scrolling up
        // Move all next sections to before the active section
        before(activeSectionItem, nextAll(activeSectionItem, SECTION_SEL));
      } // Maintain the displayed position (now that we changed the element order)


      silentScroll(getState().activeSection.item.offsetTop); // Maintain the active slides visible in the viewport

      keepSlidesPosition$1(); // save for later the elements that still need to be reordered

      v.wrapAroundElements = activeSectionItem; // Recalculate animation variables

      v.dtop = v.element.offsetTop;
      v.yMovement = getYmovement(getState().activeSection, v.element);
      return v;
    }
    /**
    * Maintains the active slides in the viewport
    * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
    */

    function keepSlidesPosition$1() {
      var activeSlides = $(SLIDE_ACTIVE_SEL);

      for (var i = 0; i < activeSlides.length; i++) {
        silentLandscapeScroll(activeSlides[i], 'internal');
      }
    }

    //@ts-check
    /**
    * Maintains the active slides in the viewport
    * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
    */

    function keepSlidesPosition() {
      var activeSlides = $(SLIDE_ACTIVE_SEL);

      for (var i = 0; i < activeSlides.length; i++) {
        silentLandscapeScroll(activeSlides[i], 'internal');
      }
    }
    /**
    * Fix section order after continuousVertical changes have been animated
    */


    function continuousVerticalFixSectionOrder(v) {
      // If continuousVertical is in effect (and autoScrolling would also be in effect then),
      // finish moving the elements around so the direct navigation will function more simply
      if (v.wrapAroundElements == null) {
        return;
      }

      if (v.isMovementUp) {
        before($(SECTION_SEL)[0], v.wrapAroundElements);
      } else {
        after($(SECTION_SEL)[getState().sections.length - 1], v.wrapAroundElements);
      }

      silentScroll(getState().activeSection.item.offsetTop); // Maintain the active slides visible in the viewport

      keepSlidesPosition();
      setState({
        isDoingContinousVertical: false
      });
    }

    /**
    * Makes sure lazyload is done for other sections in the viewport that are not the
    * active one. 
    */

    function lazyLoadOthers() {
      var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0]; //quitting when it doesn't apply

      if (!getOptions().lazyLoading || !hasAutoHeightSections) {
        return;
      } //making sure to lazy load auto-height sections that are in the viewport


      $(SECTION_SEL + ':not(' + ACTIVE_SEL + ')').forEach(function (section) {
        if (isSectionInViewport(section)) {
          lazyLoad(section);
        }
      });
    }
    /**
    * Determines whether a section is in the viewport or not.
    */

    function isSectionInViewport(el) {
      var rect = el.getBoundingClientRect();
      var top = rect.top;
      var bottom = rect.bottom; //sometimes there's a 1px offset on the bottom of the screen even when the 
      //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
      //using this prevents from lazyLoading the section that is not yet visible 
      //(only 1 pixel offset is)

      var pixelOffset = 2;
      var isTopInView = top + pixelOffset < state.windowsHeight && top > 0;
      var isBottomInView = bottom > pixelOffset && bottom < state.windowsHeight;
      return isTopInView || isBottomInView;
    }

    function tooltipTextHandler() {
      /*jshint validthis:true */
      trigger(prev(this), 'click');
    }
    /**
    * Activating the vertical navigation bullets according to the given slide name.
    */

    function activateNavDots(name, sectionIndex) {
      var nav = $(SECTION_NAV_SEL)[0];

      if (getOptions().navigation && nav != null && nav.style.display !== 'none') {
        removeClass($(ACTIVE_SEL, nav), ACTIVE);

        if (name) {
          addClass($('a[href="#' + name + '"]', nav), ACTIVE);
        } else {
          addClass($('a', $('li', nav)[sectionIndex]), ACTIVE);
        }
      }
    }
    /**
    * Creates a vertical navigation bar.
    */

    function addVerticalNavigation() {
      remove($(SECTION_NAV_SEL));
      var navigation = doc.createElement('div');
      navigation.setAttribute('id', SECTION_NAV);
      var divUl = doc.createElement('ul');
      navigation.appendChild(divUl);
      appendTo(navigation, $body);
      var nav = $(SECTION_NAV_SEL)[0];
      addClass(nav, 'fp-' + getOptions().navigationPosition);

      if (getOptions().showActiveTooltip) {
        addClass(nav, SHOW_ACTIVE_TOOLTIP);
      }

      var li = '';

      for (var i = 0; i < getState().sections.length; i++) {
        var section = getState().sections[i];
        var link = '';

        if (getOptions().anchors.length) {
          link = section.anchor;
        }

        li += '<li><a href="#' + encodeURI(link) + '"><span class="fp-sr-only">' + getBulletLinkName(section.index(), 'Section') + '</span><span></span></a>'; // Only add tooltip if needed (defined by user)

        var tooltip = getOptions().navigationTooltips[section.index()];

        if (typeof tooltip !== 'undefined' && tooltip !== '') {
          li += '<div class="' + SECTION_NAV_TOOLTIP + ' fp-' + getOptions().navigationPosition + '">' + tooltip + '</div>';
        }

        li += '</li>';
      }

      $('ul', nav)[0].innerHTML = li; //activating the current active section

      var bullet = $('li', $(SECTION_NAV_SEL)[0])[getState().activeSection.index()];
      addClass($('a', bullet), ACTIVE);
    } //Scrolls to the section when clicking the navigation bullet

    function sectionBulletHandler(e) {
      if (e.preventDefault) {
        preventDefault(e);
      }

      setState({
        scrollTrigger: 'verticalNav'
      });
      /*jshint validthis:true */
      // @ts-ignore

      var indexBullet = index(closest(this, SECTION_NAV_SEL + ' li'));
      EventEmitter.emit(events.scrollPage, {
        destination: getState().sections[indexBullet]
      });
    }

    /**
    * Sets to active the current menu and vertical nav items.
    */

    function activateMenuAndNav(anchor, index) {
      activateMenuElement(anchor);
      activateNavDots(anchor, index);
    }
    /**
    * Activating the website main menu elements according to the given slide name.
    */

    function activateMenuElement(name) {
      if (getOptions().menu && getOptions().menu.length) {
        $(getOptions().menu).forEach(function (menu) {
          if (menu != null) {
            removeClass($(ACTIVE_SEL, menu), ACTIVE);
            addClass($('[data-menuanchor="' + name + '"]', menu), ACTIVE);
          }
        });
      }
    }

    new Date().getTime();
    /**
     * Triggers the callback once per scroll wheel action.
     * Based on scrolling speed delay.
     */

    var oncePerScroll = function () {
      var canTriggerEvent = true;
      var prevWheelTime = new Date().getTime();
      var result;
      var isScrollingOnInit = !win.fullpage_api;
      return function (scrollTrigger, callback) {
        var currentTime = new Date().getTime();
        var timeThreshold = scrollTrigger === 'wheel' ? getOptions().scrollingSpeed : 100;
        canTriggerEvent = isScrollingOnInit || currentTime - prevWheelTime >= timeThreshold;
        isScrollingOnInit = !win.fullpage_api;

        if (canTriggerEvent) {
          result = callback();
          prevWheelTime = currentTime;
        }

        return typeof result !== 'undefined' ? result : true;
      };
    }();

    /**
    * Fires the wheel event once per mouse wheel trigger.
    */

    function fireCallbackOncePerScroll(callbackName, params) {
      if (!isFunction(getOptions().beforeLeave)) {
        return;
      }

      var result = oncePerScroll(getState().scrollTrigger, function () {
        return fireCallback(callbackName, params);
      });
      return result;
    }

    FP.moveTo = moveTo;

    FP.getScrollY = function () {
      return state.scrollY;
    };

    var g_afterSectionLoadsId;
    var g_transitionLapseId;
    EventEmitter.on(events.onDestroy, onDestroy$8);
    /**
    * Scrolls the site to the given element and scrolls to the slide if a callback is given.
    */

    function scrollPage(section, callback, isMovementUp) {
      var element = section.item;

      if (element == null) {
        return;
      } //there's no element to scroll, leaving the function


      var dtop = getDestinationPosition(element);
      var slideAnchorLink;
      var slideIndex; //local variables

      var v = {
        "element": element,
        "callback": callback,
        "isMovementUp": isMovementUp,
        "dtop": dtop,
        "yMovement": getYmovement(getState().activeSection, element),
        "anchorLink": section.anchor,
        "sectionIndex": section.index(),
        "activeSlide": section.activeSlide ? section.activeSlide.item : null,
        "leavingSection": getState().activeSection.index() + 1,
        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        "localIsResizing": state.isResizing,
        "items": {
          "origin": getState().activeSection,
          "destination": section
        },
        "direction": null
      }; //quiting when destination scroll is the same as the current one

      if (getState().activeSection.item == element && !state.isResizing || getOptions().scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT)) {
        return;
      }

      if (v.activeSlide != null) {
        slideAnchorLink = getAttr(v.activeSlide, 'data-anchor');
        slideIndex = index(v.activeSlide, null);
      } //callback (onLeave) if the site is not just resizing and readjusting the slides


      if (!v.localIsResizing) {
        var direction = v.yMovement; //required for continousVertical

        if (typeof isMovementUp !== 'undefined') {
          direction = isMovementUp ? 'up' : 'down';
        } //for the callback


        v.direction = direction;

        if (isFunction(getOptions().beforeLeave)) {
          if (fireCallbackOncePerScroll('beforeLeave', v) === false) {
            return;
          }
        }

        if (isFunction(getOptions().onLeave)) {
          if (!fireCallback('onLeave', v)) {
            return;
          }
        }
      } // If continuousVertical && we need to wrap around


      if (getOptions().autoScrolling && getOptions().continuousVertical && typeof v.isMovementUp !== "undefined" && (!v.isMovementUp && v.yMovement == 'up' || // Intending to scroll down but about to go up or
      v.isMovementUp && v.yMovement == 'down')) {
        // intending to scroll up but about to go down
        v = createInfiniteSections(v);
      } //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)


      if (!v.localIsResizing) {
        stopMedia(getState().activeSection.item);
      }

      addClass(element, ACTIVE);
      removeClass(siblings(element), ACTIVE);
      updateState();
      lazyLoad(element); //preventing from activating the MouseWheelHandler event
      //more than once if the page is scrolling

      setState({
        canScroll: FP.test.isTesting
      });
      setPageStatus(slideIndex, slideAnchorLink, v.anchorLink);
      EventEmitter.emit(events.onLeave, v);
      performMovement(v); //flag to avoid callingn `scrollPage()` twice in case of using anchor links

      setState({
        lastScrolledDestiny: v.anchorLink
      }); //avoid firing it twice (as it does also on scroll)

      activateMenuAndNav(v.anchorLink, v.sectionIndex);
    }

    function onDestroy$8() {
      clearTimeout(g_afterSectionLoadsId);
      clearTimeout(g_transitionLapseId);
    }
    /**
    * Returns the destination Y position based on the scrolling direction and
    * the height of the section.
    */


    function getDestinationPosition(element) {
      var elementHeight = element.offsetHeight;
      var elementTop = element.offsetTop; //top of the desination will be at the top of the viewport

      var position = elementTop;
      var isScrollingDown = elementTop > state.previousDestTop;
      var sectionBottom = position - getWindowHeight() + elementHeight;
      var bigSectionsDestination = getOptions().bigSectionsDestination; //is the destination element bigger than the viewport?

      if (elementHeight > getWindowHeight()) {
        //scrolling up?
        if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom') {
          position = sectionBottom;
        }
      } //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
      else if (isScrollingDown || state.isResizing && next(element) == null) {
        //The bottom of the destination will be at the bottom of the viewport
        position = sectionBottom;
      }
      /*
      Keeping record of the last scrolled position to determine the scrolling direction.
      No conventional methods can be used as the scroll bar might not be present
      AND the section might not be active if it is auto-height and didnt reach the middle
      of the viewport.
      */


      setState({
        previousDestTop: position
      });
      return position;
    }
    /**
    * Performs the vertical movement (by CSS3 or by jQuery)
    */


    function performMovement(v) {
      var isFastSpeed = getOptions().scrollingSpeed < 700;
      var transitionLapse = isFastSpeed ? 700 : getOptions().scrollingSpeed;
      setState({
        touchDirection: 'none',
        scrollY: Math.round(v.dtop)
      });
      EventEmitter.emit(events.onPerformMovement); // using CSS3 translate functionality

      if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
        // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
        // that's why we round it to 0.
        var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
        transformContainer(translate3d, true); //even when the scrollingSpeed is 0 there's a little delay, which might cause the
        //scrollingSpeed to change in case of using silentMoveTo();ç

        if (getOptions().scrollingSpeed) {
          clearTimeout(g_afterSectionLoadsId);
          g_afterSectionLoadsId = setTimeout(function () {
            afterSectionLoads$1(v); //disabling canScroll when using fastSpeed

            setState({
              canScroll: !isFastSpeed || FP.test.isTesting
            });
          }, getOptions().scrollingSpeed);
        } else {
          afterSectionLoads$1(v);
        }
      } // using JS to animate
      else {
        var scrollSettings = getScrollSettings(v.dtop);
        FP.test.top = -v.dtop + 'px';
        clearTimeout(g_afterSectionLoadsId);
        scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function () {
          if (getOptions().scrollBar) {
            /* Hack!
            The timeout prevents setting the most dominant section in the viewport as "active" when the user
            scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
             When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
            */
            g_afterSectionLoadsId = setTimeout(function () {
              afterSectionLoads$1(v);
            }, 30);
          } else {
            afterSectionLoads$1(v); //disabling canScroll when using fastSpeed

            setState({
              canScroll: !isFastSpeed || FP.test.isTesting
            });
          }
        });
      } // enabling canScroll after the minimum transition laps


      if (isFastSpeed) {
        clearTimeout(g_transitionLapseId);
        g_transitionLapseId = setTimeout(function () {
          setState({
            canScroll: true
          });
        }, transitionLapse);
      }
    }
    /**
    * Actions to do once the section is loaded.
    */


    function afterSectionLoads$1(v) {
      setState({
        isBeyondFullpage: false
      });
      continuousVerticalFixSectionOrder(v); //callback (afterLoad) if the site is not just resizing and readjusting the slides

      if (isFunction(getOptions().afterLoad) && !v.localIsResizing) {
        fireCallback('afterLoad', v);
      }

      updateState();

      if (!v.localIsResizing) {
        playMedia(v.element);
      }

      addClass(v.element, COMPLETELY);
      removeClass(siblings(v.element), COMPLETELY);
      lazyLoadOthers();
      setState({
        canScroll: true
      });
      EventEmitter.emit(events.afterSectionLoads, v);

      if (isFunction(v.callback)) {
        v.callback();
      }
    }

    FP.setFitToSection = setFitToSection;
    FP.fitToSection = fitToSection;
    /**
    * Sets fitToSection
    */

    function setFitToSection(value, type) {
      setVariableState('fitToSection', value, type);
    }
    /**
    * Fits the site to the nearest active section
    */

    function fitToSection() {
      //checking fitToSection again in case it was set to false before the timeout delay
      if (state.canScroll) {
        //allows to scroll to an active section and
        //if the section is already active, we prevent firing callbacks
        setState({
          isResizing: true
        });
        scrollPage(state.activeSection);
        setState({
          isResizing: false
        });
      }
    }

    FP.setResponsive = setResponsive;
    /**
    * Checks if the site needs to get responsive and disables autoScrolling if so.
    * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
    */

    function responsive() {
      var widthLimit = getOptions().responsive || getOptions().responsiveWidth; //backwards compatiblity

      var heightLimit = getOptions().responsiveHeight; //only calculating what we need. Remember its called on the resize event.

      var isBreakingPointWidth = widthLimit && win.innerWidth < widthLimit;
      var isBreakingPointHeight = heightLimit && win.innerHeight < heightLimit;

      if (widthLimit && heightLimit) {
        setResponsive(isBreakingPointWidth || isBreakingPointHeight);
      } else if (widthLimit) {
        setResponsive(isBreakingPointWidth);
      } else if (heightLimit) {
        setResponsive(isBreakingPointHeight);
      }
    }
    /**
    * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
    * are smaller than the set limit values.
    */

    function setResponsive(active) {
      var isResponsive = isResponsiveMode();

      if (active) {
        if (!isResponsive) {
          setAutoScrolling(false, 'internal');
          setFitToSection(false, 'internal');
          hide($(SECTION_NAV_SEL));
          addClass($body, RESPONSIVE);

          if (isFunction(getOptions().afterResponsive)) {
            getOptions().afterResponsive.call(getContainer(), active);
          }
        }
      } else if (isResponsive) {
        setAutoScrolling(getOriginals().autoScrolling, 'internal');
        setFitToSection(getOriginals().autoScrolling, 'internal');
        show($(SECTION_NAV_SEL));
        removeClass($body, RESPONSIVE);

        if (isFunction(getOptions().afterResponsive)) {
          getOptions().afterResponsive.call(getContainer(), active);
        }
      }
    }
    /**
    * Determines whether fullpage.js is in responsive mode or not.
    */


    function isResponsiveMode() {
      return hasClass($body, RESPONSIVE);
    }

    function addTableClass(element) {
      if (!getOptions().verticalCentered) {
        return;
      } // Overflowing sections when scrollOverflow is disabled will be autoHeight
      // and won't require vertical aligment


      if (!getOptions().scrollOverflow && scrollOverflowHandler.shouldBeScrollable(element.item)) {
        return;
      }

      if (!scrollOverflowHandler.isScrollable(element)) {
        //In case we are styling for the 2nd time as in with reponsiveSlides
        if (!hasClass(element.item, TABLE)) {
          addClass(element.item, TABLE);
        }
      }
    }

    var startingSection = null;
    FP.getActiveSection = getActiveSection;
    function getStartingSection() {
      return startingSection;
    }
    /**
    * Styling vertical sections
    */

    function styleSection(section) {
      var sectionElem = section.item;
      var hasSlides = section.allSlidesItems.length;
      var index = section.index(); //if no active section is defined, the 1st one will be the default one

      if (!getState().activeSection && section.isVisible) {
        addClass(sectionElem, ACTIVE);
        updateState();
        startingSection = getState().activeSection.item;
      }

      if (getOptions().paddingTop) {
        css(sectionElem, {
          'padding-top': getOptions().paddingTop
        });
      }

      if (getOptions().paddingBottom) {
        css(sectionElem, {
          'padding-bottom': getOptions().paddingBottom
        });
      }

      if (typeof getOptions().sectionsColor[index] !== 'undefined') {
        css(sectionElem, {
          'background-color': getOptions().sectionsColor[index]
        });
      }

      if (typeof getOptions().anchors[index] !== 'undefined') {
        sectionElem.setAttribute('data-anchor', section.anchor);
      }

      if (!hasSlides) {
        addTableClass(section);
      }
    }
    /**
    * Gets the active section.
    */

    function getActiveSection() {
      return getState().activeSection;
    }

    function getSectionFromPanel(panel) {
      return panel.isSection ? panel : panel.parent;
    }

    var g_focusScrollableId;
    EventEmitter.on(events.bindEvents, bindEvents$b);

    function bindEvents$b() {
      // We can't focus scrollOverflow before scrolling
      // to the anchor (if we need to)
      EventEmitter.on(events.onAfterRenderNoAnchor, afterRender);
      EventEmitter.on(events.onLeave, scrollOverflowHandler.onLeave);
      EventEmitter.on(events.onSlideLeave, scrollOverflowHandler.onLeave);
      EventEmitter.on(events.afterSlideLoads, scrollOverflowHandler.afterLoad);
      EventEmitter.on(events.afterSectionLoads, scrollOverflowHandler.afterLoad);
      EventEmitter.on(events.onDestroy, onDestroy$7);
      docAddEvent('keyup', scrollOverflowHandler.keyUpHandler);
    }

    function afterRender() {
      if (getOptions().scrollOverflow && !getOptions().scrollBar) {
        scrollOverflowHandler.makeScrollable();
        scrollOverflowHandler.focusScrollable();
      }
    }

    function onDestroy$7() {
      EventEmitter.removeListener(events.onAfterRenderNoAnchor, afterRender);
      docRemoveEvent('keyup', scrollOverflowHandler.keyUpHandler);
    }

    var scrollOverflowHandler = {
      focusedElem: null,
      shouldFocusScrollable: true,
      isInnerScrollAllowed: true,
      timeBeforeReachingLimit: null,
      timeLastScroll: null,
      preventScrollWithMouseWheel: function preventScrollWithMouseWheel(e) {
        if (!state.canScroll) {
          preventDefault(e);
          return false;
        }
      },
      preventScrollWithKeyboard: function preventScrollWithKeyboard(e) {
        if (!isInsideInput() && getOptions().keyboardScrolling) {
          var directionKeys = [38, 33, 32, 40, 34, 36, 35];

          if (directionKeys.indexOf(e.keyCode) > -1 && !scrollOverflowHandler.isInnerScrollAllowed) {
            preventDefault(e);
            return false;
          }
        }
      },
      keyUpHandler: function keyUpHandler() {
        scrollOverflowHandler.shouldFocusScrollable = state.canScroll;
      },
      // Leaving sections or slides
      onLeave: function onLeave() {
        clearTimeout(g_focusScrollableId);
        scrollOverflowHandler.isInnerScrollAllowed = false;
      },
      // Loading sections or slides
      afterLoad: function afterLoad() {
        scrollOverflowHandler.isInnerScrollAllowed = false; // Delaying it to avoid issues on Safari when focusing elements #4484 & #4493

        clearTimeout(g_focusScrollableId);
        g_focusScrollableId = setTimeout(function () {
          scrollOverflowHandler.shouldFocusScrollable = state.canScroll;
        }, 200);
      },
      // Unfocusing the scrollable element from the orgin section/slide
      unfocusScrollable: function unfocusScrollable() {
        if (doc.activeElement === this.focusedElem) {
          // @ts-ignore
          this.focusedElem.blur();
          scrollOverflowHandler.isInnerScrollAllowed = false;
        }
      },
      focusScrollable: function focusScrollable() {
        if (!getOptions().scrollOverflow || !scrollOverflowHandler.shouldFocusScrollable) {
          return;
        }

        scrollOverflowHandler.unfocusScrollable();
        var scrollableItem = scrollOverflowHandler.getScrollableItem(getState().activeSection.item); // On desktop we focus the scrollable to be able to use the mouse wheel
        // We avoid it on mobile due to a bug in iOS Safari

        if (scrollableItem && !isTouchDevice && !isTouch) {
          this.focusedElem = scrollableItem; // Forcing the focus on the next paint 
          // to avoid issue #4484 & #4493 on Safari

          requestAnimationFrame(function () {
            scrollableItem.focus();
            scrollOverflowHandler.isInnerScrollAllowed = true;
          });
        }

        scrollOverflowHandler.shouldFocusScrollable = false;
      },
      makeScrollable: function makeScrollable() {
        if (getOptions().scrollOverflowMacStyle && !isMacDevice) {
          addClass($body, 'fp-scroll-mac');
        }

        getState().panels.forEach(function (el) {
          if (el.slides && el.slides.length) {
            return;
          }

          if (hasClass(el.item, AUTO_HEIGHT_RESPONSIVE) && isResponsiveMode()) {
            return;
          } else {
            var item = getSlideOrSection(el.item);
            var shouldBeScrollable = scrollOverflowHandler.shouldBeScrollable(el.item);
            var section = getSectionFromPanel(el);

            if (isIE11) {
              var toggleAction = shouldBeScrollable ? 'addClass' : 'removeClass';
              utils[toggleAction](section.item, IS_OVERFLOW);
              utils[toggleAction](el.item, IS_OVERFLOW);
            } else {
              addClass(section.item, IS_OVERFLOW);
              addClass(el.item, IS_OVERFLOW);
            }

            if (!el.hasScroll) {
              scrollOverflowHandler.createWrapper(item);
              scrollOverflowHandler.bindEvents(item);
            } // updating the state now in case 
            // this is executed on page load (after images load)


            el.hasScroll = true;
          }
        });
      },
      bindEvents: function bindEvents(item) {
        scrollOverflowHandler.getScrollableItem(item).addEventListener('scroll', scrollOverflowHandler.onPanelScroll);
        item.addEventListener('wheel', scrollOverflowHandler.preventScrollWithMouseWheel, {
          passive: false
        });
        item.addEventListener('keydown', scrollOverflowHandler.preventScrollWithKeyboard, {
          passive: false
        });
      },
      createWrapper: function createWrapper(item) {
        var overflowWrapper = document.createElement('div');
        overflowWrapper.className = OVERFLOW;
        wrapInner(item, overflowWrapper);
        overflowWrapper.setAttribute('tabindex', '-1');
      },
      destroyWrapper: function destroyWrapper(item) {
        var overflowWrapper = $(OVERFLOW_SEL, item)[0];

        if (overflowWrapper) {
          unwrap(overflowWrapper);
          item.removeAttribute('tabindex');
        }
      },
      getScrollableItem: function getScrollableItem(sectionItem) {
        var panel = getSlideOrSection(sectionItem);
        return $(OVERFLOW_SEL, panel)[0] || panel;
      },
      hasScroll: function hasScroll(panelItem) {
        return hasClass(panelItem, OVERFLOW) || $(OVERFLOW_SEL, panelItem)[0] != null;
      },
      isScrollable: function isScrollable(panel) {
        return panel.isSection && panel.activeSlide ? panel.activeSlide.hasScroll : panel.hasScroll;
      },
      shouldBeScrollable: function shouldBeScrollable(item) {
        var scrollable = scrollOverflowHandler.getScrollableItem(item);
        return scrollable.scrollHeight > win.innerHeight;
      },
      isScrolled: function isScrolled(direction, el) {
        if (!state.canScroll) {
          return false;
        } // we won't allow scrolloverflow on scrollBar:true


        if (getOptions().scrollBar) {
          return true;
        }

        var scrollableItem = scrollOverflowHandler.getScrollableItem(el);

        if (!getOptions().scrollOverflow || !hasClass(scrollableItem, OVERFLOW) || // Checking the section first 
        // In case they apply to both section + slide #4505
        hasClass(el, 'fp-noscroll') || // Checking the slide (in case it has)
        hasClass(getSlideOrSection(el), 'fp-noscroll')) {
          return true;
        } // ie11 wrongly calculates scrollHeight when using the CSS style
        // overflow: auto   It adds 1 more pixel compared to offsetHeight


        var ie11offset = isIE11 ? 1 : 0;
        var positionY = scrollableItem.scrollTop;
        var isTopReached = direction === 'up' && positionY <= 0;
        var isBottomReached = direction === 'down' && scrollableItem.scrollHeight <= Math.ceil(scrollableItem.offsetHeight + positionY) + ie11offset;
        var isScrolled = isTopReached || isBottomReached;

        if (!isScrolled) {
          this.timeBeforeReachingLimit = new Date().getTime();
        }

        return isScrolled;
      },
      shouldMovePage: function shouldMovePage() {
        this.timeLastScroll = new Date().getTime();
        var timeDiff = this.timeLastScroll - scrollOverflowHandler.timeBeforeReachingLimit;
        var isUsingTouch = isTouchDevice || isTouch;
        var isGrabbing = isUsingTouch && state.isGrabbing;
        var isNotFirstTimeReachingLimit = state.isUsingWheel && timeDiff > 600;
        return isGrabbing && timeDiff > 400 || isNotFirstTimeReachingLimit;
      },
      onPanelScroll: function () {
        var prevPosition = 0;
        return function (e) {
          var currentPosition = e.target.scrollTop;
          var direction = state.touchDirection !== 'none' ? state.touchDirection : prevPosition < currentPosition ? 'down' : 'up';
          prevPosition = currentPosition;

          if (isFunction(getOptions().onScrollOverflow)) {
            fireCallback('onScrollOverflow', {
              position: currentPosition,
              direction: direction
            });
          }

          if (hasClass(e.target, OVERFLOW) && state.canScroll) {
            if (scrollOverflowHandler.isScrolled(direction, e.target) && scrollOverflowHandler.shouldMovePage()) {
              // Checking again if we have a scrollable content
              // To avoid issues like #4479 where the scroll event gets
              // triggered after removing/hidding content if this was scrolled
              if (scrollOverflowHandler.shouldBeScrollable(getState().activeSection.item)) {
                EventEmitter.emit(events.onScrollOverflowScrolled, {
                  direction: direction
                });
              }
            }
          }
        };
      }()
    };

    var g_afterSlideLoadsId;
    FP.landscapeScroll = landscapeScroll;
    EventEmitter.on(events.bindEvents, bindEvents$a);

    function bindEvents$a() {
      EventEmitter.on(events.onPerformMovement, onPerformMovement);
    }

    function onPerformMovement() {
      clearTimeout(g_afterSlideLoadsId);
      setState({
        slideMoving: false
      });
    }
    /**
    * Scrolls horizontal sliders.
    */


    function landscapeScroll(slides, destiny, direction) {
      var sectionElem = closest(slides, SECTION_SEL);
      var section = getState().sections.filter(function (section) {
        return section.item == sectionElem;
      })[0];
      var slide = section.slides.filter(function (slide) {
        return slide.item == destiny;
      })[0];
      var v = {
        "slides": slides,
        "destiny": destiny,
        "direction": direction,
        "destinyPos": {
          "left": destiny.offsetLeft
        },
        "slideIndex": slide.index(),
        "section": sectionElem,
        "sectionIndex": section.index(),
        "anchorLink": section.anchor,
        "slidesNav": $(SLIDES_NAV_SEL, sectionElem)[0],
        "slideAnchor": slide.anchor,
        "prevSlide": section.activeSlide.item,
        "prevSlideIndex": section.activeSlide.index(),
        "items": {
          "section": section,
          "origin": section.activeSlide,
          "destination": slide
        },
        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        "localIsResizing": state.isResizing
      };
      v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
      v.direction = v.direction ? v.direction : v.xMovement; //important!! Only do it when not resizing

      if (!v.localIsResizing) {
        //preventing from scrolling to the next/prev section when using scrollHorizontally
        setState({
          canScroll: false
        });
      }

      if (getOptions().onSlideLeave) {
        //if the site is not just resizing and readjusting the slides
        if (!v.localIsResizing && v.xMovement !== 'none') {
          if (isFunction(getOptions().onSlideLeave)) {
            if (fireCallback('onSlideLeave', v) === false) {
              setState({
                slideMoving: false
              });
              return;
            }
          }
        }
      }

      addClass(destiny, ACTIVE);
      removeClass(siblings(destiny), ACTIVE);
      updateState();

      if (!v.localIsResizing) {
        stopMedia(v.prevSlide);
        lazyLoad(destiny);
      }

      toggleControlArrows(v); //only changing the URL if the slides are in the current section (not for resize re-adjusting)

      if (section.isActive && !v.localIsResizing) {
        setPageStatus(v.slideIndex, v.slideAnchor, v.anchorLink);
      }

      EventEmitter.emit(events.onSlideLeave, v);
      performHorizontalMove(slides, v, true);
    }
    /**
    * Performs the horizontal movement. (CSS3 or jQuery)
    *
    * @param fireCallback {Boolean} - determines whether or not to fire the callback
    */

    function performHorizontalMove(slides, v, fireCallback) {
      var destinyPos = v.destinyPos;
      activeSlidesNavigation(v.slidesNav, v.slideIndex);
      setState({
        scrollX: Math.round(destinyPos.left)
      });

      if (getOptions().css3) {
        var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';
        FP.test.translate3dH[v.sectionIndex] = translate3d;
        css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));
        clearTimeout(g_afterSlideLoadsId);
        g_afterSlideLoadsId = setTimeout(function () {
          if (fireCallback) {
            afterSlideLoads(v);
          }
        }, getOptions().scrollingSpeed);
      } else {
        FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);
        scrollTo(slides, Math.round(destinyPos.left), getOptions().scrollingSpeed, function () {
          if (fireCallback) {
            afterSlideLoads(v);
          }
        });
      }
    }
    /**
    * Retuns `right` or `left` depending on the scrolling movement to reach its destination
    * from the current slide.
    */


    function getXmovement(fromIndex, toIndex) {
      if (fromIndex == toIndex) {
        return 'none';
      }

      if (fromIndex > toIndex) {
        return 'left';
      }

      return 'right';
    }

    function onDestroy$6() {
      clearTimeout(g_afterSlideLoadsId);
    }

    function afterSlideLoads(v) {
      //if the site is not just resizing and readjusting the slides
      if (!v.localIsResizing) {
        if (isFunction(getOptions().afterSlideLoad)) {
          fireCallback('afterSlideLoad', v);
        } //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
        //and to prevent double scroll right after a windows resize


        setState({
          canScroll: true
        });
        playMedia(v.destiny);
        EventEmitter.emit(events.afterSlideLoads, v);
      } //letting them slide again


      setState({
        slideMoving: false
      });
    }

    /**
    * Slides silently (with no animation) the active slider to the given slide.
    * @param noCallback {bool} true or defined -> no callbacks
    */

    function silentLandscapeScroll(activeSlide, noCallbacks) {
      setScrollingSpeed(0, 'internal');

      if (typeof noCallbacks !== 'undefined') {
        //preventing firing callbacks afterSlideLoad etc.
        setState({
          isResizing: true
        });
      }

      landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);

      if (typeof noCallbacks !== 'undefined') {
        setState({
          isResizing: false
        });
      }

      setScrollingSpeed(getOriginals().scrollingSpeed, 'internal');
    }

    var g_prevActiveSectionIndex = null;
    var g_prevActiveSlideIndex = null;
    /** 
     * Updates the state of the app.
     */

    function updateState() {
      state.activeSection = null;
      state.sections.map(function (section) {
        var isActive = hasClass(section.item, ACTIVE);
        section.isActive = isActive;
        section.hasScroll = scrollOverflowHandler.hasScroll(section.item);

        if (isActive) {
          state.activeSection = section;
        }

        if (section.slides.length) {
          section.activeSlide = null;
          section.slides.map(function (slide) {
            var isActiveSlide = hasClass(slide.item, ACTIVE);
            slide.hasScroll = scrollOverflowHandler.hasScroll(section.item);
            slide.isActive = isActiveSlide;

            if (isActiveSlide) {
              section.activeSlide = slide;
            }
          });
        }
      });
      scrollToNewActivePanel();
    }
    function updateStructuralState() {
      var allSectionItems = $(getOptions().sectionSelector, getContainer());
      var sectionsItems = getVisible(allSectionItems);
      var allSections = Array.from(allSectionItems).map(function (item) {
        return new SectionPanel(item);
      });
      var sections = allSections.filter(function (item) {
        return item.isVisible;
      });
      var slides = sections.reduce(function (acc, section) {
        return acc.concat(section.slides);
      }, []); // keeping track of the previously active section

      g_prevActiveSectionIndex = getPrevActivePanelIndex(state.activeSection);
      g_prevActiveSlideIndex = getPrevActivePanelIndex(state.activeSection ? state.activeSection.activeSlide : null);
      state.numSections = sectionsItems.length;
      state.numSlides = sections.reduce(function (acc, section) {
        return acc + section.slides.length;
      }, 0);
      state.sections = sections;
      state.sectionsIncludingHidden = allSections;
      state.slides = slides;
      state.panels = state.sections.concat(state.slides);
    }

    function getPrevActivePanelIndex(activePanel) {
      if (!activePanel) {
        return null;
      }

      var prevActivePanelItem = activePanel ? activePanel.item : null;
      var hiddenPanels = activePanel.isSection ? state.sectionsIncludingHidden : state.activeSection.slidesIncludingHidden;

      if (prevActivePanelItem) {
        var panel = getPanelByElement(hiddenPanels, prevActivePanelItem);
        return panel ? panel.index() : null;
      }

      return null;
    }
    /**
     * When changes in the DOM take place there's a change 
     * the active section is now hidden or removed. 
     * fullPage.js will scroll to the closest section nearby.
     */


    function scrollToNewActivePanel() {
      var activeSection = state.activeSection;
      var activeSectionHasSlides = state.activeSection ? state.activeSection.slides.length : false;
      var activeSlide = state.activeSection ? state.activeSection.activeSlide : null; // Hidding / removing the active section ?

      if (!activeSection && state.sections.length && !getState().isBeyondFullpage && g_prevActiveSectionIndex) {
        var newActiveSection = getNewActivePanel(g_prevActiveSectionIndex, state.sections);

        if (newActiveSection) {
          state.activeSection = newActiveSection;
          state.activeSection.isActive = true;
          addClass(state.activeSection.item, ACTIVE);
        }

        if (state.activeSection) {
          silentScroll(state.activeSection.item.offsetTop);
        }
      }

      if (activeSectionHasSlides && !activeSlide && g_prevActiveSlideIndex) {
        var newActiveSlide = getNewActivePanel(g_prevActiveSlideIndex, state.activeSection.slides);

        if (newActiveSlide) {
          state.activeSection.activeSlide = newActiveSlide;
          state.activeSection.activeSlide.isActive = true;
          addClass(state.activeSection.activeSlide.item, ACTIVE);
        }

        if (state.activeSection.activeSlide) {
          silentLandscapeScroll(state.activeSection.activeSlide.item, 'internal');
        }
      }
    }

    function getNewActivePanel(prevActivePanelIndex, siblings) {
      var newActiveSection;
      var prevIndex = prevActivePanelIndex - 1;
      var nextIndex = prevActivePanelIndex;

      do {
        newActiveSection = siblings[prevIndex] || siblings[nextIndex];

        if (newActiveSection) {
          break;
        }

        prevIndex = prevIndex - 1;
        nextIndex = nextIndex + 1;
      } while (prevIndex >= 0 || nextIndex < siblings.length);

      return newActiveSection;
    }
    /**
    * Section object
    */


    var SectionPanel = function SectionPanel(el) {
      var _this = this;

      [].push.call(arguments, getOptions().sectionSelector);
      Item.apply(this, arguments);
      this.allSlidesItems = $(getOptions().slideSelector, el);
      this.slidesIncludingHidden = Array.from(this.allSlidesItems).map(function (item) {
        return new SlidePanel(item, _this);
      });
      this.slides = this.slidesIncludingHidden.filter(function (slidePanel) {
        return slidePanel.isVisible;
      });
      this.activeSlide = this.slides.length ? this.slides.filter(function (slide) {
        return slide.isActive;
      })[0] || this.slides[0] : null;
    };
    SectionPanel.prototype = Item.prototype;
    SectionPanel.prototype.constructor = SectionPanel;
    /**
    * Slide object
    */

    var SlidePanel = function SlidePanel(el, section) {
      this.parent = section;
      Item.call(this, el, getOptions().slideSelector);
    };

    SlidePanel.prototype = Item.prototype;
    SlidePanel.prototype.constructor = SectionPanel;

    /**
    * Adds internal classes to be able to provide customizable selectors
    * keeping the link with the style sheet.
    */

    function addInternalSelectors() {
      addClass($(getOptions().sectionSelector, getContainer()), SECTION);
      addClass($(getOptions().slideSelector, getContainer()), SLIDE);
    }

    /**
    * Styles the horizontal slides for a section.
    */

    function styleSlides(section) {
      var numSlides = section.slides.length;
      var slidesElems = section.allSlidesItems;
      var slides = section.slides;
      var sliderWidth = numSlides * 100;
      var slideWidth = 100 / numSlides;

      if (!$(SLIDES_WRAPPER_SEL, section.item)[0]) {
        var slidesWrapper = doc.createElement('div');
        slidesWrapper.className = SLIDES_WRAPPER; //fp-slides

        wrapAll(slidesElems, slidesWrapper);
        var slidesContainer = doc.createElement('div');
        slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer

        wrapAll(slidesElems, slidesContainer);
      }

      css($(SLIDES_CONTAINER_SEL, section.item), {
        'width': sliderWidth + '%'
      });

      if (numSlides > 1) {
        if (getOptions().controlArrows) {
          createSlideArrows(section);
        }

        if (getOptions().slidesNavigation) {
          addSlidesNavigation(section);
        }
      }

      slides.forEach(function (slide) {
        css(slide.item, {
          'width': slideWidth + '%'
        });

        if (getOptions().verticalCentered) {
          addTableClass(slide);
        }
      });
      var startingSlide = section.activeSlide || null; //if the slide won't be an starting point, the default will be the first one
      //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.

      if (startingSlide != null && state.activeSection && (state.activeSection.index() !== 0 || state.activeSection.index() === 0 && startingSlide.index() !== 0)) {
        silentLandscapeScroll(startingSlide.item, 'internal');
      } else {
        addClass(slidesElems[0], ACTIVE);
      }
    }

    var g_wrapperObserver;
    var g_wrapperObserveConfig = {
      attributes: false,
      subtree: true,
      childList: true,
      characterData: true
    };
    EventEmitter.on(events.bindEvents, bindEvents$9);
    FP["render"] = onContentChange;

    function bindEvents$9() {
      if (getOptions().observer && "MutationObserver" in window && $(WRAPPER_SEL)[0]) {
        g_wrapperObserver = createObserver($(WRAPPER_SEL)[0], onContentChange, g_wrapperObserveConfig);
      }

      EventEmitter.on(events.contentChanged, onContentChange);
    }
    /**
     * Creates a Mutation observer.
     */


    function createObserver(target, callback, config) {
      var observer = new MutationObserver(callback);
      observer.observe(target, config);
      return observer;
    }

    function didSlidesChange() {
      return getVisible($(getOptions().slideSelector, getContainer())).length !== getState().numSlides;
    }

    function didSectionsChange() {
      return getVisible($(getOptions().sectionSelector, getContainer())).length !== getState().numSections;
    }

    function didSectionsOrSlidesChange() {
      return didSlidesChange() || didSectionsChange();
    }
    /**
     * Listen to changes on sections and fires reBuild
     * when those changes affect the section height.
     */


    function onContentChange(mutations) {
      var _didSlidesChange = didSlidesChange();

      if (didSectionsOrSlidesChange() && !state.isDoingContinousVertical) {
        if (getOptions().observer && g_wrapperObserver) {
          // Temporally disabling the observer while 
          // we modidy the DOM again
          g_wrapperObserver.disconnect();
        }

        updateStructuralState();
        updateState(); // Removing navs and anchors options

        getOptions().anchors = [];
        remove($(SECTION_NAV_SEL));
        addInternalSelectors();
        setOptionsFromDOM();

        if (getOptions().navigation) {
          addVerticalNavigation();
        }

        if (_didSlidesChange) {
          remove($(SLIDES_NAV_SEL));
          remove($(SLIDES_ARROW_SEL));
        }

        getState().sections.forEach(function (section) {
          if (section.slides.length) {
            if (_didSlidesChange) {
              styleSlides(section);
            }
          } else {
            styleSection(section);
          }
        });
      }

      if (getOptions().observer && g_wrapperObserver && $(WRAPPER_SEL)[0]) {
        g_wrapperObserver.observe($(WRAPPER_SEL)[0], g_wrapperObserveConfig);
      }
    }

    var supportsPassiveEvents = function () {
      //cheks for passive event support
      var g_supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          get: function get() {
            g_supportsPassive = true;
          }
        });
        windowAddEvent("testPassive", null, opts);
        windowRemoveEvent("testPassive", null, opts);
      } catch (e) {}

      return function () {
        return g_supportsPassive;
      };
    }();

    function getPassiveOptionsIfPossible() {
      return supportsPassiveEvents() ? {
        passive: false
      } : false;
    }

    var wheelDataHandler = function () {
      var _prevTime = new Date().getTime();

      var _scrollings = [];
      var isScrollingVertically;
      var direction;
      return {
        registerEvent: function registerEvent(e) {
          e = e || win.event;
          var value = e.wheelDelta || -e.deltaY || -e.detail;
          var delta = Math.max(-1, Math.min(1, value));
          var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
          isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
          var curTime = new Date().getTime();
          direction = delta < 0 ? 'down' : 'up'; //Limiting the array to 150 (lets not waste memory!)

          if (_scrollings.length > 149) {
            _scrollings.shift();
          } //keeping record of the previous scrollings


          _scrollings.push(Math.abs(value)); //time difference between the last scroll and the current one


          var timeDiff = curTime - _prevTime;
          _prevTime = curTime; //haven't they scrolled in a while?
          //(enough to be consider a different scrolling action to scroll another section)

          if (timeDiff > 200) {
            //emptying the array, we dont care about old scrollings for our averages
            _scrollings = [];
          }
        },
        isAccelerating: function isAccelerating() {
          var averageEnd = getAverage(_scrollings, 10);
          var averageMiddle = getAverage(_scrollings, 70);
          var isAccelerating = averageEnd >= averageMiddle;
          return _scrollings.length ? isAccelerating && isScrollingVertically : false;
        },
        getDirection: function getDirection() {
          return direction;
        }
      };
    }();

    function scrollBeyondFullPage() {
      var dtop = getDestinationOffset();
      var scrollSettings = getScrollSettings(dtop);
      FP.test.top = -dtop + 'px';
      setState({
        canScroll: false
      });
      scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function () {
        setTimeout(function () {
          setState({
            isBeyondFullpage: true
          });
          setState({
            canScroll: true
          });
        }, 30);
      });
    }
    function onKeyDown() {
      if (!isFullPageAbove()) {
        return;
      } else {
        scrollUpToFullpage();
      }
    }
    function scrollUpToFullpage() {
      var scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop);
      setState({
        canScroll: false
      });
      scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function () {
        setState({
          canScroll: true
        });
        setState({
          isBeyondFullpage: false
        });
        setState({
          isAboutToScrollToFullPage: false
        });
      });
    }

    function getDestinationOffset() {
      if (!getOptions().css3) {
        return getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight;
      }

      return getScrollTop() + getWindowHeight();
    }

    function beyondFullPageHandler(container, e) {
      new Date().getTime();
      var pauseScroll = getState().isBeyondFullpage && container.getBoundingClientRect().bottom >= 0 && wheelDataHandler.getDirection() === 'up';
      var g_isAboutToScrollToFullPage = getState().isAboutToScrollToFullPage;

      if (g_isAboutToScrollToFullPage) {
        preventDefault(e);
        return false;
      }

      if (getState().isBeyondFullpage) {
        if (!pauseScroll) {
          keyframeTime('set', 'beyondFullpage', 1000);
        } else {
          var shouldSetFixedPosition = !g_isAboutToScrollToFullPage && (!keyframeTime('isNewKeyframe', 'beyondFullpage') || !wheelDataHandler.isAccelerating());
          var scrollSettings;

          if (shouldSetFixedPosition) {
            scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight);
            scrollSettings.element.scrollTo(0, scrollSettings.options);
            setState({
              isAboutToScrollToFullPage: false
            });
            preventDefault(e);
            return false;
          } else if (wheelDataHandler.isAccelerating()) {
            pauseScroll = false;
            setState({
              isAboutToScrollToFullPage: true
            });
            setState({
              scrollTrigger: 'wheel'
            });
            scrollUpToFullpage();
            preventDefault(e);
            return false;
          }
        }

        if (!g_isAboutToScrollToFullPage) {
          // allow normal scrolling, but quitting
          if (!pauseScroll) {
            return true;
          }
        }
      }
    }

    var keyframeTime = function () {
      var isNew = false;
      var frames = {};
      var timeframes = {};
      return function (action, name, timeframe) {
        switch (action) {
          case 'set':
            frames[name] = new Date().getTime();
            timeframes[name] = timeframe;
            break;

          case 'isNewKeyframe':
            var current = new Date().getTime();
            isNew = current - frames[name] > timeframes[name];
            break;
        }

        return isNew;
      };
    }();

    FP.moveSectionDown = moveSectionDown;
    /**
    * Moves the page down one section.
    */

    function moveSectionDown() {
      var next = getState().activeSection.next(); //looping to the top if there's no more sections below

      if (!next && (getOptions().loopBottom || getOptions().continuousVertical)) {
        next = getState().sections[0];
      }

      if (next != null) {
        scrollPage(next, null, false);
      } else if (hasContentBeyondFullPage()) {
        EventEmitter.emit(events.scrollBeyondFullpage);
      }
    }

    function hasContentBeyondFullPage() {
      return getContainer().scrollHeight < $body.scrollHeight && getOptions().scrollBar && getOptions().scrollBeyondFullpage;
    }

    FP.moveSectionUp = moveSectionUp;
    /**
    * Moves the page up one section.
    */

    function moveSectionUp() {
      var prev = getState().activeSection.prev(); //looping to the bottom if there's no more sections above

      if (!prev && (getOptions().loopTop || getOptions().continuousVertical)) {
        prev = getLast(getState().sections);
      }

      if (prev != null) {
        scrollPage(prev, null, true);
      }
    }

    var oldPageY = 0;
    /**
    * Detecting the direction of the mouse movement.
    * Used only for the middle button of the mouse.
    */

    function mouseMoveHandler(e) {
      if (!getOptions().autoScrolling) {
        return;
      }

      if (state.canScroll) {
        // moving up
        if (e.pageY < oldPageY && getIsScrollAllowed().m.up) {
          moveSectionUp();
        } // moving down
        else if (e.pageY > oldPageY && getIsScrollAllowed().m.down) {
          moveSectionDown();
        }
      }

      oldPageY = e.pageY;
    }
    function setOldPageY(value) {
      oldPageY = value;
    }

    /**
    * Determines the way of scrolling up or down:
    * by 'automatically' scrolling a section or by using the default and normal scrolling.
    */

    function scrolling(type) {
      if (!getIsScrollAllowed().m[type]) {
        return;
      }

      var scrollSection = type === 'down' ? moveSectionDown : moveSectionUp;

      if (getOptions().scrollOverflow && scrollOverflowHandler.isScrollable(getState().activeSection)) {
        //is the scrollbar at the start/end of the scroll?
        if (scrollOverflowHandler.isScrolled(type, getState().activeSection.item) && scrollOverflowHandler.shouldMovePage()) {
          scrollSection();
        }
      } else {
        scrollSection();
      }
    }

    var touchStartY = 0;
    var touchStartX = 0;
    var touchEndY = 0;
    var touchEndX = 0;
    var MSPointer = getMSPointer();
    var pointers = {
      touchmove: 'ontouchmove' in window ? 'touchmove' : MSPointer ? MSPointer.move : null,
      touchstart: 'ontouchstart' in window ? 'touchstart' : MSPointer ? MSPointer.down : null
    };
    /**
    * Adds the possibility to auto scroll through sections on touch devices.
    */

    function addTouchHandler() {
      if (!pointers.touchmove) {
        return;
      }

      if (isTouchDevice || isTouch) {
        if (getOptions().autoScrolling) {
          $body.removeEventListener(pointers.touchmove, preventBouncing, {
            passive: false
          });
          $body.addEventListener(pointers.touchmove, preventBouncing, {
            passive: false
          });
        }

        var touchWrapper = getOptions().touchWrapper;
        touchWrapper.removeEventListener(pointers.touchstart, touchStartHandler);
        touchWrapper.removeEventListener(pointers.touchmove, touchMoveHandler, {
          passive: false
        });
        touchWrapper.addEventListener(pointers.touchstart, touchStartHandler);
        touchWrapper.addEventListener(pointers.touchmove, touchMoveHandler, {
          passive: false
        });
      }
    }
    /**
    * Removes the auto scrolling for touch devices.
    */

    function removeTouchHandler() {
      if (!pointers.touchmove) {
        return;
      }

      if (isTouchDevice || isTouch) {
        // normalScrollElements requires it off #2691
        if (getOptions().autoScrolling) {
          $body.removeEventListener(pointers.touchmove, touchMoveHandler, {
            passive: false
          });
          $body.removeEventListener(pointers.touchmove, preventBouncing, {
            passive: false
          });
        }

        var touchWrapper = getOptions().touchWrapper;
        touchWrapper.removeEventListener(pointers.touchstart, touchStartHandler);
        touchWrapper.removeEventListener(pointers.touchmove, touchMoveHandler, {
          passive: false
        });
      }
    }
    /* Detecting touch events

    * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
    * This way, the touchstart and the touch moves shows an small difference between them which is the
    * used one to determine the direction.
    */

    function touchMoveHandler(e) {
      var activeSection = closest(e.target, SECTION_SEL) || getState().activeSection.item;
      var hasActiveSectionOverflow = scrollOverflowHandler.isScrollable(getState().activeSection);

      if (isReallyTouch(e)) {
        setState({
          isGrabbing: true,
          isUsingWheel: false
        });

        if (getOptions().autoScrolling) {
          if (hasActiveSectionOverflow && !state.canScroll || getOptions().scrollBar) {
            //preventing the easing on iOS devices
            preventDefault(e);
          }
        }

        var touchEvents = getEventsPage(e);
        touchEndY = touchEvents.y;
        touchEndX = touchEvents.x;
        var isVerticalMovementEnough = Math.abs(touchStartY - touchEndY) > win.innerHeight / 100 * getOptions().touchSensitivity;
        var isHorizontalMovementEnough = Math.abs(touchStartX - touchEndX) > getWindowWidth() / 100 * getOptions().touchSensitivity;
        var isHorizontalPredominantMove = $(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY);
        var directionH = touchStartX > touchEndX ? 'right' : 'left';
        var directionV = touchStartY > touchEndY ? 'down' : 'up';
        var direction = isHorizontalPredominantMove ? directionH : directionV;
        setState({
          touchDirection: direction
        }); //if movement in the X axys is greater than in the Y and the currect section has slides...

        if (isHorizontalPredominantMove) {
          //is the movement greater than the minimum resistance to scroll?
          if (!state.slideMoving && isHorizontalMovementEnough) {
            if (touchStartX > touchEndX) {
              if (getIsScrollAllowed().m.right) {
                EventEmitter.emit(events.moveSlideRight, {
                  section: activeSection
                });
              }
            } else {
              if (getIsScrollAllowed().m.left) {
                EventEmitter.emit(events.moveSlideLeft, {
                  section: activeSection
                });
              }
            }
          }
        } //vertical scrolling (only when autoScrolling is enabled)
        else if (getOptions().autoScrolling && state.canScroll) {
          //is the movement greater than the minimum resistance to scroll?
          if (isVerticalMovementEnough) {
            scrolling(directionV);
          }
        }
      }
    }
    /**
    * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
    * this way we make sure that is really a touch event what IE is detecting.
    */


    function isReallyTouch(e) {
      //if is not IE   ||  IE is detecting `touch` or `pen`
      return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
    }
    /**
    * Handler for the touch start event.
    */


    function touchStartHandler(e) {
      //stopping the auto scroll to adjust to a section
      if (getOptions().fitToSection) {
        setState({
          activeAnimation: false
        });
      }

      if (isReallyTouch(e)) {
        var touchEvents = getEventsPage(e);
        touchStartY = touchEvents.y;
        touchStartX = touchEvents.x;
      }

      windowAddEvent('touchend', touchEndHandler);
    }
    /**
    * Handler for the touch end event.
    */


    function touchEndHandler() {
      windowRemoveEvent('touchend', touchEndHandler);
      setState({
        isGrabbing: false
      });
    }
    /**
    * Gets the pageX and pageY properties depending on the browser.
    * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
    */


    function getEventsPage(e) {
      var events = {};
      events.y = typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
      events.x = typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX; //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008

      if (isTouch && isReallyTouch(e) && getOptions().scrollBar && typeof e.touches !== 'undefined') {
        events.y = e.touches[0].pageY;
        events.x = e.touches[0].pageX;
      }

      return events;
    }
    /*
    * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
    * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
    */


    function getMSPointer() {
      var pointer; //IE >= 11 & rest of browsers

      if (win.PointerEvent) {
        pointer = {
          down: 'pointerdown',
          move: 'pointermove'
        };
      }

      return pointer;
    }
    /*
    * Preventing bouncing in iOS #2285
    */


    function preventBouncing(e) {
      if (getOptions().autoScrolling && isReallyTouch(e) && getIsScrollAllowed().m.up) {
        //preventing the easing on iOS devices
        if (!state.canScroll) {
          preventDefault(e);
        }
      }
    }

    FP.moveSlideLeft = moveSlideLeft;
    FP.moveSlideRight = moveSlideRight;
    /**
    * Slides a slider to the given direction.
    * Optional `section` param.
    */

    function moveSlide(direction, section) {
      var activeSectionItem = section == null ? getState().activeSection.item : section;
      var activeSection = getPanelByElement(state.sections, activeSectionItem);
      var slides = $(SLIDES_WRAPPER_SEL, activeSectionItem)[0]; // more than one slide needed and nothing should be sliding

      if (slides == null || state.slideMoving || activeSection.slides.length < 2) {
        return;
      }

      var currentSlide = activeSection.activeSlide;
      var destiny = direction === 'left' ? currentSlide.prev() : currentSlide.next(); //isn't there a next slide in the secuence?

      if (!destiny) {
        //respect loopHorizontal setting
        if (!getOptions().loopHorizontal) return;
        destiny = direction === 'left' ? getLast(activeSection.slides) : activeSection.slides[0];
      }

      setState({
        slideMoving: !FP.test.isTesting
      });
      landscapeScroll(slides, destiny.item, direction);
    }
    /**
    * Slides left the slider of the active section.
    * Optional `section` param.
    */

    function moveSlideLeft(section) {
      moveSlide('left', section);
    }
    /**
    * Slides right the slider of the active section.
    * Optional `section` param.
    */

    function moveSlideRight(section) {
      moveSlide('right', section);
    }

    /**
    * Gets a section by its anchor / index
    */

    function getSectionByAnchor(sectionAnchor) {
      var section = getState().sections.filter(function (section) {
        return section.anchor === sectionAnchor;
      })[0];

      if (!section) {
        var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor - 1 : 0;
        section = getState().sections[sectionIndex];
      }

      return section;
    }

    /**
    * Scrolls the slider to the given slide destination for the given section
    */

    function scrollSlider(slideElem) {
      if (slideElem != null) {
        landscapeScroll(closest(slideElem, SLIDES_WRAPPER_SEL), slideElem);
      }
    }

    /**
    * Scrolls to the given section and slide anchors
    */

    function scrollPageAndSlide(sectionAnchor, slideAnchor) {
      var section = getSectionByAnchor(sectionAnchor); //do nothing if there's no section with the given anchor name

      if (section == null) return;
      var slideElem = getSlideByAnchor(slideAnchor, section); //we need to scroll to the section and then to the slide

      if ((!section.anchor || section.anchor !== state.lastScrolledDestiny) && !hasClass(section.item, ACTIVE)) {
        scrollPage(section, function () {
          scrollSlider(slideElem);
        });
      } //if we were already in the section
      else {
        scrollSlider(slideElem);
      }
    }
    /**
    * Gets a slide inside a given section by its anchor / index
    */

    function getSlideByAnchor(slideAnchor, section) {
      var slide = section.slides.filter(function (slide) {
        return slide.anchor === slideAnchor;
      })[0];

      if (slide == null) {
        slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
        slide = section.slides[slideAnchor];
      }

      return slide ? slide.item : null;
    }

    FP.moveTo = moveTo$1;
    /**
    * Moves the page to the given section and slide.
    * Anchors or index positions can be used as params.
    */

    function moveTo$1(sectionAnchor, slideAnchor) {
      var destiny = getSectionByAnchor(sectionAnchor);

      if (typeof slideAnchor !== 'undefined') {
        scrollPageAndSlide(sectionAnchor, slideAnchor);
      } else if (destiny != null) {
        scrollPage(destiny);
      }
    }

    //@ts-check
    var g_controlPressed;
    var g_keydownId;
    var g_elToFocus;
    EventEmitter.on(events.bindEvents, bindEvents$8);

    function bindEvents$8() {
      //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
      windowAddEvent('blur', blurHandler); //Sliding with arrow keys, both, vertical and horizontal

      docAddEvent('keydown', keydownHandler); //to prevent scrolling while zooming

      docAddEvent('keyup', keyUpHandler);
      EventEmitter.on(events.onDestroy, onDestroy$5);
      EventEmitter.on(events.afterSlideLoads, onAfterSlideLoads);
      EventEmitter.on(events.afterSectionLoads, afterSectionLoads);
    }

    function onDestroy$5() {
      clearTimeout(g_keydownId);
      docRemoveEvent('keydown', keydownHandler);
      docRemoveEvent('keyup', keyUpHandler);
    } //Sliding with arrow keys, both, vertical and horizontal


    function keydownHandler(e) {
      clearTimeout(g_keydownId);
      var keyCode = e.keyCode;
      var isPressingHorizontalArrows = [37, 39].indexOf(keyCode) > -1;
      var canScrollWithKeyboard = getOptions().autoScrolling || getOptions().fitToSection || isPressingHorizontalArrows; //tab?

      if (keyCode === 9) {
        onTab(e);
      } else if (!isInsideInput() && getOptions().keyboardScrolling && canScrollWithKeyboard) {
        g_controlPressed = e.ctrlKey;
        g_keydownId = setTimeout(function () {
          onkeydown(e);
        }, 0);
      }
    }
    /**
    * Keydown event
    */


    function onkeydown(e) {
      var shiftPressed = e.shiftKey;
      var activeElement = doc.activeElement;
      var isMediaFocused = matches(activeElement, 'video') || matches(activeElement, 'audio');
      var isScrolled = {
        up: scrollOverflowHandler.isScrolled('up', getState().activeSection.item),
        down: scrollOverflowHandler.isScrolled('down', getState().activeSection.item)
      };
      var isUsingHorizontalArrowKeys = [37, 39].indexOf(e.keyCode) > -1;
      cancelDirectionKeyEvents(e); //do nothing if we can not scroll or we are not using horizotnal key arrows.

      if (!state.canScroll && !isUsingHorizontalArrowKeys) {
        return;
      }

      setState({
        scrollTrigger: 'keydown'
      });

      switch (e.keyCode) {
        //up
        case 38:
        case 33:
          if (getIsScrollAllowed().k.up && isScrolled.up) {
            if (state.isBeyondFullpage) {
              EventEmitter.emit(events.onKeyDown, {
                e: e
              });
            } else {
              moveSectionUp();
            }
          } else {
            scrollOverflowHandler.focusScrollable();
          }

          break;
        //down

        case 32:
          //spacebar
          if (shiftPressed && getIsScrollAllowed().k.up && !isMediaFocused && isScrolled.up) {
            moveSectionUp();
            break;
          }

        /* falls through */

        case 40:
        case 34:
          if (getIsScrollAllowed().k.down && isScrolled.down) {
            if (state.isBeyondFullpage) {
              return;
            } // space bar?


            if (e.keyCode !== 32 || !isMediaFocused) {
              moveSectionDown();
            }
          } else {
            scrollOverflowHandler.focusScrollable();
          }

          break;
        //Home

        case 36:
          if (getIsScrollAllowed().k.up) {
            moveTo$1(1);
          }

          break;
        //End

        case 35:
          if (getIsScrollAllowed().k.down) {
            moveTo$1(getState().sections.length);
          }

          break;
        //left

        case 37:
          if (getIsScrollAllowed().k.left) {
            moveSlideLeft();
          }

          break;
        //right

        case 39:
          if (getIsScrollAllowed().k.right) {
            moveSlideRight();
          }

          break;

        default:
          return;
        // exit this handler for other keys
      }
    } //to prevent scrolling while zooming


    function keyUpHandler(e) {
      if (state.isWindowFocused) {
        //the keyup gets fired on new tab ctrl + t in Firefox
        g_controlPressed = e.ctrlKey;
      }
    } //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.


    function blurHandler() {
      setState({
        isWindowFocused: false
      });
      g_controlPressed = false;
    }
    /**
    * Makes sure the tab key will only focus elements within the current section/slide
    * preventing this way from breaking the page.
    * Based on "Modals and keyboard traps"
    * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
    */


    function onTab(e) {
      var isShiftPressed = e.shiftKey;
      var activeElement = doc.activeElement;
      var focusableElements = getFocusables(getSlideOrSection(getState().activeSection.item));

      function preventAndFocusFirst(e) {
        preventDefault(e);
        return focusableElements[0] ? focusableElements[0].focus() : null;
      } // deactivating tab while scrolling #4550


      if (!state.canScroll) {
        preventDefault(e);
        return;
      } //outside any section or slide? Let's not hijack the tab!


      if (isFocusOutside(e)) {
        return;
      } //is there an element with focus?


      if (activeElement) {
        if (closest(activeElement, SECTION_ACTIVE_SEL + ',' + SECTION_ACTIVE_SEL + ' ' + SLIDE_ACTIVE_SEL) == null) {
          activeElement = preventAndFocusFirst(e);
        }
      } //no element if focused? Let's focus the first one of the section/slide
      else {
        preventAndFocusFirst(e);
      } //when reached the first or last focusable element of the section/slide
      //we prevent the tab action to keep it in the last focusable element


      var isFirstFocusableInSection = activeElement == focusableElements[0];
      var isLastFocusableInSection = activeElement == focusableElements[focusableElements.length - 1];
      var isNextItem = !isShiftPressed && isLastFocusableInSection;
      var isPrevItem = isShiftPressed && isFirstFocusableInSection;

      if (isPrevItem || isNextItem) {
        preventDefault(e);
        var focusInfo = getPanelWithFocusable(isPrevItem);
        var destinationPanel = focusInfo ? focusInfo.panel : null;

        if (destinationPanel) {
          var destinationSection = destinationPanel.isSection ? destinationPanel : destinationPanel.parent;
          EventEmitter.emit(events.onScrollPageAndSlide, {
            sectionAnchor: destinationSection.index() + 1,
            slideAnchor: destinationPanel.isSection ? 0 : destinationPanel.index()
          });
          g_elToFocus = focusInfo.itemToFocus;
          preventDefault(e);
        }
      }
    }

    function onAfterSlideLoads(v) {
      focusItem();
    }

    function afterSectionLoads(v) {
      if (!closest(g_elToFocus, SLIDE_SEL) || closest(g_elToFocus, SLIDE_ACTIVE_SEL)) {
        focusItem();
      }
    }

    function focusItem() {
      if (g_elToFocus) {
        g_elToFocus.focus();
        g_elToFocus = null;
      }
    }
    /**
     * Get's the panel containing the element to focus.
     *
     */


    function getPanelWithFocusable(isPrevItem) {
      var action = isPrevItem ? 'prevPanel' : 'nextPanel';
      var focusableElements = [];
      var panelWithFocusables;
      var currentPanel = getSlideOrSectionPanel(getActivePanel()[action]());

      do {
        focusableElements = getFocusables(currentPanel.item);

        if (focusableElements.length) {
          panelWithFocusables = {
            panel: currentPanel,
            itemToFocus: focusableElements[isPrevItem ? focusableElements.length - 1 : 0]
          };
        }

        currentPanel = getSlideOrSectionPanel(currentPanel[action]());
      } while (currentPanel && focusableElements.length === 0);

      return panelWithFocusables;
    }
    /**
    * Gets all the focusable elements inside the passed element.
    */


    function getFocusables(el) {
      return [].slice.call($(focusableElementsString, el)).filter(function (item) {
        return getAttr(item, 'tabindex') !== '-1' && //are also not hidden elements (or with hidden parents)
        item.offsetParent !== null;
      });
    }
    /**
    * Determines whether the focus is outside fullpage.js sections/slides or not.
    */


    function isFocusOutside(e) {
      var allFocusables = getFocusables(doc);
      var currentFocusIndex = allFocusables.indexOf(doc.activeElement);
      var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
      var focusDestination = allFocusables[focusDestinationIndex];
      var destinationItemSlide = closest(focusDestination, SLIDE_SEL);
      var destinationItemSection = closest(focusDestination, SECTION_SEL);
      return !destinationItemSlide && !destinationItemSection;
    }

    function shouldCancelKeyboardNavigation(e) {
      // https://keycode.info/for/34
      // 40 = arrow down
      // 38 = arrow up
      // 32 = spacebar
      // 33  = PageUp
      // 34 = PageDown
      var keyControls = [40, 38, 32, 33, 34];
      return keyControls.indexOf(e.keyCode) > -1 && !state.isBeyondFullpage;
    } //preventing the scroll with arrow keys & spacebar & Page Up & Down keys


    function cancelDirectionKeyEvents(e) {
      if (shouldCancelKeyboardNavigation(e) && !closest(e.target, OVERFLOW_SEL)) {
        e.preventDefault();
      }
    }

    function getControlPressed() {
      return g_controlPressed;
    }

    var prevTime = new Date().getTime();
    var scrollings = [];
    FP.setMouseWheelScrolling = setMouseWheelScrolling;
    /**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
    */

    function setMouseWheelScrolling(value) {
      if (value) {
        addMouseWheelHandler();
        addMiddleWheelHandler();
      } else {
        removeMouseWheelHandler();
        removeMiddleWheelHandler();
      }
    }
    /**
    * Adds the auto scrolling action for the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements will scroll through sections
    * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
    */


    function addMouseWheelHandler() {
      var prefix = '';

      var _addEventListener;

      if (win.addEventListener) {
        _addEventListener = "addEventListener";
      } else {
        _addEventListener = "attachEvent";
        prefix = 'on';
      } // detect available wheel event


      var support = 'onwheel' in doc.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
      // @ts-ignore
      doc.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox

      var passiveEvent = getPassiveOptionsIfPossible();

      if (support == 'DOMMouseScroll') {
        doc[_addEventListener](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent);
      } //handle MozMousePixelScroll in older Firefox
      else {
        doc[_addEventListener](prefix + support, MouseWheelHandler, passiveEvent);
      }
    }
    /**
    * Binding the mousemove when the mouse's middle button is pressed
    */


    function addMiddleWheelHandler() {
      getContainer().addEventListener('mousedown', mouseDownHandler);
      getContainer().addEventListener('mouseup', mouseUpHandler);
    }
    /**
    * Removes the auto scrolling action fired by the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
    */


    function removeMouseWheelHandler() {
      if (doc.addEventListener) {
        docRemoveEvent('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper

        docRemoveEvent('wheel', MouseWheelHandler, false); //Firefox

        docRemoveEvent('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
      } else {
        // @ts-ignore
        doc.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
      }
    }
    /**
    * Unbinding the mousemove when the mouse's middle button is released
    */


    function removeMiddleWheelHandler() {
      getContainer().removeEventListener('mousedown', mouseDownHandler);
      getContainer().removeEventListener('mouseup', mouseUpHandler);
    }
    /**
     * Detecting mousewheel scrolling
     *
     * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
     * http://www.sitepoint.com/html5-javascript-mouse-wheel/
     */


    function MouseWheelHandler(e) {
      var curTime = new Date().getTime();
      var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL);
      var isScrollAllowedBeyondFullPage = beyondFullPageHandler(getContainer(), e);

      if (!state.isUsingWheel) {
        setState({
          isGrabbing: false,
          isUsingWheel: true,
          touchDirection: 'none'
        });
      } //is scroll allowed?


      if (!getIsScrollAllowed().m.down && !getIsScrollAllowed().m.up) {
        preventDefault(e);
        return false;
      }

      if (isScrollAllowedBeyondFullPage) {
        return true;
      } else if (isScrollAllowedBeyondFullPage === false) {
        preventDefault(e);
        return false;
      } //autoscrolling and not zooming?


      if (getOptions().autoScrolling && !getControlPressed() && !isNormalScroll) {
        // cross-browser wheel delta
        e = e || win.event;
        var value = e.wheelDelta || -e.deltaY || -e.detail;
        var delta = Math.max(-1, Math.min(1, value));
        var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
        var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
        var direction = delta < 0 ? 'down' : delta > 0 ? 'up' : 'none'; //Limiting the array to 150 (lets not waste memory!)

        if (scrollings.length > 149) {
          scrollings.shift();
        } //keeping record of the previous scrollings


        scrollings.push(Math.abs(value)); //preventing to scroll the site on mouse wheel when scrollbar is present

        if (getOptions().scrollBar) {
          preventDefault(e);
        } //time difference between the last scroll and the current one


        var timeDiff = curTime - prevTime;
        prevTime = curTime; //haven't they scrolled in a while?
        //(enough to be consider a different scrolling action to scroll another section)

        if (timeDiff > 200) {
          //emptying the array, we dont care about old scrollings for our averages
          scrollings = [];
        }

        setState({
          wheelDirection: direction
        });

        if (state.canScroll) {
          var averageEnd = getAverage(scrollings, 10);
          var averageMiddle = getAverage(scrollings, 70);
          var isAccelerating = averageEnd >= averageMiddle; //to avoid double swipes...

          if (isAccelerating && isScrollingVertically) {
            setState({
              scrollTrigger: 'wheel'
            }); //scrolling down?

            if (delta < 0) {
              scrolling('down');
            } //scrolling up?
            else {
              scrolling('up');
            }
          }
        }

        return false;
      }

      if (getOptions().fitToSection) {
        //stopping the auto scroll to adjust to a section
        setState({
          activeAnimation: false
        });
      }
    } //binding the mousemove when the mouse's middle button is released


    function mouseDownHandler(e) {
      //middle button
      if (e.which == 2) {
        setOldPageY(e.pageY);
        getContainer().addEventListener('mousemove', mouseMoveHandler);
      }
    } //unbinding the mousemove when the mouse's middle button is released


    function mouseUpHandler(e) {
      //middle button
      if (e.which == 2) {
        getContainer().removeEventListener('mousemove', mouseMoveHandler);
      }
    }
    /**
    * Adds or remove the mouse wheel hijacking
    */


    function setMouseHijack(value) {
      if (value) {
        setMouseWheelScrolling(true);
        addTouchHandler();
      } else {
        setMouseWheelScrolling(false);
        removeTouchHandler();
      }
    }

    var g_canFireMouseEnterNormalScroll = true;
    EventEmitter.on(events.bindEvents, bindEvents$7);

    function bindEvents$7() {
      /**
      * Applying normalScroll elements.
      * Ignoring the scrolls over the specified selectors.
      */
      if (getOptions().normalScrollElements) {
        ['mouseenter', 'touchstart'].forEach(function (eventName) {
          forMouseLeaveOrTouch(eventName, false);
        });
        ['mouseleave', 'touchend'].forEach(function (eventName) {
          forMouseLeaveOrTouch(eventName, true);
        });
      }

      EventEmitter.on(events.onDestroy, onDestroy$4);
    }

    function onDestroy$4() {
      ['mouseenter', 'touchstart', 'mouseleave', 'touchend'].forEach(function (eventName) {
        docRemoveEvent(eventName, onMouseEnterOrLeave, true); //true is required!
      });
    }

    function forMouseLeaveOrTouch(eventName, allowScrolling) {
      //a way to pass arguments to the onMouseEnterOrLeave function
      document['fp_' + eventName] = allowScrolling;
      docAddEvent(eventName, onMouseEnterOrLeave, true); //capturing phase
    }

    function onMouseEnterOrLeave(e) {
      var type = e.type;
      var isInsideOneNormalScroll = false; //onMouseLeave will use the destination target, not the one we are moving away from

      var target = type === 'mouseleave' ? e.toElement || e.relatedTarget : e.target; //coming from closing a normalScrollElements modal or moving outside viewport?

      if (target == document || !target) {
        setMouseHijack(true);
        return;
      }

      if (type === 'touchend') {
        g_canFireMouseEnterNormalScroll = false;
        setTimeout(function () {
          g_canFireMouseEnterNormalScroll = true;
        }, 800);
      } //preventing mouseenter event to do anything when coming from a touchEnd event
      //fixing issue #3576


      if (type === 'mouseenter' && !g_canFireMouseEnterNormalScroll) {
        return;
      }

      var normalSelectors = getOptions().normalScrollElements.split(',');
      normalSelectors.forEach(function (normalSelector) {
        if (!isInsideOneNormalScroll) {
          var isNormalScrollTarget = matches(target, normalSelector); //leaving a child inside the normalScoll element is not leaving the normalScroll #3661

          var isNormalScrollChildFocused = closest(target, normalSelector);

          if (isNormalScrollTarget || isNormalScrollChildFocused) {
            if (!FP.shared.isNormalScrollElement) {
              setMouseHijack(false);
            }

            FP.shared.isNormalScrollElement = true;
            isInsideOneNormalScroll = true;
          }
        }
      }); //not inside a single normal scroll element anymore?

      if (!isInsideOneNormalScroll && FP.shared.isNormalScrollElement) {
        setMouseHijack(true);
        FP.shared.isNormalScrollElement = false;
      }
    }

    FP.silentMoveTo = silentMoveTo;
    /**
    * Moves the page to the given section and slide with no animation.
    * Anchors or index positions can be used as params.
    */

    function silentMoveTo(sectionAnchor, slideAnchor) {
      setScrollingSpeed(0, 'internal');
      moveTo$1(sectionAnchor, slideAnchor);
      setScrollingSpeed(getOriginals().scrollingSpeed, 'internal');
    }

    var previousHeight = getWindowHeight();
    var windowsWidth = getWindowWidth();
    var g_resizeId;
    var g_isConsecutiveResize = false;
    var g_resizeMobileHandlerId;
    FP.reBuild = reBuild;
    EventEmitter.on(events.bindEvents, bindEvents$6);

    function bindEvents$6() {
      // Setting VH correctly in mobile devices
      resizeHandler(); //when resizing the site, we adjust the heights of the sections, slimScroll...

      windowAddEvent('resize', resizeHandler);
      EventEmitter.on(events.onDestroy, onDestroy$3);
    }

    function onDestroy$3() {
      clearTimeout(g_resizeId);
      clearTimeout(g_resizeMobileHandlerId);
      windowRemoveEvent('resize', resizeHandler);
    }
    /*
    * Resize event handler.
    */


    function resizeHandler() {
      if (!g_isConsecutiveResize) {
        if (getOptions().autoScrolling && !getOptions().scrollBar || !getOptions().fitToSection) {
          setSectionsHeight(getWindowHeight());
        }
      }

      fitToActiveSection();
      g_isConsecutiveResize = true; //in order to call the functions only when the resize is finished
      //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing    

      clearTimeout(g_resizeId);
      g_resizeId = setTimeout(function () {
        //issue #3336 
        //(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
        //so we check it 3 times with intervals in that case
        // for(var i = 0; i< 4; i++){
        resizeActions();
        g_isConsecutiveResize = false; // }
      }, 400);
    }

    function fitToActiveSection() {
      if (isTouchDevice) {
        // Issue #4393 and previously in v3, #3336
        // (some apps or browsers, like Chrome/Firefox will delay a bit to scroll 
        // to the focused input
        for (var i = 0; i < 4; i++) {
          g_resizeMobileHandlerId = setTimeout(function () {
            window.requestAnimationFrame(function () {
              // on Android devices the browser scrolls to the focused element
              // messing up the whole page structure. So we need to update the
              // translate3d value when the keyboard shows/hides
              if (getOptions().autoScrolling && !getOptions().scrollBar) {
                setState({
                  isResizing: true
                });
                silentMoveTo(state.activeSection.index() + 1);
                setState({
                  isResizing: false
                });
              }
            });
          }, 200 * i);
        }
      }
    }
    /**
    * When resizing the site, we adjust the heights of the sections, slimScroll...
    */


    function resizeActions() {
      setState({
        isResizing: true
      });
      setSectionsHeight('');

      if (!getOptions().autoScrolling && !state.isBeyondFullpage) {
        setVhUnits();
      }

      EventEmitter.emit(events.contentChanged);
      updateState(); //checking if it needs to get responsive

      responsive(); // rebuild immediately on touch devices

      if (isTouchDevice) {
        var activeElement = doc.activeElement; //if the keyboard is NOT visible

        if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select')) {
          var currentHeight = getWindowHeight(); //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)

          if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
            reBuild(true);
            previousHeight = currentHeight;
          }
        }
      } else {
        adjustToNewViewport();
      }

      setState({
        isResizing: false
      });
    }
    /**
     * When resizing is finished, we adjust the slides sizes and positions
     */


    function reBuild(resizing) {
      if (hasClass(getContainer(), DESTROYED)) {
        return;
      } //nothing to do if the plugin was destroyed
      //updating global vars


      setState({
        isResizing: true,
        windowsHeight: getWindowHeight(),
        windowsWidth: getWindowWidth()
      });
      var sections = getState().sections;

      for (var i = 0; i < sections.length; ++i) {
        var section = sections[i];
        var slidesWrap = $(SLIDES_WRAPPER_SEL, section.item)[0];
        var slides = section.slides; //adjusting the position fo the FULL WIDTH slides...

        if (slides.length > 1) {
          landscapeScroll(slidesWrap, section.activeSlide.item);
        }
      }

      if (getOptions().scrollOverflow) {
        scrollOverflowHandler.makeScrollable();
      }

      var sectionIndex = getState().activeSection.index();

      if (!state.isBeyondFullpage) {
        //isn't it the first section?
        if (sectionIndex) {
          //adjusting the position for the current section
          silentMoveTo(sectionIndex + 1);
        }
      }

      setState({
        isResizing: false
      });

      if (isFunction(getOptions().afterResize) && resizing) {
        getOptions().afterResize.call(getContainer(), win.innerWidth, win.innerHeight);
      }

      if (isFunction(getOptions().afterReBuild) && !resizing) {
        getOptions().afterReBuild.call(getContainer());
      }

      trigger(getContainer(), 'afterRebuild');
    }
    /**
    * Adjusts a section to the viewport if it has changed.
    */


    function adjustToNewViewport() {
      var newWindowHeight = getWindowHeight();
      var newWindowWidth = getWindowWidth();

      if (state.windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth) {
        setState({
          windowsHeight: newWindowHeight
        });
        windowsWidth = newWindowWidth;
        reBuild(true);
      }
    }

    function setSectionsHeight(value) {
      var propertyValue = value === '' ? '' : value + 'px';
      getState().sections.forEach(function (section) {
        css(section.item, {
          'height': propertyValue
        });
      });
    }
    /**
     * Defining the value in px of a VH unit. (Used for autoScrolling: false)
     * To fix the height issue on mobile devices when using VH units.
     * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
     */


    function setVhUnits() {
      if (!getOptions().autoScrolling || getOptions().scrollBar) {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        var vh = win.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

        doc.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      }
    }

    function getAnchorsURL() {
      var section;
      var slide;
      var hash = win.location.hash;

      if (hash.length) {
        //getting the anchor link in the URL and deleting the `#`
        var anchorsParts = hash.replace('#', '').split('/'); //using / for visual reasons and not as a section/slide separator #2803

        var isFunkyAnchor = hash.indexOf('#/') > -1;
        section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);
        var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];

        if (slideAnchor && slideAnchor.length) {
          slide = decodeURIComponent(slideAnchor);
        }
      }

      return {
        section: section,
        slide: slide
      };
    }

    FP.setLockAnchors = setLockAnchors;
    EventEmitter.on(events.bindEvents, bindEvents$5);

    function bindEvents$5() {
      //detecting any change on the URL to scroll to the given anchor link
      //(a way to detect back history button as we play with the hashes on the URL)
      windowAddEvent('hashchange', hashChangeHandler);
      EventEmitter.on(events.onDestroy, onDestroy$2);
    }

    function onDestroy$2() {
      windowRemoveEvent('hashchange', hashChangeHandler);
    }
    /**
    * Sets lockAnchors
    */


    function setLockAnchors(value) {
      getOptions().lockAnchors = value;
    }
    /**
    * Detecting any change on the URL to scroll to the given anchor link
    * (a way to detect back history button as we play with the hashes on the URL)
    */


    function hashChangeHandler() {
      if (!state.isScrolling && !getOptions().lockAnchors) {
        var anchors = getAnchorsURL();
        var sectionAnchor = anchors.section;
        var slideAnchor = anchors.slide; //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)

        var isFirstSlideMove = typeof state.lastScrolledDestiny === 'undefined';
        var isFirstScrollMove = typeof state.lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !state.slideMoving;

        if (sectionAnchor && sectionAnchor.length) {
          /*in order to call scrollpage() only once for each destination at a time
          It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
          event is fired on every scroll too.*/
          if (sectionAnchor && sectionAnchor !== state.lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !state.slideMoving && state.lastScrolledSlide != slideAnchor) {
            EventEmitter.emit(events.onScrollPageAndSlide, {
              sectionAnchor: sectionAnchor,
              slideAnchor: slideAnchor
            });
          }
        }
      }
    }

    EventEmitter.on(events.bindEvents, bindEvents$4);

    function bindEvents$4() {
      docAddEvent('wheel', wheelDataHandler.registerEvent, getPassiveOptionsIfPossible());
      EventEmitter.on(events.scrollBeyondFullpage, scrollBeyondFullPage);
      EventEmitter.on(events.onKeyDown, onKeyDown);
    }

    EventEmitter.on(events.bindEvents, bindEvents$3);

    function bindEvents$3() {
      EventEmitter.on(events.onClickOrTouch, onClickOrTouch$1);
    }

    function onClickOrTouch$1(params) {
      var target = params.target;

      if (closest(target, getOptions().menu + ' [data-menuanchor]')) {
        menuItemsHandler.call(target, params);
      }
    } //Menu item handler when not using anchors or using lockAnchors:true


    function menuItemsHandler(e) {
      setState({
        scrollTrigger: 'menu'
      });

      if ($(getOptions().menu)[0] && (getOptions().lockAnchors || !getOptions().anchors.length)) {
        preventDefault(e);
        /*jshint validthis:true */

        EventEmitter.emit(events.onMenuClick, {
          anchor: getAttr(this, 'data-menuanchor')
        });
      }
    }

    EventEmitter.on(events.bindEvents, bindEvents$2);

    function bindEvents$2() {
      EventEmitter.on(events.onClickOrTouch, onClickOrTouch);
    }

    function onClickOrTouch(params) {
      var target = params.target;

      if (target && closest(target, SECTION_NAV_SEL + ' a')) {
        sectionBulletHandler.call(target, params.e);
      } else if (matches(target, SECTION_NAV_TOOLTIP_SEL)) {
        tooltipTextHandler.call(target);
      } else if (matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null) {
        slideBulletHandler.call(target, params.e);
      }
    }

    var lastScroll = 0;
    var g_scrollId;
    var g_scrollId2;
    EventEmitter.on(events.onDestroy, onDestroy$1); //when scrolling...

    function scrollHandler(e) {
      var currentSection;
      var currentSectionElem;

      if (state.isResizing || !getState().activeSection) {
        return;
      }

      getLast(getState().sections);

      if (getState().isBeyondFullpage || getState().isAboutToScrollToFullPage) {
        return;
      }

      if (!getOptions().autoScrolling || getOptions().scrollBar) {
        var currentScroll = getScrollTop();
        var scrollDirection = getScrollDirection(currentScroll);
        var visibleSectionIndex = 0;
        var screen_mid = currentScroll + getWindowHeight() / 2.0;
        var isAtBottom = $body.scrollHeight - getWindowHeight() === currentScroll;
        var sections = getState().sections;
        setState({
          scrollY: currentScroll
        }); //when using `auto-height` for a small last section it won't be centered in the viewport

        if (isAtBottom) {
          visibleSectionIndex = sections.length - 1;
        } //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
        else if (!currentScroll) {
          visibleSectionIndex = 0;
        } //taking the section which is showing more content in the viewport
        else {
          for (var i = 0; i < sections.length; ++i) {
            var section = sections[i].item; // Pick the the last section which passes the middle line of the screen.

            if (section.offsetTop <= screen_mid) {
              visibleSectionIndex = i;
            }
          }
        }

        if (isCompletelyInViewPort(scrollDirection)) {
          if (!hasClass(getState().activeSection.item, COMPLETELY)) {
            addClass(getState().activeSection.item, COMPLETELY);
            removeClass(siblings(getState().activeSection.item), COMPLETELY);
          }
        } //geting the last one, the current one on the screen


        currentSection = sections[visibleSectionIndex];
        currentSectionElem = currentSection.item; //setting the visible section as active when manually scrolling
        //executing only once the first time we reach the section

        if (!currentSection.isActive) {
          setState({
            isScrolling: true
          });
          var leavingSection = getState().activeSection.item;
          var leavingSectionIndex = getState().activeSection.index() + 1;
          var yMovement = getYmovement(getState().activeSection, currentSectionElem);
          var anchorLink = currentSection.anchor;
          var sectionIndex = currentSection.index() + 1;
          var activeSlide = currentSection.activeSlide;
          var slideIndex;
          var slideAnchorLink;
          var callbacksParams = {
            activeSection: leavingSection,
            sectionIndex: sectionIndex - 1,
            anchorLink: anchorLink,
            element: currentSectionElem,
            leavingSection: leavingSectionIndex,
            direction: yMovement,
            items: {
              origin: getState().activeSection,
              destination: currentSection
            }
          };

          if (activeSlide) {
            slideAnchorLink = activeSlide.anchor;
            slideIndex = activeSlide.index();
          }

          if (state.canScroll) {
            addClass(currentSectionElem, ACTIVE);
            removeClass(siblings(currentSectionElem), ACTIVE);

            if (isFunction(getOptions().beforeLeave)) {
              fireCallbackOncePerScroll('beforeLeave', callbacksParams);
            }

            if (isFunction(getOptions().onLeave)) {
              fireCallback('onLeave', callbacksParams);
            }

            if (isFunction(getOptions().afterLoad)) {
              fireCallback('afterLoad', callbacksParams);
            }

            stopMedia(leavingSection);
            lazyLoad(currentSectionElem);
            playMedia(currentSectionElem);
            activateMenuAndNav(anchorLink, sectionIndex - 1);

            if (getOptions().anchors.length) {
              //needed to enter in hashChange event when using the menu with anchor links
              setState({
                lastScrolledDestiny: anchorLink
              });
            }

            updateState();
            setPageStatus(slideIndex, slideAnchorLink, anchorLink);
          } //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet


          clearTimeout(g_scrollId);
          g_scrollId = setTimeout(function () {
            setState({
              isScrolling: false
            });
          }, 100);
        }

        if (getOptions().fitToSection && state.canScroll) {
          clearTimeout(g_scrollId2);
          g_scrollId2 = setTimeout(function () {
            var fixedSections = state.sections.filter(function (section) {
              var sectionValues = section.item.getBoundingClientRect();
              return Math.round(sectionValues.bottom) === Math.round(getWindowHeight()) || Math.round(sectionValues.top) === 0;
            }); // No section is fitting the viewport? Let's fix that!

            if (!fixedSections.length) {
              fitToSection();
            }
          }, getOptions().fitToSectionDelay);
        }
      }
    }

    function onDestroy$1() {
      clearTimeout(g_scrollId);
      clearTimeout(g_scrollId2);
    }
    /**
    * Gets the directon of the the scrolling fired by the scroll event.
    */


    function getScrollDirection(currentScroll) {
      var direction = currentScroll > lastScroll ? 'down' : 'up';
      lastScroll = currentScroll; //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination

      setState({
        previousDestTop: currentScroll
      });
      return direction;
    }
    /**
    * Determines whether the active section has seen in its whole or not.
    */


    function isCompletelyInViewPort(movement) {
      var top = getState().activeSection.item.offsetTop;
      var bottom = top + getWindowHeight();

      if (movement == 'up') {
        return bottom >= getScrollTop() + getWindowHeight();
      }

      return top <= getScrollTop();
    }

    EventEmitter.on(events.bindEvents, bindEvents$1);
    EventEmitter.on(events.onDestroy, onDestroy);

    function onDestroy() {
      windowRemoveEvent('scroll', scrollHandler);
    }

    function bindEvents$1() {
      windowAddEvent('scroll', scrollHandler);
      doc.body.addEventListener('scroll', scrollHandler);
      EventEmitter.on(events.onScrollPageAndSlide, function (params) {
        scrollPageAndSlide(params.sectionAnchor, params.slideAnchor);
      });
      EventEmitter.on(events.onMenuClick, function (params) {
        moveTo$1(params.anchor, undefined);
      });
      EventEmitter.on(events.onScrollOverflowScrolled, function (params) {
        var scrollSection = params.direction === 'down' ? moveSectionDown : moveSectionUp;
        scrollSection();
      });
      EventEmitter.on(events.scrollPage, function (params) {
        scrollPage(params.destination);
      });
    }

    FP.getActiveSlide = getActiveSlide;

    FP.getScrollX = function () {
      return state.scrollX;
    };

    EventEmitter.on(events.bindEvents, bindEvents);

    function bindEvents() {
      EventEmitter.on(events.onDestroy, onDestroy$6);
      EventEmitter.on(events.landscapeScroll, function (params) {
        landscapeScroll(params.slides, params.destination);
      });
      EventEmitter.on(events.moveSlideRight, function (params) {
        moveSlideRight(params.section);
      });
      EventEmitter.on(events.moveSlideLeft, function (params) {
        moveSlideLeft(params.section);
      });
    }
    /**
    * Gets the active slide.
    */


    function getActiveSlide() {
      return nullOrSlide(getState().activeSection.activeSlide);
    }

    EventEmitter.on(events.bindEvents, init$1);

    function init$1() {
      var position = getOptions().credits.position || 'right';
      var positionStyle = ['left', 'right'].indexOf(position) > -1 ? "".concat(position, ": 0;") : '';
      var waterMark = "\n        <div class=\"fp-watermark\" style=\"".concat(positionStyle, "\">\n            <a href=\"https://alvarotrigo.com/fullPage/\" \n                rel=\"nofollow noopener\" \n                target=\"_blank\" \n                style=\"text-decoration:none; color: #000;\">\n                    ").concat(getOptions().credits.label || 'Made with fullPage.js', "\n            </a>\n        </div>\n    ");
      var lastSection = getLast(state.sections);
      var shouldUseWaterMark = !state.isValid || getOptions().credits.enabled;

      if (lastSection && lastSection.item && shouldUseWaterMark) {
        lastSection.item.insertAdjacentHTML('beforeend', waterMark);
      }
    }

    !function () {
      EventEmitter.on(events.onInitialise, function () {
        var n, a, l;
        setState({
          isValid: (getOptions().licenseKey, n = getOptions().licenseKey, a = function (n) {
            var e = parseInt("\x35\x31\x34").toString(16);
            if (!n || n.length < 29 || 4 === n.split(t[0]).length) return null;
            var r = ["\x45\x61\x63\x68", "\x66\x6f\x72"][i()]().join(""),
                a = n[["\x73\x70\x6c\x69\x74"]]("-"),
                l = [];
            a[r](function (t, n) {
              if (n < 4) {
                var r = function (t) {
                  var n = t[t.length - 1],
                      e = ["\x4e\x61\x4e", "\x69\x73"][i()]().join("");
                  return window[e](n) ? o(n) : function (t) {
                    return t - ACTIVE.length;
                  }(n);
                }(t);

                l.push(r);
                var s = o(t[r]);

                if (1 === n) {
                  var a = ["\x70\x61", "\x64\x53", "\x74", "\x61\x72\x74"].join("");
                  s = s.toString()[a](2, "0");
                }

                e += s, 0 !== n && 1 !== n || (e += "-");
              }
            });
            var m = 0,
                f = "";
            return n.split("-").forEach(function (t, n) {
              if (n < 4) {
                var _i = 0;

                for (var e = 0; e < 4; e++) {
                  e !== l[n] && (_i += Math.abs(o(t[e])), isNaN(t[e]) || m++);
                }

                var r = s(_i);
                f += r;
              }
            }), f += s(m), {
              v: new Date(e + "T00:00"),
              o: e.split("-")[2] === 8 * (ACTIVE.length - 2) + "",
              l: f
            };
          }(n), l = function (t) {
            var n = r[i()]().join("");
            return t && 0 === n.indexOf(t) && t.length === n.length;
          }(n), (a || l) && (a && e <= a.v && a.l === n.split(t[0])[4] || l || a.o) || !1)
        });
      });
      var t = ["-"];
      var n = "\x32\x30\x32\x34\x2d\x30\x2d\x33\x31".split("-"),
          e = new Date(n[0], n[1], n[2]),
          r = ["se", "licen", "-", "v3", "l", "gp"];

      function i() {
        return [["\x72\x65", "\x76\x65\x72\x73\x65"].join("")]["".length];
      }

      function o(t) {
        return t ? isNaN(t) ? t.charCodeAt(0) - 72 : t : "";
      }

      function s(t) {
        var n = 72 + t;
        return n > 90 && n < 97 && (n += 15), String.fromCharCode(n).toUpperCase();
      }
    }();

    //@ts-check
    FP.setKeyboardScrolling = setKeyboardScrolling;
    /**
    * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
    */

    function setKeyboardScrolling(value, directions) {
      if (typeof directions !== 'undefined') {
        directions = directions.replace(/ /g, '').split(',');
        directions.forEach(function (direction) {
          setIsScrollAllowed(value, direction, 'k');
        });
      } else {
        setIsScrollAllowed(value, 'all', 'k');
        getOptions().keyboardScrolling = value;
      }
    }

    /**
    * Sets the data-anchor attributes to the menu elements and activates the current one.
    */

    function styleMenu(section) {
      var index = section.index();

      if (typeof getOptions().anchors[index] !== 'undefined') {
        //activating the menu / nav element on load
        if (section.isActive) {
          activateMenuAndNav(getOptions().anchors[index], index);
        }
      } //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)


      if (getOptions().menu && getOptions().css3 && closest($(getOptions().menu)[0], WRAPPER_SEL) != null) {
        $(getOptions().menu).forEach(function (menu) {
          $body.appendChild(menu);
        });
      }
    }

    /**
    * Works over the DOM structure to set it up for the current fullpage getOptions().
    */

    function prepareDom() {
      css(getParentsUntil(getContainer(), 'body'), {
        'height': '100%',
        'position': 'relative'
      }); //adding a class to recognize the container internally in the code

      addClass(getContainer(), WRAPPER);
      addClass($html, ENABLED); //due to https://github.com/alvarotrigo/fullPage.js/issues/1502

      setState({
        windowsHeight: getWindowHeight()
      });
      removeClass(getContainer(), DESTROYED); //in case it was destroyed before initializing it again

      addInternalSelectors();
      var sections = getState().sectionsIncludingHidden; //styling the sections / slides / menu

      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var slides = section.allSlidesItems; //caching the original styles to add them back on destroy('all')

        var originalStyles = getAttr(section.item, 'style');

        if (originalStyles) {
          section.item.setAttribute('data-fp-styles', originalStyles);
        }

        styleSection(section);
        styleMenu(section); // if there's any slide

        if (slides.length > 0) {
          styleSlides(section);
        }
      } //fixed elements need to be moved out of the plugin container due to problems with CSS3.


      if (getOptions().fixedElements && getOptions().css3) {
        $(getOptions().fixedElements).forEach(function (item) {
          $body.appendChild(item);
        });
      } //vertical centered of the navigation + active bullet


      if (getOptions().navigation) {
        addVerticalNavigation();
      }

      enableYoutubeAPI();

      if (getOptions().scrollOverflow) {
        scrollOverflowHandler.makeScrollable();
      }
    }

    FP.shared.afterRenderActions = afterRenderActions;
    /**
    * Actions and callbacks to fire afterRender
    */

    function afterRenderActions() {
      var section = getState().activeSection;
      var sectionElem = getState().activeSection.item;
      addClass(sectionElem, COMPLETELY);
      lazyLoad(sectionElem);
      lazyLoadOthers();
      playMedia(sectionElem);

      if (isDestinyTheStartingSection() && isFunction(getOptions().afterLoad)) {
        fireCallback('afterLoad', {
          activeSection: sectionElem,
          element: sectionElem,
          direction: null,
          //for backwards compatibility callback (to be removed in a future!)
          anchorLink: section.anchor,
          sectionIndex: section.index(),
          items: {
            origin: getState().activeSection,
            destination: getState().activeSection
          }
        });
      }

      if (isFunction(getOptions().afterRender)) {
        fireCallback('afterRender');
      }
    }
    /**
    * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
    */

    function isDestinyTheStartingSection() {
      var anchor = getAnchorsURL();
      var destinationSection = getSectionByAnchor(anchor.section);
      return !anchor.section || !destinationSection || typeof destinationSection !== 'undefined' && destinationSection.index() === index(getStartingSection());
    }

    FP.setAllowScrolling = setAllowScrolling;
    /**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
    * Optionally a second parameter can be used to specify the direction for which the action will be applied.
    *
    * @param directions string containing the direction or directions separated by comma.
    */

    function setAllowScrolling(value, directions) {
      if (typeof directions !== 'undefined') {
        directions = directions.replace(/ /g, '').split(',');
        directions.forEach(function (direction) {
          setIsScrollAllowed(value, direction, 'm');
        });
      } else {
        setIsScrollAllowed(value, 'all', 'm');
      }
    }

    /**
    * Scrolls to the anchor in the URL when loading the site
    */

    function scrollToAnchor() {
      var anchors = getAnchorsURL();
      var sectionAnchor = anchors.section;
      var slideAnchor = anchors.slide;

      if (sectionAnchor) {
        //if theres any #
        if (getOptions().animateAnchor) {
          scrollPageAndSlide(sectionAnchor, slideAnchor);
        } else {
          silentMoveTo(sectionAnchor, slideAnchor);
        }
      } else {
        EventEmitter.emit(events.onAfterRenderNoAnchor, null);
      }
    }

    /*
    * Removes inline styles added by fullpage.js
    */

    function destroyStructure() {
      //reseting the `top` or `translate` properties to 0
      silentScroll(0); //loading all the lazy load content

      $('img[data-src], source[data-src], audio[data-src], iframe[data-src]', getContainer()).forEach(function (item) {
        setSrc(item, 'src');
      });
      $('img[data-srcset]').forEach(function (item) {
        setSrc(item, 'srcset');
      });
      remove($(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL + ', ' + SLIDES_ARROW_SEL)); //removing inline styles

      css(getNodes(getState().sections), {
        'height': '',
        'background-color': '',
        'padding': ''
      });
      css(getNodes(getState().slides), {
        'width': ''
      });
      css(getContainer(), {
        'height': '',
        'position': '',
        '-ms-touch-action': '',
        'touch-action': ''
      });
      css($htmlBody, {
        'overflow': '',
        'height': ''
      }); // remove .fp-enabled class

      removeClass($html, ENABLED); // remove .fp-responsive class & .fp-scrollable

      removeClass($body, RESPONSIVE + ' ' + SCROLLABLE); // remove all of the .fp-viewing- classes

      $body.className.split(/\s+/).forEach(function (className) {
        if (className.indexOf(VIEWING_PREFIX) === 0) {
          removeClass($body, className);
        }
      }); //removing added classes

      getNodes(getState().panels).forEach(function (item) {
        if (getOptions().scrollOverflow) {
          scrollOverflowHandler.destroyWrapper(item);
        }

        removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY + ' ' + IS_OVERFLOW);
        var previousStyles = getAttr(item, 'data-fp-styles');

        if (previousStyles) {
          item.setAttribute('style', previousStyles);
        } //removing anchors if they were not set using the HTML markup


        if (hasClass(item, SECTION) && !getInitialAnchorsInDom()) {
          item.removeAttribute('data-anchor');
        }
      }); //removing the applied transition from the fullpage wrapper

      removeAnimation(getContainer()); //Unwrapping content

      [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL, SLIDES_WRAPPER_SEL].forEach(function (selector) {
        $(selector, getContainer()).forEach(function (item) {
          //unwrap not being use in case there's no child element inside and its just text
          unwrap(item);
        });
      }); //removing the applied transition from the fullpage wrapper

      css(getContainer(), {
        '-webkit-transition': 'none',
        'transition': 'none'
      });
      removeClass(getContainer(), WRAPPER); //scrolling the page to the top with no animation

      win.scrollTo(0, 0); //removing selectors

      var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
      usedSelectors.forEach(function (item) {
        removeClass($('.' + item), item);
      });
    }

    FP.destroy = destroy;
    function init() {
      updateStructuralState();
      updateState();
      getOptions().scrollBar = getOptions().scrollBar || getOptions().hybrid;
      setOptionsFromDOM();
      prepareDom();
      setAllowScrolling(true);
      setMouseHijack(true);
      setAutoScrolling(getOptions().autoScrolling, 'internal');
      responsive(); //setting the class for the body element

      setBodyClass();

      if (doc.readyState === 'complete') {
        scrollToAnchor();
      }

      windowAddEvent('load', scrollToAnchor);
      afterRenderActions(); // Updating the state again with the new DOM

      updateStructuralState();
      updateState();
    }
    /*
    * Destroys fullpage.js plugin events and optinally its html markup and styles
    */

    function destroy(all) {
      setAutoScrolling(false, 'internal');
      setAllowScrolling(true);
      setMouseHijack(false);
      setKeyboardScrolling(false);
      addClass(getContainer(), DESTROYED);
      EventEmitter.emit(events.onDestroy); //lets make a mess!

      if (all) {
        destroyStructure();
      }
    }

    var isOK = function isOK() {
      return getOptions() && state.isValid || doc.domain.indexOf('al' + 'varotri' + 'go' + '.' + 'com') > -1;
    };
    /**
    * Displays warnings
    */


    function displayWarnings() {
      var l = getOptions()['li' + 'c' + 'enseK' + 'e' + 'y'];
      var msgStyle = 'font-size: 15px;background:yellow;';

      if (getOptions().licenseKey.trim() === '') {
        showError('error', 'Fullpage.js requires a `licenseKey` option. Read about it on the following URL:');
        showError('error', 'https://github.com/alvarotrigo/fullPage.js#options');
      } else if (!isOK()) {
        showError('error', 'Incorrect `licenseKey`. Get one for fullPage.js version 4 here:');
        showError('error', 'https://alvarotrigo.com/fullPage/pricing');
      } else if (l && l.length < 20) {
        console.warn('%c This website was made using fullPage.js slider. More info on the following website:', msgStyle);
        console.warn('%c https://alvarotrigo.com/fullPage/', msgStyle);
      }

      if (hasClass($html, ENABLED)) {
        showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
        return;
      } // Disable mutually exclusive settings


      if (getOptions().continuousVertical && (getOptions().loopTop || getOptions().loopBottom)) {
        getOptions().continuousVertical = false;
        showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
      }

      if (getOptions().scrollOverflow && (getOptions().scrollBar || !getOptions().autoScrolling)) {
        showError('warn', 'Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox');
      }

      if (getOptions().continuousVertical && (getOptions().scrollBar || !getOptions().autoScrolling)) {
        getOptions().continuousVertical = false;
        showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
      } //using extensions? Wrong file!


      extensions.forEach(function (extension) {
        //is the option set to true?
        if (getOptions()[extension]) {
          showError('warn', 'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: ' + extension);
        }
      }); //anchors can not have the same value as any element ID or NAME

      getOptions().anchors.forEach(function (name) {
        //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
        var nameAttr = [].slice.call($('[name]')).filter(function (item) {
          return getAttr(item, 'name') && getAttr(item, 'name').toLowerCase() == name.toLowerCase();
        });
        var idAttr = [].slice.call($('[id]')).filter(function (item) {
          return getAttr(item, 'id') && getAttr(item, 'id').toLowerCase() == name.toLowerCase();
        });

        if (idAttr.length || nameAttr.length) {
          showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
          var propertyName = idAttr.length ? 'id' : 'name';

          if (idAttr.length || nameAttr.length) {
            showError('error', '"' + name + '" is is being used by another element `' + propertyName + '` property');
          }
        }
      });
    }

    function fullpage(containerSelector, options) {
      setCache(); //only once my friend!

      if (hasClass($html, ENABLED)) {
        displayWarnings();
        return;
      }

      setOption('touchWrapper', typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector); // Creating some defaults, extending them with any options that were provided

      setOptions(options);
      setContainer(typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector);
      EventEmitter.emit(events.onInitialise);
      displayWarnings();
      setAPI();

      if (getContainer()) {
        EventEmitter.emit(events.beforeInit);
        init();
        EventEmitter.emit(events.bindEvents);
      } // @ts-ignore


      return win.fullpage_api;
    }

    function setAPI() {
      FP.getFullpageData = function () {
        return {
          options: getOptions()
        };
      }; //public functions


      FP.version = '4.0.22';
      FP.test = Object.assign(FP.test, {
        top: '0px',
        translate3d: 'translate3d(0px, 0px, 0px)',
        translate3dH: function () {
          var a = [];

          for (var i = 0; i < $(getOptions().sectionSelector, getContainer()).length; i++) {
            a.push('translate3d(0px, 0px, 0px)');
          }

          return a;
        }(),
        left: function () {
          var a = [];

          for (var i = 0; i < $(getOptions().sectionSelector, getContainer()).length; i++) {
            a.push(0);
          }

          return a;
        }(),
        options: getOptions(),
        setAutoScrolling: null
      }); //functions we want to share across files but which are not
      //mean to be used on their own by developers

      FP.shared = Object.assign(FP.shared, {
        afterRenderActions: null,
        isNormalScrollElement: false
      }); // @ts-ignore

      win.fullpage_api = FP;
    }

    // @ts-ignore

    win.fp_easings = deepExtend(win.fp_easings, {
      easeInOutCubic: function easeInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      }
    });

    /**
     * jQuery adapter for fullPage.js 3.0.0
     */
    // @ts-ignore

    if (win.jQuery) {
      (function ($, fullpage) {

        if (!$ || !fullpage) {
          showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
          return;
        }

        $.fn.fullpage = function (options) {
          options = $.extend({}, options, {
            '$': $
          });
          new fullpage(this[0], options); // Creating the $.fn.fullpage object

          Object.keys(FP).forEach(function (key) {
            getOptions().$.fn.fullpage[key] = FP[key];
          });
        }; // @ts-ignore

      })(win.jQuery, fullpage);
    }

    return fullpage;

}));


/***/ }),

/***/ "./node_modules/swiper/modules/a11y.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/a11y.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A11y)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");




function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  let preventFocusHandler;
  let focusTargetSlideEl;
  let visibilityChangedTimestamp = new Date().getTime();
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.innerHTML = '';
    notification.innerHTML = message;
  }
  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '0');
    });
  }
  function makeElNotFocusable(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '-1');
    });
  }
  function addElRole(el, role) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('role', role);
    });
  }
  function addElRoleDescription(el, description) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-roledescription', description);
    });
  }
  function addElControls(el, controls) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-controls', controls);
    });
  }
  function addElLabel(el, label) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-label', label);
    });
  }
  function addElId(el, id) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('id', id);
    });
  }
  function addElLive(el, live) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-live', live);
    });
  }
  function disableEl(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', true);
    });
  }
  function enableEl(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
      const prevEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.navigation.prevEl);
      const nextEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.navigation.nextEl);
      if (nextEls.includes(targetEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (prevEls.includes(targetEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
    }
    if (swiper.pagination && targetEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, 'button');
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bulletEl) + 1));
        }
      }
      if (bulletEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute('aria-current', 'true');
      } else {
        bulletEl.removeAttribute('aria-current');
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== 'BUTTON') {
      addElRole(el, 'button');
      el.addEventListener('keydown', onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = e => {
    if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
      preventFocusHandler = true;
    }
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    preventFocusHandler = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const onVisibilityChange = e => {
    visibilityChangedTimestamp = new Date().getTime();
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked) return;
    if (new Date().getTime() - visibilityChangedTimestamp < 100) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    focusTargetSlideEl = slideEl;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    requestAnimationFrame(() => {
      if (preventFocusHandler) return;
      if (swiper.params.loop) {
        swiper.slideToLoop(parseInt(slideEl.getAttribute('data-swiper-slide-index')), 0);
      } else {
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
      }
      preventFocusHandler = false;
    });
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);

    // Container
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }

    // Wrapper
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);

    // Slide
    initSlides();

    // Navigation
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.addEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.addEventListener('visibilitychange', onVisibilityChange);
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('pointerdown', handlePointerDown, true);
    swiper.el.addEventListener('pointerup', handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.removeEventListener('keydown', onEnterOrSpaceKey);
      });
    }
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
    // Tab focus
    if (swiper.el && typeof swiper.el !== 'string') {
      swiper.el.removeEventListener('focus', handleFocus, true);
      swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
      swiper.el.removeEventListener('pointerup', handlePointerUp, true);
    }
  }
  on('beforeInit', () => {
    liveRegion = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.c)('span', swiper.params.a11y.notificationClass);
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/autoplay.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Autoplay)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


/* eslint no-underscore-dangle: "off" */
/* eslint no-use-before-define: "off" */
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
    if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains('swiper-slide-active'))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return undefined;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
    return currentSlideDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit('autoplay');
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit('autoplay');
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }

    // eslint-disable-next-line
    return delay;
  };
  const start = () => {
    autoplayStartTime = new Date().getTime();
    swiper.autoplay.running = true;
    run();
    emit('autoplayStart');
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit('autoplayStop');
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit('autoplayPause');
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit('autoplayResume');
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === 'visible') {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener('pointerenter', onPointerEnter);
      swiper.el.addEventListener('pointerleave', onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    if (swiper.el && typeof swiper.el !== 'string') {
      swiper.el.removeEventListener('pointerenter', onPointerEnter);
      swiper.el.removeEventListener('pointerleave', onPointerLeave);
    }
  };
  const attachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.addEventListener('visibilitychange', onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on('destroy', () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on('_freeModeStaticRelease', () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on('_freeModeNoMomentumRelease', () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/controller.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/controller.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  });

  swiper.controller = {
    control: undefined
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;

      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(() => {
            c.updateAutoHeight();
          });
        }
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }
  on('beforeInit', () => {
    if (typeof window !== 'undefined' && (
    // eslint-disable-line
    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElement = document.querySelector(swiper.params.controller.control);
      if (controlElement && controlElement.swiper) {
        swiper.controller.control = controlElement.swiper;
      } else if (controlElement) {
        const onControllerSwiper = e => {
          swiper.controller.control = e.detail[0];
          swiper.update();
          controlElement.removeEventListener('init', onControllerSwiper);
        };
        controlElement.addEventListener('init', onControllerSwiper);
      }
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCards)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        // next
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

      /* eslint-disable */
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      /* eslint-enable */

      if (params.slideShadows) {
        // Set shadows
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('cards', slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-coverflow.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCoverflow)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      if (swiper.browser && swiper.browser.need3dFix) {
        if (Math.abs(rotateY) / 90 % 2 === 1) {
          rotateY += 0.001;
        }
        if (Math.abs(rotateX) / 90 % 2 === 1) {
          rotateX += 0.001;
        }
      }
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBeforeEl) {
          shadowBeforeEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'left' : 'top');
        }
        if (!shadowAfterEl) {
          shadowAfterEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-creative.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCreative)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      // set translate
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      // set rotates
      r.forEach((value, index) => {
        let val = data.rotate[index] * Math.abs(progress * multiplier);
        if (swiper.browser && swiper.browser.need3dFix && Math.abs(val) / 90 % 2 === 1) {
          val += 0.001;
        }
        r[index] = val;
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

      // Set shadows
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl && data.shadow) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('creative', slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cube.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCube)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
        if (swiper.browser && swiper.browser.need3dFix && Math.abs(wrapperRotate) / 90 % 2 === 1) {
          wrapperRotate += 0.001;
        }
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
      }
    }
    const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
    wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };
  const setTransition = duration => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach(slideEl => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector('.swiper-cube-shadow');
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFade)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-flip.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFlip)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // Set shadows
    swiper.params.flipEffect;
    swiper.slides.forEach(slideEl => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      if (swiper.browser && swiper.browser.need3dFix) {
        if (Math.abs(rotateY) / 90 % 2 === 1) {
          rotateY += 0.001;
        }
        if (Math.abs(rotateX) / 90 % 2 === 1) {
          rotateX += 0.001;
        }
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/free-mode.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ freeMode)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode) return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)()
    });
  }
  function onTouchEnd(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    // Time diff
    const touchEndTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      emit('_freeModeStaticRelease');
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/grid.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/grid.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
function Grid(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  let wasMultiRow;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = slides => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const unsetSlides = () => {
    if (swiper.slides) {
      swiper.slides.forEach(slide => {
        if (slide.swiperSlideGridSet) {
          slide.style.height = '';
          slide.style[swiper.getDirectionLabel('margin-top')] = '';
        }
      });
    }
  };
  const updateSlide = (i, slide, slides) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    // Set slides order
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.style.order = newSlideOrderIndex;
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide.row = row;
    slide.column = column;
    slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
    slide.style[swiper.getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
    slide.swiperSlideGridSet = true;
  };
  const updateWrapperSize = (slideSize, snapGrid) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  const onInit = () => {
    wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
  };
  const onUpdate = () => {
    const {
      params,
      el
    } = swiper;
    const isMultiRow = params.grid && params.grid.rows > 1;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      numFullColumns = 1;
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (params.grid.fill === 'column') {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    wasMultiRow = isMultiRow;
  };
  on('init', onInit);
  on('update', onUpdate);
  swiper.grid = {
    initSlides,
    unsetSlides,
    updateSlide,
    updateWrapperSize
  };
}




/***/ }),

/***/ "./node_modules/swiper/modules/hash-navigation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HashNavigation)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.filter(slideEl => slideEl.getAttribute('data-hash') === hash)[0];
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
          return index;
        }
        return swiper.getSlideIndex((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${activeSlideHash}` || '');
      emit('hashSet');
    } else {
      document.location.hash = activeSlideHash || '';
      emit('hashSet');
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window.addEventListener('hashchange', onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window.removeEventListener('hashchange', onHashChange);
    }
  };
  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/history.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/history.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };
  const getPathValues = urlOverride => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }
    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }
    const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
    let value = slugify(slide.getAttribute('data-history'));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ''}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ''}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides[i];
        const slideHistory = slugify(slide.getAttribute('data-history'));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history) return;
    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };
  const destroy = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };
  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/swiper/modules/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11y: () => (/* reexport safe */ _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Autoplay: () => (/* reexport safe */ _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   Controller: () => (/* reexport safe */ _controller_mjs__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   EffectCards: () => (/* reexport safe */ _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   EffectCoverflow: () => (/* reexport safe */ _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   EffectCreative: () => (/* reexport safe */ _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   EffectCube: () => (/* reexport safe */ _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   EffectFade: () => (/* reexport safe */ _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   EffectFlip: () => (/* reexport safe */ _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   FreeMode: () => (/* reexport safe */ _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   Grid: () => (/* reexport safe */ _grid_mjs__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   HashNavigation: () => (/* reexport safe */ _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   History: () => (/* reexport safe */ _history_mjs__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   Keyboard: () => (/* reexport safe */ _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Manipulation: () => (/* reexport safe */ _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   Mousewheel: () => (/* reexport safe */ _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Navigation: () => (/* reexport safe */ _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Pagination: () => (/* reexport safe */ _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Parallax: () => (/* reexport safe */ _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Scrollbar: () => (/* reexport safe */ _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Thumbs: () => (/* reexport safe */ _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Virtual: () => (/* reexport safe */ _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Zoom: () => (/* reexport safe */ _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual.mjs */ "./node_modules/swiper/modules/virtual.mjs");
/* harmony import */ var _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.mjs */ "./node_modules/swiper/modules/keyboard.mjs");
/* harmony import */ var _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mousewheel.mjs */ "./node_modules/swiper/modules/mousewheel.mjs");
/* harmony import */ var _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.mjs */ "./node_modules/swiper/modules/navigation.mjs");
/* harmony import */ var _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.mjs */ "./node_modules/swiper/modules/pagination.mjs");
/* harmony import */ var _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollbar.mjs */ "./node_modules/swiper/modules/scrollbar.mjs");
/* harmony import */ var _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallax.mjs */ "./node_modules/swiper/modules/parallax.mjs");
/* harmony import */ var _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoom.mjs */ "./node_modules/swiper/modules/zoom.mjs");
/* harmony import */ var _controller_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller.mjs */ "./node_modules/swiper/modules/controller.mjs");
/* harmony import */ var _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./a11y.mjs */ "./node_modules/swiper/modules/a11y.mjs");
/* harmony import */ var _history_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history.mjs */ "./node_modules/swiper/modules/history.mjs");
/* harmony import */ var _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hash-navigation.mjs */ "./node_modules/swiper/modules/hash-navigation.mjs");
/* harmony import */ var _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autoplay.mjs */ "./node_modules/swiper/modules/autoplay.mjs");
/* harmony import */ var _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thumbs.mjs */ "./node_modules/swiper/modules/thumbs.mjs");
/* harmony import */ var _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./free-mode.mjs */ "./node_modules/swiper/modules/free-mode.mjs");
/* harmony import */ var _grid_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid.mjs */ "./node_modules/swiper/modules/grid.mjs");
/* harmony import */ var _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manipulation.mjs */ "./node_modules/swiper/modules/manipulation.mjs");
/* harmony import */ var _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effect-fade.mjs */ "./node_modules/swiper/modules/effect-fade.mjs");
/* harmony import */ var _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effect-cube.mjs */ "./node_modules/swiper/modules/effect-cube.mjs");
/* harmony import */ var _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effect-flip.mjs */ "./node_modules/swiper/modules/effect-flip.mjs");
/* harmony import */ var _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effect-coverflow.mjs */ "./node_modules/swiper/modules/effect-coverflow.mjs");
/* harmony import */ var _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effect-creative.mjs */ "./node_modules/swiper/modules/effect-creative.mjs");
/* harmony import */ var _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./effect-cards.mjs */ "./node_modules/swiper/modules/effect-cards.mjs");
























/***/ }),

/***/ "./node_modules/swiper/modules/keyboard.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit('keyPress', kc);
    return undefined;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document.addEventListener('keydown', handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document.removeEventListener('keydown', handle);
    swiper.keyboard.enabled = false;
  }
  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/manipulation.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manipulation)
/* harmony export */ });
function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.append(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}

function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.prepend(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/mousewheel.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mousewheel)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: 'swiper-no-mousewheel'
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    }

    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    lastScrollTime = new window.Date().getTime();
    // Return false as a default
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  }
  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;

    // Ignore event if the target or its parents have the swiper-no-mousewheel class
    if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    // Get the scroll positions
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

    // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      };

      // Keep the most recent events
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? 'next' : 'prev',
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]('mouseenter', handleMouseEnter);
    targetEl[method]('mouseleave', handleMouseLeave);
    targetEl[method]('wheel', handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events('addEventListener');
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events('removeEventListener');
    swiper.mousewheel.enabled = false;
    return true;
  }
  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/navigation.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/navigation.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === 'string' && swiper.isElement) {
      res = swiper.el.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res) return el;
    // if (Array.isArray(res) && res.length === 1) res = res[0];
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      }
    });
  }
  function update() {
    // Update Navigation Buttons
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(' '));
      }
    };
    nextEl.forEach(el => initButton(el, 'next'));
    prevEl.forEach(el => initButton(el, 'prev'));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
    };
    nextEl.forEach(el => destroyButton(el, 'next'));
    prevEl.forEach(el => destroyButton(el, 'prev'));
  }
  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    if (swiper.enabled) {
      update();
      return;
    }
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
  });
  on('click', (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const targetEl = e.target;
    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
    if (swiper.isElement && !targetIsButton) {
      const path = e.path || e.composedPath && e.composedPath();
      if (path) {
        targetIsButton = path.find(pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl));
      }
    }
    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/pagination.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/pagination.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");




function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.f)(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        subEl.innerHTML = paginationHTML || '';
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.filter(subEl => {
          if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '));
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/parallax.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/parallax.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute('data-swiper-parallax') || '0';
    let x = el.getAttribute('data-swiper-parallax-x');
    let y = el.getAttribute('data-swiper-parallax-y');
    const scale = el.getAttribute('data-swiper-parallax-scale');
    const opacity = el.getAttribute('data-swiper-parallax-opacity');
    const rotate = el.getAttribute('data-swiper-parallax-rotate');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== 'undefined' && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.hostEl, elementsSelector));
    }
    elements.forEach(subEl => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition = function (duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach(parallaxEl => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");





function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = '';
    dragEl.style.height = '';
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = '100ms';
    dragEl.style.transitionDuration = '100ms';
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = '0ms';
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = 'none';
    }
    emit('scrollbarDragStart', e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault && e.cancelable) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = '0ms';
    el.style.transitionDuration = '0ms';
    dragEl.style.transitionDuration = '0ms';
    emit('scrollbarDragMove', e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = '';
      wrapperEl.style.transitionDuration = '';
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
    emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    target[eventMethod]('pointerdown', onDragStart, activeListener);
    document[eventMethod]('pointermove', onDragMove, activeListener);
    document[eventMethod]('pointerup', onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__.c)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el);
      if (!el.length) return;
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__.c)(swiper.params.scrollbar.dragClass));
      if (!dragEl) {
        dragEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.lockClass));
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
    }
    disableDraggable();
  }
  on('changeDirection', () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return;
    const params = swiper.params.scrollbar;
    let {
      el
    } = swiper.scrollbar;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock changeDirection', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.lockClass));
    }
  });
  on('destroy', () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/thumbs.mjs":
/*!************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Thumb)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`)[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }
  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
      const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener('init', onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener('init', onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/virtual.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/virtual.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Virtual)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document.createElement('div');
  function renderSlide(slide, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    // eslint-disable-next-line
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index);
      if (typeof slideEl === 'string') {
        tempDOM.innerHTML = slideEl;
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide');
    } else {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.slideClass);
    }
    slideEl.setAttribute('data-swiper-slide-index', index);
    if (!params.renderSlide) {
      slideEl.innerHTML = slide;
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update(force, beforeInit) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop,
      initialSlide
    } = swiper.params;
    if (beforeInit && !isLoop && initialSlide > 0) {
      return;
    }
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit('virtualUpdate');
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = index => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        // eslint-disable-next-line
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach(index => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update(true);
  }
  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
        if (cachedElIndex) {
          cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          // shift cache indexes
          Object.keys(swiper.virtual.cache).forEach(key => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        // shift cache indexes
        Object.keys(swiper.virtual.cache).forEach(key => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update(true);
    swiper.slideTo(0, 0);
  }
  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === 'undefined') {
      const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute('data-swiper-slide-index', slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update(false, true);
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/zoom.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/zoom.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zoom)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    zoom: {
      enabled: false,
      limitToOriginalSize: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    imageEl: undefined,
    imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit('zoomChange', value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getMaxRatio() {
    const params = swiper.params.zoom;
    const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
      const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
      return Math.min(imageMaxRatio, maxRatio);
    }
    return maxRatio;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }

  // Events
  function onGestureStart(e) {
    if (e.pointerType === 'mouse') {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = undefined;
        return;
      }
      gesture.maxRatio = getMaxRatio();
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = '0ms';
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = undefined;
    }
  }
  let allowTouchMoveTimeout;
  function allowTouchMove() {
    swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
  }
  function preventTouchMove() {
    clearTimeout(allowTouchMoveTimeout);
    swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
    allowTouchMoveTimeout = setTimeout(() => {
      allowTouchMove();
    });
  }
  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event.pageX;
    image.touchesStart.y = event.pageY;
  }
  function onTouchMove(e) {
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
      return;
    }
    const zoom = swiper.zoom;
    if (!gesture.imageEl) {
      return;
    }
    if (!image.isTouched || !gesture.slideEl) {
      return;
    }
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      image.startX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(gesture.imageWrapEl, 'x') || 0;
      image.startY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(gesture.imageWrapEl, 'y') || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = '0ms';
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    preventTouchMove();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = undefined;
      gesture.imageEl = undefined;
      gesture.imageWrapEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const forceZoomRatio = typeof e === 'number' ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = undefined;
      touchY = undefined;
    }
    const maxRatio = getMaxRatio();
    zoom.scale = forceZoomRatio || maxRatio;
    currentScale = forceZoomRatio || maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.slideEl).left + window.scrollX;
      offsetY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.slideEl).top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }
    zoom.scale = 1;
    currentScale = 1;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = undefined;
    gesture.originX = 0;
    gesture.originY = 0;
  }

  // Toggle Zoom
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  // Attach/Detach Events
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd();
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/classes-to-selector.mjs":
/*!************************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ classesToSelector)
/* harmony export */ });
function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createElementIfNotDefined)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-shadow.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createShadow)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
  const shadowContainer = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
  if (!shadowEl) {
    shadowEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', shadowClass.split(' '));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-init.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectInit)
/* harmony export */ });
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      // remove shadows
      swiper.slides.forEach(slideEl => {
        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
      });
      // create new one
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-target.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectTarget)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectTarget(effectParams, slideEl) {
  const transformEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectVirtualTransitionEnd)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.filter(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}




/***/ }),

/***/ "./node_modules/swiper/shared/ssr-window.esm.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/shared/ssr-window.esm.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getWindow),
/* harmony export */   g: () => (/* binding */ getDocument)
/* harmony export */ });
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}




/***/ }),

/***/ "./node_modules/swiper/shared/swiper-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/swiper-core.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Swiper),
/* harmony export */   d: () => (/* binding */ defaults)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



let support;
function calcSupport() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(el, 'padding-left') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(el, 'padding-right') || 0, 10);
  height = height - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(el, 'padding-top') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', '');
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slides);
    }
    if (slides[i] && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'width', true) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit('slidesUpdated');
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

const toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

const toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = selector => {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.filter(slideEl => slideEl.column === activeIndex)[0];
      nextSlide = slides.filter(slideEl => slideEl.column === activeIndex + 1)[0];
      prevSlide = slides.filter(slideEl => slideEl.column === activeIndex - 1)[0];
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      // Next Slide
      nextSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }

      // Prev Slide
      prevSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach(slideEl => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.filter(slideEl => slideEl.column === activeIndex)[0];
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // Update Index
  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute('data-swiper-slide-index', index);
    });
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = amountOfSlides => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide', [params.slideBlankClass]) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next'
  });
}

function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === 'auto') {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
  } else if (gridEnabled && params.grid.fill === 'row') {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
  // prepend last slides before start
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
        }
        // slides.forEach((slide, slideIndex) => {
        //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
        // });
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide, slideIndex) => {
          if (slide.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)() || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === 'pointerdown') {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === 'touchstart') {
    // don't proceed touch event
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!swiper.wrapperEl.contains(targetEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === 'pointermove') {
    if (data.touchId !== null) return; // return from pointer if we use touch
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === 'touchmove') {
    targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  new Date().getTime();
  if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
  if (!isTouchEvent) {
    if (data.touchId !== null) return; // return from pointer if we use touch
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = 'auto';
  }
}

const events = (swiper, method) => {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;
  if (!el || typeof el === 'string') return;

  // Touch Events
  document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]('touchstart', swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('touchmove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('touchend', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('touchcancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

  // Get breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === 'string') return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  swiperElementNodeName: 'SWIPER-CONTAINER',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: 'swiper',
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-blank',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideFullyVisibleClass: 'swiper-slide-fully-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({}, params);
    if (el && !params.el) params.el = el;
    const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({}, swiper.params);
    swiper.passedParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slides[0]);
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(el, 'direction') === 'rtl'),
      wrongRTL: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== 'string') {
        el.removeAttribute('style');
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute('style');
      }
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== 'string') {
        swiper.el.swiper = null;
      }
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);




/***/ }),

/***/ "./node_modules/swiper/shared/utils.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/shared/utils.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ elementParents),
/* harmony export */   b: () => (/* binding */ elementOffset),
/* harmony export */   c: () => (/* binding */ createElement),
/* harmony export */   d: () => (/* binding */ now),
/* harmony export */   e: () => (/* binding */ elementChildren),
/* harmony export */   f: () => (/* binding */ elementOuterSize),
/* harmony export */   g: () => (/* binding */ getSlideTransformEl),
/* harmony export */   h: () => (/* binding */ elementIndex),
/* harmony export */   i: () => (/* binding */ classesToTokens),
/* harmony export */   j: () => (/* binding */ getTranslate),
/* harmony export */   k: () => (/* binding */ elementTransitionEnd),
/* harmony export */   l: () => (/* binding */ isObject),
/* harmony export */   m: () => (/* binding */ makeElementsArray),
/* harmony export */   n: () => (/* binding */ nextTick),
/* harmony export */   o: () => (/* binding */ elementStyle),
/* harmony export */   p: () => (/* binding */ elementNextAll),
/* harmony export */   q: () => (/* binding */ elementPrevAll),
/* harmony export */   r: () => (/* binding */ animateCSSModeScroll),
/* harmony export */   s: () => (/* binding */ setCSSProperty),
/* harmony export */   t: () => (/* binding */ showWarning),
/* harmony export */   u: () => (/* binding */ extend),
/* harmony export */   v: () => (/* binding */ deleteProps)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function classesToTokens(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return classes.trim().split(' ').filter(c => !!c.trim());
}

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = '';
  }
  return [...element.children].filter(el => el.matches(selector));
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
    // err
  }
}
function createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
  return el;
}
function elementOffset(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter(e => !!e);
}




/***/ }),

/***/ "./node_modules/swiper/swiper.mjs":
/*!****************************************!*\
  !*** ./node_modules/swiper/swiper.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Swiper: () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "default": () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/swiper-core.mjs */ "./node_modules/swiper/shared/swiper-core.mjs");
/**
 * Swiper 11.1.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 30, 2024
 */




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map