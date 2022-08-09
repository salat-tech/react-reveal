"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _wrap = _interopRequireDefault(require("./wrap"));

var _propTypes = require("prop-types");

var _globals = require("./globals");

var _excluded = ["children", "out", "forever", "timeout", "duration", "delay", "count"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  out: _propTypes.bool,
  left: _propTypes.bool,
  right: _propTypes.bool,
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
      mirror = _ref.mirror,
      opposite = _ref.opposite;
  var checksum = (left ? 1 : 0) | (right ? 2 : 0) | (mirror ? 16 : 0) | (opposite ? 32 : 0) | (reverse ? 64 : 0);
  if (lookup.hasOwnProperty(checksum)) return lookup[checksum];

  if (!mirror !== !(reverse && opposite)) // Boolean XOR
    {
      var _ref2 = [right, left];
      left = _ref2[0];
      right = _ref2[1];
    }

  var dist = '100%',
      x = left ? '-' + dist : right ? dist : '0';
  var rule = !reverse ? "from {\n        transform: translate3d(".concat(x, ", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }") : "from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d(".concat(x, ", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ");
  lookup[checksum] = (0, _globals.animation)(rule);
  return lookup[checksum];
}

function LightSpeed() {
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
    }
  };
  var checksum = 0 + (props.left ? 1 : 0) + (props.right ? 10 : 0) + (props.mirror ? 10000 : 0) + (props.opposite ? 100000 : 0);
  return (0, _wrap["default"])(props, effect, effect, children);
}

LightSpeed.propTypes = propTypes;
var _default = LightSpeed;
exports["default"] = _default;