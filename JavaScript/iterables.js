// Iterables are something which can apply loops to (eg. For...of) and possess length property and which can be accessed using index - ex. Array or String

// Sets - Array like objects

const setObject = new Set(["Pawan"]);

setObject.add("Akash") // adding an element to the Set object
setObject.has("Pawan") // checks if the element is present in the Set.

console.log(setObject);

setObject.forEach((e) => console.log("Set Object : ",e));

// Map Object - It can accept Key of any DataType 

const mapObject = new Map([["Name", "Pawan"]]); // ["Key", "Value"]

mapObject.set("Age", 21 ) // it appends the element in the Map Object using ("Key", "Value")
mapObject.set(1, "25") 

console.log(mapObject.keys()) // It returns all the keys in the Map object
console.log(mapObject)


// Optional Chaining

const optionalChaining = {
    Name : "Pawan",
    age : 21
}

console.log(optionalChaining.Name) // Pawan
console.log(optionalChaining.FullName) // undefined
// console.log(optionalChaining.FullName.age) // error 
console.log(optionalChaining.FullName?.age) // undefined (To avoid errors optional chaining comes into existence)
