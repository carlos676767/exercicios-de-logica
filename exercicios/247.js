const par = () => {
    const array = [2,1,4,2,3,10,2,20,30,32]
    for (let i = 0; i < array.length; i++) {
        if (array[i] %2 === 0) {
            continue
        }
        console.log(array[i]);
    }
}
par()