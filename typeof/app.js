'use strict';

var a = 10;
console.log('typeof ' + a + ': ' + typeof a); // log number

var b = 'John Doe';
console.log("typeof '" + b + "': " + typeof b); // log string

var c = {};
console.log('typeof {}: ' + typeof c); // log object

var d = [];
console.log('typeof []: ' + typeof d);
console.log('Object.prototype.toString.call( [] ): ' + Object.prototype.toString.call(d));

console.log('typeof undefined: ' + typeof undefined);
console.log('typeof null: ' + typeof null);

var e = function () {};

console.log('typeof function(){}: ' + typeof e);
