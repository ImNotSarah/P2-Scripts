btConverter.addEventListener("click", calcular);
function calcular() {
    if (selecao1.value == 'C' && selecao2.value == 'F')
        res.innerHTML = "Resultado da conversão = " + parseFloat(entrada.value) * 1.8 + 32;

    else if (selecao1.value == 'F' && selecao2.value == 'C')
        res.innerHTML = "Resultado da conversão = " + (parseFloat(entrada.value) - 32) / 1.8;

    else if (selecao1.value == 'C' && selecao2.value == 'K')
    res.innerHTML = "Resultado da conversão = " + parseFloat(entrada.value) + 273,15;

    else if (selecao1.value == 'K' && selecao2.value == 'C')
    res.innerHTML = "Resultado da conversão = " + parseFloat(entrada.value) - 273,15;

    else if (selecao1.value == 'F' && selecao2.value == 'K')
        res.innerHTML = "Resultado da conversão = " + (parseFloat(entrada.value) + 459,67) / 1.8;

    else if (selecao1.value == 'K' && selecao2.value == 'F')
        res.innerHTML = "Resultado da conversão = " + parseFloat(entrada.value) * 1.8 - 459,67;
    
    else{
        res.innerHTML = entrada.value;
        alert('Não houve conversão');
    }
}

