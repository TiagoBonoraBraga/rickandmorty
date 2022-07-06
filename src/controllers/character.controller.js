const mongoose = require('mongoose');
const charactersService = require('../services/character.service');

const findAllCharactersController = async (req, res) => {
  const allCharacters = await charactersService.findAllCharactersService();

  if (allCharacters.length == 0) {
    return res
      .status(404)
      .send({ message: 'Nenhum character está cadastrado' });
  }
  res.send(allCharacters);
};

const findByIdCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const oneCharacters = await charactersService.findByIdCharacterService(
    idParam,
  );
  res.send(oneCharacters);
};

const createCharacterController = async (req, res) => {
  const character = req.body;
  const newCharacter = await charactersService.createCharacterService(character);
  res.send(newCharacter);
};

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const editCharacter = req.body;
  const updatedCharacter = await charactersService.updateCharacterService(idParam, editCharacter);
  res.send(updatedCharacter);
}

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  await charactersService.deleteCharacterService(idParam);
  res.send({ message: "Character deletado com sucesso!" });
};


module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController
};
