const Personagens = require('../models/Personagem');

const findAllPersonagensService = async () =>{
    const allPersonagens = await Personagens.find();
    return allPersonagens;
};

module.exports = {
    findAllPersonagensService,
}

