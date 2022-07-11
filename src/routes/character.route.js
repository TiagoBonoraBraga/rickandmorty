const route = require('express').Router();
const controllerCharacters = require('../controllers/character.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const {
  validId,
  validObjectBody,
} = require('../middlewares/character.middleware');

route.use('/api-docs', swaggerUi.serve);
route.use('/api-docs', swaggerUi.setup(swaggerDocument));


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
