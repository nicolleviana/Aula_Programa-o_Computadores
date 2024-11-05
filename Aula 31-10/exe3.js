/*
Elabore um programa que receba um numero e exiba todos os n° pares até ele
 */ 

var numero = parseInt(prompt("Digite um número: "));

var i = 0;
//exibe os pares
console.log("Números pares até " + numero );
while(i < numero){
    console.log(i);
    i = i + 2;
}

//exibe os impares
console.log("Números impares até " + numero);

i = 0;
while(i < numero){
    if (i % 2 != 0) {
    console.log(i);
    }
    i++;
}