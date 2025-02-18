const primeiro = 10
const segundo = 2
const terceiro = 5

function soma(){
    printText()
    return "resultado: " + (segundo + terceiro)
}

function printText(){
    console.log("Primeira soma")
}


// function somarComParamentro(n1, n2, n3){
    // return n1 + n2 + n3
// }

const somarComParamentro = (n1, n2, n3 ) => n1 + n2 + n3  
   
const teste = () => "Teste qualquer"

console.log(teste())
// console.log (somarComParamentro(1,2,3))

