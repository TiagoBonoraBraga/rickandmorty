// const mongoose = require('mongoose');
const personagensService = require('../services/personagem.service');

const findAllPersonagensController = async (req, res) => {
  const allPersonagens = await personagensService.findAllPersonagensService();

  if (allPersonagens.length == 0) {
    return res
      .status(404)
      .send({ message: 'Nenhum personagem está cadastrado' });
  }
  res.send(allPersonagens);
};

module.exports = {
    findAllPersonagensController,
}
