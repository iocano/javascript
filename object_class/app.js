(function () {
    class Person {
        /**
         * @param {any} firstName
         * @param {any} lastName
         */
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        greet() {
            return 'Hello ' + this.firstName;
        }
    }

    class InformalPerson extends Person {
        /**
         * @param {any} firstName
         * @param {any} lastName
         */
        constructor(firstName, lastName) {
            super(firstName, lastName);
        }

        informalGreet() {
            return 'Yo ' + this.firstName;
        }
    }
    var john = new Person('John', 'Doe');
    var joe = new InformalPerson('Joe', 'Doe');

    console.log(john.greet());
    console.log(joe.greet());
    console.log(joe.informalGreet());
})();
