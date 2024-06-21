// Importa o modelo questionarioModel que contém as funções para interagir com o banco de dados
var questionarioModel = require("../models/questionarioModel");

// Função para buscar respostas com base no ID fornecido na URL
function buscarRespostas(req, res) {
  // Obtém o parâmetro respostasId da requisição (parte da URL)
  var respostasId = req.params.respostasId;

  // Chama a função buscarRespostas do modelo questionarioModel, passando respostasId como parâmetro
  questionarioModel.buscarRespostas(respostasId).then((resultado) => {
    // Verifica se houve algum resultado retornado do banco de dados
    if (resultado.length > 0) {
      // Se houver resultados, responde com status 200 e envia os resultados em formato JSON
      res.status(200).json(resultado);
    } else {
      // Se não houver resultados, responde com status 200 e envia um array vazio em formato JSON
      res.status(200).json([]);
    }
  }).catch(function (erro) {
    // Se ocorrer um erro ao executar a consulta SQL
    console.log(erro);
    console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
    // Retorna status 500 (Erro interno do servidor) e envia a mensagem de erro recebida do banco de dados
    res.status(500).json(erro.sqlMessage);
  });
}

// Função para cadastrar novas respostas
function cadastrar(req, res) {
  // Obtém os valores Q1 e Q2 do corpo da requisição (req.body)
  var Q1 = req.body.rp1;
  var Q2 = req.body.rp2;

  // Verifica se Q1 ou Q2 estão undefined
  if (Q1 == undefined) {
    res.status(400).send("Q1 está undefined!");
  } else if (Q2 == undefined) {
    res.status(400).send("Q2 está undefined!");
  } else {
    // Se Q1 e Q2 estão definidos, chama a função cadastrar do modelo questionarioModel, passando Q1 e Q2 como parâmetros
    questionarioModel.cadastrar(Q1, Q2)
      .then((resultado) => {
        // Se o cadastro for bem-sucedido, responde com status 201 (Created) e envia o resultado em formato JSON
        res.status(201).json(resultado);
      }).catch((erro) => {
        // Se ocorrer um erro ao executar a inserção SQL
        console.log(erro);
        console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
        // Retorna status 500 (Erro interno do servidor) e envia a mensagem de erro recebida do banco de dados
        res.status(500).json(erro.sqlMessage);
      });
  }
}

// Exporta as funções buscarRespostas e cadastrar para serem utilizadas por outros módulos
module.exports = {
  buscarRespostas,
  cadastrar
}
