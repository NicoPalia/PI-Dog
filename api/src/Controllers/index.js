const axios = require("axios");
const URL = `https://api.thedogapi.com/v1/breeds`;
const { Sequelize } = require("sequelize");
const { Dog, Temperament } = require("../db");


const infoApi = async () => {
  const infoUrl = await axios.get(URL);
  const arrayDogs = infoUrl.data?.map((d) => {
    return {
      id: d.id,
      name: d.name,
      img: d.image.url,
      height: d.height.metric,
      weight: d.weight.metric,
      breed_group: d.breed_group || null,
      life_span: d.life_span,
      temperament: d.temperament,
      origin: d.origin || null,
    };
  });
  return arrayDogs;
};

const dbDog = async () => {
  try {
    const dbDog = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          atributes: [],
        },
      },
    });
    return dbDog;
  } catch (err) {
    console.log(err);
  }
};

const getAllDogs = async () => {
  const api = await infoApi();
  const db = await dbDog();
  return api && db ? api.concat(db) : api;
};

const getDogName = async (name) => {
  try {
    const dbDog = await Dog.findOne({
      where: { name: name },
      include: Temperament,
    });
    if (!dbDog) {
      const infoUrl = await axios.get(`${URL}/search?q=${name}`);
      console.log(infoUrl);
      return {
        id: infoUrl.data[0].id,
        name: infoUrl.data[0].name,
        img: `https://cdn2.thedogapi.com/images/${infoUrl.data[0].reference_image_id}.jpg`,
        height: infoUrl.data[0].height.metric,
        weight: infoUrl.data[0].weight.metric,
        temperament: infoUrl.data[0].temperament,
        life_span: infoUrl.data[0].life_span,
        breed_group: api.dog.data[0].breed_group || "None",
        origin: apiDog.data[0].origin || "Unknown",
      };
    } else {
      return dbDog;
    }
  } catch (err) {
    throw new Error("Could not find that dog!");
  }
};

const getId = async (id) => {
  try {
    if (id.length <= 3) {
      const dogs = await infoApi();
      const dogFilter = dogs.filter((d) => d.id === parseInt(id));
      return dogFilter[0];
    } else {
      const db = await Dog.findByPk(id, { include: Temperament });
      return db;
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { infoApi, getDogName, getId, getAllDogs };
