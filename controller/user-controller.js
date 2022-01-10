var UserModel = require("../model/user-model")

function saveUser(req,res){

    var  u = new UserModel.UserModel({
        firstName : req.body.firstName,
        email : req.body.email,
        password : req.body.password
    })

    u.save(function(err,success){
        if(err){

            res.json({"msg":"SMWR","data":err})

        }else{

            res.json({"msg":"done","data":success})

        }
    })

}

function authenticate(req,res){
    res.json({"msg":"done","data":req.body})

}


exports.saveUser = saveUser
exports.authenticate = authenticate 

