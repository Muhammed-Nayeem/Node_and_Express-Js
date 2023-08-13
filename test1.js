const people = require("./people/test2");
const _ = require('lodash');

console.log(people.people);
console.log(people.a);
people.testCase();
console.log(_.last(people.people));
