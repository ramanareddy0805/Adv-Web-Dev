var a = require('http');
var b = a.createServer(function(x,y){
    if(x.url == "/"){
        y.write("Welcome Ramanareddy");
        y.end();
    }
    else if(x.url=="/admin"){
        y.write("Welcome to admin page");
        y.end();

    }
    else if(x.url == '/user'){
        y.write("Welcome to user page");
        y.end();

    }
    else{
        y.write("Invalid Request");
        y.end();

    }
})
b.listen(2020);
console.log("We are processing your request at 2020");