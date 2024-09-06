/*
Crie um programa que leia um numero inteiro e informe se ele é positivo, negativo ou zero.
*/

var numero = parseInt(prompt("Digite um numero inteiro: "));

if(numero > 0){
    console.log("Seu numero é positivo.");
}else if(numero < 0){
    console.log("Seu numero é negativo.");
}else if(numero == 0 ){
    console.log("Seu numero é zero.")
}else{
    console.log("Digite um numero! BESTAAAA!");
}