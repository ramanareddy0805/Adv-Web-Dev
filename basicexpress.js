var express = require("express");
var app = express();
app.get("/home",function(req,res){
    res.write("This is Home");
});
app.listen(3000);