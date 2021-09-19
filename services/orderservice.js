const express=require('express');
const app=express();
const orders=require('../databases/orders.json')
app.get('/orders',(req,res)=>{
    res.send(orders)
})

app.listen('3000',()=>{
    console.log("Listening on 3000");
})