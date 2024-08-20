const cliente = {};
const cadastrarCliente = () => {
  cliente.nome = prompt("Digite seu nome");
  cliente.endereco = prompt("Digite seu endereço:rua, número e bairro");
  cliente.cidade = prompt("Digite sua cidade");
  cliente.estado = prompt("Digite seu estado"); 
  let emailValido = false;
  while (!emailValido) {
    cliente.email = prompt("Digite um email válido");
    if (cliente.email.includes("@")) {
      emailValido = true;
    } else {
      alert("Email inválido!");
    }
  }

  console.log("Nome:" + cliente.nome);
  console.log(`Endereço: ${cliente.endereco}  ${cliente.cidade}  ${cliente.estado}`);
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
