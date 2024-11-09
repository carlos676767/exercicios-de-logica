class MyPromise {
    static async verificarStatus(nome) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (nome === "joao") {
            return resolve(`O usuário ${nome} possui status VIP.`);
          }
          reject(`O usuário ${nome} possui status regular.`);
        }, 1000);
      });
    }
  
    static async resultadoStatus(nome) {
      try {
        const resultado = await this.verificarStatus(nome);
        console.log(resultado);
      } catch (error) {
        console.log(`Erro ao verificar o status do usuário: ${error}`);
      };
    };
  };

  MyPromise.resultadoStatus("carlos"); 
  MyPromise.resultadoStatus("joao");    
  