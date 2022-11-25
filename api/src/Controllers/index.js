const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const { Sequelize } = require("sequelize");
const { Dog, Temperament } = require("../db");

const infoApi = async () => {
  const infoUrl  = await axios.get(URL);
  const arrayDogs = infoUrl.data?.map((d)=>{
    return {
        id : d.id ,
        name : d.name,
        img: d.image.url ,
        height : d.height.metric,
        weight : d.weight.metric,
        temperament: d.temperament,
        life_span: d.life_span,

    }
  })
  return arrayDogs
};

module.exports={infoApi}