// closures are the functions that are lexically present inside another function.

const parentFunc = () => {
    let num1 = 21;
    let num2 = 59
    closureFunc = () => {
        let num3 = num1 + num2;
        return num3;
    }
    return closureFunc
}

const hello = parentFunc()() // Calling the closureFunc

console.log(hello)