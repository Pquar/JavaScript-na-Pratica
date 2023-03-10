class Calculadora{
    static somar(a,b){
        return a+b;
    }
    static subtrair(a,b){
        return a-b;
    }
    static multiplicar(a,b){
        return a*b;
    }
    static dividir(a,b){
        return a/b;
    }
}
// Acessando os métodos estáticos
// Sem instanciar a classe
console.log(Calculadora.somar(1,2)); // 3
console.log(Calculadora.subtrair(1,2)); // -1