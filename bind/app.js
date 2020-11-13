// bind()
//     creates a new function that, when called, has its 'this' keyword set to the provided value,
//     with a given sequence of arguments preceding any provided when the new function is called.

var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

var loggin = function (lang1, lang2) {
    console.log('Loggin: ' + this.getFullName());
    console.log('Primary language: ' + lang1 + ', Secondary language: ' + lang2);
};

// John Doe Primary language: es, Secondary language: en
var logginPerson = loggin.bind(person);
logginPerson('es', 'en');

// John Doe Primary language: es, Secondary language: en
var logginPersonEs = loggin.bind(person, 'es');
logginPersonEs('en');

// John Doe Primary language: en, Secondary language: es
var logginPersonEn = loggin.bind(person, 'en');
logginPersonEn('es');
