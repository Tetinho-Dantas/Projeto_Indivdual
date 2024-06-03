var quizModel = require("../models/quizModel");

function buscarRespostas(req, res) {
  var respostasId = req.params.respostasId;

  quizModel.buscarRespostas(respostasId).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(200).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var Q1 = req.body.rp1;
  var Q2 = req.body.rp2;
  var Q3 = req.body.rp3;
  var Q4 = req.body.rp4;
  var Q5 = req.body.rp5;
  var Q6 = req.body.rp6;
  var Q7 = req.body.rp7;
  var Q8 = req.body.rp8;
  var Q9 = req.body.rp9;
  


    if (Q1 == undefined) {
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


    quizModel.cadastrar(Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9)
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