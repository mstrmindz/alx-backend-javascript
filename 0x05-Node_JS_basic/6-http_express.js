// 6-http_express.js

const express = require("express");

// Create an instance of the Express application
const app = express();

// Define a route for the root endpoint '/'
app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});

// Listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the app variable
module.exports = app;
