// function declaration
console.log('---function declaration: function showThis(){...}---');
function showThis() {
    console.log(this); // show global object
}
showThis();

// function expression (anonymous function)
console.log('---function expression: var displayThis = function(){...}---');
var displayThis = function () {
    console.log(this); // show global object
};
displayThis();

console.log('---------function with parameters----------');

// function declaration with parameters
function logParameters(firstName, lastName) {
    // log first argument
    console.log('log firstName, lastName: ' + firstName + ', ' + lastName);
    // log argument 0 and argument 1
    console.log('log arguments[0], arguments[1]: ' + arguments[0] + ', ' + arguments[1]);
}
logParameters('John', 'Doe');

console.log('---function with default parameter opt 1---');
function defaultParamValOpt1(name = 'unknown') {
    console.log(name);
}
defaultParamValOpt1(); // print default value (unknown)
defaultParamValOpt1('John'); // print John

console.log('---function with default parameter opt 2---');
function defaultParamValOpt2(name) {
    name = name || 'unknown';
    console.log(name);
}
defaultParamValOpt2();
defaultParamValOpt2('Jane');
