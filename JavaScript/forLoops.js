// For loop

for (let i = 0; i < 5; i++) {
    if(i === 2) break; // using break keyword
    console.log("For Loop : ",i)
}

// For of loop - it Returns the element inside an Array
const array = ["Pawan", "Akash", "Raj", "Aryan", "Sunil"]

for (let i of array) {
    console.log("For of Loop",i)
}

// For in loop - it Returns the index of an Array

for (let i in array) {
    // console.log(typeof i)  // string
    if(i == 2) continue; // using continue keyword
    console.log("For in Loop",i)
}