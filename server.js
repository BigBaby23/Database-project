const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

// Start the server
const port = 3306git ;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});