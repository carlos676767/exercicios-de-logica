/*Exercício: Sistema de Gerenciamento de Biblioteca
Crie um sistema de gerenciamento de biblioteca que permita aos usuários realizar as 
seguintes operações:
Adicionar um novo livro ao catálogo da biblioteca, incluindo informações como título, autor, 
ano de publicação, gênero, etc.
Pesquisar um livro por título, autor ou gênero e exibir as informações correspondentes.
Mostrar todos os livros disponíveis no catálogo.*/

// Interface para representar as informações de um livro

interface InformacoesLivro {
  titulo: string;
  autores: string;
  ano: string;
  paginas: string;
}

// Array para armazenar os objetos com as informações dos livros
let bancoDeDados: InformacoesLivro[] = [];

const processarInformacoesLivros = (informacoesLivros: string) => {
  if (informacoesLivros !== null) {
    let transformarEmArray = informacoesLivros.replace(/,/g, "").split(" ");
    const informacoesLivro: InformacoesLivro = {
      titulo: transformarEmArray[0],
      autores: transformarEmArray[1],
      ano: transformarEmArray[2],
      paginas: transformarEmArray[3],
    };
    bancoDeDados.push(informacoesLivro);
  }
};

while (true) {
  let informacoesLivros: string | null = prompt(`Digite as informações do livro:
  - Título do livro
  - Autores do livro
  - Ano de publicação
  - Número de páginas`);
  if (informacoesLivros != null) {
    processarInformacoesLivros(informacoesLivros);
  }

  const buscarInformacoesDeLivros = () => {
    let buscar: string | null = prompt(`Digite as informações do livro:
  1- para titulo do livro
  2- para autores
  3- Ano ano de publicacao
  4- para Número de páginas
  5 - lista todos os livros`);
    switch (buscar) {
      case "1":
        const livroBsucado: string | null = prompt(
          "Qual livro voce deseja buscar ?"
        );
        const buscarLivro = bancoDeDados.find(
          (buscarDo) => buscarDo.titulo === livroBsucado
        )?.titulo;
        if (buscarLivro) {
          alert(
            `O livro que voce encontrou e o: ${JSON.stringify(buscarLivro)}`
          );
        } else {
          alert(
            "[ERRO]: O Livro que voce buscou nao se encontra em nosso banco de dados."
          );
        }
        break;

      case "2":
        const buscarAutores: string | null = prompt(
          "Qual autor voce deseja buscar?"
        );
        const buscarAuto = bancoDeDados.find(
          (buscarAutor) => buscarAutor.autores === buscarAutores
        )?.autores;
        if (buscarAuto) {
          alert(`O auto que voce buscou e o ${JSON.stringify(buscarAuto)}`);
        } else {
          alert(
            `[ERRO] O autor que voce buscou nao se encontra em nosso banco de dados.`
          );
        }
        break;
      case "3":
        const buscarAnoDePublicacao: string | null = prompt(
          "Qual ano de publicacao voce quer buscar?"
        );
        const buscarAno = bancoDeDados.find(
          (buscarAnoLivro) => buscarAnoLivro.ano === buscarAnoDePublicacao
        )?.ano;
        if (buscarAno) {
          alert(
            `O ano que voce encontrado em nosso banco de dados e ${JSON.stringify(
              buscarAno
            )}`
          );
        } else {
          alert(
            `[ERRO] O ano que voce buscou nao se encontra em nosso banco de dados.`
          );
        }
        break;
      case "4":
        const buscarPaginas: string | null = prompt(
          "Qual paginas de publicacao voce quer buscar?"
        );
        const buscarNPaginas = bancoDeDados.find(
          (buscarPaginasLivros) => buscarPaginasLivros.paginas === buscarPaginas
        )?.paginas;
        if (buscarNPaginas) {
          alert(
            `O Paginas que voce encontrado em nosso banco de dados e ${JSON.stringify(
              buscarPaginas
            )}`
          );
        } else {
          alert(
            `[ERRO] a pagina que voce buscou nao se encontra em nosso banco de dados.`
          );
        }
        break;
      case "5":
        alert(
          `Livros encontrados em nosso banco de dados ${JSON.stringify(
            bancoDeDados
          )}`
        );
        break;
      default:
        alert("404 Not Found");
        break;
    }
  };

  buscarInformacoesDeLivros();
  const parar = confirm("Deseja parar ?");
  if (!parar) {
    alert("Adeus! Volte sempre à biblioteca.");
    break;
  }
}
