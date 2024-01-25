//objetos literais

const listaDeCompras = {
    maca:"5kg",
    arroz:"10kg",
    banana:"5kg",
}

//usando funcao dentro de um objeto

const dadosPessoiaa = {
    nome: "carlos",
    idade:"19",
    sexo: "masculino",
    cidade: "sorriso",
}

const setup = {
    monito: "5 polegas",
    mouse:"dpi de 3500",
    funcao: () => {
        console.log(`${dadosPessoiaa.nome} tem ${dadosPessoiaa.idade} anos e comprou um monitor de ${setup.monito}, mora em ${dadosPessoiaa.cidade}`);
    },
}

setup.funcao()
