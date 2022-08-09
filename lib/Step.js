"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*
 * Step Auxiliary Class
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
var Step = /*#__PURE__*/function () {
  function Step(name) {
    var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

    _classCallCheck(this, Step);

    this.after = after;
    this.name = name;
    this.chain = [];
  }

  _createClass(Step, [{
    key: "push",
    value: function push(api) {
      if (this.start) {
        api.step = this.index;
        api.start = this.start;
      }

      this.chain.push(api);
    }
  }]);

  return Step;
}();

var _default = Step;
exports["default"] = _default;