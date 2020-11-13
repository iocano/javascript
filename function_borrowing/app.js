// Function borrowing
//     allows us to use the methods of one object on a different object
//     without having to make a copy of that method and maintain it in two separate places.

var person1 = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

var person2 = {
    firstName: 'Jane',
    lastName: 'Doe',
};

console.log(person1.getFullName.apply(person2));
