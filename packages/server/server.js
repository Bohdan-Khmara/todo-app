const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const port = process.env.PORT ?? 5000;

server.on('error', err => {
  console.error(err);
  process.exit(1);
});

server.listen(port);
