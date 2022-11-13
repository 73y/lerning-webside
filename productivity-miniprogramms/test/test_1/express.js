const express = require("express");
const path = require("path");

const app = express();


//Middleware
app.use(express.static("public"));

//Create, Read, Update, Delete
//Read
app.get("/", (req, res, next) => {
    console.log(req)
    res.sendFile(path.join(__dirname + "/index.html"));
});

//Create
app.post("*", (req, res) => {
    res.send("<h1>moin</h1>");
});

//Update
app.put("*", (req, res) => {
    res.send("<h1>moin</h1>");
});

//Delete
app.delete("*", (req, res) => {
    res.send("<h1>moin</h1>");
});



app.listen("1337")
console.log("Server listening on port 1337");