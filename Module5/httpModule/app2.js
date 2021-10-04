const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>kobee</h1></body><html>");
        res.write("<a href='/pageOne'> go to page one </a>")
        res.end();

    } else if (req.url === "/pageOne") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>Home Page</h1></body><html>");
        res.write("<a href='/'> go to kobe </a>")
        res.end();  
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<html><body><h1>404 page not found</h1></body><html>");
        res.write("<a href='/'> go to kobe </a>")
        res.end();
    }
})
server.listen(3000);


console.log("listening to port 3000")
