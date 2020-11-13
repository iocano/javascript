(function () {
    /**
     * @param {string} name
     */
    function Person(name) {
        this.name = name;
    }

    var jane = new Person('Jane');

    console.log('typeof jane: ' + typeof jane); // object
    console.log('jane instance of Person: ' + (jane instanceof Person)); // true
})();
