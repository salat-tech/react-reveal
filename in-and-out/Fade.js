"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = require("prop-types");

var _globals = require("./globals");

var _wrap = _interopRequireDefault(require("./wrap"));

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
  big: _propTypes.bool,
  mirror: _propTypes.bool,
  opposite: _propTypes.bool,
  duration: _propTypes.number,
  timeout: _propTypes.number,
  distance: _propTypes.string,
  delay: _propTypes.number,
  count: _propTypes.number,
  forever: _propTypes.bool
};
var lookup = {};

function make(reverse, _ref) {
  var distance = _ref.distance,
      left = _ref.left,
      right = _ref.right,
      up = _ref.up,
      down = _ref.down,
      top = _ref.top,
      bottom = _ref.bottom,
      big = _ref.big,
      mirror = _ref.mirror,
      opposite = _ref.opposite;
  var checksum = (distance ? distance.toString() : 0) + ((left ? 1 : 0) | (right ? 2 : 0) | (top || down ? 4 : 0) | (bottom || up ? 8 : 0) | (mirror ? 16 : 0) | (opposite ? 32 : 0) | (reverse ? 64 : 0) | (big ? 128 : 0));
  if (lookup.hasOwnProperty(checksum)) return lookup[checksum];
  var transform = left || right || up || down || top || bottom;
  var x, y;

  if (transform) {
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

    var dist = distance || (big ? '2000px' : '100%');
    x = left ? '-' + dist : right ? dist : '0';
    y = down || top ? '-' + dist : up || bottom ? dist : '0';
  }

  lookup[checksum] = (0, _globals.animation)("".concat(!reverse ? 'from' : 'to', " {opacity: 0;").concat(transform ? " transform: translate3d(".concat(x, ", ").concat(y, ", 0);") : '', "}\n     ").concat(reverse ? 'from' : 'to', " {opacity: 1;transform: none;} "));
  return lookup[checksum];
}

function Fade() {
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

  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
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
  return context ? (0, _wrap["default"])(props, effect, effect, children) : effect;
}

Fade.propTypes = propTypes;
var _default = Fade;
exports["default"] = _default;