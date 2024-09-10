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
  
    const carrinhoItem = {
      produto,
      tamanho,
      quantidade,
      valorUnitario,
      frete,
      valorTotal
    };
  
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(carrinhoItem);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
    alert("Produto adicionado ao carrinho!");
  
   
    window.location.href = "pedido.html";
  });