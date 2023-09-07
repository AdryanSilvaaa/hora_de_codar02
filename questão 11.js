var escolha = parseInt (prompt ("Digite o numero da operação 1 adição , 2 subtração 3 divsão 4 multiplicação"))
var valor1  = parseInt (prompt ("Digite o primeiro valor "))
var valor2  = parseInt (prompt ("Digite o segundo valor "))

function adição(valor1, valor2){
    
    alert ("a adição dos dois valores são " + (valor1 + valor2) )

}

function subtração( valor1, valor2){
    alert ("a subtração dos dois valores são " + (valor1 - valor2) )
}

function divisão( valor1, valor2){
    if(valor2 === 0){
        alert ("ERRO divisão por zero");
    }else {  
    alert ("a divisão dos dois valores são " + (valor1 / valor2)) }  
}
function multiplicação (valor1 , valor2){
    alert ( "a multiplicação dos dois valores são " + (valor1 * valor2))
}
function erro( ) {
    alert ("escolha invalida, escolha de 1 a 4 ")

}

    let resultado;
    let operacao;

    switch (escolha) {
        case 1:
            resultado = adição(valor1, valor2);
            operacao = "adição";
            break;
        case 2:
            resultado = subtração(valor1, valor2);
            operacao = "subtração";
            break;
        case 3:
            resultado = divisão(valor1, valor2);
            operacao = "divisão";
            break;
        case 4:
            resultado = multiplicação(valor1, valor2);
            operacao = "multiplicação";
            break;
            
            default:
            resultado = erro ();
            operacao = ("desconhecida");
            break;
    }
    /* if (typeof resultado === "string") {
        alert(resultado);
    } else {
        alert(`O resultado da ${operacao} é: ${resultado}`);
    } */


