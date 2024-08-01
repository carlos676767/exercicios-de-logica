// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses 
// e dias e escreva a idade
// dessa pessoa expressa apenas em dias. Considerar ano com 
// 365 dias e mês com 30 dias. 


function anos(a,m, d) {
    return (a*365) * (m * 30) + d
}

console.log(anos(2, 4, 26));