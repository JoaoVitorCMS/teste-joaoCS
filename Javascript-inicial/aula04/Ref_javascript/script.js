function calcular(id1, id2, respId, operador){
    var num1 = parseFloat(document.getElementById(id1).value)
    var num2 = parseFloat(document.getElementById(id2).value)
    var resultado

    switch (operador) {
        case '+':
            resultado = num1 + num2
            break;
        case '-':
            resultado = num1 - num2
            break;
        case '*':
            resultado = num1 * num2
            break;
        case '/':
            if(num2 !== 0){
            resultado = num1 / num2
            }else{
                resultado = "Erro: divisao por 0"
            }
            break;
    
        default: "Operador inválido"
            break;
    }
    document.getElementById(respId).textContent = resultado.toFixed(2)
}

function formatNumber(x){
    if(Number.isInteger(x)){
        return x 
    } else if(x !== "ERRO: por divisao por 0 "){
       return x.toFixed(2)
    }else {
        return x
    }
}