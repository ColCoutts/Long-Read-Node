const http = require('http');

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/plain');
    response.write('Hello World');
    response.end();
}).listen(3000);

//Passing Functions Around

function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, 'hello');

execute(function(word){ console.log(word) }, 'Hello Dear');
