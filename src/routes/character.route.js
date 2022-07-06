const route = require('express').Router();
const controllerCharacters = require('../controllers/character.controller');

route.get('/', controllerCharacters.findAllCharactersController);
route.get('/find/:id', controllerCharacters.findByIdCharactersController);

module.exports = route;
