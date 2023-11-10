                                    //ENTRADA
const digitenumeros = parseInt(prompt(`Digite um valor em quantas vezes`)) 

let maiorposicao = [] 
let maiorvalor = []

                                //PROCESSAMENTO
for (let i = 0; i < digitenumeros; i++) {
    let digite = parseInt(prompt(`Digite ${digitenumeros} numeros`))
    if (digite > maiorvalor) {
        maiorvalor = digite
    }
    
}
                                  //SAIDA
console.log(`o maior valor foi`, maiorvalor)