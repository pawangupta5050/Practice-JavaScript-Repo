// new keyword - it creates an empty object i.e this, and takes the reference and sets it into __proto__ or [[prototype]]
// new keyword - it creates an Instance of an Object or a function for which it is called 

const newFunction = function(name, age) {
    this.name = name;
    this.age = age;
}

newFunction.prototype.myname = function() {
   return `My name is ${this.name}`;
}

const userPawan =  new newFunction("Pawan", 21)
const userAkash =  newFunction("Akash", 18)
console.log(userPawan.myname())

// Class 
 
class empData {
    constructor(name, designation, age, number) {
        this.name = name;
        this.designation = designation;
        this.age = age;
        this.number = number;
    }

    isDeveloper() {
        return this.designation === 'Developer';
    }

    isAdult() {
        return this.age >= 18;
    }

    mobileNumber() {
        return this.number;
    }
}

const emp1 = new empData("Pawan", "QC", 15, 185254649)

console.log(emp1.mobileNumber())

class newClass extends empData { // Inheritance from parent class
    constructor(name, designation, age, number, exp){ // adding a proprerty to the constructor
        super(name, designation, age, number); // Accessing the property from the Parent Constructor
        this.exp = exp;
    }

    isExperienced (){
        return this.exp >= 5? "Experienced" : "Fresher";
    }
}

const emp2 = new newClass("Akash", "Developer", 18, 7412589630, 3)

console.log(emp2.isExperienced())

console.log(emp2.isDeveloper())

// Get and Set in Class Methods

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullname() { // It makes a Method act as a Property inside a class
        return `${this.firstName} ${this.lastName}`;
    }

    set fullname(fullname) {
        const [firstname, lastName] = fullname.split(' '); // Splut Method separates the Sentence from the space and returns it into an array
        this.firstName = firstname;
        this.lastName = lastName;
    }

    static personInfo() { // Static methods acts as a Property and does not require any Instance when called
        return `This is a person Info`;
    }
}

const pawanGupta = new Person("Pawan", "Gupta", 21)

pawanGupta.fullname = "Akash Gupta"

console.log(pawanGupta)

console.log(Person.personInfo()) // Calling Function directly from a Class