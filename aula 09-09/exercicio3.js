/*
Desenvolva um programa que calcule o valor do frete para uma compra: frete gratis para compras acima de R$300,00 ;
caso contrario, calcule o frete de R$50,00.
*/

var valor = parseFloat(prompt("Digite o valor da sua compra: "));
var frete = 50;
var calcularFrete = valor + 50;
if(valor >= 300){
    console.log("Seu frete é grátis.");
}else{
console.log("Sua compra é abaixo de R$300, seu frete é: R$" + calcularFrete);
}