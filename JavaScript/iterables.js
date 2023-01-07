// Iterables are something which can apply loops to - ex. Array or String

// Sets - Array like objects

const setObject = new Set(["Pawan"]);

setObject.add("Akash") // adding an element to the Set object

console.log(setObject);

setObject.forEach((e) => console.log("Set Object : ",e));

// Map Object - It can accept Key of any DataType

const mapObject = new Map([["Name", "Pawan"]]); // ["Key", "Value"]

mapObject.set("Age", 21 ) // ("Key", "Value")
mapObject.set(1, "25") 

console.log(mapObject)


// Optional Chaining

const optionalChaining = {
    Name : "Pawan",
    age : 21
}

console.log(optionalChaining.Name) // Pawan
console.log(optionalChaining.FullName) // undefined
console.log(optionalChaining.FullName.age) // error 
console.log(optionalChaining.FullName?.age) // undefined (To avoid errors optional chaining comes into existence)
