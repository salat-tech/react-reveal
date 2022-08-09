"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["force", "mountOnEnter", "unmountOnExit", "opposite", "mirror", "wait", "onReveal", "in", "when", "spy", "collapse", "onExited", "enter", "exit", "appear"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function withReveal(WrappedComponent, effect) {
  var refProp = undefined;
  if (typeof WrappedComponent === 'function' && typeof WrappedComponent.styledComponentId === 'string') refProp = "innerRef";
  return function (_ref) {
    var force = _ref.force,
        mountOnEnter = _ref.mountOnEnter,
        unmountOnExit = _ref.unmountOnExit,
        opposite = _ref.opposite,
        mirror = _ref.mirror,
        wait = _ref.wait,
        onReveal = _ref.onReveal,
        inProp = _ref["in"],
        when = _ref.when,
        spy = _ref.spy,
        collapse = _ref.collapse,
        onExited = _ref.onExited,
        enter = _ref.enter,
        exit = _ref.exit,
        appear = _ref.appear,
        props = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/_react["default"].createElement(effect.type, _extends({
      force: force,
      mountOnEnter: mountOnEnter,
      unmountOnExit: unmountOnExit,
      opposite: opposite,
      mirror: mirror,
      wait: wait,
      onReveal: onReveal,
      "in": inProp,
      when: when,
      spy: spy,
      collapse: collapse,
      onExited: onExited,
      enter: enter,
      exit: exit,
      appear: appear //disableObserver={disableObserver}

    }, effect.props, {
      refProp: refProp
    }), /*#__PURE__*/_react["default"].createElement(WrappedComponent, props));
  };
}

var _default = withReveal;
exports["default"] = _default;