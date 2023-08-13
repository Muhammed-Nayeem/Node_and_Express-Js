const fs = require("node:fs");

const readStream = fs.createReadStream(`${__dirname}/bigData.txt`);

readStream.on("data", (chunk) => {
  console.log(chunk.toString());
});
