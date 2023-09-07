var number_1 = parseInt(prompt("digite um numero "));
var number_2 = parseInt(prompt("digite um numero "));
var number_3 = parseInt(prompt("digite um numero "));
var number_4 = parseInt(prompt("digite um numero "));
var number_5 = parseInt(prompt("digite um numero "));
var number_6 = parseInt(prompt("digite um numero "));


if ( number_1 < 72 && number_2 < 72 && number_3 < 72 && number_4 < 72 && number_5 < 72 && number_6 < 72 ){ 

    alert(( number_1 + number_2 + number_3 + number_4 + number_5 + number_6 ));
}
else if ( number_1 < 72 && number_2 < 72 && number_3 < 72 && number_4 < 72 && number_5 < 72 ){ 

    alert(( number_1 + number_2 + number_3 + number_4 + number_5 ));
}
else if ( number_1 < 72 && number_2 < 72 && number_3 < 72 && number_4 < 72 ) { 

    alert( number_1 + number_2 + number_3 + number_4  );
}
else if ( number_1 < 72 && number_2 < 72 && number_3 < 72 ){ 

    alert(( number_1 + number_2 + number_3 ));
}
else if ( number_1 < 72 && number_2 < 72 ){ 

    alert(( number_1 + number_2 ));
}
else if ( number_2 < 72 && number_3 < 72 && number_4 < 72 && number_5 < 72 && number_6 < 72 ){ 

    alert(number_2 + number_3 + number_4 + number_5 + number_6 );
} 

else if (number_3 < 72 && number_4 < 72 && number_5 < 72 && number_6 < 72 ){ 

    alert( number_3 + number_4 + number_5 + number_6 );
}

else if (number_4 < 72 && number_5 < 72 && number_6 < 72 ){ 

    alert(number_4 + number_5 + number_6 );
}
else if ( number_5 < 72 && number_6 < 72 ){ 

    alert( number_5 + number_6 );
}

else if ( number_6 < 72 ){ 

    alert(number_6 );
}
