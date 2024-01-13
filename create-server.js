var http = require("http");
var express = require('express');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello Node!!!!</h1>');
 }).listen(3000);
 
 console.log('Server running at http://localhost:3000');
