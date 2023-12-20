let tipoCombustivel = prompt(`Digite A para alcool, g para gasolina`);

switch (tipoCombustivel) {
  case `a`:
    let litros = parseInt(prompt(`Digite o total de litros`));
    if (litros <= 20) {
      let desconto = litros * 0.03;
      let totalComDesconto = litros - desconto;
      alert(
        `Como você obteve ${litros} litros, terá um desconto de 3%, resultando em um valor de ${totalComDesconto}`
      );
    } else if (litros === 99) {
      let desconto = litros * 0.05;
      let totalComDesconto = litros - desconto;
      alert(
        `Como você obteve ${litros} litros, terá um desconto de 3%, resultando em um valor de ${totalComDesconto}`
      );
    }

    break;

  case `g`:

    let litros2 = parseInt(prompt(`Digite o total de litros`));
    if (litros2 <= 20) {
      let desconto = litros2 * 0.03;
      let totalComDesconto = litros - desconto;
      alert(
        `Como você obteve ${litros} litros, terá um desconto de 3%, resultando em um valor de ${totalComDesconto}`
      );

    } else if (litros2 >= 99) {
      let desconto = litros2 * 0.06;
      let totalComDesconto = litros2 - desconto;
      alert(
        `Como você obteve ${litros2} litros, terá um desconto de 3%, resultando em um valor de ${totalComDesconto}`
      );
    }

    break;
  default:
    alert(`Digite um tipo valido.`);
    break;
}
