// Importa o módulo de configuração do banco de dados
var database = require("../database/config");

// Função para buscar respostas pelo ID
function buscarRespostas(respostasId) {

    // Monta a instrução SQL para selecionar respostas específicas pelo ID
    var instrucaoSql = `SELECT * FROM Respostas WHERE respostasId = ?`;

    // Exibe a instrução SQL no console para fins de depuração
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    // Chama o método `executar` do objeto `database` para executar a instrução SQL com o parâmetro `respostasId`
    return database.executar(instrucaoSql, [respostasId]);
}

// Função para cadastrar novas respostas
function cadastrar(Q1, Q2) {
    
    // Monta a instrução SQL para inserir novas respostas na tabela `Answers`
    var instrucaoSql = `
        INSERT INTO Answers (Q1, Q2)
        VALUES ('${Q1}', '${Q2}')
    `;
    // Exibe a instrução SQL no console para fins de depuração
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    // Chama o método `executar` do objeto `database` para executar a instrução SQL com os valores fornecidos
    return database.executar(instrucaoSql, [Q1, Q2]);
}

// Exporta as funções `buscarRespostas` e `cadastrar` para serem utilizadas por outros módulos
module.exports = {
    buscarRespostas,
    cadastrar
};
