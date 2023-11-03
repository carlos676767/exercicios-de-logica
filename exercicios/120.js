//entrada

let digite = parseInt(prompt(`Digite seu ano de nascimento`))

//controle

if (digite < 18) {
    let somar = 18 - digite
    alert(`Faltam ${somar} anos para voce se alistar`)
} else if(digite >= 18){
    let somar1 = digite - 18
    alert(`Ja se passaram ${somar1} anos para voce se alistar`)
}