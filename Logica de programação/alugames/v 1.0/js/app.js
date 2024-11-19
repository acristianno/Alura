function alterarStatus(id) {
    pai = document.getElementById('game-' + id);
    filho = pai.querySelector('a');
    filhoImagem = pai.querySelector('div');
    console.log(filho);

    if(filho.classList.contains('dashboard__item__button--return')) {
        filho.classList.remove('dashboard__item__button--return');
        filhoImagem.classList.remove('dashboard__item__img--rented')
        filho.innerHTML = 'Alugar'
    } else {
        filho.classList.add('dashboard__item__button--return');
        filhoImagem.classList.add('dashboard__item__img--rented');
        filho.innerHTML = 'Devolver';
    }
}