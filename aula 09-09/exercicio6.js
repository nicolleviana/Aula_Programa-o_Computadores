/*
Crie um programa que leia um número inteiro e informe se ele é par ou impar.
*/

var numero  =  parseInt(prompt("Digite um número inteiro: "));

if(numero / 2 ==0 ){
    console.log("O número " +  [ numero ] + " é par!");
}else{
    console.log("O número " + [ numero ] + " é ímpar!" );
}