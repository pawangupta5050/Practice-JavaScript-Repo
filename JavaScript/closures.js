// When a function is returned from an another function and it remembers its Lexical scope and information about its Lexical Environment
//  from which it was retured which it will be useful for future reference, then that function is known as Closure.

// Example 1
const parentFunc = () => {
    let num1 = 21;
    let num2 = 59
    closureFunc = () => {
        let num3 = num1 + num2;
        return num3;
    }
    return closureFunc; // now when closureFunc is returned it is returned with the information of its lexical scope
}

const hello = parentFunc() // Calling the closureFunc

console.log(hello()) // Now here it remembers the lexical scope and its information (Variables "num1" and "num2)

// Example 2

const myFunction = function(x) {
    const squareFunction = function(y) {
        const square = y ** x;
        return square;
    }
    return squareFunction;
}

const square = myFunction(3)
console.log(square(2))

// Example 3

const callingFunction = () => {
    let counter = 1;
    return () => {
        if (counter === 1) {
            console.log("Hello")
            counter++;
        }else {
            console.log("already called");
        }
    }
}

const ans =callingFunction();

ans()
ans()
ans()