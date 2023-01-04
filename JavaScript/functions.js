// Function Declaration

function Hello() {
    let message = "This is a normal function";
    console.log(message);
}

Hello();

// Function Expression - Assigning a Function to a Variable

const funcExpression = function HelloWorld() {
    let message = "This is a Function Expression";
    console.log(message);
}

funcExpression();

// Arrow Functions - Assigning a Arrow

const arrowFunc = () => console.log("This is an Arrow Function"); // For single Statement

arrowFunc()

const arrowFunc2 = (para1, para2) => { // For multiple Statements
    const output = para1 + para2;
    console.log(output); 
}

arrowFunc2(56, 18)