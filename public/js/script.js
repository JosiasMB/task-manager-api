const table = document.getElementById("estudiantesTable");

let estudiantes = [];
// Function that gets data from API
async function getestudiantes() {
  const apiUrl = "http://localhost:3000/estudiantes";
  try {
    // fetch request
    const response = await fetch(apiUrl);
    estudiantes = await response.json();
    displayestudiantes(estudiantes);
  } catch (error) {
    // catch error
  }
}
getestudiantes();

// Function to display data on HTML
function displayestudiantes(estudiantes) {
  // document.getElementById("nombre").textContent = estudiantes[0].nombre;
  for (var i = 0; i < estudiantes.length; i++) {
    datoslinea = document.createElement("td");
    datoslinea.textContent = estudiantes[i].nombre;
    datoslinea2 = document.createElement("td");
    datoslinea2.textContent = estudiantes[i].apellido;
    datoslinea3 = document.createElement("td");
    datoslinea3.textContent = estudiantes[i].matricula;
    datoslinea4 = document.createElement("td");
    datoslinea4.textContent = estudiantes[i].curso;
    datoslinea5 = document.createElement("td");
    datoslinea5.textContent = estudiantes[i].nota;
    linea = document.createElement("tr");
    datoslinea6 = document.createElement("td");
    boton = document.createElement("button");
    // boton.setAttribute("id", "showAlert");
    let id = estudiantes[i]._id;
    boton.addEventListener("click", () => {
      eliminar(id);
    });
    linea.appendChild(datoslinea);
    linea.appendChild(datoslinea2);
    linea.appendChild(datoslinea3);
    linea.appendChild(datoslinea4);
    linea.appendChild(datoslinea5);
    datoslinea6.appendChild(boton);
    linea.appendChild(datoslinea6);
    table.appendChild(linea);
  }
}

async function eliminar(id) {
  const apiUrl = `http://localhost:3000/estudiantes/${id}`;
  try {
    res = await fetch(apiUrl, { method: "DELETE" });
    res = await res.json();
    if (id === res.value._id) {
    }
  } catch (error) {}
}
