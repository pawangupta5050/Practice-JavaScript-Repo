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

const {name: Name1, age: age1} = object;

console.log(Name1, age1)
