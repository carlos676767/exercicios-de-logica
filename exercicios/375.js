
function validarCpf() {
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const cpf1 = "12345678909";
  const cpf2 = "529.982.247-25";
  let validar = false;
  if (regex.test(cpf1)) {
    validar = true;
    console.log(validar);
  } else {
    validar = false;
    console.log(validar);
  }
}

validarCpf()