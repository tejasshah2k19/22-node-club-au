var  mongoose = require("mongoose")
var Schema = mongoose.Schema 


const UserModel = new Schema({
    firstName : String,
    email : String,
    password : String 

})

 module.exports  = mongoose.model("user",UserModel) //users
 
 // @   @Table() class A{  }
 