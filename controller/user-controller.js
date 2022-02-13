var UserModel = require("../model/user-model")
const bcrypt = require('bcrypt');
// import { bcrypt } from "bcrypt"



exports.saveUser = function (req, res) {

    let encPass = bcrypt.hashSync(req.body.password,10)

    var u = new UserModel({
        firstName: req.body.firstName,
        email: req.body.email,
        password: encPass
    })

    //_id -> match update -- insert 
    u.save(function (err, success) {
        if (err) {

            res.json({ "msg": "SMWR", "data": err })

        } else {

            res.json({ "msg": "done", "data": success })

        }
    })

}

exports.getAllUsers = function (req, res) {

    UserModel.find(function (err, data) {
        if (err) {
            res.json({ data: err, status: -1, msg: "SMWR" })
        } else {
            res.json({ data: data, status: 200, msg: "user retrieved...." })
        }
    })
}


exports.deleteUser = function (req, res) {

    // console.log(req.params);// / @PathVariable
    // console.log(req.query);// ?  @RequestParam 

    UserModel.deleteOne({ _id: req.params.userId }, function (err, data) {
        if (err) {
            res.json({ data: err, msg: "SMW", status: -1 })
        } else {
            if (data.deletedCount == 0) {
                res.json({ data: req.params, msg: "invalid userId ", status: 200 })
            } else {
                res.json({ data: data, msg: "user removed...", status: 200 })

            }
        }
    })


}
//old plain password - authenitcation 
// exports.authenticate = function (req, res) {
//     // UserModel.findOne({email:req.body.email,password:req.body.password},function(err,data){
//     //     console.log(data);
//     // })


//     UserModel.findOne({ $and: [{ email: req.body.email }, { password: req.body.password }] }, function (err, data) {
//         console.log(data);
//         if (data) {
//             res.json({ "msg": "done", "data": data, stat: 200 })
//         } else {
//             res.json({ "msg": "invalid credentials", "data": req.body, status: -1 })
//         }
//     })
// }



exports.authenticate = function (req, res) {
    // UserModel.findOne({email:req.body.email,password:req.body.password},function(err,data){
    //     console.log(data);
    // })

    
    UserModel.findOne({  email: req.body.email }, function (err, data) {
         isCorrect = false ; 
        if (data) {
             if(bcrypt.compareSync(req.body.password,data.password)){
                isCorrect = true 
                res.json({ "msg": "done", "data": data, stat: 200 })
               
            }
 
        }
        
        if(isCorrect == false){
            res.json({ "msg": "invalid credentials", "data": req.body, status: -1 })
        }
    })
}


exports.getUserByID = async function (req, res) {

    // UserModel.findOne({ _id: req.params.userId }, function (err, data) {
    //     if (data) {
    //         res.json({ "msg": "done", "data": data, stat: 200 })
    //     } else {
    //         res.json({ "msg": "invalid userId", "data": req.params, status: -1 })
    //     }
    // })
    let data = await UserModel.findOne({_id:req.params.userId})// 35 second 
    if(data){
        res.json({msg:"invalid user id..",data:req.params.userId,status:-1})

    }else{ 
        res.json({msg:"user ret...",data:data,status:200})
    }
}


exports.updateUser = async function (req, res) {


    let user = await UserModel.findOne({ _id: req.body.userId })

    console.log("user==> " + user);
    user.firstName = req.body.firstName
    console.log("new user==> " + user)
    user = await user.save()
    res.json({ "data": user, status: 200, msg: "user modified" })

    // UserModel.findOneAndUpdate({_id:req.body.userId},req.body,function(err,data){
    //     console.log(data);
    //     res.json({ "msg": "done", "data": data,stat:200 })
    // })    


    // UserModel.updateOne({_id:req.body.userId},req.body,function(err,data){
    //     console.log(data);
    //     res.json({ "msg": "done", "data": data,stat:200 })
    // })

    // UserModel.findOne({_id:req.body.userId},function(err,data){
    //     if(data){
    //         //console.log(data);
    //         // var user = new UserModel({
    //         //     _id:req.body.userId,
    //         //     firstName:req.body.firstName
    //         // })
    //         // user.save
    //         console.log(data);
    //         data.firstName = req.body.firstName 
    //         console.log(data);

    //        data.save(function(err,data){
    //             res.json({data:data})
    //        })

    //     }
    // })
}


