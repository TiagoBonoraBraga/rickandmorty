const route = require('express').Router();
const controllerCharacters = require('../controllers/character.controller');

route.get('/', controllerCharacters.findAllCharactersController);

module.exports = route;
