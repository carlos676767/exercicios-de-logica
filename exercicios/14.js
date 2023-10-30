
                                        //entrada
let numeros = parseInt(prompt("Digite um numero"))
let numero = parseInt(prompt("Digite outro numero"))

                                    //processamento
let array = [numero, numeros] //recebe meus dois prompts
let maior //cria uma variavel que ira receber se o numero for maior
let maior1  //cria outra caso a primeira nao for

                                //processamento/controle

if (array[0] > array[1]) { //compara se meu array do indice zero e maior 
    maior = array[0] //se for maior recebe o valor
    alert(`o maior numero digitado foi ${maior}`) //exibe o maior numero
} else if(array[1] > array[0]){ //caso o primeiro nao for vai pro segundo
    maior1 = array[1]
    alert(`o maior numero foi ${maior1}`)
}else{ // se nenhum dos numeros for maior entao eles sao iguais
    array[0] === array[1]
    alert(`os numeros ${array[0]} e ${array[1]} sao iguais, tente novamente`)
}


