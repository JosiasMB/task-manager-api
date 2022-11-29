const registrar = document.getElementById("registrar");
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const matricula = document.getElementById("matricula");
const curso = document.getElementById("curso");
const nota = document.getElementById("nota");

registrar.addEventListener("click", function (e) {
  e.preventDefault();
  insertar(estudianteConstructor());
});

function estudianteConstructor() {
  let estudiante = {
    nombre: nombre.value,
    apellido: apellido.value,
    matricula: matricula.value,
    curso: curso.value,
    nota: nota.value,
  };
  return estudiante;
}

async function insertar(data) {
  fetch("http://localhost:3000/estudiantes", {
    method: "POST",
    body: JSON.stringify({
      nombre: nombre.value,
      apellido: apellido.value,
      matricula: matricula.value,
      curso: curso.value,
      nota: nota.value,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
}
