const lendoAlgoritmo = (x, y) => {
    const z = (x * y) + 5
    console.log(z);
    if(z <= 0){
        return `Seja (A)`
    } else if (z <= 100) {
        return `Seja (B)`
    } else {
        return `Seja (C)`
    }
}

console.log(lendoAlgoritmo(1, 2));