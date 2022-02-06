var RoleModel  = require("../model/role-model")

exports.addRole = function(req,res){

    let role  = new RoleModel({
        roleName : req.body.roleName
    })

    role.save(function(err,data){
        if(err){
            res.json({status:-1,msg:"SME",data:req.body})
        }else{
            res.json({status:200,msg:"done",data:data})
        }
    })
}

exports.getAllRoles = function(req,res){
    
    RoleModel.find(function(err,data){
        if(err){
            res.json({status:-1,msg:"SME",data:req.body})
        }else{
            res.json({status:200,msg:"done",data:data})
        }
    })
}


