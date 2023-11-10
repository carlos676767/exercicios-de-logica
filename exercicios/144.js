let somar = 0
while(true){
    let pergunte = parseInt(prompt(`Digite um valor`))
    let parar = parseInt(prompt(`Digite 111 para parar`))
    if (parar === 111) {
        console.log(`A soma dos numeros e ${somar}`);
        break
    } else{
        somar+= pergunte
        console.log(`Digite outros numeros , para parar use 1111`);
    }
}