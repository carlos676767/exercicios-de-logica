function monkeyCount(n) {
    const arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}

console.log(monkeyCount(10));
