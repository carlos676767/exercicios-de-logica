// ### Funcionalidades do Sistema de Gestão de Biblioteca

// 1. **Cadastro e Gestão de Livros:**
//    - Adicionar novos livros ao acervo da biblioteca.
//    - Atualizar informações de livros, como título, autor, e estado de disponibilidade.

const booksList = []
const newBooks = (name, age,autor,) => {
  const Books = {
    NameBook: name,
    Age: age,
    Author: autor,
  };
  booksList.push(Books);
};

function newLibros(pickUpBook) {
  const removeVirgulas = pickUpBook.replace(/,/g, "").split(" ");
  newBooks(removeVirgulas[0], removeVirgulas[1], removeVirgulas[2]);
}

const listLibrosName = () => {
  const bookYouName = prompt("Enter the name of the book");
  let pegar = "";
  booksList.forEach((data) => {
    if (bookYouName == data.NameBook) {
      pegar = data;
    }
  });
  mensage(pegar)
};
const mensage = (dado) => {
  alert(JSON.stringify(dado));
};
const borrowBorrowedBook = () => {
  const bookYouName = prompt("Enter the name of the book");
  for (let i = 0; i < booksList.length; i++) {
    if (str == booksList[i].nome) {
      booksList.splice(i, 1);
    }
  }
  alert(`Book removed ${bookYouName}`)
};
const options = () => {
  const options = prompt("Enter [1] to list all books, [2] to search for a book, [3] to borrow");
  switch (options) {
    case "1":
      mensage(booksList);
      break;
    case "2":
      listLibrosName();
      break;
      case '3':
        borrowBorrowedBook();
      break
    default:
        alert("Enter a valid option")
      break;
  };
};
const menu = () => {
  while (true) {
    const pickUpBook = prompt("type the name of the book, its age, the author");
    newLibros(pickUpBook);
    options()
    const exit = prompt("exit to exit the program");
    if (exit.includes("exit")) {
      alert("Thank you for using our services");
      console.log(pickUpBook);
      break;
    }
  }
};

menu();


