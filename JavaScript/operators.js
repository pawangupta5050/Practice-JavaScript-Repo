let value1 = 1;
let value2 = 3;
let value3 = "3";

// Comparison Operators
console.log(value1 > value2);
console.log(value1 < value2);
console.log(value2 == value3);
console.log(value2 === value3);
console.log(value2 != value3);
console.log(value2 !== value3);
console.log(value2 !== value3);

// Ternary Operators

const ternaryOperator = undefined ? 'True' : 'False';
const ternaryOperator1 = null ? 'True' : 'False';
const ternaryOperator2 = "" ? 'True' : 'False';
const ternaryOperator3 = 0 ? 'True' : 'False';
const ternaryOperator4 = 123 ? 'True' : 'False';
const ternaryOperator5 = "Pawan" ? 'True' : 'False';

console.log("Ternary Operator undefined - ",ternaryOperator)
console.log("Ternary Operator null - ",ternaryOperator1)
console.log("Ternary Operator empty string - ",ternaryOperator2)
console.log("Ternary Operator zero - ",ternaryOperator3)
console.log("Ternary Operator number - ",ternaryOperator4)
console.log("Ternary Operator string - ",ternaryOperator5)


// Logical Operators
const logicalOperator = value1 == value2 && value2 == value3;
const logicalOperator1 = value1 > value2 || value2 === value3;

console.log("Logical Operator AND - ", logicalOperator)
console.log("Logical Operator OR - ", logicalOperator1)