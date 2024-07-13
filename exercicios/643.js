function digitalRoot(n) {
    const value = n.split("").map(data => Number(data))
    return value.reduce((a,b) => a +b)
}

console.log(digitalRoot("132189")); 