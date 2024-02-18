const fichaPacientes: number[] = [];

const distribuirFichasPacientes = () => {
  setInterval(() => {
    const gerarNumeros: number = Math.floor(Math.random() * 50);
    if (!fichaPacientes.includes(gerarNumeros)) {
      fichaPacientes.push(gerarNumeros);
    }
    console.log(`ficha distribuidas`, fichaPacientes);
  }, 5000);
};

distribuirFichasPacientes();

const atendimentoPacientes = () => {
  setInterval(() => {
    const pacienteAtendido = fichaPacientes.shift();
    console.log(`Paciente atendido`, pacienteAtendido);
  }, 10000);
};

atendimentoPacientes();
