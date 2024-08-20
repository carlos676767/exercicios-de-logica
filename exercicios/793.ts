// **Polimorfismo com Mensagens**
//    - Defina uma interface `Message` com um método
//    `send(content: string)`. Crie classes para diferentes
//    tipos de mensagens, como `Email` e `SMS`, que implementam o método
//     `send()`. Escreva uma função que aceite uma
//     instância de `Message` e envie uma mensagem com um conteúdo específico.

interface Message {
  send(content: string): string;
}

class Sms implements Message {
  send(content: string): string {
    if (content.length < 2) {
      throw new Error("a mensagem e pequena");
    }
    return content;
  }
}

class Email implements Message {
  private email: string;
  private destinario: string;
  constructor(email: string, destinario: string) {
    this.destinario = destinario;
    this.email = email;
  }
  send(content: string): string {
    const regexValideEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexValideEmail.test(this.email)) {
      throw new Error("a o email esta invalido");
    }
    return `email:${this.email} destinario: ${this.destinario}: msg: ${content}`;
  }
}


