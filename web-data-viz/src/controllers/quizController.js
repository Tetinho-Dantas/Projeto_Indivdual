var quizModel = require("../models/quizModel");

function buscarRespostas(req, res) {
  var respostasId = req.params.respostasId;

  quizModel.buscarRespostas(respostasId).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var respostasId = req.body.respostasId;
  var Q1 = req.body.Q1;
  var Q2 = req.body.Q2;
  var Q3 = req.body.Q3;
  var Q4= req.body.Q4;
  var Q5 = req.body.Q5;
  var Q6 = req.body.Q6;
  var Q7 = req.body.Q7;
  var Q8 = req.body.Q8;
  var Q9 = req.body.Q9;


   if (respostasId == undefined) {
    res.status(400).send("respostasId está undefined!");
} else if (Q1 == undefined) {
    res.status(400).send("Q1 está undefined!");
} else if (Q2 == undefined) {
    res.status(400).send("Q2 está undefined!");
} else if (Q3 == undefined) {
    res.status(400).send("Q3 está undefined!");
} else if (Q4 == undefined) {
    res.status(400).send("Q4 está undefined!");
} else if (Q5 == undefined) {
    res.status(400).send("Q5 está undefined!");
} else if (Q6 == undefined) {
    res.status(400).send("Q6 está undefined!");
} else if (Q7 == undefined) {
    res.status(400).send("Q7 está undefined!");
} else if (Q8 == undefined) {
    res.status(400).send("Q8 está undefined!");
} else if (Q9 == undefined) {
    res.status(400).send("Q9 está undefined!");

  } else {


    quizModel.cadastrar(
      
    )
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarRespostas,
  cadastrar
}