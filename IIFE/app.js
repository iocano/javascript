// immediately invoked function expression
(function (name) {
    console.log('Hello ' + name);
})('Jane');

// greets stores the function return value
var greets = (function (name) {
    return 'Hello ' + name;
})('John');
console.log('greets: ' + greets);

// pass global object as argument to function
var number = 1000;

(function (global) {
    // global object is not necessary to mod globalVar,
    global.number = 99;
    // ...unless another 'globalVar' is declared in function scope
})(window, 'John');

console.log('global.number = ' + number); // globalVar now is 99
