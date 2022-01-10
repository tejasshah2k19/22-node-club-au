var  mongoose = require("mongoose")
var Schema = mongoose.Schema 


const UserModel = new Schema({
    firstName : String,
    email : String,
    password : String 

})

exports.UserModel = mongoose.model("user",UserModel) //users 