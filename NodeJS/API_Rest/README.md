# Rest API
- HTTP: protocolo de transferência de dados.
- REST: Representational State Transfer.

## Verbos HTTP

|Verbs|Objective|Usage|Multiple requests|Cache/BookMark|
|:---:|---------|:---:|:---:|:---:|
|GET|Retrieve items from resource |Links|Yes|Yes|
|POST|Create new items in resource|Forms|No|No|
|PUT|Update existing items in resource|Forms|Yes|No|
|PATCH|Update existing items in resource|Forms|No/Yes|No|
|DELETE|Delete existing items in resource|Forms/Links|Yes |No| 

## Status Code

|Status Code|Description| 
|:---:|:---:|
|1XX|-- INFORMATIVO --|
|2XX|-- SUCESSO --|
|200|OK|
|201|Created|
|204|No Content|
|3XX|-- REDIRECIONAMENTO --|
|4XX| -- ERRO DO CLIENTE --|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|5XX|-- ERRO DO SERVIDOR --|
|500|Internal Server Error|

## REST
1- Client Servidor
2- Stateless
3- Cacheavel
4- Layered System (Saber Trabalhar com camadas)
5- Interface Uniforme e direta(Usar os verbos HTTP)

## REST X RESTful
- REST: É um estilo de arquitetura de software, mesmo não sendo completo.
- RESTful: É um serviço que segue o estilo arquitetural REST completo.

RESTful niveis:
- Nivel 0 (THE SWAMP OF POORLY DESIGNED APIS(POX)): Onde não há um padrão, todas requisições em uma única rota.
- Nivel 1 (RESOURCES): Onde há um padrão, todas requisições com um end-point.
- Nivel 2 (HTTP VERBS): Onde há um padrão, todas requisições com um end-point e verbos HTTP.
- Nivel 3 (HYPERMEDIA CONTROLS - HATEOAS): Onde há um padrão, todas requisições com um end-point, verbos HTTP e links.

> O que torna uma API RESTful é o de todos niveis serem seguidos.

## POSTMAN
