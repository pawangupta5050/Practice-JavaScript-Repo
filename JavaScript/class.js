// new keyword - it creates an empty object i.e this, and takes the reference and sets it into __proto__ or [[prototype]]

const newFunction = function(name, age) {
    this.name = name;
    this.age = age;
}

newFunction.prototype.myname = function() {
    console.log(`My name is ${this.name}`);
}

const userPawan =  new newFunction("Pawan", 21)
const userAkash =  newFunction("Akash", 18)
console.log(userPawan.myname())
