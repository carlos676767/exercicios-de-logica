function strCount(str, letter) {
    return [...str].filter(char => char == letter).length
}


console.log(strCount("Hello", 'l'))
