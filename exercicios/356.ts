const buscaLinear = () => {
    const list: Number[] = [10,25,140,87]
    let valorAchado = false
    for (let i = 0; i < list.length; i++) {
        if (list[i] == 10) {
          console.log(valorAchado = true);
            break
        }else{
          console.log(valorAchado = false);
          break
        }
    }
}


buscaLinear()