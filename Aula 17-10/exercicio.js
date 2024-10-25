/*
Elabore um programa que solicite números até o usuário solicitar parar

pergunte qual operação ele deseja fazer (+ ou *)

realize o calculo e exiba na tela, calculo e resultado.
*/

var numeros = [];
var i = 0;
var adicionar = 'sim';

while(adicionar  == 'sim'){
    numeros[i] = parseFloat(prompt("Digite um número " ));
    i++;

    adicionar = prompt("Deseja adicionar mais algum número?\n Digite 'sim' para continuar\n Digite 'não' para parar ");
}
while(console.log(numeros));

var operacao = prompt("Qual das seguintes operações deseja utilizar?\n +(somar) ou *(multiplicar): ");
 
var total = 0;
var resultado = 1;
i = 0;

if(operacao == "+"){
    while (i < numeros.length) {
        total += numeros[i];
        i++;
    }
}else {
     while(i < numeros.length){
        resultado *= numeros[i];
        i++;
    }
    resultado = total;
}

console.log("O resultado da operação é: " + total);



