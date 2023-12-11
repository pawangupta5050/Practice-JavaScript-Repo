// Synchronous - single-threaded (One line of a code at a time, cant execute the next line before executing the first line)
// Hoisting - The Assignment of Functions and Variables inside Global Scope before executing the code
// Temporal Dead Zone (TDZ) - The time period between the Uninitialization to Initialization of the variable. (when an variable is initialized)
// Call Stack - The stack where the Execution Context are stored on one above the other
// Lexical Scope - The variable or a function which is inside another function can access the variables inside the function
//  but can also access the variables outside the function, so now it is called as the inner function is lexically present inside the outer function

// Executed in 2 Phases - 1. Compilation -> * Errors Checking * Determining the Scope
//                        2. Code Execution -> Creates a new Execution Context (Global Execution Context)
//                                           * Creation Phase -> Memory Creation Phase
//                                           * Line by Line code execution

// At very first all the code is Compiled and checked the early errors in the code
// second the scope is determined 
// Global scope is created and it determines the scope.
// First it saves the firstname, lastname, fullname and funct in the memory and gives undefine to variables and the whole as is function to "Funct"
// then ...
console.log(this); // prints the window object that gets reference of Window object
// console.log(window); // prints the window object that contains lots of methods
console.log(funct); // prints the whole function as it is.
funct();
console.log(fullname); // prints Undefined as it is not yet declared 

function funct() {
    console.log('firstName'); // prints the string in the functional Execution context
} // the function contains a new execution context

var firstName = "Pawan" // the firstname is Declared and ininitialises with the string "Pawan" and removed temporary "undefined"
var lastName = "Gupta" // the lastname is Declared and ininitialises with the string "Gupta" and removed temporary "undefined"
var fullname = firstName + " " + lastName; // the fullname is declared and ininitialises as the concatenated string of the firstname and lastname with a space and removed temporary "undefined"
console.log(fullname) // prints the fullname