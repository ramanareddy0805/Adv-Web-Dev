var express = require("express");
var cookieparser = require("cookie-parser");
var app = express();
app.use(cookieparser());
app.get("/",function(req,res){
    res.cookie("Name","Ramanareddy").send("We are asking for cookies");
    console.group("Cookies are:", req.cookies);
});
app.get("/clear",function(req,res){
    res.clearCookie("Name","Ramanareddy").send("Cookie cleared");
    console.log("Cookies cleared successfully");
});
app.listen("3000");