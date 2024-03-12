function isPangram(string){
    const receberFrase = string.split(``)
    const regex = /[a-zA-Z]+/
    console.log(receberFrase);
    for (let j = 0; j < receberFrase; j++) {
        if (regex.test(receberFrase[j])) {
            console.log("tem");
        }else{
            console.log(`nao tem`);
        }
    }
}

const frase = `A rápida raposa marrom salta sobre o cachorro preguiçoso`
isPangram(frase)