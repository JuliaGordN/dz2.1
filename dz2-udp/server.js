const dgram = require('dgram');
// creating a udp server

const server = dgram.createSocket('udp4');

server.on('error', (error) => {
  console.log(`server error:\n${error}`);
  server.close();
});

// emits on new datagram msg
server.on('message', (msg, info) => {
  console.log(`server got: ${msg.toString()}`, info.address, info.port);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}`, address.port);
});

// Prints: server listening 0.0.0.0:41234
server.bind(41234);
