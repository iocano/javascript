// closure: inner function has reference to outer function scope
function say(message) {
    return function (name) {
        console.log(message + ' ' + name);
    };
}
var sayMessageTo = say('hello')('Jane'); // log hello Jane

// create 3 functions, first log 0, second log 1, third log 2: FAIL!
function buildFunctions() {
    var functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push(function () {
            console.log(i);
        });
    }
    return functions;
}
// all function log '3' because is the current value of 'i' on the execution context
var functions = buildFunctions();
functions[0](); // log 3
functions[1](); // log 3
functions[2](); // log 3

// create 3 functions, first log 0, second log 1, third log 2
function buildFunctions2() {
    var functions = [];
    for (var i = 0; i < 3; i++) {
        let j = i; // let create a block scope variable
        functions.push(function () {
            console.log(j);
        });
    }
    return functions;
}

var functions2 = buildFunctions2();
functions2[0](); // log 0
functions2[1](); // log 1
functions2[2](); // log 2

// create 3 functions, first log 0, second log 1, third log 2
function buildFunctions3() {
    var functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push(
            // create different execution context for each iteration
            (function (j) {
                return function () {
                    console.log(j);
                };
            })(i)
        );
    }
    return functions;
}

var functions3 = buildFunctions3();
functions3[0](); // log 0
functions3[1](); // log 1
functions3[2](); // log 2
