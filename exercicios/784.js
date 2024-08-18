
function countSmileys(arr) {
    const myArrayNew = arr.join(" ")
    const result = myArrayNew.match(/[:;][-~]?[)D]/g)
    return result == null ? 0 : result.length
}

console.log(countSmileys([':)', ';(', ';}', ':-D']))
console.log(countSmileys([]));
