var mongoose = require("mongoose")


var RoleSchema = new mongoose.Schema({
    roleName: {
        type: String,
        required: true,
        max: 25
    }
})

const RoleModel = mongoose.model("role",RoleSchema)

module.exports = RoleModel 
