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
