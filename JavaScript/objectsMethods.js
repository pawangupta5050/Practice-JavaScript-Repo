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

