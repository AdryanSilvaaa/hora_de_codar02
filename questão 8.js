var number_1 = parseInt(prompt("digite um numero "));
var number_2 = parseInt(prompt("digite um numero "));
var number_3 = parseInt(prompt("digite um numero "));
var number_4 = parseInt(prompt("digite um numero "));
var  media ;
if (number_1 >= 0 && number_1< 10 &&
    number_2 >= 0 && number_2 < 10 &&
    number_3 >= 0 && number_3 < 10 &&
    number_4 >= 0 && number_4 < 10) {
    media = (number_1 + number_2 + number_3 + number_4) /4;
if ( media > 5  ){

    alert ( " sua nota foi "+ media + " voce passou no teste ");
    }
    
else {
alert( " voce reprovou")

}
}