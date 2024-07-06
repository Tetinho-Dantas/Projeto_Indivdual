// Importa o módulo express para criar um roteador
var express = require('express');
// Cria uma instância do roteador
var router = express.Router();
// Importa o controlador que contém a função buscandoQ1
var resultController = require('../controllers/resultController');

// Define uma rota GET para '/buscandoQ1' que chama a função buscandoQ1 do controlador
router.get('/buscandoQ1', resultController.buscandoQ1);

// Exporta o roteador para que possa ser usado em outros módulos
module.exports = router;
