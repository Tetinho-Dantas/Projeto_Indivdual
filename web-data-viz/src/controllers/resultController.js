// Importa o módulo respostaModel que contém a função buscandoQ1
var respostaModel = require('../models/resultModel');

// Define a função buscandoQ1 que será usada como controlador para a rota correspondente
function buscandoQ1(req, res) {
    // Chama a função buscandoQ1 do modelo respostaModel
    respostaModel.buscandoQ1().then(resultado => {
        // Loga a resposta do modelo no console
        console.log("Resposta do modelo: ", resultado);
        
        // Verifica se a consulta retornou algum resultado
        if (resultado.rowCount > 0) {
            // Se houver resultados, envia uma resposta com status 200 e os dados em formato JSON
            res.status(200).json(resultado);
        } else {
            // Se não houver resultados, envia uma resposta com status 204 (sem conteúdo)
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(error => {
        // Loga qualquer erro que ocorra durante a busca dos resultados
        console.log("Houve um erro ao buscar os resultados.", error);
        // Envia uma resposta com status 500 e uma mensagem de erro em formato JSON
        res.status(500).json({ error: error.message });
    });
}

// Exporta a função buscandoQ1 para que possa ser usada em outros arquivos
module.exports = {
    buscandoQ1
};
