// pollyfill object create if not exists (no available in old browsers)
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only accepts one parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}

// Base Object
var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

var john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';
console.log(john.getFullName());
