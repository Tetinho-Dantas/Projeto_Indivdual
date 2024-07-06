// Define o ambiente de execução da aplicação
var ambiente_processo = 'producao';
// var ambiente_processo = 'desenvolvimento';


// Define o caminho do arquivo .env com base no ambiente de execução
var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';


// Carrega as variáveis de ambiente do arquivo .env correspondente
require("dotenv").config({ path: caminho_env });



// Importa o framework Express para construção do servidor
var express = require("express");

// Importa o módulo CORS para habilitar a política de mesma origem
var cors = require("cors");

// Importa o módulo path para lidar com caminhos de arquivo e diretório
var path = require("path");

// Define a porta e o host da aplicação a partir das variáveis de ambiente
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

// Cria uma instância do aplicativo Express
var app = express();

// Importa os roteadores para diferentes partes da aplicação
var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");
var aquariosRouter = require("./src/routes/aquarios");
var quizRouter = require("./src/routes/quiz");
var questionarioRouter = require("./src/routes/questionario"); // adicionada variavel para aplicação da rota
var resultRouter = require("./src/routes/result");
var empresasRouter = require("./src/routes/empresas");

// Define middlewares para processar requisições
app.use(express.json()); // Permite o uso de JSON nas requisições
app.use(express.urlencoded({ extended: false })); // Habilita o parsing de URL-encoded bodies
app.use(express.static(path.join(__dirname, "public"))); // Define o diretório para arquivos estáticos

app.use(cors()); // Aplica o middleware CORS para permitir requisições de diferentes origens

// Configuração dos endpoints da aplicação utilizando os roteadores importados
app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);
app.use("/aquarios", aquariosRouter);
app.use("/empresas", empresasRouter);
app.use("/quiz", quizRouter);
app.use("/questionario", questionarioRouter);
app.use("/result", resultRouter);

// Inicia o servidor Express na porta definida
app.listen(PORTA_APP, function () {
    // Imprime uma mensagem de inicialização do servidor no console
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});
