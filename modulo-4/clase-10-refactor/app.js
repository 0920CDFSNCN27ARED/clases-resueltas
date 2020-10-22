// Require de Express
const express = require("express");

// Ejecución de Express
const app = express();
// console.dir(app);

// Levantando el Servidor en el puerto 3030
app.listen(3030);

const mainRouter = require("./routes/main.js");
const heroesRouter = require("./routes/heroes.js");

// Ruta Raíz / ➝ Home
app.use(mainRouter);
app.use(heroesRouter);

// Ruta... ¿Pára qué sirve esto?
app.get("*", (req, res) => {
  res.status(404).send("404 not found. <br> ¡Houston, poseemos problemas!");
});
