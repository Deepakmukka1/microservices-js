const { exec } = require("child_process");
const {marks}=require('./services/marks.microservice')
const {students}=require('./services/students.microservice')


exec("node services/marks.microservice.js", (error, stdout, stderr) => {
    marks.listen("3000", () => {
        console.log("📗 :\u001b[1;32m Student microservice is running on port 3000");
        console.log("Listening on 3000");
    })
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
exec("node services/students.microservice.js", (error, stdout, stderr) => {
    students.listen("3001", () => {
        console.log("📗 :\u001b[1;32m Marks microservice is running on port 3001");
        console.log("Listening on 3001");
        
      });
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

