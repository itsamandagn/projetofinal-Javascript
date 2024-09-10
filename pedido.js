document.addEventListener("DOMContentLoaded", function () {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const tabela = document.querySelector(".info-carrinho tbody");

  carrinho.forEach(item => {
    const novaLinha = tabela.insertRow();
    novaLinha.innerHTML = `
      <td>${item.produto} - Tamanho: ${item.tamanho}</td>
      <td>${item.quantidade}</td>
      <td>R$ ${item.valorUnitario.toFixed(2)}</td>
      <td>R$ ${item.frete.toFixed(2)}</td>
      <td>R$ ${item.valorTotal.toFixed(2)}</td>
    `;
  });
});
