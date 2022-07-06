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

const findByIdCharactersController = async (req, res) => {
  const idParam = req.params.id;
  const oneCharacters = await charactersService.findByIdCharactersService(
    idParam,
  );
  res.send(oneCharacters);
};

module.exports = {
  findAllCharactersController,
  findByIdCharactersController,
};
