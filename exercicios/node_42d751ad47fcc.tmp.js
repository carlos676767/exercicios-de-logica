const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const converterTempo = () => {
  rl.question('Digite a temperatura em Celsius: ', (celsius) => {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius} graus Celsius é igual a ${fahrenheit} graus Fahrenheit.`);
    
    rl.question('Deseja converter outra temperatura? (Digite "sim" ou "não"): ', (answer) => {
      if (answer.toLowerCase() !== 'sim') {
        rl.close();
      } else {
        converterTempo(); // Chama a função novamente para converter outra temperatura
      }
    });
  });
};

converterTempo(); // Inicia o processo de conversão
