/*
Elabore um programa que receba um numero e exiba sua tabuada usando o while 
*/ 

var numero = parseInt(prompt("Digite um número para ver sua tabuada: "));
var i = 1;
var resultado = 0;

while(i <= 10) {
    resultado = numero * i;
    console.log(numero + "x" + i + "=" + resultado);
    i++;
}