const ordernarString = () => {
  const palavrra: string = "banana laranja maçã abacaxi";
  const tranformarEmArray = palavrra.split(" ").sort().join(" ");
  console.log(tranformarEmArray);
};

ordernarString();
