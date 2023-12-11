// Big O Notation (O): it is Expressed in terms of Inputs

// As if the size of input increases the Time Complexity also Increases.

// Linear Time Complexity - O(n)
// An algorithm with a time complexity of O(n) implies that the number of operations performed by the algorithm 
// is directly proportional to the size of the input. Each element of the input data is processed once.
// whenever there is a loop in the program the Time Complexity is Linear


const summation = (input) => {
    let sum = 0;                            // It only Repeats 1 Times
    for(let i = 1; i <= input; i++){
        sum += i;                           // It repeats 4 Times
    }
    return sum;                             // It only Repeats 1 Times
}

const ans = summation(4);

console.log(ans);

// Constant Time Complexity - O(1)
// An algorithm with O(1) time complexity implies that the number of operations performed by the 
// algorithm does not change based on the size of the input.

const summation2 = (input) => {
    return (input * (input + 1)) / 2;                // It only Repeats 1 Time regardless of the size of the input
}

const ans2 = summation2(4);

console.log(ans2)

// Quadratic time complexity - O(n^2)
// An algorithm with O(n^2) time complexity typically involves nested loops where each iteration of an outer loop triggers 
// a set of operations within an inner loop. This results in the total number of operations being proportional to the product 
// of the input size and itself, resulting in a quadratic growth pattern.
// The execution time grows with the square of the input size.

const summation3 = (input) => {
    let sum = 0;
    for(let i = 1; i <= input; i++){
        sum += i;                           
        for(let j = 1; j <= input; j++){
            sum += j;                          
            
        }
    }
    return sum;                            
}

const ans3 = summation3(4);

console.log(ans3)


// Cubic time complexity - O(n^3)
// The execution time grows with the square of the input size. It is nested 3 times.

// Logarithmic time complexity - O(log n)
// An algorithm with O(log n) time complexity often divides the input data into smaller segments
// or halves during each step, significantly reducing the number of elements to process with each iteration.
// This type of behavior is common in algorithms that exploit binary search or divide-and-conquer strategies.

function countDivisions(number) {
    let count = 0;
    while (number > 1) {
        number = Math.floor(number / 2);
        count++;
    }
    return count;
}

const number = 16;
const divisions = countDivisions(number);

console.log(`The number ${number} can be divided ${divisions} times by 2.`);

