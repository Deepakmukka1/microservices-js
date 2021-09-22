const { exec } = require("child_process");
console.log("📗 :\u001b[1;32m Student microservice is running on port 3000");
console.log("📗 :\u001b[1;32m Marks microservice is running on port 3001");
exec("node services/marks.microservice.js", (error, stdout, stderr) => {
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

