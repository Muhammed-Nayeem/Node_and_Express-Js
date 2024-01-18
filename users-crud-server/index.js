const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//middlewares:
app.use(cors());
app.use(express.json());

//rote url get api:
app.get("/", (req, res) => {
  res.send("Users CRUD server is created...!");
});

//mdb:
// mohammednayeem808
// 8i3kci1eCMDN8Odt
const uri = "mongodb+srv://mohammednayeem808:8i3kci1eCMDN8Odt@cluster0.fyclago.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Connect to the "employeesDB" database and access its "employees" collection
    // const database = client.db("employeesDB");
    // const employeesCollection = database.collection("employees");

    const employeesCollection = client.db("employeesDB").collection("employees");

    //post api to create new user:
    app.post("/users", async(req, res) => {
      const user = await req.body;
      const result = await employeesCollection.insertOne(user);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


//listener:
app.listen(port, () => {
  console.log(`Users CRUD server is running on PORT ${port}`);
});
