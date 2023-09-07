var sexo = parseFloat(prompt("Digite o sexo (1 para feminino, 2 para masculino):"));
var altura = parseInt(prompt(" informe sua altura "));

function calculo( altura, sexo ){
if (sexo === 1 ){
    return( 62.1 * altura ) - 44.7 ;

}else if ( sexo === 2){
    return(72.7 * altura) - 58 ;

}else{
    return ("Por favor, informe 1 para feminino ou 2 para masculino.");

}
}

var pesoideal = calculo( altura, sexo );

if (typeof pesoideal === "number") {
    alert("Seu peso ideal é " + pesoideal.toFixed(2) + " kg.");
} else {
    alert(pesoideal);
} 








