// Default Parameters

let number = 123456;

const defParam = (param = "Pawan") => { // Passing the default value to the parameter
    console.log(param);
}

defParam();

// Rest Parameters

const restParam = (a, b, ...rest) => { // rest parameters returns the array of parameters that are left
    console.log("a = ", a)
    console.log("b = ", b)
    console.log("rest = ", rest)
}

restParam(1, 2, 3, 4, 5, 6); // Passing Arguement

// Passing Array and Object as parameters & destructuring it

const object = {
    name : 'foo',
    age : 36,
    hobbie : 'bar',
}

const array = [
    "Akashi",
    "Pawan",
    "Raj"
]

const destructuringFunction = (object, array) => {
    console.log(object.name)

    for(let i of array) {
        console.log(i)
    }
}

destructuringFunction(object, array)

// Callback function

const callback = () => {
    console.log("I'm a callback function")
}

const parentFunction = (callback) => {
    callback();
}

parentFunction(callback);