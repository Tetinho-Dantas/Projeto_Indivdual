var database = require("../database/config");

// Função para buscar a contagem de respostas para cada categoria de Q1
function buscandoQ1() {
    var instrucaoSql = `
        SELECT categoria, respostas
        FROM (
            SELECT 'Profissionais incapacitados' AS categoria, COUNT(Q1) AS respostas
            FROM Answers
            WHERE Q1 = 'Profissionais incapacitados'
            UNION ALL
            SELECT 'Distancia' AS categoria, COUNT(Q1) AS respostas
            FROM Answers
            WHERE Q1 = 'Distancia'
            UNION ALL
            SELECT 'Infraestrutura' AS categoria, COUNT(Q1) AS respostas
            FROM Answers
            WHERE Q1 = 'Infraestrutura'
            UNION ALL
            SELECT 'Metodologia de Ensino' AS categoria, COUNT(Q1) AS respostas
            FROM Answers
            WHERE Q1 = 'Metodologia de Ensino'
        ) AS subquery
        ORDER BY respostas DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql).then(response => {
        console.log("Resultado da consulta: ", response);
        return response;
    }).catch(error => {
        console.error("Erro na execução da consulta: ", error);
        throw error;
    });
}   

// Função para buscar a contagem de respostas para cada categoria de Q2
function buscandoQ2() {
    var instrucaoSql = `
       SELECT categoria, respostas
        FROM (
            SELECT 'Sim' AS categoria, COUNT(Q2) AS respostas
            FROM Answers
            WHERE Q2 = 'Sim'
            UNION ALL
            SELECT 'Não' AS categoria, COUNT(Q2) AS respostas
            FROM Answers
            WHERE Q2 = 'Não'
        ) AS subquery
        ORDER BY respostas DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql).then(response => {
        console.log("Resultado da consulta: ", response);
        return response;
    }).catch(error => {
        console.error("Erro na execução da consulta: ", error);
        throw error;
    });
}

// Exporta as funções para uso em outros módulos
module.exports = {
    buscandoQ1,
    buscandoQ2
};
