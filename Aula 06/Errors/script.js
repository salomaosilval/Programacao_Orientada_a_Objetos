function qualquerCoisa() {
    let num = 1;
    return num.toUpperCase();
}

try {
    // Invocando a função 
    qualquerCoisa();
    console.log("Quero fazer algo");
}
catch(error) {
    console.log("Entrei no Catch");
    console.log(error);
    console.log(error.message);
    console.log(error.name);
}