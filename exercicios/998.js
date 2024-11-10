function findNextSquare(sq) {
  const elevarAoQuadrado = Math.sqrt(sq);
  const isQuadradoPerfeito = Number.isInteger(elevarAoQuadrado);

  return isQuadradoPerfeito
    ? (elevarAoQuadrado + 1) * (elevarAoQuadrado + 1)
    : isQuadradoPerfeito;
}
