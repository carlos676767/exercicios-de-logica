//promises e async e callbsack

//estados de uma promise

//pendente
//concluida
//falhada

//uma promise e uma funcao que agurda o resultado
async function reqhtpp() {

}

const reqHtpp = async () => {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const resultado = await data.json()
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
};

reqHtpp();