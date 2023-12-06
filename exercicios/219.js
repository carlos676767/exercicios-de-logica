

function estaticasjogo() {
    let vetor = []
    let times = " "
    for (let i = 0; i <= 3; i++) {
        times = prompt(`Digite o nome de um time`)
        vetor.push(times)
    }


    for (let i = 0; i < vetor.length; i++) {
       for (let j = 0; j < vetor.length; j++) {
        if (vetor[i] != vetor[j]) {
            console.log(`${vetor[i]} x ${vetor[j]}`);
        } 
       }
    } 
}

estaticasjogo()