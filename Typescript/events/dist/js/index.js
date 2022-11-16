/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/js/pubsub.ts");

var testEvent1 = document.querySelector("#testEvent");
var testEvent2 = document.querySelector("#testEvent2");
var testEvent3 = document.querySelector("#testEvent3");

var eventFire = function eventFire(evt) {
  console.log("eventFired");
  console.log(evt);
  console.log(this);
  var currentTarget = evt.currentTarget;
  var quantity = this.querySelector("span");
  var n = parseInt(quantity.textContent || "0");
  quantity.textContent = (n + 1).toString();

  if (this !== testEvent2 && this !== document) {
    var event_1 = new Event("customclick");
    testEvent2.dispatchEvent(event_1);
    var event2 = new CustomEvent("customClick", {
      detail: n + 1
    });
    testEvent3 === null || testEvent3 === void 0 ? void 0 : testEvent3.dispatchEvent(event2);
  }
};

testEvent1.addEventListener("click", eventFire);
testEvent2.addEventListener("customclick", eventFire);
testEvent2.addEventListener("click", function (e) {
  console.log(e);
});
testEvent3 === null || testEvent3 === void 0 ? void 0 : testEvent3.addEventListener("customClick", function (e) {
  console.log(e);
});
document.addEventListener("click", eventFire); // PubSub Design Pattern

var pubsub = document.getElementById("pubsub");

function teste(data) {
  console.log("teste");
  console.log(data === null || data === void 0 ? void 0 : data.type);
  pubsub.textContent = "data: " + (data === null || data === void 0 ? void 0 : data.data) + " - type: " + (data === null || data === void 0 ? void 0 : data.type);
}

_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe("EventTest1", teste);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe("EventTest2", teste);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe("EventTest3", teste);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.unsubscribe("EventTest1", teste);
console.log(_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribers);
setTimeout(function () {
  _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish("EventTest3", "publish com timeout");
}, 3000);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish("EventTest3", 20);

/***/ }),

/***/ "./src/js/pubsub.ts":
/*!**************************!*\
  !*** ./src/js/pubsub.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PubSub": function() { return /* binding */ PubSub; }
/* harmony export */ });
var PubSub =
/** @class */
function () {
  function PubSub() {}

  PubSub.subscribe = function (eventName, fn) {
    PubSub.subscribers[eventName] = PubSub.subscribers[eventName] || [];
    PubSub.subscribers[eventName].push(fn);
  };

  PubSub.publish = function (eventName, data) {
    if (PubSub.subscribers[eventName]) {
      PubSub.subscribers[eventName].forEach(function (fn) {
        var output = {
          data: data,
          type: eventName
        };
        fn(output);
      });
    }
  };

  PubSub.unsubscribe = function (eventName, fn) {
    if (PubSub.subscribers[eventName]) {
      var index = PubSub.subscribers[eventName].findIndex(function (element) {
        return element === fn;
      });

      if (index > -1) {
        PubSub.subscribers[eventName].splice(index, 1);
        if (PubSub.subscribers[eventName].length === 0) [delete PubSub.subscribers[eventName]];
      }
    }
  };

  PubSub.subscribers = {};
  return PubSub;
}();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=index.js.map