function past(h, m, s) {
  const valueCenetnta = 60;
  const milisegundos = 1000;

  
  const horaEmMilisegundos = h * valueCenetnta * valueCenetnta * milisegundos;
  const minutosEmMili = m * valueCenetnta * milisegundos;
  const segundosEmMili = s * milisegundos;
  return horaEmMilisegundos + minutosEmMili + segundosEmMili;
}
