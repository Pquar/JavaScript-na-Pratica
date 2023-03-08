function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        var deuErro = false;
        if (!deuErro) {
          resolve({ time: 2, to: para, enviado: 'foi enviado'});// so pode ter um parametro
        } else {
          reject('Não foi possível enviar o email');
        }
      }, 2000);
    });
  }

function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 1500);
    });
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("email@email.com");
        }, 2000);
    });
}

async function executaEnvio(texto){
    try {
    const id = await pegarId();
    const email =  await buscarEmailNoBanco(id);
    enviarEmail(texto, email).then(()=>{ // Nao precisa do await pois roda de forma assincrona
         console.log("Email enviado para o usuário com id: "+id)
    }) 
    } catch (error) {
        console.log('Promise rejeitada '+ error);
    }
}

executaEnvio('Olá, tudo bem?');