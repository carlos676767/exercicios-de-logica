const raio = Number(prompt("Digite o raio"));
const altura = Number(prompt("Digite a altura"));
const volume = (Math.PI * Math.pow(raio, 3) * altura) / 3;
alert(volume);
