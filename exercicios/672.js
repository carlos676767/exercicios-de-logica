function descendingOrder(n) {
    const myArry = Array.from(String(n)).sort((a, b) => b - a )
        .map(data => Number(data)).join("")
    return Number(myArry)
}
