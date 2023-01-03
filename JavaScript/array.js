const array1 = [1,2,3,4,5]

// Array are Reference Types

// Array Methods

array1.pop() // Removes the element at the end of an array

array1.push(6) // Adds the element at the end of an array

array1.shift() // Removes the first element of an array

array1.unshift(10) // Adds the element at the start of an array

console.log(array1)

// Spread Operator
const [...array2]= array1; 
console.log(array2)

// Array Destructuring 

const [arr1, arr2, ...arr3] = array1;

console.log(arr1, arr2, arr3)

// Array Destructuring of Object

const arrayOfObject = [
    {
        name : 'Pawan',
        age : 21,
        hobby : 'Dancing'
    },
    {
        name : 'Akash',
        age : 18,
        hobby : 'Dancing'
    },
    {
        name : 'Raj',
        age : 89,
        hobby : 'Dancing'
    },
    {
        name : 'Sunil',
        age : 8,
        "hobby of pawan" : 'Dancing'
    },
]


const [,,{name, age}] = arrayOfObject

for (let i of arrayOfObject) {
    console.log(i.name, i.age, i["hobby of pawan"])
}

// While Loop in array 

const arrayForLoop = [1, 2, 3, 4, 5, 6, 7]

let i = 1;

while (i <= arrayForLoop.length) {
    console.log(i);
    i++;
}