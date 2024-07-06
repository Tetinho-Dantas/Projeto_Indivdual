// Importa o módulo de configuração do banco de dados
var database = require("../database/config");

function buscandoQ1() {
    // Define a instrução SQL que conta as ocorrências de cada valor da coluna Q1 na tabela Answers
    var instrucaoSql = `
       SELECT
       (SELECT COUNT(Q1) FROM Answers WHERE Q1 = 'Profissionais incapacitados') AS Profissionais_incapacitados,
       (SELECT COUNT(Q1) FROM Answers WHERE Q1 = 'Distancia') AS Distancia,
       (SELECT COUNT(Q1) FROM Answers WHERE Q1 = 'Infraestrutura') AS Infraestrutura,
       (SELECT COUNT(Q1) FROM Answers WHERE Q1 = 'Metodologia de Ensino') AS Metodologia_de_Ensino
       ORDER BY 
           Profissionais_incapacitados DESC, 
           Distancia DESC, 
           Infraestrutura DESC, 
           Metodologia_de_Ensino DESC;
    `;

    // Loga a instrução SQL no console
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    // Executa a instrução SQL e retorna uma Promise
    return database.executar(instrucaoSql).then(response => {
        // Loga o resultado da consulta no console
        console.log("Resultado da consulta: ", response);
        // Retorna o resultado da consulta
        return response;
    }).catch(error => {
        // Loga qualquer erro que ocorra durante a execução da consulta
        console.error("Erro na execução da consulta: ", error);
        // Lança o erro para ser tratado posteriormente
        throw error;
    });
}

// Exporta a função buscandoQ1 para que possa ser usada em outros módulos
module.exports = {
    buscandoQ1
};
