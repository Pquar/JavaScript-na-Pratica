//Sistema de cassino
//Varrios tipos de dados
//Rolar Dados
class Dados{
    constructor(){
        this.valor = 0;
    }
    rolar(face){
        this.valor = Math.floor(Math.random()*face)+1;
        
    }
}	

var dados = new Dados();
dados.rolar(50); // 1 a 50
console.log("Resultado do primeiro dado: "+dados.valor); //resultado de 1 a 50

//Resolução do professor
class Dado{
    constructor(faces) {
        this.faces = faces;
    }
    rolar() {
       console.log("Resultado do dado: "+this.GetRandomIntInclusive(1,this.faces));
    }

    GetRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
}

var dado = new Dado(50);
dado.rolar();
