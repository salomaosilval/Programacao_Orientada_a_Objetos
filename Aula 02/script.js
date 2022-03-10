var variavel = {
    valor: 0,
    conversor: "",
    get moeda () {
        return "R$ " + this.valor.toFixed(2).replace(".",",");
    },
    get int () {
        return this.valor;
    },
    set int (i) {
        this.valor = i;
    },
    get conversao () {
        if(this.conversor === "peso") {
            return 0.046 * this.valor;
        }
    }
}

variavel.int = 150;
variavel.conversor = "peso";

console.log(variavel.conversao);

// Exercício 01

/* 
Construa um objeto do tipo Carro que contenha os seguintes atributos: 
  - cor
  - marca

Insira a cor do carro utilizando getter e setter;
Insira a marca do carro utilizando getter e setter;

Crie um get que retorne uma mensagem informando a marca e a cor do carro.
*/

let carro = {
    cor: "",
    marca: "",
    get corDoCarro () {
        return this.cor;
    },
    set corDoCarro (i) {
        this.cor = i;
    },
    get marcaDoCarro () {
        return this.marca;
    },
    set marcaDoCarro (i) {
        this.marca = i;
    },
    get print () {
        return `A marca do carro é ${this.marca} e a cor é ${this.cor}`;
    }
}

carro.cor = "Vermelha";
carro.marca = "Fiat";

console.log(carro.print);