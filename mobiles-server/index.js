const express = require("express");
const cors = require("cors");
const mobiles = require("./phones.json");
const app = express();
const port = process.env.PORT || 5000;

//middlewares:
app.use(cors());
app.use(express.json());

//route url get api:
app.get("/", (req, res) => {
  res.send("Mobiles Server is creating...!");
});

//mobiles url to find all Phones get api:
app.get("/mobiles", (req, res) => {
  res.send(mobiles);
});

//get api -specific mobile find using dynamic id:
app.get("/mobiles/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Mobile Id is: ${id}`);
  const mobile = mobiles.find((mobile) => mobile?.id === id) || {};
  res.send(mobile);
});

//port listener api:
app.listen(port, () => {
  console.log(`Mobiles Server is running on PORT ${port}`);
});
