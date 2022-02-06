var mongoose  = require("mongoose")  
var Schema = mongoose.Schema 

var EmployeeSchema = new Schema({

        email:{
            type:String,
            required:true,
            max:50
        },
        password:{
            type:String,
            required:true,
            max:50
        },
        firstName:{
            type:String,
            required:true,
            max:50
        },role:{
            type:Schema.Types.ObjectId,
            ref:"role"
        }

})

var EmployeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = EmployeeModel 