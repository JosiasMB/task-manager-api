const { MongoClient } = require("mongodb");
const connectionURL = "mongodb://localhost:27017";

const dataBaseName = "EstudiantesCollection";
MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    return console.log("Error al conectar con la base de datos.");
  }
  console.log("Conectado!...");
  const db = client.db(dataBaseName);

  /************************* CRUD *************************/
  // Insert;
  for (i = 0; i < 50; i++) {
    db.collection("Estudiantes").insertMany(
      [
        {
          nombre: i + "Josias",
          apellido: "Matos Batista",
          matricula: i + "022-2020",
          curso: "BootCamp Java",
          Nota: i,
        },
        {
          nombre: i + "Josue",
          apellido: "Feliz Gomez",
          matricula: i + "022-2001",
          curso: "BootCamp C#",
          Nota: i + "A",
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("No se puedo insertar.");
        }
        console.log(result);
      }
    );
  }

  // for (i = 0; i < 25; i++) {
  //   // Insert;
  //   db.collection("users").insertMany(
  //     [
  //       {
  //         name: "Josias Matos",
  //         email: "josias@gmail.com",
  //         age: 25,
  //       },
  //       {
  //         name: "Josias Matos Batista",
  //         email: "josiasb@gmail.com",
  //         age: 25,
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log("No se puedo insertar.");
  //       }
  //       console.log(result);
  //     }
  //   );
  // }

  // //Find
  // //   db.collection("users")
  // //     .find({ email: "joel@gmail.com" })
  // //     .toArray((error, result) => {
  // //       if (error) {
  // //         return console.log("Error");
  // //       }
  // //       console.log(result);
  // //     });

  // //update
  // // db.collection("users")
  // //   .updateOne(
  // //     {
  // //       _id: new ObjectId("6365ad1fda9b93c950e47379"),
  // //     },
  // //     {
  // //       $set: {
  // //         email: "josias@hotmail.com",
  // //       },
  // //     }
  // //   )
  // //   .then((result) => {
  // //     console.log(result);
  // //   })
  // //   .catch((error) => {
  // //     console.log(error);
  // //   });

  // // Delete
  // // db.collection("users")
  // //   .deleteOne({
  // //     email: "josias@gmail.com",
  // //   })
  // //   .then((result) => {
  // //     console.log(result);
  // //   })
  // //   .catch((error) => {
  // //     console.log(error);
  // //   });
});
