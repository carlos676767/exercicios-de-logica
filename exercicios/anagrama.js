const anagrama = (str1, str2) => {

    if (str1.length !== str2.length) {
        return `no es un anagrama`
    }

    const str1Arr = str1.split(``).sort().join(``)
    const str2Arr = str2.split(``).sort().join(``)

    return str1Arr == str2Arr
}

console.log(anagrama(`amor`, `roma`))