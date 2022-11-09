var fs = require("fs");
fs.readFile('fstxt.txt',function(err,data){
     if(err) throw err;
     //{
    //     return console.log("error");
    // }
    console.log("The text is:" + data.toString());
});