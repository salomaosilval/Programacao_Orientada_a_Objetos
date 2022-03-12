// Estrutura (argumentos) => () { corpo da função }

const soma = (n1, n2) => {
    return n1 + n2;
}

console.log(soma(1, 2));

// Se tiver uma única instrução

const multiplicacao = (n1, n2) => n1 * n2;
console.log(soma(2, 2));

// Retorno implicito 
const x1 = () => "Retorno implicito";
console.log(x1());

// Funcionamento do This
const carro = {
    modelo: "HB20",
    marca: "Hyundai",
    nomeCompleto: function () {
        return `${this.modelo} ${this.marca}`
    }
}

console.log(carro.nomeCompleto());

const carro1 = {
    modelo: "HB20",
    marca: "Hyundai",
    nomeCompleto: () => {
        return `${this.modelo} ${this.marca}`
    }
}

console.log(carro1.nomeCompleto());