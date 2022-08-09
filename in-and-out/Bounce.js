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
  top: _propTypes.bool,
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
      up = _ref.up,
      down = _ref.down,
      top = _ref.top,
      bottom = _ref.bottom,
      mirror = _ref.mirror,
      opposite = _ref.opposite;
  var checksum = (left ? 1 : 0) | (right ? 2 : 0) | (top || down ? 4 : 0) | (bottom || up ? 8 : 0) | (mirror ? 16 : 0) | (opposite ? 32 : 0) | (reverse ? 64 : 0);
  if (lookup.hasOwnProperty(checksum)) return lookup[checksum];

  if (!mirror !== !(reverse && opposite)) // Boolean XOR
    {
      var _ref2 = [right, left, bottom, top, down, up];
      left = _ref2[0];
      right = _ref2[1];
      top = _ref2[2];
      bottom = _ref2[3];
      up = _ref2[4];
      down = _ref2[5];
    }

  var transformX = left || right,
      transformY = top || bottom || up || down,
      transform = transformX || transformY;
  var rule, x0, y0, x20, y20, y40, x60, y60, x75, y75, x90, y90, x100, y100;

  if (reverse) {
    x20 = transformX ? (right ? '-' : '') + '20px' : 0;
    y20 = transformY ? (up || bottom ? '' : '-') + '10px' : '0';
    y40 = (down || top ? '' : '-') + '20px';
    x100 = transformX ? (left ? '-' : '') + '2000px' : '0';
    y100 = transformY ? (down || top ? '-' : '') + '2000px' : '0';
  } else {
    x0 = transformX ? (left ? '-' : '') + '3000px' : '0';
    y0 = transformY ? (down || top ? '-' : '') + '3000px' : '0';
    x60 = transformX ? (right ? '-' : '') + '25px' : '0';
    y60 = transformY ? (up || bottom ? '-' : '') + '25px' : '0';
    x75 = transformX ? (left ? '-' : '') + '10px' : '0';
    y75 = transformY ? (down || top ? '-' : '') + '10px' : '0';
    x90 = transformX ? (right ? '-' : '') + '5px' : '0';
    y90 = transformY ? (up || bottom ? '-' : '') + '5px' : '0';
  }

  if (transform) rule = reverse ? "\n        20% {\n          transform: translate3d(".concat(x20, ", ").concat(y20, ", 0);\n          }\n        ").concat(transformY ? "40%, 45% {\n            opacity: 1;\n            transform: translate3d(0, ".concat(y40, ", 0);\n          }") : '', "\n          to {\n            opacity: 0;\n            transform: translate3d(").concat(x100, ", ").concat(y100, ", 0);\n        }\n      ") : "from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      from {\n        opacity: 0;\n        transform: translate3d(".concat(x0, ", ").concat(y0, ", 0);\n      }\n      60% {\n        opacity: 1;\n        transform: translate3d(").concat(x60, ", ").concat(y60, ", 0);\n      }\n      75% {\n        transform: translate3d(").concat(x75, ", ").concat(y75, ", 0);\n      }\n      90% {\n        transform: translate3d(").concat(x90, ", ").concat(y90, ", 0);\n      }\n      to {\n        transform: none;\n      }");else rule = reverse ? "20% {\n          transform: scale3d(.9, .9, .9);\n        }\n        50%, 55% {\n          opacity: 1;\n          transform: scale3d(1.1, 1.1, 1.1);\n        }\n        to {\n          opacity: 0;\n          transform: scale3d(.3, .3, .3);\n      }" : "from, 20%, 40%, 60%, 80%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      0% {\n        opacity: 0;\n        transform: scale3d(.3, .3, .3);\n      }\n      20% {\n        transform: scale3d(1.1, 1.1, 1.1);\n      }\n      40% {\n        transform: scale3d(.9, .9, .9);\n      }\n      60% {\n        opacity: 1;\n        transform: scale3d(1.03, 1.03, 1.03);\n      }\n      80% {\n        transform: scale3d(.97, .97, .97);\n      }\n      to {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }";
  lookup[checksum] = (0, _globals.animation)(rule);
  return lookup[checksum];
}

function Bounce() {
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
      animationFillMode: 'both'
    },
    reverse: props.left
  };
  return (0, _wrap["default"])(props, effect, effect, children);
}

Bounce.propTypes = propTypes;
var _default = Bounce;
exports["default"] = _default;