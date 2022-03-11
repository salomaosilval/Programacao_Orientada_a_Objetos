let curso = {
    nomeCurso: "",
    p1: 0,
    p2: 0,
    media: 0,
    get insereNomeCurso () {
        return this.nomeCurso;
    },
    set insereNomeCurso (i) {
        this.nomeCurso = i;
    },
    get insereP1 () {
        return this.p1;
    },
    set insereP1 (i) {
        this.p1 = i;
    },
    get insereP2 () {
        return this.p2;
    },
    set insereP2 (i) {
        this.p2 = i;
    },
    get print () {
        if (this.p1 == 0) {
            return "A nota da p1 foi 0, não vai ser possível fazer uma média";
        }
        else {
            return "Curso: " + this.nomeCurso + "\nMédia: " + (this.p1 + this.p2) / 2;
        }
    }
}

curso.nomeCurso = "Lets Code";
curso.p1 = 6;
curso.p2 = 10;

console.log(curso.print);