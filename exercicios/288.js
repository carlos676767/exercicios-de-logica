
const funcaoN = () => {
    while (true) {
        const n1 = parseInt(prompt(`Digite um valor`));
        const n2 = parseInt(prompt(`Digite outro valor`));

        if (n2 === 0 && n1 >= 0) {
            const novoValor = parseInt(prompt(`Digite um novo valor`));
            const dividir = novoValor / n1;
            alert(`O segundo valor foi zero. Agora, pedimos um novo valor. O resultado da divisão será de ${dividir}`);
        } else {
            const dividir = n1 / n2;
            alert(`O resultado da divisão é de ${dividir}`);
        }

        const continuar = confirm("Deseja continuar?");
        if (!continuar) {
            break;
        }
    }
};

funcaoN();

