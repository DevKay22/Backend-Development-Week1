// Import the required modules
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1'; // This represents the localhost
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the status code and content type for the response
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');

  // Send a response back to the client
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
