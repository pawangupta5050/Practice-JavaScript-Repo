const URL = "https://jsonplaceholder.typicode.com/posts";

// GET EXAMPLE

fetch(URL) // By default it uses GET Request
    .then((response) => {
        if (response.ok) {
            console.log(response)
            return response.json() // It returns the data in Object.
        } else {
            throw new Error("Couldn't fetch");
        }
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })

// POST EXAMPLE

fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => {
        if (response.ok) { // ok - If true then response recieved, if false then response not received.
            console.log(response)
            return response.json() // It returns the data in Object.
        } else {
            throw new Error("Couldn't fetch");
        }
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })