// this - Keyword in JavaScript refers to the Global Object of a .js file i.e window

console.log(this)

// this - Keyword for a Normal Function represents the Object for which it is called. (Normal Function)

const thisKeyword = {
    name : "Pawan",
    age : 21,
    about : function () {
        console.log(`My Name: ${this.name} My age: ${this.age}`)
    }
}

thisKeyword.about() // This Keyword here represents to "thisKeyword"

// this - Keyword for an Arrow Function represents Global Object or if the -
// function is nested then it refers to the function above the function for which it is called.

const arrowFunction = () => {
    console.log("this Keyword " , this)

    const arrowFunctionInside = () => {
        console.log("this inside arrow Function " , this)
    }
    arrowFunctionInside()
}

arrowFunction()