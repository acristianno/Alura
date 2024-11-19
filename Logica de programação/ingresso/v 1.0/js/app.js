let qtdPista = buscadorId('qtd-pista').innerHTML;
let qtdInferior = buscadorId('qtd-inferior').innerHTML;
let qtdSuperior = buscadorId('qtd-superior').innerHTML;

function comprar() {
    let tipoDeIngreso = buscadorId('tipo-ingresso').value;
    let quantidade = buscadorId('qtd').value;
    processador(tipoDeIngreso, quantidade);
    limpador();
    document.getElementById('qtd').value='';
}

function limpador() {
    campo = buscadorId('qtd');
    console.log(campo)
}

function buscadorId(id) {
    valor = document.getElementById(id);
    return valor;
}

function processador(tipoDeIngreso, quantidade) {
    if (tipoDeIngreso == 'pista') {
        validador(quantidade, qtdPista);
        qtdPista = qtdPista - quantidade;
        buscadorId('qtd-pista').innerHTML = qtdPista;
    } else {
        if (tipoDeIngreso == 'inferior'){
            validador(quantidade, qtdInferior);
            qtdInferior = qtdInferior - quantidade;
            buscadorId('qtd-inferior').innerHTML = qtdInferior;
        } else {
            validador(quantidade, qtdSuperior);
            qtdSuperior = qtdSuperior - quantidade;
            buscadorId('qtd-superior').innerHTML = qtdSuperior;
        }
    }
}

function validador(quantidade, disponibilidade) {
    if (quantidade > disponibilidade){
        alert('Ingressos insuficietnes');
    }
}