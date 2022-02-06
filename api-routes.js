var router  = require("express").Router()
var userController = require("./controller/user-controller")
var roleController = require("./controller/role-controller")
var employeeController = require("./controller/employee-controller")

router.post("/saveuser",userController.saveUser)
router.post("/authenticate",userController.authenticate)
router.get("/users",userController.getAllUsers)
router.delete("/user/:userId",userController.deleteUser)
router.get("/user/:userId",userController.getUserByID)
router.put("/user",userController.updateUser)


router.post("/roles",roleController.addRole)
router.get("/roles",roleController.getAllRoles)


router.post("/employees",employeeController.addEmployee)
router.get("/employees",employeeController.getAllEmployee)

module.exports = router 