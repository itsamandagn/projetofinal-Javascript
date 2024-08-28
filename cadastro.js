const cadastrarCliente = () => {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const endereco = document.getElementById("endereco").value;
  const complemento = document.getElementById("complemento").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value;
  const cep = document.getElementById("cep").value;
  if (!email.includes("@")) {
    alert("Email inválido!");
    return;
  }
  const cliente = {
    nome: nome,
    email: email,
    endereco: endereco,
    complemento: complemento,
    cidade: cidade,
    estado: estado,
    cep: cep,
  };

  console.log(`Nome: ${cliente.nome}`);
  console.log(`E-mail: ${cliente.email}`);
  console.log(`endereço: ${cliente.endereco}, ${cliente.complemento}`);
  console.log(`cidade: ${cliente.cidade}, estado: ${cliente.estado}`);
  console.log(`Cep: ${cliente.cep}`);
}
