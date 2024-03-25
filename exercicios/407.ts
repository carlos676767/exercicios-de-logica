
function toWeirdCase() {
  const palavra: string = "String";
  const maisculas: string[] = [];
  const minusculas: string[] = [];
  const transformarEmArray = palavra.split("");
  let teste = ""
  for (let i = 0; i < transformarEmArray.length; i++) {
    if (i % 2 == 0) {
      maisculas.push(transformarEmArray[i].toUpperCase())
      minusculas.push(transformarEmArray[i].toLowerCase())
    }
  }
  
  if (minusculas.length === maisculas.length) {
    for (let j = 0; j < maisculas.length; j++) {
      teste = palavra.replace(minusculas[j], maisculas[j])
      return
    }
  }
  console.log(teste)
}

for (let j = 0; j <= 6; j++) {
 
  const teste = prompt("digite")
}

toWeirdCase();
  
  