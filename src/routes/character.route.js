const route = require('express').Router();
const controllerCharacters = require('../controllers/character.controller');

route.get('/', controllerCharacters.findAllCharactersController);
route.get('/find/:id', controllerCharacters.findByIdCharactersController);
route.post('/create', controllerCharacters.createCharactersController);

module.exports = route;
