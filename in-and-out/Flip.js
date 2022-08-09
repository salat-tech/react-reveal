"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = require("prop-types");

var _wrap = _interopRequireDefault(require("./wrap"));

var _globals = require("./globals");

var _excluded = ["children", "out", "forever", "timeout", "duration", "delay", "count"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  out: _propTypes.bool,
  left: _propTypes.bool,
  right: _propTypes.bool,
  // y
  top: _propTypes.bool,
  // x
  bottom: _propTypes.bool,
  mirror: _propTypes.bool,
  opposite: _propTypes.bool,
  duration: _propTypes.number,
  timeout: _propTypes.number,
  delay: _propTypes.number,
  count: _propTypes.number,
  forever: _propTypes.bool
};
var lookup = {};

function make(reverse, _ref) {
  var left = _ref.left,
      right = _ref.right,
      top = _ref.top,
      bottom = _ref.bottom,
      x = _ref.x,
      y = _ref.y,
      mirror = _ref.mirror,
      opposite = _ref.opposite;
  var checksum = (left ? 1 : 0) | (right || y ? 2 : 0) | (top || x ? 4 : 0) | (bottom ? 8 : 0) | (mirror ? 16 : 0) | (opposite ? 32 : 0) | (reverse ? 64 : 0);
  if (lookup.hasOwnProperty(checksum)) return lookup[checksum];

  if (!mirror !== !(reverse && opposite)) // Boolean XOR
    {
      var _ref2 = [right, left, bottom, top, y, x];
      left = _ref2[0];
      right = _ref2[1];
      top = _ref2[2];
      bottom = _ref2[3];
      x = _ref2[4];
      y = _ref2[5];
    }

  var rule;

  if (x || y || left || right || top || bottom) {
    var xval = x || top || bottom ? (bottom ? '-' : '') + '1' : '0',
        yval = y || right || left ? (left ? '-' : '') + '1' : '0';
    if (!reverse) rule = "from {\n          transform: perspective(400px) rotate3d(".concat(xval, ", ").concat(yval, ", 0, 90deg);\n          animation-timing-function: ease-in;\n          opacity: 0;\n        }\n        40% {\n          transform: perspective(400px) rotate3d(").concat(xval, ", ").concat(yval, ", 0, -20deg);\n          animation-timing-function: ease-in;\n        }\n        60% {\n          transform: perspective(400px) rotate3d(").concat(xval, ", ").concat(yval, ", 0, 10deg);\n          opacity: 1;\n        }\n        80% {\n          transform: perspective(400px) rotate3d(").concat(xval, ", ").concat(yval, ", 0, -5deg);\n        }\n        to {\n          transform: perspective(400px);\n        }");else rule = "from {\n          transform: perspective(400px);\n        }\n        30% {\n          transform: perspective(400px) rotate3d(".concat(xval, ", ").concat(yval, ", 0, -15deg);\n          opacity: 1;\n        }\n        to {\n          transform: perspective(400px) rotate3d(").concat(xval, ", ").concat(yval, ", 0, 90deg);\n          opacity: 0;\n        }");
  } else rule = "from {\n          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n          animation-timing-function: ease-out;\n          opacity: ".concat(!reverse ? '0' : '1', ";\n        }\n        40% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n          animation-timing-function: ease-out;\n        }\n        50% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n          animation-timing-function: ease-in;\n        }\n        to {\n          transform: perspective(400px);\n          animation-timing-function: ease-in;\n          opacity: ").concat(reverse ? '0' : '1', ";\n        }");

  lookup[checksum] = (0, _globals.animation)(rule);
  return lookup[checksum];
}

function Flip() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _globals.defaults,
      children = _ref3.children,
      out = _ref3.out,
      forever = _ref3.forever,
      timeout = _ref3.timeout,
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === void 0 ? _globals.defaults.duration : _ref3$duration,
      _ref3$delay = _ref3.delay,
      delay = _ref3$delay === void 0 ? _globals.defaults.delay : _ref3$delay,
      _ref3$count = _ref3.count,
      count = _ref3$count === void 0 ? _globals.defaults.count : _ref3$count,
      props = _objectWithoutProperties(_ref3, _excluded);

  var effect = {
    make: make,
    duration: timeout === undefined ? duration : timeout,
    delay: delay,
    forever: forever,
    count: count,
    style: {
      animationFillMode: 'both',
      backfaceVisibility: 'visible'
    }
  };
  return (0, _wrap["default"])(props, effect, effect, children);
}

Flip.propTypes = propTypes;
var _default = Flip;
exports["default"] = _default;