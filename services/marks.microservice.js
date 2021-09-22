const express = require("express");
const app = express();
const marks = require("../databases/marks.json");

/**
 * Initial route
 */

app.get("/", (req, res) => {
  res.send("Marks service is running");
});

/**
 * Display the marks of all students
 */

app.get("/marks", (req, res) => {
  res.status(200).send(marks);
});

/**
 * Display the marks of particular student 
 */

app.get("/marks/:studentname", (req, res) => {
  const studentName = req.params.studentname;
  const marksOfStudent = marks.filter((student) => {
    return student.studentName.toLowerCase() === studentName.toLowerCase();
  });
  if (marksOfStudent.length === 0) res.status(404).send("Student not found");
  else res.status(200).send(marksOfStudent);
});

/**
 * Listen on 3000 port
 */

app.listen("3000", () => {
  console.log("Listening on 3000");
});
