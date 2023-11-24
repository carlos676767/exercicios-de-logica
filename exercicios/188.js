while (true) {
    const input = prompt("Digite um número");
    let continuar = prompt(`QUER PARAR? S, N`)
    for (let i = 0; i <= 10; i++) {
    let somar = input * i
    console.log(`${input} x ${i} = ${somar}`); 
    }
    
    if (continuar === `s`) {
        document.write(`ATE!`)
        break
    }
   
}