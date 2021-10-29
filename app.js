const http = require('http');
const fs = require('fs');

var server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action= "/message" method= "POST"><input type= "text" name= "message"><button type = "Submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'Cristiano Ronaldo is the GOAT');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Hi there, whats up ?</title></head></html>');
    res.end();
});

server.listen(3000);
