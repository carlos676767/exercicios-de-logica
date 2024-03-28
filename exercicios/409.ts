const doubleSort = (numero: string) => {
    const valores: string = numero
    const transformandoEmArray = valores.split("")
    for (let i = 0; i < transformandoEmArray.length; ++i) {
      for (let j = 0; j < transformandoEmArray.length; j++) {
        if (transformandoEmArray[i] < transformandoEmArray[j]) {
          let temp = transformandoEmArray[i]
          transformandoEmArray[i] = transformandoEmArray[j]
          transformandoEmArray[j] = temp
        }
      }
    }
    let pegarArrayConvertida: number[] = []
    const converterStringEmNumero = () => {
      for (let j = 0; j < transformandoEmArray.length; j++) {
        pegarArrayConvertida.push(parseInt(transformandoEmArray[j]))
      }
    }
    converterStringEmNumero()
    return pegarArrayConvertida
  }
  console.log(doubleSort("52813"))410
  