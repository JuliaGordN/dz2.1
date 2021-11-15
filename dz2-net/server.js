/* eslint-disable no-console */
const net = require('net');

const server = net.createServer((connection) => {
  console.log('client connected');
  connection.on('end', () => {
    console.log('client disconnected');
  });
  connection.write('Hello World!\r\n');
  connection.pipe(connection);
});

// The server listens to a socket for a client to make a connection request.
// Think of a socket as an end point.
server.listen(1712, () => {
  console.log('server is listening');
});
