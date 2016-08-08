console.log("the app start");
var http = require("http");

function CallBackFunction(req,res){
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("hello world\n");

}
var  server = http.createServer(CallBackFunction);

server.listen(1337);

console.log("Server running at http://127.0.0.1:1337/");
