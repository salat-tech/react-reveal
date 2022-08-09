"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _swipedetect = _interopRequireDefault(require("./swipedetect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function makeCarousel(WrappedComponent) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  //const { wait = 5000,  maxTurns = 2, } = config;
  return /*#__PURE__*/function (_React$Component) {
    _inherits(_class, _React$Component);

    var _super = _createSuper(_class);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);
      _this.state = {
        //next: React.Children.count(this.props.children) - 1,
        current: 0,
        next: 1,
        backwards: false,
        swap: false,
        appear: false
      };
      _this.turn = 0;
      _this.stop = false;
      _this.handleReveal = _this.handleReveal.bind(_assertThisInitialized(_this));
      _this.handleSwipe = _this.handleSwipe.bind(_assertThisInitialized(_this));
      _this.target = _this.target.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(_class, [{
      key: "target",
      value: function target(_ref) {
        var currentTarget = _ref.currentTarget;
        this.move(+currentTarget.getAttribute('data-position'));
      }
    }, {
      key: "handleReveal",
      value: function handleReveal() {
        if (this.turn >= this.props.maxTurns) return;
        this.move(this.state.current + 1);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.turn = -1;
      }
    }, {
      key: "move",
      value: function move(newPos) {
        if (this.turn < 0 || newPos === this.state.current) return;
        var pos = newPos;

        var count = _react["default"].Children.count(this.props.children);

        if (newPos >= count) {
          this.turn++;
          pos = 0;
        } else if (newPos < 0) pos = count - 1;

        this.setState({
          current: pos,
          next: this.state.current,
          backwards: newPos < this.state.current,
          swap: !this.state.swap,
          appear: true
        });
      }
    }, {
      key: "handleSwipe",
      value: function handleSwipe(dir) {
        if (!this.props.swipe) return;
        if (dir === 'left') this.move(this.state.current + 1);else if (dir === 'right') this.move(this.state.current - 1);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.beforeNode && this.afterNode) {
          (0, _swipedetect["default"])(this.beforeNode, this.handleSwipe);
          (0, _swipedetect["default"])(this.afterNode, this.handleSwipe);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var children = this.props.children,
            arr = _react["default"].Children.toArray(children),
            count = arr.length;

        var _this$state = this.state,
            swap = _this$state.swap,
            next = _this$state.next,
            current = _this$state.current,
            backwards = _this$state.backwards;
        current %= count;
        next %= count;
        var before, after;

        switch (count) {
          case 0:
            before = /*#__PURE__*/_react["default"].createElement("div", null);
            after = /*#__PURE__*/_react["default"].createElement("div", null);

          case 1:
            before = arr[0];
            after = arr[0];

          default:
            before = arr[swap ? next : current];
            after = arr[swap ? current : next];
        }

        if (_typeof(before) !== 'object') before = /*#__PURE__*/_react["default"].createElement("div", null, before);
        if (_typeof(after) !== 'object') after = /*#__PURE__*/_react["default"].createElement("div", null, after);
        return /*#__PURE__*/_react["default"].createElement(WrappedComponent, _extends({}, this.props, {
          position: current,
          handleClick: this.target,
          total: count,
          children: [/*#__PURE__*/_react["default"].createElement("div", {
            ref: function ref(node) {
              return _this2.beforeNode = node;
            },
            key: 1,
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: swap ? 1 : 2
            }
          }, /*#__PURE__*/_react["default"].createElement(before.type, _extends({
            //disableObserver
            //force
            mountOnEnter: true,
            unmountOnExit: true,
            appear: this.state.appear,
            wait: this.props.defaultWait
          }, before.props, {
            opposite: true,
            when: !swap,
            mirror: backwards,
            onReveal: !swap
            /*&&!this.stop*/
            ? this.handleReveal : void 0
          }))), /*#__PURE__*/_react["default"].createElement("div", {
            key: 2,
            ref: function ref(node) {
              return _this2.afterNode = node;
            },
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: swap ? 2 : 1
            }
          }, /*#__PURE__*/_react["default"].createElement(after.type, _extends({
            //disableObserver
            //force
            mountOnEnter: true,
            unmountOnExit: true,
            appear: this.state.appear,
            wait: this.props.defaultWait
          }, after.props, {
            opposite: true,
            when: swap,
            mirror: backwards,
            onReveal: swap
            /*&&!this.stop*/
            ? this.handleReveal : void 0
          })))]
        }));
      }
    }], [{
      key: "propTypes",
      get: function get() {
        return {
          children: _propTypes.node.isRequired,
          defaultWait: _propTypes.number,
          maxTurns: _propTypes.number,
          swipe: _propTypes.bool
        };
      }
    }, {
      key: "defaultProps",
      get: function get() {
        return {
          defaultWait: config.defaultWait || 5000,
          maxTurns: config.maxTurns || 5,
          swipe: config.swipe || true
        };
      }
    }]);

    return _class;
  }(_react["default"].Component);
}

var _default = makeCarousel;
exports["default"] = _default;