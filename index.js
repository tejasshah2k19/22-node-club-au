//import express 
var express = require("express") //external 
var fs = require("fs") //internal 

var app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.get("/", function (req, res) {
    res.write("welcome");
    res.end()
})


app.get("/signup", function (req, res) {
    fs.readFile("./views/signup.html",function(err,html){
        if(err){
            res.write("something weng wrong... PTA");
            res.end()
        }else{
            res.write(html);
            res.end() 
        }
    })
})

app.post("/saveuser", function (req, res) {
    console.log(req.body); // user data -> json --> req.body 
    console.log(req.body.firstName);
    res.send("request recvd");
    res.end()
})



app.listen(3000, function () {
    console.log("server stareted on 3000.....");
})