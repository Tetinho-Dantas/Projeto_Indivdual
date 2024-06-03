var database = require("../database/config");

function buscarpergunta1() {
    var instrucaoSql = `SELECT 
    (SELECT COUNT(Q1) FROM Respostas WHERE Q1 = 'Muito adequada') AS Muito_Adequada_Q1,
    (SELECT COUNT(Q1) FROM Respostas WHERE Q1 = 'Adequada') AS Adequada_Q1,
    (SELECT COUNT(Q1) FROM Respostas WHERE Q1 = 'Parcialmente adequada') AS Parcialmente_Adequada_Q1,
    (SELECT COUNT(Q1) FROM Respostas WHERE Q1 = 'Inadequada') AS Inadequada_Q1;

`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarpergunta2() {
    var instrucaoSql = `SELECT 
    (SELECT COUNT(Q2) FROM Respostas WHERE Q2 = 'Muito preparados') AS Muito_Preparados_Q2,
    (SELECT COUNT(Q2) FROM Respostas WHERE Q2 = 'Preparados') AS Preparados_Q2,
    (SELECT COUNT(Q2) FROM Respostas WHERE Q2 = 'Parcialmente preparados') AS Parcialmente_Preparados_Q2,
    (SELECT COUNT(Q2) FROM Respostas WHERE Q2 = 'Despreparados') AS Despreparados_Q2;

`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarpergunta3() {
    var instrucaoSql = `SELECT 
	(SELECT COUNT(Q3) FROM Respostas WHERE Q3 = 'Sempre') AS Sempre_Q3,
    (SELECT COUNT(Q3) FROM Respostas WHERE Q3 = 'Frequentemente') AS Frequentemente_Q3,
    (SELECT COUNT(Q3) FROM Respostas WHERE Q3 = 'Ocasionalmente') AS Ocasionalmente_Q3,
    (SELECT COUNT(Q3) FROM Respostas WHERE Q3 = 'Nunca') AS Nunca_Q3;

`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarpergunta4() {
    var instrucaoSql = `SELECT 
    (SELECT COUNT(Q4) FROM Respostas WHERE Q4 = 'Totalmente incluído') AS Totalmente_Incluido_Q4,
    (SELECT COUNT(Q4) FROM Respostas WHERE Q4 = 'Parcialmente incluído') AS Parcialmente_Incluido_Q4,
    (SELECT COUNT(Q4) FROM Respostas WHERE Q4 = 'Raramente incluído') AS Raramente_Incluido_Q4,
    (SELECT COUNT(Q4) FROM Respostas WHERE Q4 = 'Não incluído') AS Nao_Incluido_Q4;

`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarpergunta5() {
    var instrucaoSql = `SELECT 
	(SELECT COUNT(Q5) FROM Respostas WHERE Q5 = 'Sempre') AS Sempre_Q5,
    (SELECT COUNT(Q5) FROM Respostas WHERE Q5 = 'Frequentemente') AS Frequentemente_Q5,
    (SELECT COUNT(Q5) FROM Respostas WHERE Q5 = 'Ocasionalmente') AS Ocasionalmente_Q5,
    (SELECT COUNT(Q5) FROM Respostas WHERE Q5 = 'Nunca') AS Nunca_Q5;

`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarpergunta6() {
    var instrucaoSql = `SELECT 
    (SELECT COUNT(Q6) FROM Respostas WHERE Q6 = 'Excelente') AS Excelente_Q6,
    (SELECT COUNT(Q6) FROM Respostas WHERE Q6 = 'Boa') AS Boa_Q6,
    (SELECT COUNT(Q6) FROM Respostas WHERE Q6 = 'Regular') AS Regular_Q6,
    (SELECT COUNT(Q6) FROM Respostas WHERE Q6 = 'Ruim') AS Ruim_Q6;

`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarpergunta7() {
    var instrucaoSql = `SELECT 
    (SELECT COUNT(Q7) FROM Respostas WHERE Q7 = 'Falta de recursos financeiros') AS Falta_de_recursos_financeiros_Q7,
    (SELECT COUNT(Q7) FROM Respostas WHERE Q7 = 'Falta de apoio profissional') AS Falta_de_apoio_profissional_Q7,
    (SELECT COUNT(Q7) FROM Respostas WHERE Q7 = 'Estrutura física inadequada') AS Estrutura_física_inadequada_Q7,
    (SELECT COUNT(Q7) FROM Respostas WHERE Q7 = 'Preconceito e discriminação') AS Preconceito_e_discriminação_Q7;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarpergunta8() {
    var instrucaoSql = `SELECT 
	(SELECT COUNT(Q8) FROM Respostas WHERE Q8 = 'Sim, completamente') AS Sim_Completamente_Q8,
    (SELECT COUNT(Q8) FROM Respostas WHERE Q8 = 'Em parte') AS Em_Parte_Q8,
    (SELECT COUNT(Q8) FROM Respostas WHERE Q8 = 'Pouco') AS Pouco_Q8,
    (SELECT COUNT(Q8) FROM Respostas WHERE Q8 = 'Não') AS Nao_Q8;

`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarpergunta9() {
    var instrucaoSql = `SELECT 
	(SELECT COUNT(Q9) FROM Respostas WHERE Q9 = 'Sim, totalmente') AS Sim_Totalmente_Q9,
    (SELECT COUNT(Q9) FROM Respostas WHERE Q9 = 'Em parte') AS Em_Parte_Q9,
    (SELECT COUNT(Q9) FROM Respostas WHERE Q9 = 'Pouco') AS Pouco_Q9,
    (SELECT COUNT(Q9) FROM Respostas WHERE Q9 = 'Não') AS Nao_Q9;


`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarpergunta1,
    buscarpergunta2,
    buscarpergunta3,
    buscarpergunta4,
    buscarpergunta5,
    buscarpergunta6,
    buscarpergunta7,
    buscarpergunta8,
    buscarpergunta9,
    buscarMedidasEmTempoReal
}
