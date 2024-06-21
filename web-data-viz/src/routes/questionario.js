var express = require("express");
var router = express.Router();

// Importa o controlador questionarioController que contém a lógica de negócio para o questionário
var questionarioController = require("../controllers/questionarioController");

// Rota GET para buscar respostas por ID
router.get("/:respostasId", function (req, res) {
  // Chama a função buscarRespostas do questionarioController, passando req e res como parâmetros
  questionarioController.buscarRespostas(req, res);
});

// Rota POST para cadastrar novas respostas
router.post("/cadastrar", function (req, res) {
  // Chama a função cadastrar do questionarioController, passando req e res como parâmetros
  questionarioController.cadastrar(req, res);
})

// Exporta o objeto router que contém as rotas configuradas
module.exports = router;
