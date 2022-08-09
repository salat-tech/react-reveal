"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animation = animation;
exports.cascade = cascade;
exports.collapseend = void 0;
exports["default"] = config;
exports.globalHide = exports.fadeOutEnabled = exports.disableSsr = exports.defaults = void 0;
exports.hideAll = hideAll;
exports.ie10 = void 0;
exports.insertRule = insertRule;
exports.ssrFadeout = exports.ssr = exports.raf = exports.observerMode = exports.namespace = void 0;

/*
 * React-reveal Global Helpers
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
//import {version} from 'react';
var namespace = 'react-reveal'; //, is16 = parseInt(version, 10) >= 16;

exports.namespace = namespace;
var defaults = {
  duration: 1000,
  delay: 0,
  count: 1
};
exports.defaults = defaults;

var ssr = true,
    observerMode = false,
    raf = function raf(cb) {
  return window.setTimeout(cb, 66);
},
    disableSsr = function disableSsr() {
  return exports.ssr = ssr = false;
},
    fadeOutEnabled = false,
    ssrFadeout = function ssrFadeout() {
  var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return exports.fadeOutEnabled = fadeOutEnabled = enable;
},
    globalHide = false,
    ie10 = false,
    collapseend;

exports.collapseend = collapseend;
exports.ie10 = ie10;
exports.globalHide = globalHide;
exports.ssrFadeout = ssrFadeout;
exports.fadeOutEnabled = fadeOutEnabled;
exports.disableSsr = disableSsr;
exports.raf = raf;
exports.observerMode = observerMode;
exports.ssr = ssr;
var counter = 1,
    effectMap = {},
    sheet = false,
    name = "".concat(namespace, "-").concat(Math.floor(Math.random() * 1000000000000000), "-");

function insertRule(rule) {
  try {
    return sheet.insertRule(rule, sheet.cssRules.length);
  } catch (e) {
    console.warn('react-reveal - animation failed');
  }
}

function cascade(i, start, end, duration, total) {
  var minv = Math.log(duration),
      maxv = Math.log(total),
      scale = (maxv - minv) / (end - start);
  return Math.exp(minv + scale * (i - start));
}

function animation(effect) {
  if (!sheet) return '';
  var rule = "@keyframes ".concat(name + counter, "{").concat(effect, "}");
  var effectId = effectMap[effect];

  if (!effectId) {
    insertRule(rule);
    effectMap[effect] = counter;
    return "".concat(name).concat(counter++);
  }

  return "".concat(name).concat(effectId);
}

function hideAll() {
  if (globalHide) return;
  exports.globalHide = globalHide = true;
  window.removeEventListener('scroll', hideAll, true);
  insertRule(".".concat(namespace, " { opacity: 0; }"));
  window.removeEventListener('orientationchange', hideAll, true);
  window.document.removeEventListener('visibilitychange', hideAll);
} //navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")


if (typeof window !== 'undefined' && window.name !== 'nodejs' && window.document && typeof navigator !== 'undefined') {
  // are we in browser?
  exports.observerMode = observerMode = 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window // bypassing
  && 'intersectionRatio' in window.IntersectionObserverEntry.prototype // inclomplete implementations
  && /\{\s*\[native code\]\s*\}/.test('' + IntersectionObserver); // and buggy polyfills

  exports.raf = raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || raf;
  exports.ssr = ssr = window.document.querySelectorAll('div[data-reactroot]').length > 0; // are we prerendered?

  if (navigator.appVersion.indexOf("MSIE 10") !== -1) exports.ie10 = ie10 = true; //if (ssr && 'serviceWorker' in navigator && navigator.serviceWorker.controller) //cached by service worker?
  //  ssr = false;
  //console.log(Date.now() - window.performance.timing.domLoading<500);

  if (ssr && 'performance' in window && 'timing' in window.performance && 'domContentLoadedEventEnd' in window.performance.timing && window.performance.timing.domLoading && Date.now() - window.performance.timing.domLoading < 300) exports.ssr = ssr = false;
  if (ssr) window.setTimeout(disableSsr, 1500);

  if (!observerMode) {
    exports.collapseend = collapseend = document.createEvent('Event');
    collapseend.initEvent('collapseend', true, true);
  }

  var element = document.createElement('style');
  document.head.appendChild(element);

  if (element.sheet && element.sheet.cssRules && element.sheet.insertRule) {
    sheet = element.sheet;
    window.addEventListener('scroll', hideAll, true);
    window.addEventListener("orientationchange", hideAll, true);
    window.document.addEventListener("visibilitychange", hideAll);
  }
}

function config(_ref) {
  var ssrFadeout = _ref.ssrFadeout;
  exports.fadeOutEnabled = fadeOutEnabled = ssrFadeout;
}