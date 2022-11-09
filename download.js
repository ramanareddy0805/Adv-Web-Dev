var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.download("fstxt.txt",function(err){
        if(err){
            console.log("No such file");
        }
        else{
            console.log("File downloaded successfully");
        }
    });
});
app.listen("5000");
