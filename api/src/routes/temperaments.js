const { Router } = require("express");
const axios = require("axios");
const { Temperament } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  const api = await axios.get("https://api.thedogapi.com/v1/breeds");
  const apiTemp = api.data.map((t) => t.temperament);
  const temperaments = apiTemp.toString().split(",");
  temperaments.forEach((e) => {
    let temp = e.trim();
    if (temp.length > 0) {
      Temperament.findOrCreate({ where: { name: temp } });
    }
  });
  const baseTemp = await Temperament.findAll();
  res.send(baseTemp);
});

module.exports = router;
