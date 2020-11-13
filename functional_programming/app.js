function mapForEach(array, fn) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        newArr.push(fn(array[i]));
    }
    return newArr;
}

var array1 = [1, 2, 3];
console.log(array1);

var array2 = mapForEach(array1, function (item) {
    return item * 2;
});
console.log('Item i multiply by 2');
console.log(array2);

var array3 = mapForEach(array1, function (item) {
    return item > 2;
});
console.log('Item i greater than 2');
console.log(array3);

var checkLimit = function (limiter, item) {
    return item > limiter;
};

var array4 = mapForEach(array1, checkLimit.bind(this, 1));
console.log('Item i greater than 1');
console.log(array4);

// return a function that receives one parameter
var checkLimitSimplified = function (limit) {
    return function (limit, item) {
        return item > limit;
    }.bind(this, limit);
};

var array5 = mapForEach(array1, checkLimitSimplified(2));
console.log('Item i greater than 2');
console.log(array5);
