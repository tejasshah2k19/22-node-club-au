var http = require("http")


http.createServer(function (req, res) {

    if (req.url == "/") {
        console.log("----server---msg");
        res.write("hey there....")
        res.end()
    }      

    if (req.url == "/login" && req.method.toLocaleLowerCase() == "post") {
        res.write("Login")
        res.end()
    }

}).listen(3000);
//express 
