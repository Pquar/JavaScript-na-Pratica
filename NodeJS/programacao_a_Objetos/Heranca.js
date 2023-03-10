class Animal{
    constructor(nome, idade, peso){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
    ChecarFicha(){
    return "Nome: " + this.nome + " Idade: " + this.idade + " Peso: " + this.peso;
    }

    Comer(){
        console.log("Comendo...");
    }

}

class Cachorro extends Animal{
    constructor(nome, idade, peso, raca){
        super(nome, idade, peso);
        this.raca = raca;
    }

    Latir(){
        console.log("Au Au");
    }

    Comer(){
        super.Comer();
        console.log("Comendo ração");
    }
}

var dog = new Cachorro("Rex", 2, 10,"Vira Lata");
console.log(dog.ChecarFicha());
dog.Latir();
dog.Comer();