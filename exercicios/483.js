//uma funcao genetor e uma funcao que e pausada
function* contarVogais(nome) {
    let contador = 0;
    const vogais = ["a", 'e', 'i', 'o', 'u'];
    const separarPalavra = nome.split("")
    for (let i = 0; i < separarPalavra.length; i++) {
        if (vogais.includes(separarPalavra[i])) {
            ++contador
            yield contador
        }
    }
}
const gerador = contarVogais('carlos henrique');
console.log(gerador.next());
console.log(gerador.next());
console.log(gerador.next());
console.log(gerador.next());