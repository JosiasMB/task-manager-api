const { MongoClient, ObjectId } = require("mongodb");
const connectionURL = "mongodb://localhost:27017";

const dataBaseName = "task-manager";
const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());
let users = [];

// MongoClient
const client = new MongoClient(connectionURL);

// Routes
app.get("/", (req, res) => {
  res.send(`<h1>Servidor corriendo en puerto ${port}</h1>`);
});

// Gets complete collection
app.get("/users", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dataBaseName);
    users = await db.collection("users").find({}).toArray();
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
  res.status(200).send(users);
});

// Get only one user from API
app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  let user = {};
  try {
    await client.connect();
    const db = client.db(dataBaseName);
    user = await db.collection("users").findOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
  res.status(200).send(user);
});

// Delete user from API
app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await client.connect();
    const db = client.db(dataBaseName);
    await db.collection("users").findOneAndDelete({ _id: new ObjectId(id) });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }

  res.status(200).send(`<p>User was deleted correctly!... ${id}</p>`);
});

// Listing on port 3000
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
});
