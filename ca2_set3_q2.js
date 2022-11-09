const http = require("http");
const express = require('express');
const app = express();
var path = require("path");
function reqListener(req,req){
    console.log("Server is Runnig");
}
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/ca2.html'));
  });
const server = http.createServer(app);
server.listen(3030);