function cadastrarCliente() {
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

  localStorage.setItem("cliente", JSON.stringify(cliente));

  alert("Cadastro realizado com sucesso!");

  document.getElementById("form").reset();
}

function exibirCliente() {
  const clienteSalvo = localStorage.getItem("cliente");

  if (clienteSalvo) {
    const cliente = JSON.parse(clienteSalvo);

    console.log("Cliente cadastrado:", cliente);
  }
}

window.onload = function () {
  exibirCliente();
};
