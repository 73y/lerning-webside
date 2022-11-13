const express = require("express");
const app = express();
const path = require("path");

//Middleware
app.use(express.static("public"));
app.use(express.json()); //the code accept json code
app.use(express.urlencoded({ extended: true })); //the code accept urlencoded code like: "username=testname&password=testpassword"


app.get("/", (req,res) =>{
    console.log("hey get");
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("*", (req, res) =>{
    res.sendFile(path.join(__dirname + "/public/results.html"));
    res.send(req.body.name)
});

app.listen("3000");
console.log('server is listening...');