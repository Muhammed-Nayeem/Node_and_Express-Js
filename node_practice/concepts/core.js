const path = require("node:path");

// console.log(path.dirname("D:/WEB-Programming/Node-Development/node_practice/core.js"));
// console.log(path.extname("D:/WEB-Programming/Node-Development/node_practice/core.js"));

const os = require("node:os");

// console.log(os.cpus());
// console.log(os.freemem());

const fs = require("node:fs");

fs.writeFile("story.txt", "Hello Programmers!", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("File has saved");
  }
});

fs.appendFile("story.txt", " How are you?", "utf-8", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("More data added");
  }
});

fs.readFile("story.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});
