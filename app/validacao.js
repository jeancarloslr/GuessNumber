var mensagem = document.querySelector('#chute');

function verificarChuteValido(chute){
    const numero = +chute  /*so de tentar somar ele vai converter a variavel pra inteiro*/
    if(chuteForInvalido(numero)){
    }
    if(maiorOuMenor(numero)){
        mensagem.innerHTML = `<p>Diga um valor entre ${menorValor} e ${maiorValor}</p>`;
    }

}
    function chuteForInvalido(numero){
        return Number.isNaN(numero);
    }
    function maiorOuMenor(valor){
        return valor > maiorValor || valor < menorValor;
    }




