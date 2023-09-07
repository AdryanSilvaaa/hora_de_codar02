var ano_do_nascimento = parseInt(prompt("digite o ano que vc nasceu ")) ;

var anoAtual = 2023;
var idade = anoAtual - ano_do_nascimento;
var podeVotar = idade >= 16;

if ( idade >= 16){
alert("voce pode votar ");
}

else{
alert ("voce não pode votar ");
}