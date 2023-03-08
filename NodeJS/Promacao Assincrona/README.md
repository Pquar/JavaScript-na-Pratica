# Programaçao Assincrona	

Problema da programação sincrona: Demora muito tempo para executar uma tarefa(Ação bloqueante), atrasando a execução de outras tarefas.

Assincrona: Ações não bloqueantes, que não atrasam a execução de outras tarefas.

Na programção async coisas são executadas ao mesmo tempo, sendo executadas ao mesmo tempo sem bloquear o fluxo da aplicação, sendo assim, elas poderiam ser finalizadas em qualquer ordem.


Async/Await <  Promises < CallBack
## Callbacks
Callback é uma função que é passada como argumento para outra função, que será executada quando um evento acontecer.

## Promises
Promises é um objeto que representa a conclusão ou o fracasso de uma operação assíncrona.
## Async/Await
Async/Await é uma forma de escrever código assíncrono de forma mais simples e clara.(ES8)

## setTimeout

```javascript
setTimeout(function(){
    console.log('Executando callback...');
    }, 2000);
```