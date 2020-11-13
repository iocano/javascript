var mixedArray = [
    100,
    true,
    {
        name: 'John',
        lastName: 'Doe',
    },
    function () {
        console.log('Hello World');
    },
    'Mixed array',
];

// first element
console.log(mixedArray[0]);
// lastName prop of third element
// @ts-ignore
console.log(mixedArray[2].lastName);
// call function on fourth position
// @ts-ignore
mixedArray[3]();
// element count
console.log(mixedArray.length);
// remove last element
console.log(mixedArray.pop());

var array1 = ['a', 'b', 'c'];

// @ts-ignore
Array.prototype.name = 'array1';
console.log('---Array interation with for in---');
// don't use for in to iterate over array (iterate 'name' property also)
for (var prop in array1) {
    console.log(prop + ': ' + array1[prop]);
}

console.log('-----Array interation with for-----');
// use conventional for
for (var i = 0; i < array1.length; i++) {
    console.log(i + ': ' + array1[i]);
}
