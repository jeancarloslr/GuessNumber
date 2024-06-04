var menorValorSpan = document.getElementById('menor-valor');
var menorValor = 1;
var maiorValorSpan = document.getElementById('maior-valor');
var maiorValor = 100;

console.log(parseInt(Math.random () * maiorValor + 1));

menorValorSpan.innerHTML = menorValor;
maiorValorSpan.innerHTML = maiorValor;