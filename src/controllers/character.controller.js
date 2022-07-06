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
  const oneCharacter = await charactersService.findByIdCharacterService(
    idParam,
  );
  if (!oneCharacter) {
    res.status(404).send({ message: "Character não encontrada" }); 
  }
  res.send(oneCharacter);
};

const createCharacterController = async (req, res) => {
  const character = req.body;
  const newCharacter = await charactersService.createCharacterService(character);
  res.status(201).send({ message: "Character criado com sucesso!", newCharacter });
};

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const editCharacter = req.body;
  const updatedCharacter = await charactersService.updateCharacterService(idParam, editCharacter);
  res.status(201).send({ message: "Character atualizado com sucesso!", updatedCharacter });
}

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  await charactersService.deleteCharacterService(idParam);
  res.status(201).send({ message: "Character deletado com sucesso!" });
};


module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController
};
