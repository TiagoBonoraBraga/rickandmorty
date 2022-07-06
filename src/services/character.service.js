const Characters = require('../models/Character');

const findAllCharactersService = async () => {
  const allCharacters = await Characters.find();
  return allCharacters;
};

const findByIdCharactersService = async (idParam) => {
  const oneCharacters = await Characters.findById(idParam);
  return oneCharacters;
};

const createCharactersService = async (newCharacter) => {
  const createdCharacter = await Characters.create(newCharacter);
  return createdCharacter;
}


module.exports = {
  findAllCharactersService,
  findByIdCharactersService,
  createCharactersService,
};
