const route = require('express').Router();
const controllerCharacters = require('../controllers/character.controller');

const {
  validId,
  validObjectBody,
} = require('../middlewares/character.middleware');

route.get('/', controllerCharacters.findAllCharactersController);
route.get(
  '/find/:id',
  validId,
  controllerCharacters.findByIdCharacterController,
);
route.post(
  '/create',
  validObjectBody,
  controllerCharacters.createCharacterController,
);
route.put(
  '/update/:id',
  validId,
  validObjectBody,
  controllerCharacters.updateCharacterController,
);
route.delete(
  '/delete/:id',
  validId,
  controllerCharacters.deleteCharacterController,
);

module.exports = route;
