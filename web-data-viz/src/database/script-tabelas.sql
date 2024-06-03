-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
drop database specialE;
CREATE DATABASE specialE;

USE specialE;

/* CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14)
);
*/
CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
	/*fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id) */
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300)
	-- fk_empresa INT,
	-- FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME
	-- fk_aquario INT,
	-- FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);
CREATE TABLE Respostas (
    respostasId INT AUTO_INCREMENT PRIMARY KEY,
    DataHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Q1 VARCHAR(255),
    Q2 VARCHAR(255),
    Q3 VARCHAR(255),
    Q4 VARCHAR(255),
    Q5 VARCHAR(255),
    Q6 VARCHAR(255),
    Q7 VARCHAR(255),
    Q8 VARCHAR(255),
    Q9 VARCHAR(255),
    Q10 TEXT
);

insert into empresa (razao_social, cnpj) values ('Empresa 1', '00000000000000');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);

select * from usuario;

select count(Q1) from Respostas WHERE Q1 = 'Muito adequada';
select count(Q1) from Respostas WHERE Q1 = 'Muito adequada';
select count(Q1) from Respostas WHERE Q1 = 'Muito adequada';
select count(Q1) from Respostas WHERE Q1 = 'Muito adequada';


select * from usuario;

SELECT
    AVG(CASE Q1 
        WHEN 'Muito adequada' THEN 4 
        WHEN 'Adequada' THEN 3 
        WHEN 'Parcialmente adequada' THEN 2 
        WHEN 'Inadequada' THEN 1 
        ELSE NULL END) AS Media_Q1,
    AVG(CASE Q2 
        WHEN 'Muito preparados' THEN 4 
        WHEN 'Preparados' THEN 3 
        WHEN 'Parcialmente preparados' THEN 2 
        WHEN 'Despreparados' THEN 1 
        ELSE NULL END) AS Media_Q2,
    AVG(CASE Q3 
        WHEN 'Sempre' THEN 4 
        WHEN 'Frequentemente' THEN 3 
        WHEN 'Ocasionalmente' THEN 2 
        WHEN 'Nunca' THEN 1 
        ELSE NULL END) AS Media_Q3,
    AVG(CASE Q4 
        WHEN 'Totalmente incluído' THEN 4 
        WHEN 'Parcialmente incluído' THEN 3 
        WHEN 'Raramente incluído' THEN 2 
        WHEN 'Não incluído' THEN 1 
        ELSE NULL END) AS Media_Q4,
    AVG(CASE Q5 
        WHEN 'Sempre' THEN 4 
        WHEN 'Frequentemente' THEN 3 
        WHEN 'Ocasionalmente' THEN 2 
        WHEN 'Nunca' THEN 1 
        ELSE NULL END) AS Media_Q5,
    AVG(CASE Q6 
        WHEN 'Excelente' THEN 4 
        WHEN 'Boa' THEN 3 
        WHEN 'Regular' THEN 2 
        WHEN 'Ruim' THEN 1 
        ELSE NULL END) AS Media_Q6,
    AVG(CASE Q7 
        WHEN 'Sim, completamente' THEN 4 
        WHEN 'Em parte' THEN 3 
        WHEN 'Pouco' THEN 2 
        WHEN 'Não' THEN 1 
        ELSE NULL END) AS Media_Q7,
    AVG(CASE Q8 
        WHEN 'Sim, completamente' THEN 4 
        WHEN 'Em parte' THEN 3 
        WHEN 'Pouco' THEN 2 
        WHEN 'Não' THEN 1 
        ELSE NULL END) AS Media_Q8,
    AVG(CASE Q9 
        WHEN 'Sim, totalmente' THEN 4 
        WHEN 'Em parte' THEN 3 
        WHEN 'Pouco' THEN 2 
        WHEN 'Não' THEN 1 
        ELSE NULL END) AS Media_Q9
