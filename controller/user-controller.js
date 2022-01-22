var UserModel = require("../model/user-model")

exports.saveUser = function (req, res) {

    var u = new UserModel({
        firstName: req.body.firstName,
        email: req.body.email,
        password: req.body.password
    })

    u.save(function (err, success) {
        if (err) {

            res.json({ "msg": "SMWR", "data": err })

        } else {

            res.json({ "msg": "done", "data": success })

        }
    })

}

exports.getAllUsers = function(req,res){

     UserModel.find(function(err,data){
            if(err){
                res.json({data:err,status:-1,msg:"SMWR"})
            }else{
                res.json({data:data,status:200,msg:"user retrieved...."})
            }
     })
}


exports.deleteUser = function(req,res){
   
    // console.log(req.params);// / @PathVariable
    // console.log(req.query);// ?  @RequestParam 

    UserModel.deleteOne({_id:req.params.userId},function(err,data){
        if(err){
            res.json({data:err,msg:"SMW",status:-1})
        }else{
            if(data.deletedCount == 0 ){
                res.json({data:req.params,msg:"invalid userId ",status:200})
            }else{
                res.json({data:data,msg:"user removed...",status:200})
       
            }
        }
    })

    
}
exports.authenticate = function (req, res) {
    res.json({ "msg": "done", "data": req.body })
     
}


