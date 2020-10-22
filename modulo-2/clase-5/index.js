// Las cosas por hacer y las cosas ya hechas
// -> Un array de las cosas hechas
// -> otro array de las cosas por hacer.
// Fechas
// [TODO] Poder ingresar las cosas <-
// Poder consultar las cosas por hacer y las cosas hechas

// La tarea
// -> Nombre o descripcion
// -> fecha
// -> estado

//Operaciones
// - Ver todas las tareas
// - Ver solo las tareas completadas
// - Ver solo las tareas que es pendientes

const fs = require("fs");
const path = require("path");

const tasksFileAbsolutePath = path.join(__dirname, "tasks.json"); // clase-5/tasks.json

const tasksJSON = fs.readFileSync(tasksFileAbsolutePath, { encoding: "utf-8" }); //<---

const tasks = JSON.parse(tasksJSON); // Convertir String en formato JSON a un Objecto de Javascript

function showAll() {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const doneText = task.done ? "Hecho" : "Pendiente";
    console.log(`- [${doneText}] ${task.name} (${task.deadline})`);
  }
}

function showDone() {
  //TODO
}

function showPending() {
  //TODO
}

const param = process.argv[2];

switch (param) {
  case "all":
    showAll();
    break;
  case "done":
    showDone();
    break;
  case "pending":
    showPending();
    break;
  default:
    console.log("Los parametros aceptados son: 'all', 'done' y 'pending'");
}
