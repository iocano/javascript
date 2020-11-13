var name = 'global object';

// object declaration with one method
var object1 = {
    name: 'Object Name',
    method1: function () {
        var self = this; // store reference to object1

        var setName = function (newName) {
            // this.name = newName; // UPDATE GLOBAL variable name
            self.name = newName; // UPDATE object1.name;
        };

        setName('New Object One'); // Update object1 name
    },
};

console.log(object1);

// call object1 showThis method
object1.method1();

console.log(object1);
