// Classe pai
class ave {
    constructor (cor, especie) {
        this.cor = cor,
        this.especie = especie
    }
}

// Instanciar a classe ave

let a = new ave ("Branco", "Galinha");
console.log(a);

// Classe filho
class passaro extends ave {
    constructor(cor, especie, voa) {
        super(cor, especie)
        this.voa = voa
    }
}

let b = new passaro("Azul", "Arara", true);
console.log(b);

// Usando o extends para um objeto pré construido

class dataModificada extends Date {
    constructor () {
        super()
    }
    getFormatteDate () {
        var meses =  ['Jan','Feb','Marçoooo0000','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return this.getDate() + "-" + meses[this.getMonth()] + "-" + this.getFullYear();
    }
}

let d = new dataModificada();
console.log(d);