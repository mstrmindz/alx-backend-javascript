// full_server/controllers/StudentsController.js

import { readDatabase } from "../utils";

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const result = await readDatabase(req.query.file);
      // Process result and send the response
      // ...
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();
    if (major !== "CS" && major !== "SWE") {
      return res.status(500).send("Major parameter must be CS or SWE");
    }

    try {
      const result = await readDatabase(req.query.file);
      // Process result and send the response
      // ...
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
