//revisao asnyc
//asnyc
// promises
// callbacks

const consumirApi = async (sucesso, rejeitado) => {
  try {
    const httpRequest = await fetch("https://jsonplaceholder.typicode.com/posts" );
    const data = await httpRequest.json();
    sucesso(data);
  } catch (error) {
    rejeitado("error");
  }
};

const sucess = (data) => {
  console.log(data);
};

const error = (err) => {
  console.log(err);
};

consumirApi(sucess, error);
