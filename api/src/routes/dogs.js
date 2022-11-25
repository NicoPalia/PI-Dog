const { Router } = require("express");
const { Temperament, Dog } = require("../db");
const { infoApi, getDogName, getId } = require("../Controllers/index");
const router = Router();

// [ ] GET /dogs:
// Obtener un listado de las razas de perro
// Debe devolver solo los datos necesarios para la ruta principal

// [ ] GET /dogs?name="...":
// Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
// Si no existe ninguna raza de perro mostrar un mensaje adecuado

router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const dog = await getDogName(name);
      res.status(200).send(dog);
    } else {
      const dogs = await infoApi();
      res.status(200).send(dogs);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

// [ ] GET /dogs/{idRaza}:
// Obtener el detalle de una raza de perro en particular
// Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
// Incluir los temperamentos asociados

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const dog = await getId(id);
    res.status(200).send(dog);
  } catch (err) {
    res.status(400).send(err);
  }
});

// [ ] POST /dogs:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
// Crea una raza de perro en la base de datos relacionada con sus temperamentos

module.exports = router;
