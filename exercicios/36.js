let alcool = 0
let gasolina = 0
let diesel = 0


while (true) {
    let codigo = parseInt(prompt("Informe o tipo de combustível: \n1. Álcool \n2. Gasolina \n3. Diesel \n4. Fim"));
    if (codigo === 4) {
        break
    }

   switch(codigo){
    case 1: {
        ++alcool
        break
    }
    case 2: {
        ++gasolina
        break
    }
    case 3: {
        ++diesel
        break
    }
    default: {
        alert(`Digite um numero valido`)
        break
    }

   }
}
alert("MUITO OBRIGADO");
alert(`Quantidade de Álcool: ${alcool}`);
alert(`Quantidade de Gasolina: ${gasolina}`);
alert(`Quantidade de Diesel: ${diesel}`);


