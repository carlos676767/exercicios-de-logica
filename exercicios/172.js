let contador = 0
for (let i = 0; i <= 4; i++) {
    let numero = parseInt(prompt(`Digite um numero`))
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    if (numero === numeroAleatorio) {
        alert(`Voce acertou o numero era ${numero}`)
        break
    } else{
        ++contador
        let restamPlural = contador === 1 ? "resta" : "restam";
        alert(`Ainda ${restamPlural} ${4 - contador} tentativa(s).`);
    }

}