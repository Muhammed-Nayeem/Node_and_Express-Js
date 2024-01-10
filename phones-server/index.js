const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Express Js Phones Server Creating....!");
});

app.listen(port, () => {
  console.log(`Phones Server running on port ${port}`);
});
