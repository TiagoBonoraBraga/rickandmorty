const route = require('express').Router();
const controllerCharacters = require('../controllers/character.controller');

route.get('/', controllerCharacters.findAllCharactersController);
route.get('/find/:id', controllerCharacters.findByIdCharactersController);
route.post('/create', controllerCharacters.createCharactersController);
route.put('/update/:id', controllerCharacters.updateCharactersController);

module.exports = route;
