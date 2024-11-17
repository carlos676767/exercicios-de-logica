"use strict"
class User{
    private name:  string
    private idade:  number

    constructor(idade:  number, name:  string){
        this.idade =idade
        this.name = name
    }


}


const intancie:  User = new User(3, `carlos`)
const data = new Date()
console.log(intancie instanceof User)
console.log(data instanceof User)