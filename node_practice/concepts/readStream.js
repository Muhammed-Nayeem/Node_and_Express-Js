const fs = require("node:fs");
const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

ourReadStream.on("data", (chunk) => {
  console.log(chunk.toString());
});
