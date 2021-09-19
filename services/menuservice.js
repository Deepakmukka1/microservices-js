const express=require('express');
const axios=require('axios')
const app=express();
app.get('/menu',async(req,res)=>{
    try {
        const {data}=await axios.get('http://localhost:3000/orders');
        const newArr=[...data]
        newArr.push({id:10,name:'Food added from microservice menu'})
        res.send(newArr)
    } catch (error) {
        res.status(500).send("Internal Server")
    }
})
app.listen('3001',()=>{
    console.log("Listening on 3001");
})