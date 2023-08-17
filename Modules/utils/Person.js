class Person {
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    personInfo() {
        console.log(this.name, this.age, this.address);
    }
}

export default Person; // Default Export (We can only export 1 default throughout the file)