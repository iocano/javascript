// call()
//     method calls a function with a given this value and arguments provided individually

var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

var loggin = function (lang1, lang2) {
    console.log('Loggin: ' + this.getFullName());
    console.log('Available langs: ' + lang1 + ', ' + lang2);
};

loggin.call(person, 'en', 'es');
