let totalGeral;
limpar();

function adicionar() {
    //recuperar valores do produto, quantidade e valor
    let produto = buscarProdutos('produto');
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = buscarProdutos('quantidade');

    adicionarCarrinho(quantidade, valorUnitario, nomeProduto);
}

function calcularPreco(quantidade, valorUnitario) {
    let preco = quantidade * valorUnitario;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0
}

function adicionarCarrinho(quantidade, valorUnitario, nomeProduto) {
    calcularPreco(quantidade, valorUnitario);
    let carrinho = document.getElementById('lista-produtos');
    console.log(carrinho);
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} 
            <span class="texto-azul">R$${valorUnitario}</span>
            </section>`;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$ 0`;
}

function buscarProdutos(id) {
    valor = document.getElementById(id).value;
    return valor;
}