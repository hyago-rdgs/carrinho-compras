let total_geral = 0;
document.getElementById("valor-total").innerText = `R$ 0`;

function adicionar(){
    //buscando valores
    let item_escolhido = document.getElementById('produto').value.split(" - ");
    let quantidade = document.getElementById('quantidade').value;
    let produto = item_escolhido[0];
    let valor_unitario = parseInt(item_escolhido[1].match(/\d/g).join(""));
    
    //calculo de subtotal
    let preco = quantidade * valor_unitario;

    //add no carrinho
    let produtos_carrinho = document.getElementById("lista-produtos");
    produtos_carrinho.innerHTML = produtos_carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${preco}</span></section>`;

    total_geral += preco;
    document.getElementById("valor-total").innerText = `R$${total_geral}`;
    
    document.getElementById('quantidade').value = "";
}

function limpar() {
    total_geral = 0;
    document.getElementById("lista-produtos").innerText = ``;
    document.getElementById("valor-total").innerText = `R$ 0`;
}