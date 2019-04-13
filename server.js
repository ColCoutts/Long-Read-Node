const http = require('http');

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/plain');
    response.write('Hello World');
    response.end();
}).listen(3000);

function onRequest(request, response) {
    response.writeHead(200, 'Content-Type', 'text/plain');
    response.write('Hello All');
    console.log('client connected');
    response.end();
}

http.createServer(onRequest).listen(8888);
