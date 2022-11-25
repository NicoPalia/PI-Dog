const temperaments = require("./temperaments");
const dogs = require("./dogs");
const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/temperaments", temperaments);
router.use("/dogs", dogs);

module.exports = router;
