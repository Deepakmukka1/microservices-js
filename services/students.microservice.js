const axios = require("axios");
const express = require("express");
const app = express();
const students = require("../databases/students.json");
const dotenv = require("dotenv");
dotenv.config();

/**
 * Initial route
 */

app.get("/", async (req, res) => {
  res.send("Students service is running");
});

/**
 * Display the list of all students
 */

app.get("/students", async (req, res) => {
  try {
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * Details of student by student name
 */

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

/**
 * Marks of student by student name , this route communicates with marks microservice
 */

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

/**
 * Maximum marks of a student by student name , this route communicates with marks microservice
 */

app.get("/students/:studentname/maxmarks", async (req, res) => {
  try {
    const studentName = req.params.studentname;
    const { data } = await axios.get(
      `http://localhost:3000/marks/${studentName}`
    );
    const markList = data[0].marks;
    console.log(markList);
    const sortedMarks = markList.sort((c1, c2) =>
      c1.score < c2.score ? 1 : c1.score > c2.score ? -1 : 0
    );
    const maxMarks = sortedMarks[0];
    res.status(200).send(maxMarks);
  } catch (error) {
    if (error.response.status == 404) res.status(404).send("Student not found");
    else res.status(500).send("Server error");
  }
});

module.exports.students = app;
