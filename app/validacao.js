function verificarChuteValido(chute){
    const numero = +chute  /*so de tentar somar ele vai converter a variavel pra inteiro*/

    if(!Number.isNaN(numero) && NumeroMaiorMenor){
        MostrarChute(chute)
    }else{
        ElementoChute.innerHTML = `Diga um número válido cara, po`
    }

    function NumeroMaiorMenor(){
        if(chute > 100 || chute < 1){
            return true;
        }else{
            return false;
        }
    }


    
}

