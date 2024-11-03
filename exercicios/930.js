const duplicados = (msg) => {
    return Array.from(new Set(...msg)).join('')
  }