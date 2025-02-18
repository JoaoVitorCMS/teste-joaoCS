function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("res")
    res.innerHTML = numero1 + numero2
    return res
   }
   function Subtração(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    var sub = document.getElementById("sub")
    sub.innerHTML = numero1 - numero2
    return sub
   }
   function Multiplicação(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    var mult = document.getElementById("mult")
    mult.innerHTML = numero1 * numero2
    return mult
   }
   function divisao(){
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
    var div = document.getElementById("div")
    div.innerHTML = numero1 / numero2
    return div
   }