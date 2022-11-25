const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
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
      temperament: d.temperament,
      life_span: d.life_span,
    };
  });

  return arrayDogs;
};
const getDogName = async (name) => {
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
  };
};

const getId = async (id) => {
  const dogs = await infoApi();
  const dogFilter = dogs.filter((d) => d.id === parseInt(id));
  return dogFilter[0];
};

module.exports = { infoApi, getDogName, getId };
