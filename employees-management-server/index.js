const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//employees data:
const employees = [
  {
    _id: 1,
    name: "Sabrina Habib",
    profession: "Banker",
    email: "sabrina@gmail.com",
  },
  {
    _id: 2,
    name: "Sathi Debnath",
    profession: "Teacher",
    email: "sathi@gmail.com",
  },
  {
    _id: 3,
    name: "Shawpna Akhter",
    profession: "Doctor",
    email: "shawpna@gmail.com",
  },
  {
    _id: 4,
    name: "Shaila Akhter",
    profession: "Accountant",
    email: "shaila@gmail.com",
  },
];

//middlewares:
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Employees Management Server Created...!");
});

//get all employees api:
app.get("/employees", (req, res) => {
  res.send(employees);
});

//get specific employee api:
app.get("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const findEmployee = employees.find((employee) => employee._id === id) || {};
  res.send(findEmployee);
  console.log(`Employee Id: `, id);
});

//post api:
app.post("/employees", (req, res) => {
  console.log("POST URL Hitting...!");
  const newEmployee = req.body;
  newEmployee._id = employees.length + 1;
  employees.push(newEmployee);
  res.send(newEmployee);
  console.log(newEmployee);
});

app.listen(port, () => {
  console.log(`Employees Management Server is running on PORT ${port}`);
});
