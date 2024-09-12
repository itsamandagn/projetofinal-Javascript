// Função para cadastrar cliente
function cadastrarCliente() {
  // Capturar os valores do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const endereco = document.getElementById("endereco").value;
  const complemento = document.getElementById("complemento").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value;
  const cep = document.getElementById("cep").value;

  // Criar um objeto com os dados
  const cliente = {
    nome: nome,
    email: email,
    endereco: endereco,
    complemento: complemento,
    cidade: cidade,
    estado: estado,
    cep: cep
  };

  // Armazenar o objeto no Local Storage (converter para string JSON)
  localStorage.setItem("cliente", JSON.stringify(cliente));

  // Feedback de que o cadastro foi realizado
  alert("Cadastro realizado com sucesso!");

  // Limpar o formulário
  document.getElementById("form").reset();
}

// Função para carregar e exibir os dados do Local Storage (se necessário)
function exibirCliente() {
  // Recuperar os dados do cliente no Local Storage
  const clienteSalvo = localStorage.getItem("cliente");

  if (clienteSalvo) {
    // Converter de volta para objeto JavaScript
    const cliente = JSON.parse(clienteSalvo);
    
    // Exibir os dados no console ou em algum elemento HTML
    console.log("Cliente cadastrado:", cliente);
  } else {
    console.log("Nenhum cliente cadastrado.");
  }
}

// Exemplo de como chamar a função para exibir o cliente quando a página carregar
window.onload = function() {
  exibirCliente();
};



// const cadastrarCliente = () => {
//   const nome = document.getElementById("nome").value;
//   const email = document.getElementById("email").value;
//   const endereco = document.getElementById("endereco").value;
//   const complemento = document.getElementById("complemento").value;
//   const cidade = document.getElementById("cidade").value;
//   const estado = document.getElementById("estado").value;
//   const cep = document.getElementById("cep").value;
//   if (!email.includes("@")) {
//     alert("Email inválido!");
//     return;
//   }
//   const cliente = {
//     nome: nome,
//     email: email,
//     endereco: endereco,
//     complemento: complemento,
//     cidade: cidade,
//     estado: estado,
//     cep: cep,
//   };

//   console.log(`Nome: ${cliente.nome}`);
//   console.log(`E-mail: ${cliente.email}`);
//   console.log(`endereço: ${cliente.endereco}, ${cliente.complemento}`);
//   console.log(`cidade: ${cliente.cidade}, estado: ${cliente.estado}`);
//   console.log(`Cep: ${cliente.cep}`);
// };

// const cadastrarCliente = () => {
//   const nome = document.getElementById("nome").value;
//   const email = document.getElementById("email").value;
//   const endereco = document.getElementById("endereco").value;
//   const complemento = document.getElementById("complemento").value;
//   const cidade = document.getElementById("cidade").value;
//   const estado = document.getElementById("estado").value;
//   const cep = document.getElementById("cep").value;
//   if (!email.includes("@")) {
//     alert("Email inválido!");
//     return;
//   }
//   const cliente = {
//     nome: nome,
//     email: email,
//     endereco: endereco,
//     complemento: complemento,
//     cidade: cidade,
//     estado: estado,
//     cep: cep,
//   };

//   console.log(`Nome: ${cliente.nome}`);
//   console.log(`E-mail: ${cliente.email}`);
//   console.log(`endereço: ${cliente.endereco}, ${cliente.complemento}`);
//   console.log(`cidade: ${cliente.cidade}, estado: ${cliente.estado}`);
//   console.log(`Cep: ${cliente.cep}`);
// };
