const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  { _id: 1, name: "Shabana", email: "shabana@gmail.com" },
  { _id: 2, name: "Shabnoor", email: "shabnoor@gmail.com" },
  { _id: 3, name: "Sabila", email: "sabila@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User Management Server Created!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
