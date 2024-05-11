const quateto1 = Number(prompt("Digite o cateto1"));
const quateto2 = Number(prompt("Digite o cateto2"));
const dois: number = 2;
const hipotenusa = Math.hypot(
  Math.pow(quateto1, dois) + Math.pow(quateto2, dois)
);
alert(hipotenusa);
