// Async - The keyword before any function makes that function Asynchronous and returns Promise.

// Await - It is used inside an Async function.
// The Await keyword makes the function pause the execution and wait for a resolved Promise before it continues.

const URL = "https://jsonplaceholder.typicode.com/posts"; 

const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

getData().then(data => console.log(data));