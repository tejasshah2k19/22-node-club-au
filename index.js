//import express 
var express = require("express") //external 
var fs = require("fs") //internal 
var userController = require("./controller/user-controller")
var mongoose = require("mongoose")

var app = express()

mongoose.connect("mongodb://localhost:27017/22aunodeclub",function(err){
    if(err){
        console.log("something went wrong");
        console.log(err);
    }else{
        console.log("database connected....");
    }
})


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.post("/saveuser",userController.saveUser)
app.post("/authenticate",userController.authenticate)
app.get("/users",userController.getAllUsers)
app.delete("/user/:userId",userController.deleteUser)


app.listen(3000, function () {
    console.log("server stareted on 3000.....");
})





































// app.get("/", function (req, res) {
//     res.write("welcome");
//     res.end()
// })


// app.get("/signup", function (req, res) {
//     fs.readFile("./views/signup.html", function (err, html) {
//         if (err) {
//             res.write("something weng wrong... PTA");
//             res.end()
//         } else {
//             res.write(html);
//             res.end()
//         }
//     })
// })

// app.post("/saveuser", function (req, res) {
//     console.log(req.body); // user data -> json --> req.body 
//     console.log(req.body.firstName);
//     res.json({ "msg": "done", "data": req.body })
// })




