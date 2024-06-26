function removeChar(str) {
    const string = str.split("")
    string.pop()
    string.shift()
    return string.join("");
}

console.log(removeChar("carlos"));