
const route = require("express").Router();
const controllerPersonagens = require("../controllers/personagem.controller");

route.get("/", controllerPersonagens.findAllPersonagensController);

module.exports = route;