FROM Respostas;
INSERT INTO Respostas (Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10) VALUES
('Muito adequada', 'Muito preparados', 'Sempre', 'Totalmente incluído', 'Sempre', 'Excelente', 'Sim, completamente', 'Sim, completamente', 'Sim, totalmente', 'Mais recursos tecnológicos.'),
('Adequado', 'Preparados', 'Frequentemente', 'Parcialmente incluído', 'Frequentemente', 'Boa', 'Em parte', 'Em parte', 'Em parte', 'Treinamento de professores.'),
('Parcialmente adequada', 'Parcialmente preparados', 'Ocasionalmente', 'Raramente incluído', 'Ocasionalmente', 'Regular', 'Pouco', 'Pouco', 'Pouco', 'Melhorar a comunicação entre pais e escola.'),
('Inadequado', 'Despreparados', 'Nunca', 'Não incluído', 'Nunca', 'Ruim', 'Não', 'Não', 'Não', 'Investimento em infraestrutura.'),
('Adequado', 'Preparados', 'Frequentemente', 'Parcialmente incluído', 'Frequentemente', 'Boa', 'Falta de apoio profissional', 'Pouco', 'Em parte', 'Apoio emocional aos alunos.'),
('Muito adequada', 'Muito preparados', 'Sempre', 'Totalmente incluído', 'Sempre', 'Excelente', 'Falta de recursos financeiros', 'Sim, completamente', 'Sim, totalmente', 'Inclusão de atividades extracurriculares.');

SELECT
    AVG(CASE Q1 
        WHEN 'Muito adequada' THEN 4 
        WHEN 'Adequado' THEN 3 
        WHEN 'Parcialmente adequada' THEN 2 
        WHEN 'Inadequado' THEN 1 
        ELSE NULL END) AS Media_Q1,
    AVG(CASE Q2 
        WHEN 'Muito preparados' THEN 4 
        WHEN 'Preparados' THEN 3 
        WHEN 'Parcialmente preparados' THEN 2 
        WHEN 'Despreparados' THEN 1 
        ELSE NULL END) AS Media_Q2,
    AVG(CASE Q3 
        WHEN 'Sempre' THEN 4 
        WHEN 'Frequentemente' THEN 3 
        WHEN 'Ocasionalmente' THEN 2 
        WHEN 'Nunca' THEN 1 
        ELSE NULL END) AS Media_Q3,
    AVG(CASE Q4 
        WHEN 'Totalmente incluído' THEN 4 
        WHEN 'Parcialmente incluído' THEN 3 
        WHEN 'Raramente incluído' THEN 2 
        WHEN 'Não incluído' THEN 1 
        ELSE NULL END) AS Media_Q4,
    AVG(CASE Q5 
        WHEN 'Sempre' THEN 4 
        WHEN 'Frequentemente' THEN 3 
        WHEN 'Ocasionalmente' THEN 2 
        WHEN 'Nunca' THEN 1 
        ELSE NULL END) AS Media_Q5,
    AVG(CASE Q6 
        WHEN 'Excelente' THEN 4 
        WHEN 'Boa' THEN 3 
        WHEN 'Regular' THEN 2 
        WHEN 'Ruim' THEN 1 
        ELSE NULL END) AS Media_Q6,
    AVG(CASE Q7 
        WHEN 'Falta de recursos financeiros' THEN 1
        WHEN 'Falta de apoio profissional' THEN 2
        WHEN 'Estrutura física inadequada' THEN 3
        WHEN 'Preconceito e discriminação' THEN 4
        ELSE NULL END) AS Media_Q7,
    AVG(CASE Q8 
        WHEN 'Sim, completamente' THEN 4 
        WHEN 'Em parte' THEN 3 
        WHEN 'Pouco' THEN 2 
        WHEN 'Não' THEN 1 
        ELSE NULL END) AS Media_Q8,
    AVG(CASE Q9 
        WHEN 'Sim, totalmente' THEN 4 
        WHEN 'Em parte' THEN 3 
        WHEN 'Pouco' THEN 2 
        WHEN 'Não' THEN 1 
        ELSE NULL END) AS Media_Q9
FROM Respostas;
