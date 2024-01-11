const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//Middleware:
app.use(cors());
app.use(express.json());

const users = [
  { _id: 1, name: "Shabana", email: "shabana@gmail.com" },
  { _id: 2, name: "Shabnoor", email: "shabnoor@gmail.com" },
  { _id: 3, name: "Sabila", email: "sabila@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User Management Server Created!");
});

//get api:
app.get("/users", (req, res) => {
  res.send(users);
});

//post api:
app.post("/users", (req, res) => {
  console.log("Post URL hitting...!");
  const newUser = req.body;
  newUser._id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
  console.log(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
