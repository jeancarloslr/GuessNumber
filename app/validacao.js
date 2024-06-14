function verificarChuteValido(chute){
    const numero = +chute  /*so de tentar somar ele vai converter a variavel pra inteiro*/

    if(Number.isNaN(numero)){
        ElementoChute.innerHTML = `<div><p>Diga um número válido seu imbecil</p></div>`
    }else{
        MostrarChute(chute)
    }
    
}

