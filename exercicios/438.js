function calcularMedia() {
  const nota1 = parseInt(prompt("Digite uma nota"));
  const nota2 = parseInt(prompt("Digite outra nota"));
  const media = (nota1 + nota2) / 2;

  if (media >= 5) {
    alert("aprovado");
  } else {
    alert("reprovado");
  }
}

calcularMedia();
