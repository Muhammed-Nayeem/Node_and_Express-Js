const http = require("node:http");

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/html");
  if (req.url === "/") {
    res.write(`<form action="process" method="post">`);
    res.write(`<input type="text" name="process" /></br></br>`);
    res.write(`<input type="submit" value="post" />`);
    res.write(`</form>`);
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      console.log("Stream Finished!");
      let parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      res.write("Thank you for submitting.");
      res.end();
    });
  } else {
    res.write("Not Found!");
    res.end();
  }
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`);
});
