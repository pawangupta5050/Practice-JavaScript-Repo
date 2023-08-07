const object = {
    name : 'Pawan',
    age : 25, 
    "Hobbies of the person" : {
        "Cycling" : "25%",
        "Running" : "58%",
        "Traveling" : "17%"
    },
    Bestfriend : [
        "Akash",
        "Raj",
        "Sunil"
    ]
}

console.log(object.name, object.age) // Object . (Dot) Notation
console.log(object['Bestfriend'], object['Hobbies of the person']) // Object [] (Bracket) Notation

const {name: Name1, age: age1} = object;

console.log(Name1, age1, object.Bestfriend[0]) // nested Destructuring