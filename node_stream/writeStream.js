const fs = require("node:fs");

const readStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const writeStream = fs.createWriteStream(`${__dirname}/output.txt`);

// readStream.on("data", (chunk) => {
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream);
