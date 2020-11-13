var person = {
    firstName: 'Default',
    lastName: 'Default',
    age: 30,
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log('person object: ' + person.getFullName());
console.log('--------------------');

var john = {
    firstName: 'John',
    lastName: 'Doe',
};

// Don't modify __proto__ property, only for demo
john.__proto__ = person;
console.log('john object: ' + john.getFullName()); // Log John Doe
console.log('--------------------');

var jane = {
    firstName: 'Jane',
};

// Don't modify __proto__ property, only for demo
jane.__proto__ = person;
console.log('jane object: ' + jane.getFullName()); // Log Jane Default
console.log('--------------------');

console.log('Iterating john properties:');
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}
