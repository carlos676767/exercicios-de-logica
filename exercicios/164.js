// Exemplo: Verificar a posição de um nome na array usando indexOf

// Array de nomes
let nomes = ["carla", "raissa", "ana", "carlos"];

// Função para verificar a posição de um nome
function encontrarnomes(nome) {
    // Use o método indexOf para obter a posição do nome na array
    let posicao = nomes.indexOf(nome);

    // Verifique se o nome foi encontrado e imprima a posição ou informe que não foi encontrado
    if (posicao === -1) {
        console.log(`O nome '${nome}' não foi encontrado na lista.`);
    } else {
        console.log(`O nome '${nome}' foi encontrado na posição ${posicao} da lista.`);
    }
}

// Teste a função com alguns nomes
encontrarnomes("carlos");
encontrarnomes("carlosss");
