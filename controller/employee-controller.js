var EmployeeModel = require("../model/employee-model")

exports.addEmployee = function (req, res) {

    let employee = new EmployeeModel(req.body)

    employee.save(function (err, data) {
        if (err) {
            res.json({ status: -1, msg: "SME", data: req.body })
        } else {
            res.json({ status: 200, msg: "done", data: data })
        }
    })
}


exports.getAllEmployee = function (req, res) {

    EmployeeModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ status: -1, msg: "SME", data: req.body })
        } else {
            res.json({ status: 200, msg: "done", data: data })
        }
    })
}