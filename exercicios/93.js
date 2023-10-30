
//ache a vogal da palavra
//crie uma caixa de pergunta
//crie uma variavel com as vogais
//crie uma funcao
//percorra toda array
//verifique com if usando o includes
//mostre o resultado


let pergunta = prompt("digite um nome")
vogais()
function vogais() {
    let array = ["a", "e", "i", "o" , "u"]
    for(let i = 0; i < array.length; ++i){
        if (pergunta.includes(array[i])) {
            alert(`o nome ${pergunta} tem as vogais ${array[i]}`)
        }
    }
}


