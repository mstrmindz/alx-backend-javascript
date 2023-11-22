// 4-http.js

const http = require("http");

// Create a simple HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body
  res.end("Hello Holberton School!\n");
});

// Listen on port 1245
app.listen(1245, () => {
  console.log("Server is listening on port 1245");
});

// Export the app variable
module.exports = app;
