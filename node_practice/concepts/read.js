const fs = require("node:fs");
const http = require("node:http");

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.writeHead(200, "content-type", "text/html");
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`);
});
