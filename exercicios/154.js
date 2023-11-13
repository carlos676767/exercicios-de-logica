function maiorpalavra() {
    let palavra = "Ola meu nome e carlos"
    palavra = palavra.split(" ")
    let maior = [0]
    palavra.forEach(element => {
        if (element.length > maior.length ) {
            maior = element
        } 
    });
    return maior
}

let resultado = maiorpalavra()
console.log(resultado);