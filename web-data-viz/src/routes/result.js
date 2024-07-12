var express = require('express');
var router = express.Router();
var resultController = require('../controllers/resultController');

// Define uma rota GET para '/buscandoQ1' que chama a função buscarPosicao do controlador
router.get('/buscandoQ1', resultController.buscandoQ1);

// Define uma rota GET para '/buscandoQ1' que chama a função buscarPosicao do controlador
router.get('/buscandoQ2', resultController.buscandoQ2);

module.exports = router;
