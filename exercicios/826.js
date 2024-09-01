//https://jsonplaceholder.typicode.com/posts/1

const httpRequest = async () => {
  const httpRequest = await fetch("https://jsonplaceholder.typicode.com/posts/1" );
  const { id } = await httpRequest.json();
  return id;
};

module.exports = httpRequest;