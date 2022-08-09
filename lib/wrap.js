"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = wrap;

var _react = _interopRequireDefault(require("react"));

var _RevealBase = _interopRequireDefault(require("./RevealBase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function wrap(props, inEffect, outEffect, children) {
  if ('in' in props) props.when = props["in"];
  if (_react["default"].Children.count(children) < 2) return /*#__PURE__*/_react["default"].createElement(_RevealBase["default"], _extends({}, props, {
    inEffect: inEffect,
    outEffect: outEffect,
    children: children
  }));
  children = _react["default"].Children.map(children, function (child) {
    return /*#__PURE__*/_react["default"].createElement(_RevealBase["default"], _extends({}, props, {
      inEffect: inEffect,
      outEffect: outEffect,
      children: child
    }));
  });
  return 'Fragment' in _react["default"] ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children) : /*#__PURE__*/_react["default"].createElement("span", null, children);
}