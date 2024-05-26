// funcao asnc serve para esperar a execucao de algo ja
// a funcao genetor pausa aexecucao e despausa

async function consumirApi() {
    const array = []
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const resposta = await data.json();
        const arr = resposta.map(arr => {
            array.push(arr.id)
        })
        function* mostrar() {
            for (const valor of array) {
                yield valor
            }
        }
        const dados = mostrar()
        console.log(dados.next());
        console.log(dados.next());
        console.log(dados.next());
    } catch (error) {
        console.log(error);
    } finally {
        console.log("A função foi executada, mas pode ter ocorrido erros.");
    }
}

consumirApi()




