const express = require("express");
const phones = require("./phones.json");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Express Js Phones Server Creating....!");
});

//phones data api:
app.get("/phones", (req, res) => {
  res.send(phones);
});

app.listen(port, () => {
  console.log(`Phones Server running on port ${port}`);
});
