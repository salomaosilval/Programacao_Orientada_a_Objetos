// Função construtora

function tvConstructor (canal, volume, ligada) {
    this.canal = canal,
    this.volume = volume,
    this.ligada = ligada

    this.liga = () => {
        return this.ligada = true;
    }

    this.desliga = () => {
        return this.ligada = false;
    }

    this.mudaDeCanal = () => {
        return this.canal += 1;
    }

    this.aumentaVolume = () => {
        return this.volume += 1;
    }

    this.diminuiVolume = () => {
        return this.volume -= 1;
    }
}

// Usando classe (class)

class tv {
    constructor (canal, volume, ligada) {
        this.canal = canal,
        this.volume = volume,
        this.ligada = ligada
    }

    get liga () {
        return this.ligada = true;
    }

    get desliga () {
        return this.ligada = false;
    }

    get mudaDeCanal () {
        return this.canal += 1;
    }

    get aumentaVolume () {
        return this.volume += 1;
    }

    get diminuiVolume () {
        return this.volume -= 1;
    }
}