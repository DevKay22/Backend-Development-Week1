# Assignment

## HTTP Methods
These HTTP methods form the foundation of communication between clients (such as web browsers or mobile apps) and servers in the context of RESTful APIs. They allow for different operations to be performed on resources hosted on the server, enabling various functionalities in web applications.

### 1. GET
The GET method is used to request data from a specified resource.
It's a safe and idempotent operation, meaning it should not have any side effects on the server, and making multiple identical requests should produce the same result.
Typically used for retrieving data from a server. For example, when you open a webpage in your browser, it sends a GET request to the server to retrieve the HTML content of that page.

### 2. POST
The POST method is used to submit data to be processed to a specified resource.
It's not idempotent, meaning multiple identical requests may have different effects on the server.
Typically used for creating new resources on the server or submitting data to be processed. For example, when you submit a form on a website, it often sends a POST request to the server with the form data.

### 3. PUT
The PUT method is used to update a resource or create a new resource if it doesn't already exist at the specified URI.
It's idempotent, meaning multiple identical requests should have the same effect as a single request.
Typically used for updating existing resources with new data. For example, when you edit your profile information on a website and save the changes, it might send a PUT request to update your profile data on the server.

### 4. DELETE
The DELETE method is used to request the removal of a specified resource.
It's idempotent, meaning multiple identical requests should have the same effect as a single request.
Typically used for deleting resources from the server. For example, when you delete a file from a file hosting service, it might send a DELETE request to remove the file from the server.