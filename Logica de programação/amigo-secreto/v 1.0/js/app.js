let amigos = [];
let sorteio = [];
function adicionar() {    
    let nomeAmigo = document.getElementById('nome-amigo').value;
    amigos.push(nomeAmigo);
    document.getElementById('nome-amigo').value = '';
}

function reiniciar() {
    amigos = [];
    alert(amigos);
}

function sortear() {
    while(amigos.length >= 1) {
        let nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        sorteio.push(nomeSorteado)
        index = amigos.indexOf(nomeSorteado);
        amigos.splice(index, 1);
    }
    alert(sorteio);
}
//ler nome amigo
//adicionar nome amigo