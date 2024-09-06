/*
Desenvolva um programa que calcule o valor do frete para uma compra: frete gratis para compras acima de R$300,00 ;
caso contrario, calcule o frete de R$50,00.
*/

var frete = parseFloat(prompt("Digite o valor da sua compra: "));

if(frete >= 300){
    console.log("Seu frete é grátis.");
}