"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Step = _interopRequireDefault(require("./Step"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Stepper = /*#__PURE__*/function () {
  function Stepper() {
    _classCallCheck(this, Stepper);

    this.steps = [];
    this.stepMap = {};
    this.hasStarted = false;
    this.isTriggered = false;
    this.runs = 1;
    this.totalRuns = 0;
    this.start = this.start.bind(this);
    this.next = this.next.bind(this);
  }

  _createClass(Stepper, [{
    key: "step",
    value: function step(name) {
      var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
      var step = new _Step["default"](name, after);
      step.start = this.start;
      step.index = this.steps.push(step) - 1;
      this.stepMap[name] = step;
      return this;
    } //if (process.env.NODE_ENV !== 'production')
    //	throw new Error(`Animation step ${name} is missing`);
    //else {
    //}

  }, {
    key: "is",
    value: function is(name) {
      return this.get(name);
    }
  }, {
    key: "get",
    value: function get(name) {
      if (name in this.stepMap) //.hasOwnProperty(name))
        return this.stepMap[name];else console.warn("Animation step ".concat(name, " is missing"));
    }
  }, {
    key: "start",
    value: function start(step) {
      if (this.hasStarted) {
        this.runs = 2;
      }

      if (this.isTriggered) {
        if (step < this.trigger) this.trigger = step;
        return;
      }

      this.isTriggered = true;
      this.trigger = step;
      window.setTimeout(this.init.bind(this), 50);
    }
  }, {
    key: "init",
    value: function init() {
      this.hasStarted = true;
      this.head = this.trigger;
      this.tail = this.head === 0 ? this.steps.length - 1 : this.head - 1;
      this.next();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.hasStarted = false;
      this.isTriggered = false;
    }
  }, {
    key: "next",
    value: function next() {
      var onceRevealed = false;

      for (var i = 0, len = this.steps[this.head].chain.length; i < len; i++) {
        var api = this.steps[this.head].chain[i];

        if (!api.isShown && api.start && api.inViewport()) {
          onceRevealed = true;
          delete api.start;
          api.animate(api.props);
        }
      }

      if (this.head === this.tail) {
        this.runs--;
        this.totalRuns++;
        if (this.totalRuns > 100) return;
        if (this.runs <= 0) return this.stop();
      }

      var prev = this.head;
      this.head++;
      if (this.head >= this.steps.length) this.head = 0; //console.log('head:',this.head,'runs', this.runs,'total', this.totalRuns)			;

      if (onceRevealed) window.setTimeout(this.next, this.steps[prev].after);else this.next();
    }
  }]);

  return Stepper;
}();

var _default = Stepper;
exports["default"] = _default;