// forEach Method - iterates over all the elements inside an array

const array = ["Pawan", 1, 2, "Rahul"]

const forEachMethod = array.forEach((element, index) => {
    console.log("For Each Method : ",element, index)
    // return element
})


// Map Method - it acts as a loop and returns a new modified array as per the conditions

const array1 = [1,2,3,4,5,6,7,8,9,10]

const mapMethod = array1.map( (element, index) => {
    console.log("Map Method : ", element, index)
    return element + 1
})

console.log(mapMethod)


// Filter - As the name it filters the array and returns a new array with the elements which matches the condition

const array2 = [1,2,3,4,5,6,7,8,9]

const filterMethod = array2.filter( (element, index) => {
    return element % 3 === 0;
})

console.log(filterMethod)

// Reduce - It returns a sinlge solution to the condition using two values Accumulator and Current

const array3 = [1,2,3,4,5,6,7,8,9,10]

const reduceMethod = array3.reduce( (accumulator,current) => {
    const result = accumulator + current
    return result;
})

console.log(reduceMethod)


// How it works with reduce methods
// [1,2,3,4,5,6,7,8,9,10] // Suppose this is the array
// accumulator  currrent  returns
//    1           2         3 --- 1 It is the first element (Accumulator) and  2 is the second element (Currrent)
//    3           3         6 --- Now here the returned value above "3" becomes the new accumulator and next value of an array "3" becomes the current value
//    6           4         10 --- Now here the returned value above "6" becomes the new accumulator and next value of an array "4" becomes the current value
//    10          5         15 --- Now here the returned value above "10" becomes the new accumulator and next value of an array "5" becomes the current value
//    15          6         21 --- Now here the returned value above "15" becomes the new accumulator and next value of an array "6" becomes the current value
//    21          7         28 --- Now here the returned value above "21" becomes the new accumulator and next value of an array "7" becomes the current value
//    28          8         36 --- Now here the returned value above "28" becomes the new accumulator and next value of an array "8" becomes the current value
//    36          9         45 --- Now here the returned value above "36" becomes the new accumulator and next value of an array "9" becomes the current value
//    45          10        55 --- Now here the returned value above "45" becomes the new accumulator and next value of an array "10" becomes the current value

//  then it returns the final value of the Returned as "55"


// Reduce Method Example - Suppose Shopping cart products and the Total Amount

const shoppingCart = [
    {
        productName : 'iPhone 12 Pro',
        price : 120000,
    },
    {
        productName : 'iPod',
        price : 20000,
    },
    {
        productName : 'Charger',
        price : 5000,
    }
]

const totalAmount = shoppingCart.reduce( (accumulator, current) => {
    const total = accumulator + current.price
    return total;
}, 0)

console.log("The Total amount is ",totalAmount)

// Sort Method

const array4 = [500, 800, 150, 250, 200, 100]

const sortMethod = array4.sort( (a, b) => { 
    const sort = a - b; // for Ascending Order & (b-a) for Descending order
    return sort;
})

console.log("The Sort Method is ",sortMethod)

// Find  Method - It returns the first element of an array that satisfies the condition

const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const findMethod = array5.find( (e) => {
    const find = e % 2 === 0
    return find
})

console.log("The Find Method is ",findMethod)

// Example of a Find Method

const employees = [
    {
        employeeName : 'Pawan Gupta',
        empID : 12345,
        employeeDesignation : 'Developer'
    },
    {
        employeeName : 'Akash Gupta',
        empID : 85201,
        employeeDesignation : 'QA Analyst'
    },
    {
        employeeName : 'Raj Gupta',
        empID : 10478,
        employeeDesignation : 'UI Engineer'
    }
]

const findEmployee = employees.find( ({empID}) => {
    return empID === 10478
})

console.log("The Employee name is ",findEmployee.employeeName)

//Every Method - If all the elements satisfy the condition then it returns True otherwise it returns False

const array6 = [1, 2, 3, 4, 5, 6, 7, 8]

const everyMethod = array6.every( (e) => {
    return e === 2
})

console.log("The Every Method returns ", everyMethod)


// Some Method - If any one of the element satisfy the condition then it returns True otherwise it returns False

const array7 = [1, 2, 3, 4, 5]

const someMethod = array7.some( (e) => {
    return e === 2
})

console.log("The Some Method returns ", someMethod)

