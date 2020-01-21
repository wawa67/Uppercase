const {Router} = require('express')
const upController = require('./controller/upController');

const routes = Router();

routes.post('/devs', upController.mostra);
module.exports = routes;