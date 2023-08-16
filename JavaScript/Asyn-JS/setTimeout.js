// setTimeout()
// The setTimeout() function is used to execute a given function or code snippet after a specified delay (in milliseconds). 
// It schedules a one-time execution.

// clearTimeout()
// The clearTimeout() function is used to cancel the execution of code scheduled with setTimeout() before it has a chance to run.

console.log('Starting');

for(let i = 0; i < 100; i++) {
    console.log('hello');
}

function print() {
    console.log('SetTimeout Function');
}

const setID = setTimeout(print, 1000)

// clearTimeout(setID);

console.log('End');