// Local Server
const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
const port = 3000;
app.listen(port, ()=> {
    console.log("Server is running on localhost3000");
});