const express=require('express');
const axios=require('axios')
const app=express();
const menu=[];
app.get('/',async(req,res)=>{
    try {
        
        const results=await axios.get('http://localhost:3000/orders');
        const newArr=[...results]
        newArr.push({id:10,name:'Food added from microservice'})
        res.send(newArr)
    } catch (error) {
        res.status(500).send("Internal Server")
    }
})

module.exports=app