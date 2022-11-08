const { MongoClient, ObjectId } = require("mongodb");
const connectionURL = "mongodb://localhost:27017";
const dataBaseName = "task-manager";
const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());
let users = [];
const path = require("path");
const hbs = require("hbs");
// Path
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
// Se configura el contenido estatico configurando una ruta absoluta
app.use(express.static(publicDirectoryPath));

// HBS
app.set("view engine", "hbs");
app.set("views", viewsPath);
// MongoClient
const client = new MongoClient(connectionURL);

// Routes
// Home
app.get("", (req, res) => {
  res.render("index", {
    title: "Home",
    text: "Users register on Database",
  });
});
// users
app.get("/users", (req, res) => {
  res.render("users", {
    title: "USERS",
    text: "Users register on Database",
  });
});
// about
app.get("/about", (req, res) => {
  res.render("about", {
    title: "ABOUT",
    text: "Lorem100",
  });
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
    deleted = await db
      .collection("users")
      .findOneAndDelete({ _id: new ObjectId(id) });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }

  res.status(200).send(deleted);
});

// // Gets complete collection
app.get("/view", async (req, res) => {
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

// Listing on port 3000
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
});
