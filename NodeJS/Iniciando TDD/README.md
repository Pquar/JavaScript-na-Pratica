# TDD = Test Driven Development
Desenvolvimento orientado a Testes, normalmente estamos acustamos a desenvolver com CDD, primeiro programa e depois testa, com TDD é o contrário, primeiro escreve o teste e depois o código.

- CDD: Código primeiro, depois teste.
- TDD: Teste primeiro, depois código.

Testes Automatizados:
- Testes unitários: Testam uma unidade de código, como uma função ou um método.
- Testes de integração: Testam a integração entre as unidades de código.
- Testes E2E: Testam a aplicação como um todo, como um usuário faria.
- Teste de Documentação: Testam a documentação da aplicação.
- Teste de infraestrutura: Testam a infraestrutura da aplicação(Banco de dados ...)

## Vantages
Quanto maior for a o projeto maior será a vantagem de usar TDD, pois diminuirá o tempo para testar a funcionalidades, se esperamos para desenvolver e testar ao final do projeto terá muito coisa a ser testada e quanto o maior o projeto mais tempo sera necessário, agora se seguirmos com testes desde o começo do projeto, a tendência e que no começos demore a ser testado poucas funcionalidades porem a medida que o projeto cresça o tempo para testar as funcionalidade cairá.
- Segurança ao refatorar o código.

### Quando Não Utilizar
- Não tiver tempo (Apesar que, testar pode auxiliar em manutenções futura ou refatorar diminuindo o tempo desta manutenção).
- Orçamento apertado
- Projeto ja realizado e sem testes.
> obs: Isso nao e uma regra, mas uma dica para quando for utilizar TDD.
### Quando Utilizar
- Projeto medio e grande porte
- Quando tiver tempo e orçamento
- Inicio de projeto

# Jest
Jest é um framework de testes para JavaScript, criado pelo Facebook, que roda testes unitários, de integração.
definição de tipos do jest(auto complete)

```bash	
npm install jest
npm install @types/jest
```

## Outras lib
Testar aplicações com express
``npm install supertest``
