// Big O Notation (O):  It helps us understand how the algorithm's memory usage increases with larger inputs.

// As if the size of input increases the Space Complexity also Increases.

// Linear Space Complexity - O(n)
// Linear space complexity, denoted as O(n), describes an algorithm's memory usage that grows linearly in proportion
// to the input size. In other words, as the input size increases, the amount of memory required by the algorithm also increases linearly.

function createArrayWithSize(n) {
    const newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(i);
    }
    return newArray;
}

const newArray = createArrayWithSize(5);

console.log(newArray);

// Constant Space Complexity - O(1)
// Constant space complexity, denoted as O(1), describes an algorithm's memory usage that remains constant regardless of the input size.
// In other words, the amount of memory used by the algorithm does not change as the input size increases.

function addTwoNumbers(a, b) {
    return a + b;
}

const result = addTwoNumbers(5, 7);

console.log(result);


// Quadratic Space Complexity - O(n^2)
// An algorithm with O(n^2) space complexity often involves nested data structures where the size of the inner data structure is
// influenced by the input size, leading to a quadratic relationship between the input size and memory usage.

function createMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i + j;
        }
    }
    return matrix;
}

const newMatrix = createMatrix(3);

console.log(newMatrix);

// Logarithmic space complexity - O(log n)
// Algorithms with O(log n) space complexity often involve dividing the input data into smaller segments
// or halves during each step, which reduces the amount of memory required for storing intermediate results or data structures.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive step
}

const factorialResult = factorial(5);

console.log(`Factorial of 5 is ${factorialResult}`);



