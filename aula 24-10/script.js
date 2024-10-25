/*
Elabore um programa que solicite números até o usuário solicitar parar

pergunte qual operação ele deseja fazer (+ ou *)

realize o calculo e exiba na tela, calculo e resultado.
*/

var numeros = [];
i = 0;
var condicao = 'sim';

while( condicao == 'sim'){
numeros[i] = parseFloat(prompt("Digite um numero: "));
i++;

condicao = prompt("Deseja adicionar mais um número?\n Digite 'sim' para continuar: ");
}

var operacao = prompt("Escolha uma operação:\n + (soma) ou * (multiplicar):");

var total = 0;
var resultado = 1;
i = 0;

if(operacao == "+"){
    while (i < numeros.length) {
       // console.log(numeros[i], "+"); //
        total += numeros[i];
        i++;
    }
}else {
    total = 1;
    while (i < numeros.length){
        resultado *= numeros[i];
        i++;
    }
}
 

i = 0;
var texto = "";
while(i < numeros.length){
    if (i == (numeros.length-1)){
     numeros[i] + "+";
    }
}


texto = total

console.log("O resultado é: " + total);