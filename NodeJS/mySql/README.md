# Comandos
- `` mysql -h localhost -u root -p``
- ``show databases;``
-Criar um banco de dados ``create database [nome do banco de dados];``
-Acessando o banco de dados ``use [nome do banco de dados];``
-Criando uma tabela ``create table [nome da tabela] ([nome da coluna] [tipo da coluna]);``
-Exibindo as tabelas ``show tables;``
-Exibindo as colunas ``describe [nome da tabela];``
-Exibindo os dados ``select * from [nome da tabela];``
- Personalizar consulta
```sql
SELECT * FROM [nome da tabela] WHERE [nome da coluna] = [valor da coluna]; SELECT * FROM [nome da tabela] WHERE [nome da coluna] = [valor da coluna] AND [nome da coluna] = [valor da coluna];
SELECT  * FROM [nome da tabela] WHERE [nome da coluna] >= [valor da coluna];
```
- Deletando um registro ``delete from [nome da tabela] where [nome da coluna] = [valor da coluna];``
- Alterando um registro ``update [nome da tabela] set [nome da coluna] = [valor da coluna] where [nome da coluna] = [valor da coluna];``

# Tipos de dados
- ``int`` // numero inteiro
- ``float`` // numero com casas decimais
- ``varchar`` // texto curto
- ``char`` // caracter
- ``text`` // texto longo
- ``date`` // data
- ``boolean`` // verdadeiro ou falso
- ``BLOB`` // binario longo// imagem, video, etc