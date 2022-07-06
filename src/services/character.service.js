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
};

const updateCharactersService = async (idParam, editCharacter) => {
  const updateCharacter = await Characters.findByIdAndUpdate(idParam, editCharacter).setOptions({returnOriginal: false});
  return updateCharacter;
}


module.exports = {
  findAllCharactersService,
  findByIdCharactersService,
  createCharactersService,
  updateCharactersService,
};
