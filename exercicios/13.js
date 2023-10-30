let pergunta = prompt("Digite um nome"); // Pede uma entrada ao usuário
let vogais = ['a', 'e', 'i', 'o', 'u']; // Cria um array com as vogais
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']; // Cria outro array com as consoantes
let contadorVogais = 0; // Contador para contar as vogais
let contadorConsoantes = 0; // Contador para contar as consoantes



if (!isNaN(pergunta)) {
    alert(`Digite um valor que não seja um número`);
} else {
    for (let i = 0; i < vogais.length; i++) { // Percorre a array com as vogais
        if (pergunta.includes(vogais[i])) { // Verifica se na pergunta tem as vogais
            ++contadorVogais; // Conta as vogais
        }
    }

    for (let j = 0; j < consoantes.length; j++) { // Percorre todas as consoantes
        if (pergunta.includes(consoantes[j])) { // Verifica se na pergunta tem as consoantes
            ++contadorConsoantes; // Conta as consoantes
        }
    }
    alert(`O nome ${pergunta} tem ${contadorVogais} vogais e ${contadorConsoantes} consoantes!`);
}

