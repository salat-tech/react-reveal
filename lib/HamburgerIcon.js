"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["color", "size", "style"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HamburgerIcon(toggle, animation, handleClick) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    color: '#fff',
    size: 28,
    style: {
      backgroundColor: '#808080'
    }
  },
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#fff' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 28 : _ref$size,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  var common = {
    opacity: 1,
    stroke: color,
    transition: 'transform 0.3s'
  },
      flip = "\n      15% {\n        opacity: 0.8;\n        transform: translateZ(0) scale(0.8) rotateZ(0);\n      }\n      30% {\n        transform: translateZ(0) scale(0.8) rotateZ(0);\n      }\n      100% {\n        opacity: 1;\n        transform: translateZ(0) scale(1) rotateZ(405deg);\n      }\n    ",
      hamburger = {
    cursor: 'pointer',
    animationName: !toggle ? void 0 : animation(flip),
    animationDuration: !toggle ? void 0 : '900ms',
    animationFillMode: !toggle ? void 0 : 'forwards'
  },
      a = _objectSpread(_objectSpread({}, common), {}, {
    transform: !toggle ? void 0 : 'translate(0, 7px)'
  }),
      b = _objectSpread(_objectSpread({}, common), {}, {
    transform: !toggle ? 'rotate(0deg)' : 'translate(20px, -4px) rotate(90deg)'
  }),
      c = _objectSpread(_objectSpread({}, common), {}, {
    transform: !toggle ? void 0 : 'translate(0, -7px)'
  }); //viewBox="0 0 24 16"


  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: size,
      height: size
    })
  }, props, {
    onClick: handleClick
  }), /*#__PURE__*/_react["default"].createElement("svg", {
    style: hamburger,
    width: size,
    height: size,
    id: "hamburger",
    viewBox: "-4 0 32 16"
  }, /*#__PURE__*/_react["default"].createElement("line", {
    style: a,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    x1: "0",
    y1: "1",
    x2: "24",
    y2: "1"
  }), /*#__PURE__*/_react["default"].createElement("line", {
    style: b,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    x1: "0",
    y1: "8",
    x2: "24",
    y2: "8"
  }), /*#__PURE__*/_react["default"].createElement("line", {
    style: c,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    x1: "0",
    y1: "15",
    x2: "24",
    y2: "15"
  })));
}

var _default = HamburgerIcon;
exports["default"] = _default;