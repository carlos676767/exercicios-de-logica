(async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const response = await data.json()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
})()