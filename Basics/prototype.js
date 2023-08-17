// Prototypes are the empty object that has been provided by the Function
// Arrow functions does not have Prototype and does not contain Constructors

const functionPrototype = function(name, age) {
    const emptyObject = Object.create(functionPrototype.prototype)
    emptyObject.name = name;
    emptyObject.age = age;
    return emptyObject;
}

console.log(functionPrototype.prototype) // Empty object 

functionPrototype.prototype.myName = function() { // Adding a Function inside a prototype Object
    return `My name is ${this.name}`;
}

functionPrototype.prototype.myAge = function() {
    return `My age is ${this.age}`;
}

const userPawan = functionPrototype("Pawan", 21)

console.log(userPawan.myName()) // Accessing the Function that was under Prototype