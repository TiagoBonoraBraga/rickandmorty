const Characters = require('../models/Character');

const findAllCharactersService = async () => {
  const allCharacters = await Characters.find();
  return allCharacters;
};

const findByIdCharacterService = async (idParam) => {
  const oneCharacters = await Characters.findById(idParam);
  return oneCharacters;
};

const createCharacterService = async (newCharacter) => {
  const createdCharacter = await Characters.create(newCharacter);
  return createdCharacter;
};

const updateCharacterService = async (idParam, editCharacter) => {
  const updateCharacter = await Characters.findByIdAndUpdate(idParam, editCharacter).setOptions({returnOriginal: false});
  return updateCharacter;
};

const deleteCharacterService = async (idParam) => {
  return await Characters.findByIdAndDelete(idParam);
}


module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService
};
