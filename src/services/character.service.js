const Characters = require('../models/Character');

const findAllCharactersService = async () =>{
    const allCharacters = await Characters.find();
    return allCharacters;
};

module.exports = {
    findAllCharactersService,
}

