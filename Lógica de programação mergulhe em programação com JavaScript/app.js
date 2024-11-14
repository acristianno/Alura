alert('Boas vindas ao jogo do número secreto');
let menorNumero = prompt('Informe o menor número:')
let maiorNumero = prompt('Informe o maior número: ')
let numeroSecreto = getRandomIntInclusive(menorNumero, maiorNumero);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao n.s
function getRandomIntInclusive(menorNumero, maiorNumero) {
    const minCeiled = Math.ceil(menorNumero);
    const maxFloored = Math.floor(maiorNumero);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

console.log(numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre ' + menorNumero + ' e ' + maiorNumero);
    if (chute == numeroSecreto) {
        break;
    } else { 
        if (chute > numeroSecreto) {
            alert('O número secreto é menor que ' + chute);
        }
        else {
            alert('O número secreto é maior que ' + chute);
        }
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert('Isso ai! Você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativas + ' ' + palavraTentativa + '.');

