const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middlewares:
app.use(cors());
app.use(express.json());

//sqa engineers data:
const engineers = [
  {
    _id: 1,
    name: "Maisha Maliha",
    profession: "SQA Engineer",
    email: "maisham@gmail.com",
  },
  {
    _id: 2,
    name: "Mouri Hassan Taniya",
    profession: "QA Engineer",
    email: "mouritaniya@gmail.com",
  },
  {
    _id: 3,
    name: "Anik Jaber",
    profession: "SQA Engineer",
    email: "anik@gmail.com",
  },
];

//rote url get api:
app.get("/", (req, res) => {
  res.send("SQA Engineers Server is Created...!");
});

//find all engineers by get api:
app.get("/engineers", (req, res) => {
  res.send(engineers);
});

//find specific engineer by get api:
app.get("/engineers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Engineer id is: ${id}`);
  const engineer = engineers.find((engineer) => engineer?._id === id) || {};
  res.send(engineer);
});

//create new engineer by post api:
app.post("/engineers", (req, res) => {
  const newEngineer = req.body;
  newEngineer._id = engineers.length + 1;
  engineers.push(newEngineer);
  res.send(newEngineer);
  console.log(newEngineer);
});

app.delete("/engineers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedEngineers = engineers.filter((engineer) => engineer?._id !== id);
  console.log(updatedEngineers);
  res.send(updatedEngineers);
});

//server listener:
app.listen(port, () => {
  console.log(`SQAE Server is running on PORT ${port}`);
});
