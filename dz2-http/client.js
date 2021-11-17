const http = require('http');

const client = http.request({ host: '127.0.0.1', port: 1712 }, (response) => {
  console.log(`statusCode: ${response.statusCode}`);
  let data = '';
  response.on('data', (chunk) => {
    data += chunk;
  });
  response.on('end', () => {
    console.log(data);
  });
});

client.end();
