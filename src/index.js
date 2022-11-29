const { MongoClient, ObjectId } = require("mongodb");
const connectionURL = "mongodb://localhost:27017";
const dataBaseName = "EstudiantesCollection";
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

// Routes API to DB

// // Gets complete collection
app.get("/estudiantes", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dataBaseName);
    users = await db.collection("Estudiantes").find({}).toArray();
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
  res.status(200).send(users);
});

// Get only one user from API
app.get("/estudiantes/:id", async (req, res) => {
  const id = req.params.id;
  let user = {};
  try {
    await client.connect();
    const db = client.db(dataBaseName);
    user = await db
      .collection("Estudiantes")
      .findOne({ _id: new ObjectId(id) });
  } catch (error) {
    res.send(error);
  } finally {
    await client.close();
  }
  res.status(200).send(user);
});

// Delete user from API
app.delete("/estudiantes/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await client.connect();
    const db = client.db(dataBaseName);
    deleted = await db
      .collection("Estudiantes")
      .findOneAndDelete({ _id: new ObjectId(id) });
  } catch (error) {
    res.send(404);
    console.log(error);
  } finally {
    await client.close();
  }

  res.status(200).send(deleted);
});

// Insert user to DB
app.post("/estudiantes", async (req, res) => {
  await client.connect();
  const db = client.db(dataBaseName);
  let result = await db.collection("Estudiantes").insertOne(req.body);
  res.send(result);
});

////////////////////////////////////////// Rutas HBS ///////////////////////////////////////////

// Home
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    text: "Users register on Database",
  });
});

// student
app.get("/student", (req, res) => {
  res.render("Estudiantes", {
    title: "Lista",
    text: "Users register on Database",
  });
});
// registro
app.get("/registro", (req, res) => {
  res.render("registro", {
    title: "Registro",
    text: "Users register on Database",
  });
});

// Listing on port 3000
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
});
