"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _responsive = _interopRequireDefault(require("./responsive"));

var _HamburgerIcon = _interopRequireDefault(require("./HamburgerIcon"));

var _globals = require("./globals");

var _Fade = _interopRequireDefault(require("./Fade"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hamburger(WrappedComponent) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var responsiveNode;

  function icon(iconProps) {
    if (!responsiveNode || responsiveNode.state.match) return void 0;
    return (0, _HamburgerIcon["default"])(responsiveNode.state.isClicked, _globals.animation, responsiveNode.handleClick, iconProps);
  }

  if ('duration' in config) config.duration *= 3;
  var ResponsiveComponent = (0, _responsive["default"])(WrappedComponent, _objectSpread(_objectSpread({}, config), {}, {
    effect: /*#__PURE__*/_react["default"].createElement(_Fade["default"], config)
  }));
  return function (props) {
    return /*#__PURE__*/_react["default"].createElement(ResponsiveComponent, _extends({
      icon: icon,
      disableAboveBreakpoint: true
    }, props, {
      ref: function ref(node) {
        return responsiveNode = node;
      }
    }));
  };
}

var _default = hamburger;
exports["default"] = _default;