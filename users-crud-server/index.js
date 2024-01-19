const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

//middlewares:
app.use(cors());
app.use(express.json());

//rote url get api:
app.get("/", (req, res) => {
  res.send("Employees  CRUD server is created...!");
});

//mdb:
// mohammednayeem808
// 8i3kci1eCMDN8Odt
const uri =
  "mongodb+srv://mohammednayeem808:8i3kci1eCMDN8Odt@cluster0.fyclago.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Connect to the "employeesDB" database and access its "employees" collection
    // const database = client.db("employeesDB");
    // const employeesCollection = database.collection("employees");

    const employeesCollection = client
      .db("employeesDB")
      .collection("employees");

    //get api to find all employees:
    app.get("/employees", async (req, res) => {
      const cursor = employeesCollection.find();
      const employees = await cursor.toArray();
      res.send(employees);
    });

    //load single employee data by id using get api:
    app.get("/employees/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const employee = await employeesCollection.findOne(query);
      res.send(employee);
    });

    //post api to create new user:
    app.post("/employees", async (req, res) => {
      const user = await req.body;
      const result = await employeesCollection.insertOne(user);
      res.send(result);
    });

    //put api to update an employee:
    app.put("/employees/:id", async (req, res) => {
      const id = req.params.id;
      const employee = await req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateEmployee = {
        $set: {
          name: employee?.name,
          profession: employee?.profession,
          company: employee?.company,
          email: employee?.email,
        },
      };
      const updatedEmployer = await employeesCollection.updateOne(
        filter,
        updateEmployee,
        options
      );
      res.send(updatedEmployer);
    });

    //delete api to delete an employee from the DB and UI:
    app.delete("/employees/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const employees = await employeesCollection.deleteOne(query);
      res.send(employees);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//listener:
app.listen(port, () => {
  console.log(`Employees CRUD server is running on PORT ${port}`);
});
