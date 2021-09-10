const express=require('express')
const orders=require('./services/orderservice')
const menu=require('./services/menuservice')
const app=express();
app.get('/',(req,res)=>{
     res.send("Hello world")
})
app.use('/orders',orders);
app.use('/menu',menu);
app.listen(3000,()=>{
    console.log('Server listening at localhost:3000')
})