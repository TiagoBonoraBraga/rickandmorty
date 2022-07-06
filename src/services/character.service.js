const Characters = require('../models/Character');

const findAllCharactersService = async () => {
  const allCharacters = await Characters.find();
  return allCharacters;
};

const findByIdCharactersService = async (idParam) => {
  const oneCharacters = await Characters.findById(idParam);
  return oneCharacters;
};
module.exports = {
  findAllCharactersService,
  findByIdCharactersService,
};
