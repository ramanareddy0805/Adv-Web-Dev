var a = require('http');

var b = a.createServer(function(request,response){
    let x = "Ramanareddy";
    console.log("It is a request");
    response.write("Hello Ramanareddy \n");
    console.log("It is 2nd request");
    response.write("my name is : " + x);
    response.end();
})
b.listen(6969);