create database SpecialEd;

use SpecialEd;

create table Usuario (
    idUsuario int primary key auto_increment,
    nome_login varchar(45),
    email varchar(45),
    senha varchar(45)
);

create table Responsavel (
    idResponsavel int primary key auto_increment,
    nome varchar(45),
    cpf char(11),
    numero char(9),
    endereco varchar(100),
    bairro varchar(45),
    cidade varchar(45),
    cep char(8),
    fkUsuario int,
    constraint usuario_repsonsavel foreign key (fkUsuario) references Usuario(idUsuario)
);

create table Crianca (
    idCrianca int primary key auto_increment,
    nome varchar(45),
    idade int,
    cpf char(11),
    limitacao varchar(100),
    tipo_de_acompanhamento varchar(45),
    fkresponsavel int,
    constraint responsavel_crianca foreign key (fkresponsavel) references Responsavel(idResponsavel)
);

create table Escola (
    idEscola int primary key auto_increment,
    nome_escola varchar(100),
    localizacao_escola varchar(100),
    rede_de_ensino varchar(45),
    tipo_de_ensino varchar(45),
    fkusuario int,
	constraint usuario_escola foreign key(fkusuario) REFERENCES Usuario(idUsuario)
);

create table Funcionario (
    idFuncionario int primary key auto_increment,
    nome varchar(45),
    carga varchar(45),
    capacitacao varchar(45),
    tempo_experiencia int
);

create table Escola_has_Funcionario (
    Escola_idEscola int,
    Funcionario_idFuncionario int,
    primary key (Escola_idEscola, Funcionario_idFuncionario),
    foreign key (Escola_idEscola) references Escola(idEscola),
    foreign key (Funcionario_idFuncionario) references Funcionario(idFuncionario)
);
