//If statement
if(typeof null === "number") {
    console.log("IF : Datatype of Null is not an Object")
}else {
    console.log("IF : Datatype of Null is an Object")
}

//If else statement
if(typeof null === "number") {
    console.log("IF : Datatype of Null is not an Object")
}else if(typeof null === "string") {
    console.log("IF : Datatype of Null is not an Object")
}else if(typeof null === "object") {
    console.log("IF : Datatype of Null is an Object")
}else {
    console.log("IF : Datatype of Null is not an Object")
}

//Switch Statements
const array = ["Mon", "Tue", "Wed", "Thu"]

switch(array[0]){
    case "Mon" : console.log("Monday");
    break
    case "Tue" : console.log("Tuesday");
    break
    case "Wed" : console.log("Wednesday");
    break
    case "Thur" : console.log("Thursday");
    break
    default : console.log("default");
    break
}