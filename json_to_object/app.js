// JSON string
var personJSON = '{"firstname":"John","lastname":"Doe","address":{"street":"Evergreen","city":"Springfield","state":"Unknown"}}';

var person = JSON.parse(personJSON);

// access data form 1
console.log('First name: ' + person.firstname);
console.log('Last name: ' + person.lastname);
console.log('City: ' + person.address.city);
// access data form 2
console.log('State: ' + person.address['state']);
// access data form 3
console.log('Street: ' + person['address']['street']);
