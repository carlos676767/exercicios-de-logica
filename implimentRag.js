class Rag {
    constructor(pergunta) {
      this.pergunta = pergunta;
    }
  
    getDatabase() {
      const database = [`carlos`, `joao`, `maria`, `joana`];
  
      if (this.pergunta.includes(`qual o nome das pessoas em meu banco?`)) {
        return database.join(`\n`);
      }
  
      if (
        this.pergunta.includes(`quantas mulheres existem no banco, e o total.`)
      ) {
        const mulheres = database.filter((c) => c.endsWith("a"));
        return {
          totalMulheres: mulheres.join(`, `),
          total: mulheres.length,
        };
      }
    }
  }
  
  console.log(
    new Rag(`quantas mulheres existem no banco, e o total.`).getDatabase()
  );
  