function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, nome: 'Cleiton', lang:'js'},
                {id: 2, nome: 'Maria', lang:'js'},
                {id: 3, nome: 'João', lang:'js'},
            ]);
        }, 1000);
    });
}

/* var usuarios = pegarUsuarios().then((usuarios) => {
console.log(usuarios);
});
 */
// Em async/await se transforma em:
async function principal(){
    var usuarios = await pegarUsuarios();
    console.log(usuarios);
    console.log("Texto depois da promise");// O await faz com que o código tenha a esperar ate a promise ser resolvida
}
principal();