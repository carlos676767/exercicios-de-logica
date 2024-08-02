function accum(s) {
    return s.toLowerCase().split("").map((data, i) => data[0].toUpperCase() + data.repeat(i) ).join("-")
}

console.log(accum("abcd"));//// "A-Bb-Ccc-Dddd"