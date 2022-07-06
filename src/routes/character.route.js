const route = require('express').Router();
const controllerCharacters = require('../controllers/character.controller');

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../../swagger.json');

// route.use('/api-docs', swaggerUi.serve);
// route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/', controllerCharacters.findAllCharactersController);

module.exports = route;
