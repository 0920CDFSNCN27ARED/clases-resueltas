const { Router } = require("express");
const heroesController = require("../controllers/heroes");
const router = Router();

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get("/heroes", heroesController.getAll);

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get("/heroes/detalle/:id", heroesController.getById);

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
router.get("/heroes/bio/:id/:ok?", heroesController.getBio);

module.exports = router;
