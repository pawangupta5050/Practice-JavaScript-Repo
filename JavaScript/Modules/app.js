import {firstName as fname} from "./utils/fName.js"; // Named Import - the import names that are in Curly Braces

import {age} from "./utils/age.js";

import Person from "./utils/Person.js"; // Default Import - the default import does not require curly braces

console.log(fname, age)

const person = new Person('Pawan', 21, 'Mumbai, Maharashtra')

person.personInfo()