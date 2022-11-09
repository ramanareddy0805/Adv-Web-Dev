var express = require("express");
var app = express();
app.get('/',function(req,res){
    res.sendFile(__dirname + "/" + "Placements_resume.pdf", function(err){
        if (err){
            res.send(err);
        }
        else{
            console.log("File send Successfully");
        }
    });

});
app.listen(2000, function(err){
    if(err){
        console.log(err);
    }
    console.log("Server Started");
});