const axios = require("axios");
const express = require("express");
const app = express();
const students = require("../databases/students.json");
app.get("/", async (req, res) => {
  res.send("Students service is running");
});
app.get("/students", async (req, res) => {
  try {
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/students/:studentname", async (req, res) => {
  try {
    const studentName = req.params.studentname;
    const student = students.filter((student) => {
      return student.studentName.toLowerCase() === studentName.toLowerCase();
    });
    if (student.length == 0) res.status(404).send("Student not found");
    else res.status(200).send(student);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.get("/students/:studentname/marks", async (req, res) => {
  try {
    const studentName = req.params.studentname;
    const { data } = await axios.get(
      `http://localhost:3000/marks/${studentName}`
    );
    res.status(200).send(data);
  } catch (error) {
    if (error.response.status === 404)
      res.status(404).send("Student not found");
    else res.status(500).send("Server error");
  }
});
app.listen("3001", () => {
  console.log("Listening on 3001");
});
