function mergeStrings(first, second) {
    const fimstr1 = first.slice(0,3)
    const newStr = fimstr1 + second
    const novoConjunto  = new Set(newStr)
    return Array.from(novoConjunto).join("")
}

console.log(mergeStrings("abaab", "aabab"))