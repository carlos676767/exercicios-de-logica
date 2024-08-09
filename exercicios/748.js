function updateLight(current) {
    const semaforo = {
      green: 'yellow',
      yellow: "red",
      red: 'green'
    }
    return semaforo[current]
  }
  