// Browser Consist of ----> JS Engine (Chrome - V8, FireFox - SpiderMonkey, etc) + WebApi

// Over all there are Mainly 4 components that work together to get the expected results.

// JS Engine which includes "Call Stack" - The stack where the Execution Context are stored on one above the other.

// Browser's "Web Api" - WebApi's take the Callback functions and passes it to Callback Queue whenever it is called.

// Callback Queue - The queue where the callback functions wait to get executed 
// whenever Callstack gets empty and event loop allows them to get into that Stack

// Event Loop - Event Loop monitors CallStack and Callback Queue and manage them to execute whenever the Callstack gets empty.

// Callback Queue are further divided into 2 categories - 
// Microtask Queue (Priority Tasks) and Macrotask Queue (Less Priority Tasks).

// Microtask Queue ----> Promise resolutions (.then, .catch, .finally), Mutation Observer callbacks ,process.nextTick (Node.js)
// Macrotask Queue ----> setTimeout, setInterval, Network requests (Ajax) AND DOM rendering updates

// console.log('Starting Point')
// const buttonElement = document.querySelector('.btn');
// const hello = () => {
//     console.log('Middle point');
// }
// buttonElement.addEventListener('click', (e) => {
//     console.log('Inside callback function');
// });

// hello();
// console.log('Ending Point');

const buttonElements = document.querySelectorAll('button');

for(let button of buttonElements) {
    button.addEventListener('click', (e) => {
        e.target.style.backgroundColor = "Yellow";
        e.target.style.color = "Grey";
    });
}