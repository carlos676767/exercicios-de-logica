const fileiraO: string[] = [
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "b10",
];

while (true) {
  const cadeira = prompt("Digite uma cadeira");
  for (let i = 0; i < fileiraO.length; ++i) {
    if (cadeira === fileiraO[i]) {
      fileiraO.splice(i, 1);
      alert(`voce agendou a cadeira ${cadeira}`);
      alert(`cadeiras disponiveis ${fileiraO}`);
    } else {
      alert(
        "a cadeira selecionada ja foi escolhida ou nao existe em nosso sistema."
      );
      break;
    }
  }
  const parar = prompt("Deseja parar ?");
  if (parar === "sim") {
    break;
  }
}
