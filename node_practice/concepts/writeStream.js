const fs = require("node:fs");
const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output2.txt`);

// ourReadStream.on("data", (chunk) => {
//   ourWriteStream.write(chunk);
// });

ourReadStream.pipe(ourWriteStream);
