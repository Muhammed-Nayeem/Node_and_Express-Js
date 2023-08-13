const http = require("node:http");
const fs = require("node:fs");

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf-8');
  myReadStream.pipe(res);
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`);
});
