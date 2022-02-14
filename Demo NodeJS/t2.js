// Server Side Programming
const http = require('http')
const {load} = require('./t1.js');
const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors({
    origin:"*", //*- for all
}))
const port = 5200;
app.listen(port, ()=> console.log("Server is runnung.."));
app.get('/user',(req,res)=>
{
    //sending response to the client
    res.send(load())
})

