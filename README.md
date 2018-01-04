# mstate
Pure JavaScript immutable state pattern with element binding example

```javascript

let state = new State({ val: 0, bindTo: 'p' });

document.querySelector('#someIncrementalButton').addEventListener('click', function () {
    state.update('val', state.getState().val + 1)
})

document.querySelector('#someDecrementalButton').addEventListener('click', function () {
    state.update('val', state.getState().val - 1)
})

```

Sideproject is under development, fork if you want, i may have messed up the state pattern
