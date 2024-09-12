function humanReadable(seconds) {
  const hora = Math.floor(seconds / 3600).toString().padStart('2', 0)
  const min = Math.floor((seconds  % 3600)/60).toString().padStart("2", 0)
  const segundos = Math.floor(seconds % 60).toString().padStart("2", 0)
  return  `${hora}:${min}:${segundos}`;
}

console.log(humanReadable(359999));
