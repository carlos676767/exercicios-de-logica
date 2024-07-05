//Escreva uma função que retorna
//a posição da última ocorrência de 
//um caractere em uma string.
//String: "banana"
//Caractere: "a"

function retornarUltimaAparicao(palavra, letra){
    return palavra.lastIndexOf(letra) 
}


console.log(retornarUltimaAparicao('carlos', 'a'))
