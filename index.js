var http = require("http")


http.createServer(function(req,res){

    console.log("----server---msg");
    res.write("hey there....")
    res.end()


}).listen(3000);
