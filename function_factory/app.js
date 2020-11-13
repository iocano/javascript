// A factory function is any function which is not a class or constructor
// that returns a (presumably new) object.

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        },
    };
}

var circle1 = createCircle(1);
console.log(circle1);

var circle2 = createCircle(2);
console.log(circle2);
