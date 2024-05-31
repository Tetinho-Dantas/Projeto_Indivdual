var database = require("../database/config");

function buscarRespostas(respostasId) {
    var instrucaoSql = `SELECT * FROM respostas WHERE id = ?`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [respostasId]);
}

function cadastrar(respostasId, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9) {
    var instrucaoSql = `
        INSERT INTO respostas (respostasId, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [respostasId, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9]);
}

module.exports = {
    buscarRespostas,
    cadastrar
};
