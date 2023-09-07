var number_1 = parseInt(prompt("digite um numero "));
var number_2 = parseInt(prompt("digite um numero "));
var number_3 = parseInt(prompt("digite um numero "));

if (number_1 > number_2 && number_1 > number_3) {
    alert(number_1 )
}
else if(number_2 > number_1 && number_2 > number_3){
        alert(number_2)
}
else if(number_3 > number_1 && number_3 > number_2){
    alert(number_3)

}
else {
    alert ( " verifique se você colocou um numero ")
}