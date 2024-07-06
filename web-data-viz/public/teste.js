// script
function fechGrafico() {

    fetch("/medidas/ultimas", {
        method: "GET",
        headers: {
            "Content-Type": "aplication/json"
        }

    }).then(function (resposta) {
        console.log("Estou no then do grafico!");

        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);

                var respostaBanco = json;

                atualizarGrafico(respostaBanco);
            })
        } else {
            console.log("Houve um erro ao capturar os dados do grafico!");
            resposta.text().then(texto => {
                console.error(texto);
            });


        }

    }).catch(function (erro) {
        console.log(erro);
    });

    return false;

    function refreshGrafico() {
        fechGrafico();
        setInterval(fechGrafico(), 30000)
    }

    function atualizarGrafico(dados) {
        console.log(dados, "atuds")
        D = dados;
        console.log(D, 'ranking')
        for (var i = 0; i < dados.length; i++) {
            data.push(dados[i].esportes);
            console.log(data, "DADOS")

        }
        for (var contador = 0; contador < D.length; contador++) {
            
            D.sort((a, b) => b.esportes - a.esportes);
            
              top1.innerHTML = `${D[0].nomeEsporte}:  ${D[0].esportes}`
              top2.innerHTML = `${D[1].nomeEsporte}: ${D[1].esportes}`
              top3.innerHTML = `${D[2].nomeEsporte}: ${D[2].esportes}`
            
              console.log(D, '  NA SEQUENCIA ')
          }
}
}
// route 

var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarEstatistica(req, res);
});


module.exports = router;

// model

var database = require("../database/config");


function buscarEstatistica() {

    var instrucaoSql = `SELECT nomeEsporte, COUNT(*) as esportes
    FROM esportes
    WHERE nomeEsporte IN ('futebol', 'basquete', 'volei', 'outros')
    GROUP BY nomeEsporte;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
  
    buscarEstatistica
}

// controller

var medidaModel = require("../models/medidaModel");


function buscarEstatistica(req, res) {


    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarEstatistica()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarEstatistica

}