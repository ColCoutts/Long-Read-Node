const http = require('http');

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/plain');
    response.write('Hello World');
    response.end();
}).listen(3000);
