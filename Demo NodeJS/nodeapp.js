/* 1st
var http = require('http')
http.createServer(function(req,res)
{
    //res.write("Welcome");
    res.end("Welcome");
}).listen(8000)
*/

var http = require('http')
const fs = require('fs')
const path = require('path');
const { response } = require('express');
const hostname = '127.0.0.1';
const port = 5000;
const server = http.createServer(function(request, response)
{
    //define response
    //status : 200(when response is correct)

    /* response.writeHead(200,{'Content-Type' : 'text/plain' })
    response.end('Welcome to MCA'); */
    response.writeHead(200,{'Content-Type' : 'text/html' })
    //response.end('<h1 style = "color : red">Welcome to Christ MCA</h1>');
    fs.readFile(path.join(__dirname,'index.html'),'utf-8', (err,data)=>
    {
        if(err) throw err;
        response.end(data);
    });

});

//Listener
server.listen(port,hostname, ()=>
{
    console.log('Node JS Server hosting at %s on port %s', hostname,port);
});

