const salarioMinimo = Number(prompt("Digite o salario minimo"))
const horasTrabalhadas = Number(prompt("Digite horas trabalhadas"))
const numeroDependentes = Number(prompt("numero de dependentes"))
const quantidadeHoraExtra = Number(prompt("quantidade horas extras"))

const dez: number = 10
const cem: number = 100
const cinco: number = 5
const umCinco: number = 1.5


const valorHorasTrabalhadas = salarioMinimo / dez

const salario = horasTrabalhadas * salarioMinimo

const salarioMinimoCalcular = salarioMinimo * cinco / cem
const valorhoraextra = horasTrabalhadas * umCinco
const salariobruto = salario + salarioMinimo * numeroDependentes + valorhoraextra * quantidadeHoraExtra
const irrf = salarioMinimo * dez / cem
const salarioMinimo1 = salariobruto - irrf