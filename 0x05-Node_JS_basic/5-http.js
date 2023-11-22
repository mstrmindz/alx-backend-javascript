// 5-http.js

const http = require("http");
const url = require("url");
const fs = require("fs").promises;

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

// Create a simple HTTP server
const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Set the response headers
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Handle different URL paths
  if (parsedUrl.pathname === "/") {
    res.end("Hello Holberton School!\n");
  } else if (parsedUrl.pathname === "/students") {
    try {
      const result = await countStudents(parsedUrl.query.file);
      res.end(`This is the list of our students\n${result}`);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    // Handle unknown paths
    res.end("Not Found\n");
  }
});

// Listen on port 1245
const port = 1245;
const file = process.argv[2];

if (!file) {
  console.error("Usage: node 5-http.js <database_file.csv>");
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the app variable
module.exports = app;
