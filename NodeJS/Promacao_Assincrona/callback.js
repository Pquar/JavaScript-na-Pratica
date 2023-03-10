// Problema: O código abaixo não funciona como esperado, 
//Pois o console.log("Seu email foi enviado com sucesso!");
//é executado antes do envio do email. 
/* 
function enviarEmail(corpo, para){
    setTimeout(function(){
        console.log(`
        Para: ${para}
        ------------------
        ${corpo}
        ------------------
        De: Cleiton
        `)
    }, 8000)
}

console.log("Iniciando envio do email");
enviarEmail("Olá, tudo bem?", "email@email.com");
console.log("Seu email foi enviado com sucesso!"); */

//Como resolver isso?
//Usando o callback
/* 
function enviarEmail(corpo, para, callback){
    setTimeout(function(){
        console.log(`
            Para: ${para}
            ------------------
            ${corpo}
            ------------------
            De: Cleiton
        `)
        callback("enviado", 1 ,"8s");
    }, 8000)
}

console.log("Iniciando envio do email");
enviarEmail("Olá, tudo bem?", "email@email.com", (status, amount, time) => {
    console.log(`
        Status: ${status}
        Amount: ${amount}
        Time: ${time}
    `);
    console.log("Seu email foi enviado com sucesso!");
}); 
*/

// Tratar erros com callback

function enviarEmail(corpo, para, callback){
    setTimeout(function(){
        console.log(`
            Para: ${para}
            ------------------
            ${corpo}
            ------------------
            De: Cleiton
        `)
        var errado = false;
        if(errado){
            callback("Não foi possível enviar o email");
        }else{
            callback();
        }
    }, 8000)
}

console.log("Iniciando envio do email");
enviarEmail("Olá, tudo bem?", "email@email.com", (erro) => {
    if(erro == undefined){
        console.log("Enviado com sucesso!");
    }else{
        console.log("Houve um erro ao enviar o email!"+ erro);

    }
});