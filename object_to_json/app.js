var person = new Object();
person.firstname = 'John';
person.lastname = 'Doe';
person.address = new Object();
person.address.street = 'Evergreen';
person.address.city = 'Springfield';
person.address.state = 'Unknown';

// convert object to JSON (JavaScript Object Notation)
var jsonPerson = JSON.stringify(person);

console.log(jsonPerson);
