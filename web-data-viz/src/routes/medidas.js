var express = require('express');
var router = express.Router();

var medidaController = require('../controllers/medidaController');

router.get('/buscar/pergunta1', function(req,res){ 
    medidaController.buscarpergunta1(req,res);
});
router.get('/buscar/pergunta2', function(req,res){ 
    medidaController.buscarpergunta2(req,res);
});
router.get('/buscar/pergunta3', function(req,res){ 
    medidaController.buscarpergunta3(req,res);
});
router.get('/buscar/pergunta4', function(req,res){ 
    medidaController.buscarpergunta4(req,res);
});
router.get('/buscar/pergunta5', function(req,res){ 
    medidaController.buscarpergunta5(req,res);
});
router.get('/buscar/pergunta6', function(req,res){ 
    medidaController.buscarpergunta6(req,res);
});
router.get('/buscar/pergunta7', function(req,res){ 
    medidaController.buscarpergunta7(req,res);
});
router.get('/buscar/pergunta8', function(req,res){ 
    medidaController.buscarpergunta8(req,res);
});
router.get('/buscar/pergunta9', function(req,res){ 
    medidaController.buscarpergunta9(req,res);
});
module.exports = router;
