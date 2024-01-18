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
    name: "Maisha Maliha",
    profession: "SQA Engineer",
    email: "maisham@gmail.com",
  },
  {
    name: "Mouri Hassan Taniya",
    profession: "QA Engineer",
    email: "mouritaniya@gmail.com",
  },
  {
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

//server listener:
app.listen(port, () => {
  console.log(`SQAE Server is running on PORT ${port}`);
});
