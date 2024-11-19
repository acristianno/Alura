function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    //validador(quantidadeDeNumeros, de, ate);    
    if (validador(quantidadeDeNumeros, de, ate) == true) {
        let lista = criadorDaLista(de, ate);
        let numerosSorteados = sorteadorDeNumeros(quantidadeDeNumeros, lista);
        let frase = numerosSorteados.length > 1 ? 'Números sorteados ' : 'Número Sorteado ';
        exibirMensagem(frase + numerosSorteados.join());
        document.getElementById('btn-reiniciar').removeAttribute('disabled');
    } else {
        exibirMensagem('Dados inválidos');
    }
}

function reiniciar() {
    exibirMensagem('Números sorteados: Nenhum');
    //let quantidade = document.getElementById('quantidade');
    //quantidade.value = '';
    limpaTela('quantidade');
    limpaTela('de');
    limpaTela('ate');
    document.getElementById('btn-reiniciar').setAttribute('disabled', 'True');
}

function limpaTela(campo) {
    let limpador = document.getElementById(campo);
    limpador.value = '';
}

function sorteadorDeNumeros(quantidadeDeNumeros, lista){
    let numerosSorteados = [];
    let numeroSorteado;
    let contador = 0;
    let index;
    while (contador < quantidadeDeNumeros){
        numeroSorteado = lista[Math.floor(Math.random() * lista.length)];
        index = lista.indexOf(numeroSorteado);
        lista.splice(index, 1);
        numerosSorteados.push(numeroSorteado);
        contador ++;
    }
    return numerosSorteados;
}

function criadorDaLista(de, ate) {
    let cont = de;
    let lista =[];
    while (cont <= ate) {
        lista.push(cont);
        cont++;
    }
    return lista;
}

function validador(quantidadeDeNumerosSortedos, de, ate) {
    if (quantidadeDeNumerosSortedos <= ate - de){
        return true;
    } else {
        return false;
    }
}

function exibirMensagem(texto) {
    let campo = document.getElementById('textoResultado');
    campo.innerHTML = texto;
}