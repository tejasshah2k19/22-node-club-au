var router  = require("express").Router()
var userController = require("./controller/user-controller")



router.post("/saveuser",userController.saveUser)
router.post("/authenticate",userController.authenticate)
router.get("/users",userController.getAllUsers)
router.delete("/user/:userId",userController.deleteUser)
router.get("/user/:userId",userController.getUserByID)
router.put("/user",userController.updateUser)


module.exports = router 