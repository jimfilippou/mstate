"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = function () {
  function State(initialState) {
    _classCallCheck(this, State);

    this.currentState = new Object(initialState);
    this.element = initialState.bindTo ? document.querySelector(initialState.bindTo) : null;
  }

  _createClass(State, [{
    key: "update",
    value: function update(k, v) {
      for (var key in this.currentState) {
        if (this.currentState.hasOwnProperty(key)) {
          if (key === k) {
            // this.currentState = new Object()s;
            this.currentState = Object.assign({}, this.currentState, { val: v });
            if (this.element) {
              this.handleUI(this.currentState);
            }
          }
        }
      }
    }
  }, {
    key: "handleUI",
    value: function handleUI(state) {
      this.element.innerText = state.val;
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.currentState;
    }
  }]);

  return State;
}();