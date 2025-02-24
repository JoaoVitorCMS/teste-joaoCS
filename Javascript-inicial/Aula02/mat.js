function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("res")
    res.innerHTML = numero1 + numero2

   }
   function Subtração(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    var sub = document.getElementById("sub")
    sub.innerHTML = numero1 - numero2
    
   }
   function Multiplicação(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    var mult = document.getElementById("mult")
    mult.innerHTML = numero1 * numero2
   
   }
   function divisao(){
    document.getElementById("n8").style.border = "1px solid grey"
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
    var div = document.getElementById("div")

    if(numero2 !== 0){
        div.innerHTML = (numero1 / numero2).toFixed(1)
    }else{
        div.innerHTML = "Não é permitido divisão por zero"
        document.getElementById("n8").style.border = "2px solid red"
    }
}
    function media(){
        var m1 = parseFloat(document.getElementById("m1").value)
        var m2 = parseFloat(document.getElementById("m2").value)
        var m3 = parseFloat(document.getElementById("m3").value)
        var m4 = parseFloat(document.getElementById("m4").value)
        var m5 = parseFloat(document.getElementById("m5").value)
        var media = document.getElementById("resMedia")
        var msg = document.getElementById("msg")
        var res = (m1 + m2 + m3 + m4 + m5)/ 5
        if(res>= 7){
            msg.textContent = "Passou"
            msg.style.color = "Green"
        }else{
            msg.textContent = "Reprovou"
            msg.style.color = "Red"
        }
    }
    function mediaImc(){
        var p = parseFloat(document.getElementById("p").value)
        var a = parseFloat(document.getElementById("a").value)
        var resImc = document.getElementById("resImc")
        var mc = document.getElementById("mc")
        if(isNaN(p) || isNaN(a)){
            resImc.textContent = "Digite apenas número!"
            document.getElementById("mc").textContent = " "
            return
        }
        var imc = p / ( a * a)
         if(imc >= 40.0){
            mc.textContent = "Obesidade III"
            mc.style.color = "Red"
            resImc.textContent = imc.toFixed(1)
        }else if(imc >= 35.0 && imc<= 39.0){
            mc.textContent = "Obesidade II"
            mc.style.color = "Red"
            resImc.textContent = imc.toFixed(1)
        }else if(imc >= 30.0 && imc <= 34.9){
            mc.textContent = "Obesidade I"
            mc.style.color = "Orange"
            resImc.textContent = imc.toFixed(1)
        }else if (imc >= 25.0 && imc <= 29.9){
            mc.textContent = "Sobrepeso"
            mc.style.color = "yellow"
            resImc.textContent = imc.toFixed(1)
        }else if (imc >= 18.6 && imc <= 24.9){
            mc.textContent = "Normal"
            mc.style.color = "cyan"
            resImc.textContent = imc.toFixed(1)
        }else{
            mc.textContent = "Abaixo do peso"
            mc.style.color = "Red"
            resImc.textContent = imc.toFixed(1)
        }
    }
    function idade(){
        var i = parseFloat(document.getElementById("i").value)
        var resIdade = document.getElementById("resIdade")
        var msg1 = document.getElementById("msg1")
        if(isNaN(i)){
            resIdade.textContent = "Digite apenas numbers🚫"
            msg1.style.color = "red"
            return
        }
        const thisYear = new Date().getFullYear();
        var calculo = thisYear - i 
        if(calculo >= 18){
            msg1.textContent = "Entrada liberada"
            resIdade.textContent = i.toFixed(1)
            msg1.style.color = "blue"
        }else {
            msg1.textContent = "Entrada negada"
            resIdade.textContent = i.toFixed(1)
        }
    }
   