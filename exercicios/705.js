function past(h, m, s) {
  const horaEmMilisegundos = h * 60 * 60 * 1000;
  const minutosEmMili = m * 60 * 1000;
  const segundosEmMili = s * 1000;
  return horaEmMilisegundos + minutosEmMili + segundosEmMili;
}
