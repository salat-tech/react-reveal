"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = throttle;

function throttle(callback, wait) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
  var timeout = null;
  var callbackArgs = null;

  var later = function later() {
    callback.apply(context, callbackArgs);
    timeout = null;
  };

  return function () {
    if (!timeout) {
      callbackArgs = arguments;
      timeout = setTimeout(later, wait);
    }
  };
}