const multiplos = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(`Os números múltiplos de 3 ou 5 são ${i}`);
    }
  }
};

multiplos();
