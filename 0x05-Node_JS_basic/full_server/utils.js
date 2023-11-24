// full_server/utils.js

import fs from "fs/promises";

export function readDatabase(filePath) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile(filePath, "utf8");
      // Process data and return the result
      // ...
      resolve(result);
    } catch (error) {
      reject(new Error("Cannot load the database"));
    }
  });
}
