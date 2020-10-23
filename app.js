var person = new Object();
var job = 'professor';

person.firstName = 'John';
person.lastName = 'Simith';

person[job] = 'Instructor';

console.log(person);
console.log(person.firstName);
console.log(person.lastName);