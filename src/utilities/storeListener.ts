// //https://stackoverflow.com/a/16788517
// function objectEquals(x, y) {
//     'use strict';
//
//     if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
//     // after this just checking type of one would be enough
//     if (x.constructor !== y.constructor) { return false; }
//     // if they are functions, they should exactly refer to same one (because of closures)
//     if (x instanceof Function) { return x === y; }
//     // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
//     if (x instanceof RegExp) { return x === y; }
//     if (x === y || x.valueOf() === y.valueOf()) { return true; }
//     if (Array.isArray(x) && x.length !== y.length) { return false; }
//
//     // if they are dates, they must had equal valueOf
//     if (x instanceof Date) { return false; }
//
//     // if they are strictly equal, they both need to be object at least
//     if (!(x instanceof Object)) { return false; }
//     if (!(y instanceof Object)) { return false; }
//
//     // recursive object equality check
//     let p = Object.keys(x);
//     return Object.keys(y).every(function (i) { return p.indexOf(i) !== -1; }) &&
//         p.every(function (i) { return objectEquals(x[i], y[i]); });
// }
//
// export default (manager, store) => {
//     let lastState = {
//         synth: {}
//     };
//     return () => {
//         const currentState = store.getState();
//
//         if (lastState.synth.running !== currentState.synth.running && currentState.synth.running === true) {
//             manager.start();
//             console.log('start')
//         }
//
//         if (lastState.synth.running !== currentState.synth.running && currentState.synth.running === false) {
//             manager.stop();
//             console.log('stop')
//         }
//
//         if (!objectEquals(lastState.synth.progression, currentState.synth.progression)) {
//             manager.reset();
//             manager.setProgression(currentState.synth.progression);
//             console.log('setProgression')
//         }
//
//         if (!objectEquals(lastState.synth.sound, currentState.synth.sound)) {
//             manager.setSound(currentState.synth.sound);
//             console.log('setSound')
//         }
//
//         lastState = currentState;
//     }
// };
