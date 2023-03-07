# Comandos
- Criar um arquivo ``npm init``
- Instalar express ``npm install express --save``


# Rotas
Rotas são os caminhos que o usuário pode acessar no seu site.
- So e possivel enviar uma resposta para cada rota.
- Se nao tiver um resposta para uma rota, o client vai ficar esperando uma resposta.(..loading)

## nodemon
Reinicia o servidor automaticamente quando houver alguma alteração no codigo.
- Instalar ``npm install  nodemon -g``
- Rodar ``nodemon [nome do arquivo]``

## Parametros
- Parametros são valores que podem ser passados na url.

ex: ``localhost:3000/usuario/:id`` // :id é um parametro
> O parametro pode ser acessado atraves de ``req.params.id``