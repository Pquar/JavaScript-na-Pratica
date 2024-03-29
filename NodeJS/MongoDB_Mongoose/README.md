# MongoDB
MongoDB armazena dados como documentos JSON, que são semelhantes a objetos JavaScript. Esses documentos são agrupados em coleções, que são semelhantes a tabelas em um banco de dados relacional. As coleções podem conter qualquer número de documentos. Os documentos podem conter outros documentos, arrays e arrays de documentos.

- Todo dado adicionado ao MongoDB é armazenado como documento.
- Documentos são agrupados em coleções. Coleções são semelhantes a tabelas em um banco de dados relacional.
- Coleções podem conter qualquer número de documentos.
- Documentos podem conter outros documentos, arrays e arrays de documentos.
- Os documentos não precisam ter o mesmo esquema. Esquemas podem ser adicionados dinamicamente. ex: doc_1(nome: "Ang", idade: 20) doc_2(nome: "Byi", idade: 20, cidade: "São Paulo")

# Características
CAP Theorem:
- Consistency: Todos os nós(bancos) devem ter a mesma informação ao mesmo tempo.
- Availability: Todos os nós(bancos) devem estar disponíveis ou retorna alguma resposta.
- Partition-Tolerance: O sistema deve continuar funcionando mesmo que haja falhas consiga garantir que os dados sejam salvos, mesmo com falhas na "rede".

Exemplos:
MongoDB: Consistência e Partition-Tolerance
MySQL: Consistência e Availability
Cassandra: Availability e Partition-Tolerance

# Configurando mongoDB

instalar o mongoDB
Entrar na variável de ambiente do sistema e adicionar o caminho do mongoDB no PATH
ex:  C:\Program Files\MongoDB\Server\4.2\bin 

- ``` mongod  ```abre o servidor do mongoDB
- ``` mongo ```abre o cliente do mongoDB 

# Funções do mongoose
| Função | Descrição |
| --- | --- |
| find  | Retorna todos documentos que possuem os parâmetros passados |
| findOne  | Retorna o primeiro documento que possuem os parâmetros passados |
| findByIdAndDelete | Deleta o documento que possuem o id passado |
