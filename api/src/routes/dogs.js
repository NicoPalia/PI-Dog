const { Router } = require("express");
const { Temperament, Dog } = require("../db");
const { infoApi } = require("../Controllers/index");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const dogs = await infoApi();
    res.status(200).send(dogs);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
