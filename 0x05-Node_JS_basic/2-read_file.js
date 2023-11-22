// 2-read_file.js

const fs = require("fs");

/**
 * Counts the number of students in each field and logs the information.
 * @param {string} path - The path to the database file.
 */
function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, "utf8");

    // Split the file into lines and remove empty lines
    const lines = data.split("\n").filter((line) => line.trim() !== "");

    // Calculate the number of students
    const numberOfStudents = lines.length;

    console.log(`Number of students: ${numberOfStudents}`);

    // Create an object to store the count for each field
    const fieldCounts = {};

    // Iterate over each line to count students in each field
    lines.forEach((line) => {
      const [firstname, field] = line.split(",");

      // Increment the count for the field
      fieldCounts[field] = (fieldCounts[field] || 0) + 1;
    });

    // Log the count and list for each field
    for (const field in fieldCounts) {
      const fieldList = lines
        .filter((line) => line.endsWith(field))
        .map((line) => line.split(",")[0])
        .join(", ");

      console.log(
        `Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldList}`,
      );
    }
  } catch (error) {
    // Handle the error if the database is not available
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
