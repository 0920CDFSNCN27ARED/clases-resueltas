// Require de FS
const fs = require("fs");
// Leyendo y parseando (en array) el contenido de heroes.json
const heroesJSon = fs.readFileSync(__dirname + "/../data/heroes.json", "utf-8");
const heroes = JSON.parse(heroesJSon);

const heroesController = {
  getAll: (req, res) => {
    res.send(heroes);
  },
  getById: (req, res) => {
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
  },
  getBio: (req, res) => {
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
  },
};

module.exports = heroesController;
