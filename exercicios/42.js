let segundos = Number(prompt("Digite a hora em segundos"))

//processamento 
let segundos2 = 3600; 
let horas = Math.floor(segundos / 3600);
segundos %= 3600; 
let minutos = Math.floor(segundos / 60);
segundos %= 60; 

console.log(`Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundos}`);

