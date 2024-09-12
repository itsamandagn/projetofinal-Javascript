const frete = 10.0;

const precos_produtos = {
  "Camisa Smile": 89.9,

  "Camisa Listras": 79.9,

  "Camisa Preta": 69.9,

  "Camisa Azul": 69.9,
};

function getValorUnitario(produto) {
  return precos_produtos[produto] || 0;
}

function calcularValorTotal(valorUnitario, quantidade) {
  return valorUnitario * quantidade + frete;
}

function criarCarrinhoItem(produto, tamanho, quantidade, valorUnitario) {
  return {
    produto,

    tamanho,

    quantidade,

    valorUnitario,

    frete: frete,

    valorTotal: calcularValorTotal(valorUnitario, quantidade),
  };
}

function salvarCarrinho(carrinhoItem) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  carrinho.push(carrinhoItem);

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function getValoresFormulario() {
  return {
    produto: document.getElementById("produtos").value,

    tamanho: document.getElementById("tamanhos").value,

    quantidade: parseInt(document.getElementById("quantidade").value),
  };
}

function fecharPedido() {
  const { produto, tamanho, quantidade } = getValoresFormulario();

  const valorUnitario = getValorUnitario(produto);

  const carrinhoItem = criarCarrinhoItem(
    produto,
    tamanho,
    quantidade,
    valorUnitario
  );

  salvarCarrinho(carrinhoItem);

  alert("Produto adicionado ao carrinho!");

  window.location.href = "pedido.html";
}

document
  .getElementById("fechar-pedido")
  .addEventListener("click", fecharPedido);
