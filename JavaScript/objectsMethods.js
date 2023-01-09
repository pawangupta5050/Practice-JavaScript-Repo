// Call - It determines for which Object this will be called

const object = {
    name : "Pawan",
    age : 21,
    about : function about(param1, param2) {
        console.log(`My name is ${this.name}`);
        console.log(`Parameter 1: ${param1}, Parameter 2: ${param2}`);
    }
}

// call syntax  - objectName.fuctionName.call(objectName, "argument1", "argument2", "argumentN")

object.about.call(object, "Akash", 18); // (Here this keyword refers to object) Calling a Function inside an object and passing the arguments

// Apply - Same as call() : Difference is that it takes the arguments in an array

object.about.apply(object, ["Raj", 28]) 

// Apply syntax - objectName.functionName.apply(objectName, ["argument1", "argument2", "argumentN"])

// Object.assign() Method 

const object1 = {
    name : "Akash",
    age : 18
}
const object2 = object1 // It is getting the reference to the object2 of object1

const object3 = Object.assign({}, object1) // Now here a new object3 is being created 
// const object3 = ({...object1}) // also be done with spread operator ({...object1})

object1.about = "Developer"

console.log("Original Object : ", object1)
console.log("Reference Object : ", object2)
console.log("Cloning of the object : ",object3)

// Object.create() - it is ame as Object.assign it just don't clone completely just we can access the methods and key avlue pair of the Parent object

const objectCreate = Object.create(object1)

console.log(objectCreate) // as we get an empty object 

console.log(objectCreate.name) // But we can access the values of Parent object - It just keeps the reference of the parent object in __proto__ or [[prototype]]

// Object.create - Example

const createMethod = {
    myName : function() {
        return `My name is ${this.name}`;
    },
    myAge : function() {
        return `My age is ${this.age}`;
    }
}

const functionName = (name, age) => {
    const emptyObject = Object.create(createMethod); // Empty object with reference of all the methods of the object (createMethod) 
    emptyObject.name = name;
    emptyObject.age = age;
    return emptyObject;
}

const userPawan = functionName("Pawan", 21)

console.log(userPawan)

console.log(userPawan.myName()) // So we can access the methods of the Parent Object