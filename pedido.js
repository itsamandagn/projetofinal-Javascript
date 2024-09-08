document.getElementById("fechar-pedido").addEventListener("click", function () {
  const produto = document.getElementById("produtos").value;
  const tamanho = document.getElementById("tamanhos").value;
  const quantidade = parseInt(document.getElementById("quantidade").value);

  let valorUnitario;
  switch (produto) {
    case "Camisa Smile":
      valorUnitario = 89.9;
      break;
    case "Camisa Listras":
      valorUnitario = 79.9;
      break;
    case "Camisa Preta":
      valorUnitario = 69.9;
      break;
    case "Camisa Azul":
      valorUnitario = 69.9;
      break;
    default:
      valorUnitario = 0;
  }

  const frete = 10.0;
  const valorTotal = valorUnitario * quantidade + frete;

  const tabela = document.querySelector(".info-carrinho tbody");

  const novaLinha = tabela.insertRow();

  const produtoCelula = novaLinha.insertCell(0);
  const quantidadeCelula = novaLinha.insertCell(1);
  const valorUnitarioCelula = novaLinha.insertCell(2);
  const freteCelula = novaLinha.insertCell(3);
  const valorTotalCelula = novaLinha.insertCell(4);

  produtoCelula.textContent = `${produto} - Tamanho: ${tamanho}`;
  quantidadeCelula.textContent = quantidade;
  valorUnitarioCelula.textContent = `R$ ${valorUnitario.toFixed(2)}`;
  freteCelula.textContent = `R$ ${frete.toFixed(2)}`;
  valorTotalCelula.textContent = `R$ ${valorTotal.toFixed(2)}`;
});
