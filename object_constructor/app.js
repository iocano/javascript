// function factory: function that return an object
// function Person(firstName, lastName) {
//     var object = {};
//     object.firstName = firstName;
//     object.lastName = lastName;
//     return object;
// }

/**
 * @param {string} firstName
 * @param {string} lastName
 */
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
};

Person.prototype.getFormalName = function () {
    return this.lastName + ', ' + this.firstName;
};

var john = new Person('John', 'Doe');
console.log(john.getFullName());

var jane = new Person('Jane', 'Doe');
console.log(jane.getFormalName());
