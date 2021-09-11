const express=require('express');
const app=express();
const orders=[{id:1,name:"Food-1"},{id:2,name:"Food-2"},{id:3,name:"Food-3"},{id:4,name:"Food-4"}]
app.get('/orders',(req,res)=>{
    res.send(orders)
})

app.listen('3000',()=>{
    console.log("Listening on 3000");
})