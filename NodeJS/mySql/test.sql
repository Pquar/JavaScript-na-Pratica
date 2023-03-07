/* 
    Criando uma tabela no banco de dados
*/
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

/* 
    Inserindo dados na tabela
*/

INSERT INTO usuarios(nome, email, idade) VALUES(
    'Ana',
    'Ana@gmail.com',
    21
    );