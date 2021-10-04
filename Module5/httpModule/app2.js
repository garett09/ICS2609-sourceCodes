const http = require('http');

const server = http.createServer((req, res) => {
    console.log("new request was received...")
});
server.listen(3000);

console.log("listening to port 3000")
