// Currying
//     is a transformation of functions that translates a function from callable as f(a, b, c)
//     into callable as f(a)(b)(c).
//     In others words create a copy of a function but with preset parameters

function multiply(a, b) {
    return a * b;
}

const PI = 3.14159265;
var doubleValue = multiply.bind(this, 2);

console.log('2 x PI = ' + doubleValue(PI));
