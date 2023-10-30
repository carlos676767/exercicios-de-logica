//entrada

let Basedoretangulo = Number(prompt("Digite a base do retângulo"));
let Alturadoretangulo = Number(prompt("Digite a altura do retângulo"));

// Cálculo da área
let area = Basedoretangulo * Alturadoretangulo;
area = area.toFixed(4);

//perimetro

let perimetro = 2 * (Basedoretangulo + Alturadoretangulo)
perimetro = perimetro.toFixed(4)


//diagonal

let diagonal = Math.sqrt(Math.pow(Basedoretangulo, 2) + Math.pow(Alturadoretangulo, 2));
diagonal = diagonal.toFixed(4)

alert(`A area do retangulo e de ${area}, o perimetro foi de ${perimetro} , ja a diagonal foi de ${diagonal}`)


