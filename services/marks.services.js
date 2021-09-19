const express=require('express');
const app=express();
const marks=require('../databases/marks.json')
app.get('/',(req,res)=>{
    res.send("Marks services is running")
})
app.get('/marks',(req,res)=>{
    res.status(200).send(marks)
})
app.get('/marks/:studentname',(req,res)=>{
    const studentName=req.params.studentname;
    const marksOfStudent=marks.filter((student)=>{
        return student.studentName.toLowerCase()===studentName.toLowerCase()
    })
    if(marksOfStudent.length===0)
    res.status(404).send("Student not found")
    else
    res.status(200).send(marksOfStudent)
})

app.listen('3000',()=>{
    console.log("Listening on 3000");
})