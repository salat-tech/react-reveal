"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = require("prop-types");

var _wrap = _interopRequireDefault(require("./wrap"));

var _globals = require("./globals");

var _excluded = ["children", "out", "timeout", "duration", "delay", "count", "forever"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  duration: _propTypes.number,
  timeout: _propTypes.number,
  delay: _propTypes.number,
  count: _propTypes.number,
  forever: _propTypes.bool
};
var rule = "\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n}\n";
var name = false;

function make() {
  return name || (name = (0, _globals.animation)(rule));
}

function HeadShake() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _globals.defaults,
      children = _ref.children,
      out = _ref.out,
      timeout = _ref.timeout,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? _globals.defaults.duration : _ref$duration,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? _globals.defaults.delay : _ref$delay,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? _globals.defaults.count : _ref$count,
      forever = _ref.forever,
      props = _objectWithoutProperties(_ref, _excluded);

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
  return (0, _wrap["default"])(props, effect, false, children, true);
}

HeadShake.propTypes = propTypes;
var _default = HeadShake;
exports["default"] = _default;