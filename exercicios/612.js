function removeUrlAnchor(url) {
  const stting = url.split("");
  const buscarIndiceElement = stting.indexOf("#");
  if (buscarIndiceElement != -1) stting.splice(buscarIndiceElement);
  
  return stting.join("");
}

