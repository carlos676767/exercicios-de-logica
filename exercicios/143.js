let sorteio = Math.floor(Math.random() * 10) + 1
for(let i = 0; i <= 4; ++i){
    let digite = parseInt(prompt(`Digite um numero`))

    if (digite === sorteio) {
        alert(`Voce acertou o numero, ele era ${sorteio}`)
        break
    } else{
        console.log(`Tente novamente, voce ainda nao acertou`);
    }
}