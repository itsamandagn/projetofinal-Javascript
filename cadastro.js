const cliente = {};
const cadastrarCliente = () => {
  cliente.nome = prompt("Digite seu nome");
  cliente.endereco = prompt("Digite seu endereço");
  cliente.email = prompt("Digite seu email");

  console.log("Nome:" + cliente.nome);
  console.log("Endereço:" + cliente.endereco);
  console.log("E-mail:" + cliente.email);
};

cadastrarCliente();

/*const form = document.getElementById(form);
const nome = document.getElementById(inputname);
const email = document.getElementById(inputEmail);
const endereco = document.getElementById(inputAddress);
const complementoEndereco = document.getElementById(inputComplement);
const cidade = document.getElementById(inputCity);
const estado = document.getElementById(inputState);
const cep = document.getElementById(inputZip);*/
