fetch("https://jsonplaceholder.typicode.com/comments")
.then(response => response.json())
.then(data => {
    const {email, name} = data[3]
    console.log(email, name)
})
.catch(erro => {
    console.error(erro)
})