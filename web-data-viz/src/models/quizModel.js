var database = require("../database/config");

function buscarRespostas(respostasId) {
    var instrucaoSql = `SELECT * FROM Respostas WHERE respostasId = ?`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [respostasId]);
}

function cadastrar(Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9) {
    var instrucaoSql = `
        INSERT INTO Respostas (Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9)
        VALUES ('${Q1}', '${Q2}', '${Q3}', '${Q4}', '${Q5}', '${Q6}', '${Q7}', '${Q8}', '${Q9}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9]);
}

module.exports = {
    buscarRespostas,
    cadastrar
};
