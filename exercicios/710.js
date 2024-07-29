async function http1() {
  const httpReq = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await httpReq.json();
  return data;
}

async function http2() {
  const http = await fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=1"
  );
  const res = await http.json();
  return res;
}

const apos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ola mundo");
    }, 3000);
  });
};

const testingPromiseTres = (n1, n2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n1 > n2) {
        resolve("n1 e maior que n2");
      } else {
        reject("n1 nao e maior que n2");
      }
    }, 4000);
  });
};

Promise.all([http1(), http2(), apos(), testingPromiseTres(15, 2)])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
