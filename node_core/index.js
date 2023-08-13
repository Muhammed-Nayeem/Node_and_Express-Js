//path:
// const path = require('node:path');
// const myPath = "D:/WEB-Programming/Node-Development/node_core/index.js";

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));

//os:
// const os = require('node:os');

// console.log(os.platform());
// console.log(os.freemem());
// console.log(os.arch());
// console.log(os.cpus());

//file system:
const fs = require("node:fs");

// fs.writeFileSync("story.txt", "Hello Programmers!");
// fs.appendFileSync("story.txt", " How are you?");

// const data = fs.readFileSync("story.txt");
// console.log(data);

fs.writeFile("story.txt", "Hello Programmers!", (err) => {
  if (err) throw err;
  console.log("The file has been saved.");
});

fs.appendFile("story.txt", " How are you?", "utf8", (err) => {
  if (err) throw err;
  console.log("Added to the file");
});

fs.readFile("story.txt", (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});

console.log("This is global execution context.");
