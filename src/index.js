class State {
  constructor(initialState) {
    this.currentState = new Object(initialState);
    this.element = initialState.bindTo
      ? document.querySelector(initialState.bindTo)
      : null;
  }

  update(k, v) {
    for (const key in this.currentState) {
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

  handleUI(state) {
    this.element.innerText = state.val;
  }

  getState() {
    return this.currentState;
  }
}
