/*
Elabore um programa que receba um numero e exiba sua tabuada usando o while 
*/ 

var numero = parseInt(prompt("Digite um número para ver sua tabuada: "));
var multiplicar = 1;
var resultado = 0;

while(multiplicar <= 10) {
    resultado = numero * multiplicar;
    console.log(numero + "x" + multiplicar + "=" + resultado);
    multiplicar++;
}