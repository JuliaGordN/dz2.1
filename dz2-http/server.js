const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/' && request.method === 'GET') {
    response.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
    response.write('Hello, dear friends!');
    response.end(' This is my homework. ');
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(JSON.stringify({ message: 'Nifiga ne rabotaet!! Valera, obyasni!!!!' }));
  }
});
server.listen(1712, '127.0.0.1', () => {
  console.log('server is listening on 127.0.0.1:1234');
});
