// new keyword - it creates an empty object i.e this, and takes the reference and sets it into __proto__ or [[prototype]]
// new keyword - it creates an Instance of an Object or a function for which it is called 

const newFunction = function(name, age) {
    this.name = name;
    this.age = age;
}

newFunction.prototype.myname = function() {
    console.log(`My name is ${this.name}`);
}

const userPawan =  new newFunction("Pawan", 21)
const userAkash =  newFunction("Akash", 18)
console.log(userPawan.myname)

// Class 
 
class OnlineStore {
    constructor(custName, custType, custJoining) { // Instance of a class
        this.custName = custName;
        this.custType = custType;
        this.custJoining = custJoining;
    }

    isPremium() {
        return this.custType === "Premium";
    }
}

const cust1 = new OnlineStore("Pawan", "Premium", "12/1/2023")

console.log(cust1.isPremium())

class Customer extends OnlineStore { // Javascript inheritence 
    constructor(custName, custType, custJoining, custMobile){
        super(custName, custType, custJoining)
        this.custMobile = custMobile;
    }

    custMobile() {
        return this.custMobile;
    }
}

const customer2 = new Customer("Akash")