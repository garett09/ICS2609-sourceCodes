const http = require('http');
const fs = requre('fs');;

let readableStream = fs.createReadStream('./file/garett29.txt', 'utf8');


let server = http.createSever(function (request, response) {
    if ((req.url = "/story")) {
        response.writeHead(200, { "Content-Type": "text/html" });
        readableStream.pipe(res);
    }
});
server.listen(3000, "localhost")
console.log("listening to http://localhost:3000")