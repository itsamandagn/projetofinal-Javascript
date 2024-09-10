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

    novaLinha.innerHTML = `
            <td>${produto} - Tamanho: ${tamanho}</td>
            <td>${quantidade}</td>
            <td>R$ ${valorUnitario.toFixed(2)}</td>
            <td>R$ ${frete.toFixed(2)}</td>
            <td>R$ ${valorTotal.toFixed(2)}</td>
    `;
  });