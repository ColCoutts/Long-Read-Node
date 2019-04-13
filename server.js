const http = require('http');

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/plain');
    response.write('Hello World');
    response.end();
}).listen(3000);

function onRequest(request, response) {
    console.log('Request Received from client');
    response.writeHead(200, 'Content-Type', 'text/plain');
    response.write('Hello All');
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log('Server has started');
