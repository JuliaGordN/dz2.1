const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
  response.write('Hello, dear friends!');
  response.end('This is my homework');
});

server.listen(1712, '127.0.0.1', () => {
  console.log('server is listening on 127.0.0.1:1234');
});
