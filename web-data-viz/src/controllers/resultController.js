var respostaModel = require('../models/resultModel');

// Função para buscar a contagem de respostas para cada categoria
function buscandoQ1(req, res) {
    console.log(`Recuperando contagem de respostas para cada categoria`);

    // Chama a função do modelo para buscar a contagem de respostas no banco de dados
    respostaModel.buscandoQ1().then(function (resultado) {
        if (resultado.length > 0) {
            // Retorna o resultado em formato JSON com status 200 (OK)
            res.status(200).json(resultado);
        } else {
            // Retorna status 204 se nenhum resultado for encontrado
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar as respostas.", erro);
        // Retorna status 500 se houver um erro na execução da consulta
        res.status(500).json({ error: erro.message });
    });
}

// Função para buscar a contagem de respostas para cada categoria de Q2
function buscandoQ2(req, res) {
    console.log(`Recuperando contagem de respostas para cada categoria`);

    // Chama a função do modelo para buscar a contagem de respostas no banco de dados
    respostaModel.buscandoQ2().then(function (resultado) {
        if (resultado.length > 0) {
            // Retorna o resultado em formato JSON com status 200 (OK)
            res.status(200).json(resultado);
        } else {
            // Retorna status 204 se nenhum resultado for encontrado
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar as respostas.", erro);
        // Retorna status 500 se houver um erro na execução da consulta
        res.status(500).json({ error: erro.message });
    });
}

module.exports = {
    buscandoQ1,
    buscandoQ2
};
