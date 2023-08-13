const http = require("node:http");

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/plain");
  if (req.url === "/") {
    res.write("Hello Programmers!");
    res.write("How are you doing?");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is about page.");
    res.end();
  } else {
    res.write("Not Found!");
    res.end();
  }
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`);
});
