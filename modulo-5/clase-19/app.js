// Require de Express
const express = require("express");

// Require de FS
const fs = require("fs");

// Ejecución de Express
const app = express();
// console.dir(app);

// Levantando el Servidor en el puerto 3030
app.listen(3030);

// Leyendo y parseando (en array) el contenido de heroes.json
const heroesJSon = fs.readFileSync(__dirname + "/data/heroes.json", "utf-8");
const heroes = JSON.parse(heroesJSon);

// Ruta Raíz / ➝ Home
app.get("/", function (req, res) {
  res.send(
    "Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!."
  );
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get("/heroes", (req, res) => {
  res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get("/heroes/detalle/:id", (req, res) => {
  // Acá lo primero será encontrar al héroe que corresponda
  let heroe = heroes.find((heroe) => {
    return heroe.id == req.params.id;
  });
  // Si se encuentra al héroe se envía el nombre y su profesión
  // Si NO se encuentra se envía el mensaje de no encontrado
  if (heroe) {
    res.send(`${heroe.nombre}: ${heroe.profesion}`);
  } else {
    res.send("No se encontro el heroe");
  }
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get("/heroes/bio/:id/:ok", (req, res) => {
  // Acá lo primero será encontrar al héroe que corresponda
  let heroe = heroes.find((heroe) => {
    return heroe.id == req.params.id;
  });

  // Si NO se encuentra al héroe se envía un mensaje
  if (!heroe) {
    return res.send("No se encontro el heroe");
  } else {
  }
  // Si se encuentra al héroe:

  // Si nó vino el parámetro se envía el mensaje de error
  if (req.params.ok != "ok") {
    return res.send(
      `${heroe.nombre}: Lamento que no desees saber más de mi :(`
    );
  }

  // Si vino el parametro esperado, se envía la información
  return res.send(`${heroe.nombre}: ${heroe.resenia}`);
});

app.get("/creditos", (req, res) => {
  return res.send(`Hecho por: Piarrot`);
});

// Ruta... ¿Pára qué sirve esto?
app.get("*", (req, res) => {
  res.status(404).send("404 not found. <br> ¡Houston, poseemos problemas!");
});
