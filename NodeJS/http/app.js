const http = require('http');

http.createServer(function (req, res) {
    res.end('<h1> Hello World! </h1> <h4>Hello World!</h4>');
} ).listen(8080);

console.log('Servidor rodando na porta 8080');