//import express 
var express = require("express") //external 
var fs = require("fs") //internal  
var mongoose = require("mongoose")
var apiRoutes = require("./api-routes")
var updateIfCurrentPlugin = require("mongoose-update-if-current")
var multer = require("multer")
var path = require("path")
const cors = require("cors")
var app = express()

mongoose.connect("mongodb://localhost:27017/22aunodeclub", function (err) {
    if (err) {
        console.log("something went wrong");
        console.log(err);
    } else {
        console.log("database connected....");
    }
})
mongoose.plugin(updateIfCurrentPlugin, { strategy: 'timestamp' });


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const corsOptions = {
    origin: "http://localhost:4000", //aussme angular 4000 
    methods: ["GET", "POST"]
}

//app.use(cors()) // this will enable CORS requests for all 
app.use(cors(corsOptions))


//

//multer -> req= > body , file  
var mystorage = multer.diskStorage({
    destination: function (req, file, next) {

        let email = req.body.email
        fs.mkdir("uploads/" + email + "/")


        next(null, "uploads/" + email) //uploads is the folder created at root level 
    }, filename: function (req, file, next) {
        console.log(file.originalname);
        let ext = path.extname(file.originalname)
        console.log(ext);
        if (ext == ".jpg") {
            next(null, file.originalname)
        } else {
            next("ERROR : Invalid File")
        }
    }
})
var myupload = multer({ storage: mystorage, limits: { fileSize: 1024 * 1000 } }).single("profilepic")//image -->file->single file -> form->profilepic

app.post("/uploadprofile", function (req, res) {
    myupload(req, res, function (err) {
        if (err) {
            res.json({ status: -1, msg: "SMW", data: err })
        } else {
            res.json({ status: 200, data: "upload done", msg: "done" })
        }
    })
})

app.use("/api", apiRoutes) // /api/saveuser  /api/authenticate 






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




