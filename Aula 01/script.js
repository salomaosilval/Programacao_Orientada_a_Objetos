const pessoa = {
    nome: "Jaque",
    idade: 27,
    cumprimentaPessoa(nome = "Fulano") {
        return console.log("Seja bem vindo: " + nome);
    },
};

const mensagem = pessoa.cumprimentaPessoa("Jaque");

// C++, Java, PHP, A palavra this é bem comum

const counter = {
    count: 0,
    next: function () {
        return this.count ++;
    },
};

counter.next();
counter.next();
counter.next();

console.log(counter.count);

// Uso do this no contexto


console.log(this.window);

/* 
Se eu atribuir uma propriedade ao objeto this no contexto global o JS adiciona a propriedade como
sendo uma do objeto 
*/

this.color = "red";
console.log(window.color);

/* Contexto de Função
Em JS, conseguimos chamar funções de algumas formas:
Chamada de Função (function Invocation)
Chamada de Método (Method Invocation)
Chamada de Construtor (Constructor Invocation)
Chamada Indireta (Indirect Invocation)
*/

function show() {
    console.log(this == window);
}

show()

window.show()

console.log(window);

/* Invocação de Método
Quando eu chamar o método do objeto
O JS aponta o THIS para o objeto que possui o método
*/

let carro = {
    marca: "Hyundai",
    getMarca: function() {
        return this.marca;
    }
}

let moto = {
    marca: "Kawazaki"
}

console.log(carro.getMarca());

let marca = carro.getMarca;
console.log(marca());

let marca1 = carro.getMarca.bind(moto);
console.log(marca1());

/* Chamada de construtor

*/

function Carro(placa, marca) {
    this.placa = placa;
    this.marca = marca;
}

// Criar uma função dentro da função construtora Carro

Carro.prototype.getPlaca = function () {
    return this.placa;
}

let carro1 = new Carro("DDX2118", "BMW");

console.log(carro1);
console.log(carro1.getPlaca());

function Carro2(marca) {
    if (! (this instanceof Carro2)) {
        throw Error("Use o operador new para instanciar o objeto")
    }
    this.marca = marca;
}

let bmw = new Carro2("BMW");
console.log(bmw);