const fs = require("fs");
const path = require("path");

const tasksFileAbsolutePath = path.join(__dirname, "./db/tasks.json"); // c://users/piarrot/desktop/clase-6/tasks.json

const tasksJSON = fs.readFileSync(tasksFileAbsolutePath, { encoding: "utf-8" }); //<---

const tasks = JSON.parse(tasksJSON); // Convertir String en formato JSON a un Objecto de Javascript

function showAll() {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const doneText = task.done ? "☑" : "☐";
    console.log(`- ${doneText} ${task.name} (${task.deadline})[${i}]`);
  }
}

function showDone() {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (task.done) {
      console.log(`-  ☑ ${task.name} (${task.deadline})`);
    }
  }
}

function showPending() {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (!task.done) {
      console.log(`-  ☐ ${task.name} (${task.deadline})`);
    }
  }
}

function toggle(taskIndex) {
  const task = tasks[taskIndex];
  task.done = !task.done; //esta es la tarea que quiero editar
  showAll();
  save();
}

function add(name, deadline) {
  const newtask = {
    name: name,
    deadline: deadline,
    done: false,
  };
  tasks.push(newtask);
  showAll();
  save();
}

function save() {
  const tasksJSON = JSON.stringify(tasks, null, 2); //Prietty print
  fs.writeFileSync(tasksFileAbsolutePath, tasksJSON);
}

const argumentsArray = process.argv; //arguments vector
const thirdParameter = argumentsArray[2];
const fourthParameter = argumentsArray[3];
const fifthParameter = argumentsArray[4];

switch (thirdParameter) {
  case "all":
    showAll();
    break;
  case "done":
    showDone();
    break;
  case "pending":
    showPending();
    break;
  case "toggle":
    toggle(fourthParameter);
    break;
  case "add":
    add(fourthParameter, fifthParameter);
    break;
  default:
    console.log("Los parametros aceptados son: 'all', 'done' y 'pending'");
}
