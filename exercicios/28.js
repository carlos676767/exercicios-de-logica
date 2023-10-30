let digitar = prompt("Digite (F) para converter F em c \n , caso ao contrario digite (C) para converter em F")

switch(digitar){
    case 'f': {
        let F = Number(prompt("Digite a temperatura em (F) para converter em C"))
        let celsus = (F -32 )/1.8
        celsus = celsus.toFixed(2)
        alert(`A temperatura em C e de ${celsus}`)
        break
    }
    case 'c': {
        let c = Number(prompt("Digite a temperatura em (C) para converter em F"))
        let Fahrenheit = (c * 1.8)+32
        Fahrenheit = Fahrenheit.toFixed(2)
        alert(`A temperatura convertida em F atraves de C e de ${Fahrenheit}`)
        break
    }
    default: {
        alert(`Digite as opcoes corretas`)
        break
    }
}