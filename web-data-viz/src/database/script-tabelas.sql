-- BANCO  DE DADOS SpecialE - USER "GUSTAVO"
-- Comandos para mysql server

drop database specialE;
CREATE DATABASE specialE;

USE specialE;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
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

select * from usuario;

select * from respostas;

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


