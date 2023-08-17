// open(): This method is used to initialize a new request. It sets up the type of request (e.g., GET, POST, etc.), 
// the URL to send the request to, and whether the request should be asynchronous or not.

// onreadystatechange: This property holds a callback function that gets executed whenever the readyState property changes. 

// readyState: The readyState property is an integer that represents the state of the XMLHttpRequest object.

// 0: UNSENT - The request has been created, but open() has not been called yet.
// 1: OPENED - open() has been called.
// 2: HEADERS_RECEIVED - send() has been called and headers and status are available.
// 3: LOADING - The response's body is being received.
// 4: DONE - The operation is complete.

// onload: This property holds a callback function that is executed when the request is successfully completed.
// It's a convenient way to handle successful responses.

// onerror: Similar to onload, onerror holds a callback function that's executed if an error occurs during the request.

const URL = "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();

// xhr.open('GET', URL);

// xhr.onload = () => {
//     const response = xhr.response;
//     const data = JSON.parse(response)
//     console.log(data)
// }

// xhr.send()

// xhr using Promise

const getNewData = (method, url) => {
    const promiseData = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url);

        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.response)
                // console.log(data);
                resolve(data);
            }else {
                reject(new Error('Response not found'))
            }
        }

        xhr.send();
    });

    return promiseData;
}


getNewData('GET', URL)
     .then((data) => {
        console.log(data);
        return data;
     })
     .then((data) => {
        const id = data[1].id;
        console.log(id);
        return id;
     })
     .then((id) => {
        const newUrl = `${URL}/${id}`;
        return getNewData('GET', newUrl)
     })
     .then((newData) => {
        console.log(newData);
     })
     .catch((err) => {
        console.error(err);
     })