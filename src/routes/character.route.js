const route = require('express').Router();
const controllerCharacters = require('../controllers/character.controller');

route.get('/', controllerCharacters.findAllCharactersController);
route.get('/find/:id', controllerCharacters.findByIdCharacterController);
route.post('/create', controllerCharacters.createCharacterController);
route.put('/update/:id', controllerCharacters.updateCharacterController);
route.delete('/delete/:id', controllerCharacters.deleteCharacterController);

module.exports = route;
