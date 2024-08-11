const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //minha bomba mais proxima esta a 50m
  // meu carro percorre 25 m por galao
  // e ainda restam 2 galoes
  const sum = mpg * fuelLeft;
  return sum >= distanceToPump ? true : false;
};
