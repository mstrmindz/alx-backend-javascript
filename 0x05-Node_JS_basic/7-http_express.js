// 7-http_express.js

const express = require("express");
const fs = require("fs").promises;

// Create an instance of the Express application
const app = express();

// Define a route for the root endpoint '/'
app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});

// Define a route for the '/students' endpoint
app.get("/students", async (req, res) => {
  try {
    const result = await countStudents(req.query.file);
    res.send(`This is the list of our students\n${result}`);
  } catch (error) {
    res.send(error.message);
  }
});

// Function to count students from the file
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, "utf8");
    const lines = data.split("\n").filter((line) => line.trim() !== "");

    const numberOfStudents = lines.length;

    // Create an object to store the count for each field
    const fieldCounts = {};

    // Iterate over each line to count students in each field
    lines.forEach((line) => {
      const [firstname, field] = line.split(",");

      // Increment the count for the field
      fieldCounts[field] = (fieldCounts[field] || 0) + 1;
    });

    // Build the result string
    let result = `Number of students: ${numberOfStudents}\n`;

    for (const field in fieldCounts) {
      const fieldList = lines
        .filter((line) => line.endsWith(field))
        .map((line) => line.split(",")[0])
        .join(", ");

      result += `Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldList}\n`;
    }

    return result;
  } catch (error) {
    throw new Error("Cannot load the database");
  }
}
// Listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the app variable
module.exports = app;
