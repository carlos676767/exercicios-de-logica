const calcularValorCompra = () => {
    const tabelaMorango = {
      ate5kg: {
        precoPorKg: 2.50,
      },
      acimaDe5kg: {
        precoPorKg: 2.20,
      },
    };
  
    const tabelaMaca = {
      ate5kg: {
        precoPorKg: 1.80,
      },
      acimaDe5kg: {
        precoPorKg: 1.50,
      },
    };
  
    const tabelaValoresDuzias = {
      meiaDuzia: {
        precoPorDuzia: 1.3
      },
      duzia: {
        precoPorDuzia: 1.0
      }
    };
  
    const comprasMorango = parseFloat(prompt(`Quantos quilos de morangos deseja comprar?`));
    const comprasMaca = parseFloat(prompt(`Quantos quilos de maçãs deseja comprar?`));
  
    const pesoTotal = comprasMorango + comprasMaca;
    let valorTotal = 0;
  
    if (comprasMorango <= 0 || comprasMaca <= 0) {
      console.log(`Digite valores válidos para a quantidade de morangos e maçãs.`);
      return;
    }
  
    if (comprasMorango <= 5) {
      valorTotal += comprasMorango * tabelaMorango.ate5kg.precoPorKg;
    } else {
      valorTotal += comprasMorango * tabelaMorango.acimaDe5kg.precoPorKg;
    }
  
    if (comprasMaca <= 5) {
      valorTotal += comprasMaca * tabelaMaca.ate5kg.precoPorKg;
    } else {
      valorTotal += comprasMaca * tabelaMaca.acimaDe5kg.precoPorKg;
    }
  
    if (pesoTotal > 8 || valorTotal > 25) {
      valorTotal *= 0.9;
    }
  
    console.log(`O valor total a ser pago é R$ ${valorTotal.toFixed(2)}`);
  };
  
  calcularValorCompra();
  