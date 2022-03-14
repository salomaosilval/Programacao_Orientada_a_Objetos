class Perfil {
    constructor (nome, avatar, tema) {
        this.nome = nome,
        this.avatar = avatar,
        this.tema = tema
    }
    get defineTema () {
        return this.tema;
    }
    set defineTema (i) {
        if (this.tema == "light") {
            this.tema = i;
        } else if (this.tema == "dark") {
            this.tema = i;
        }
    }
    get defineAvatar () {
        return this.avatar;
    }
    set defineAvatar (i) {
        this.avatar = i;
    }
}

class SmartWatch {
    constructor (passos = 0) {
        this.passos = passos
    }
    get contaPassos () {
        return this.passos;
    }
    set contaPassos (i) {
        this.passos = i;
        this.passos += 1;
    }
}

class Veiculo {
    constructor (rodas = 1, usaCombustivel = false) {
        this.rodas = rodas,
        this.usaCombustivel
    }
}

class Carro extends Veiculo {
    constructor (rodas, usaCombustivel, tipoDeCombustivel){
        super(rodas, usaCombustivel)
        this.tipoDeCombustivel = tipoDeCombustivel
    }
}

class bicicleta extends Veiculo {
    constructor (rodas, usaCombustivel, infatil) {
        super(rodas, usaCombustivel)
        this.infatil = infati
    }
}