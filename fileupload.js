const express = require("express");
const multer = require("multer");
const app = express();
    var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "C:\Users\raman\OneDrive\Desktop\nodejs")
    },
    filename: function(req, file, cb){
    cb(null, file.fieldname + Date.now());
    }
})
    const maxsize = 1 * 8000 * 8000;
var upload = multer({
    storage: storage, 
    limits: {fieldSize: maxsize},
}).single("file");
app.get("/", function(req,res){
    res.sendFile(__dirname + '/filehtml.html');
})
app.post("/uploadFile", function(req, res, next){
    upload(req,res, function(err){
        if(err){
            res.send("File size is too Large")
        }
        else{
            res.send("File uploaded successfully")
        }
    })
})
app.listen(2000,function(error){
    if(error) throw error
    console.log("Server Created Successfully :)")
})