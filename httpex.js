const http = require("http");
function reqListener(req,req){
    console.log("Server is Runnig");
}
const server = http.createServer(reqListener);
server.listen(5000);