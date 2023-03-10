function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      var deuErro = true;
      if (!deuErro) {
        resolve({ time: 2, to: para, enviado: 'foi enviado'});// so pode ter um parâmetro
      } else {
        reject('Não foi possível enviar o email');
      }
    }, 2000);
  });
}

enviarEmail('Olá, tudo bem?', 'pessoa@email.com').then((dados) => { 
// Outra maneira de usar seria troca a variável dados por Desestruturação
// Ex: .then(({time, to, enviado}) e usar direto no console.log(`${time}`)
    console.log('Promise resolvida'+`
    Time: ${dados.time}
    To: ${dados.to}
    Enviado: ${dados.enviado}
    `);
}).catch((error)=>{
    console.log('Promise rejeitada '+ error);
});




pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail("Bom dia",email).then(() => {
            console.log("Email enviado para o usuário com id: "+id);
        }).catch((error) => {
            console.log(error);
        });
    });
});