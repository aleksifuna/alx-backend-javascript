/**
 * small HTTP server using http module
 */

const { createServer } = require('http');

const app = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});
app.listen(1245);
