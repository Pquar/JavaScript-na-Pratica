# Documentação da API DE GAMES
Esta api tem como finalizada a apresentação de dados de jogos, como Nome, Ano e Preço

## Endpoints

### GET /games
Esse endpoint e responsavel por retorna a listagem de todos os games cadastrados no banco de dados.

#### Parametros
Nenhum
#### Respostas
##### OK!200
Caso essa resposta aconteça voce recebara a listagem de todos os games
Exemplo de resposta:
```
[
    {
        "id": 23,
        "title" : "Call of duty MW"
        "year": 2019,
        "price": 60 
    }
]
```

##### Falha na autenticação! 401
Caso aconteça este erro, significa que aconteceu alguma falha durante o processo de autenticação de requisição.
Motivos: Token invalido, token expirado.
Exemplo de resposta 
```
{
    "error": "token invalido!"
}
```

### POST /games
Esse endpoint e responsavel por realizar o login do usuario.

#### Parametros
email: E-maiil do usuario cadastrado no sistema.

password: Senha cadastrada no sistema, referente ao email cadastrado 
Exemplo de envio de parametros:
```
    {
        "email": "email@email.com.br",
        "password": "SuaSenha"
    }
```
#### Respostas
##### OK! 200
Caso essa resposta aconteça voce ira receber o token jwt para acessar endpoints projetegidos na API.
```
    {
        "token": "jsddjidsfjiihdsfieiihi3324uh9f979fgg91g9g11y971778tv&*V7t87878tvt0"
    }
```

##### Falha na autenticação! 401
Caso aconteça este erro, significa que aconteceu alguma falha durante o processo de autenticação de requisição.
Motivos: senha ou email incorretos.
Exemplo de resposta 
```
{
    "error": "credenciais invalidas"
}
```