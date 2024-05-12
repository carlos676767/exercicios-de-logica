const apiTestes = async () => {
  let n = 10;
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments");
    const response = await data.json();
  } catch (error) {
    console.error("error");
  } finally {
    n = 0;
    console.log(n);
  }
};

apiTestes();
