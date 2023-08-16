// HTTP methods.
// These methods are part of the HTTP protocol and are used to perform various actions on resources located on a server.

// 1. GET: This method is used to request data from the server. When you make a GET request, you're asking the server 
// to retrieve and send back a representation of a resource. This method should not have any side-effects on the server or the data.

// 2. POST: The POST method is used to submit data to the server, typically to create a new resource. It sends data in the request body,
// which the server uses to process and create the new resource. Unlike GET, POST requests can have side-effects on the server or the data.

// 3. PUT: PUT is used to update or create a resource on the server. It sends data in the request body, just like POST. 
// However, unlike POST, if the resource already exists, a PUT request will update the existing resource with the new data.

// 4. PATCH: PATCH is similar to PUT, but it's used to apply partial modifications to a resource rather than replacing the entire resource. 
// It's often used when you want to update specific fields of an existing resource.

// 5. DELETE: The DELETE method is used to request the removal of a resource from the server. When you make a DELETE request, 
// you're asking the server to delete the specified resource.

// 6. OPTIONS: This method is used to retrieve information about the communication options for the target resource. 
// It's often used to determine which HTTP methods are supported for a specific resource.

// 7. HEAD: Similar to GET, but a HEAD request only asks for the headers of the response, not the actual content. 
// It's useful to check the availability of a resource or retrieve metadata without downloading the entire content.

// These HTTP methods are key components of building RESTful APIs (Representational State Transfer). 
// They define how clients and servers interact with resources over the web. 
// When designing and implementing an API, it's important to choose the appropriate 
// HTTP methods based on the actions you want to perform on your resources.

// HTTP Response Status Codes.

// 1. Informational (1xx): These status codes indicate that the server has received the client's request and is continuing to process it.
//  The client should wait for further instructions.

// 2. Successful (2xx): These codes indicate that the request was successful and the server was able to fulfill it. 
// The most common is `200 OK`, which means the request was successful and the server is sending the requested data.

// 3. Redirection (3xx): These codes indicate that further action needs to be taken by the client to complete the request. 
// This often involves redirection to a different URL.

// 4. Client Errors (4xx): These codes indicate that the client's request was incorrect or couldn't be processed by the server.
// Examples include `400 Bad Request` (client's request is malformed) and `404 Not Found` (requested resource could not be found).

// 5. Server Errors (5xx): These codes indicate that the server failed to fulfill a valid request. 
// This could be due to various server-side issues. 
// Examples include `500 Internal Server Error` (generic server error) and `503 Service Unavailable` (server is temporarily unavailable).

// Here are some examples of commonly used HTTP response status codes:

// - 200 OK: The request was successful, and the server has returned the requested data.
// - 201 Created: The request has been fulfilled, and a new resource has been created.
// - 204 No Content: The request was successful, but there is no data to return in the response body.
// - 400 Bad Request: The request from the client was malformed or invalid.
// - 401 Unauthorized: The client's request lacks valid authentication credentials.
// - 403 Forbidden: The client does not have permission to access the requested resource.
// - 404 Not Found: The requested resource could not be found on the server.
// - 500 Internal Server Error: The server encountered an error while trying to fulfill the request.
// - 503 Service Unavailable: The server is temporarily unable to handle the request due to maintenance or overload.