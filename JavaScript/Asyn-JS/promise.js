// Promise - Object that represents the eventual completion or failure of an asynchronous operation, and its resulting value.

// Stages :

// Pending - The initial state of a promise when it's created. This state represents the ongoing execution of an asynchronous operation.

// Fulfilled (Resolved) - The state when the asynchronous operation is successfully completed. At this point, the promise holds a resolved value.

// Rejected - The state when the asynchronous operation encounters an error or failure. At this point, the promise holds a reason for the rejection.
//              _______(If True)_______(Resolved)_______
//             |                                       |
// Promise --->|                                       |----Output
//             |_______(If False)______(Rejected)______|

// then() - Registers callbacks for when the promise is resolved or rejected.
// This method takes two arguments: a callback for the resolved state and a callback for the rejected state.
// then() also returns a Promise that we can use and make a chaining

// catch() - Registers a callback specifically for handling rejected promises.

// finally() - Registers a callback that is executed regardless of whether the promise is resolved or rejected.


// const bucket = ['Fruits', 'Vegetables', 'Salt', 'Cold Drinks', 'Rice', ];

// const createPromise = new Promise((resolve, reject) => {
//     if(bucket.includes('Vegetables') && bucket.includes('Salt') && bucket.includes('Rice')){
//         resolve('Fried Rice is Ready');
//     }else{
//          reject('Cannot find ingredients for Fried Rice')
//     }
// })


// createPromise.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// Chaining of then()

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
              reject("element not found");
            }
          },time)
    })  
  }

changeText(heading1, "one", "red", 1000) // It returns a Promise which we can consume later
  .then(()=>changeText(heading2, "two", "purple", 1000)) // It also returns a Promise. 
  .then(()=>changeText(heading3, "three", "green", 1000))
  .then(()=>changeText(heading4, "four", "orange", 1000))
  .then(()=>changeText(heading5, "five", "orange", 1000))
  .then(()=>changeText(heading6, "six", "orange", 1000))
  .then(()=>changeText(heading7, "seven", "orange", 1000))
  .then(()=>changeText(heading8, "eight", "orange", 1000))
  .then(()=>changeText(heading9, "nine", "orange", 1000))
  .then(()=>changeText(heading10, "ten", "orange", 1000))
  .catch((error)=>{
      alert(error);
  })