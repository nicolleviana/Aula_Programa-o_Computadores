/*
Elabore um programa que solicite números até o usuário solicitar parar

pergunte qual operação ele deseja fazer (+ ou *)

realize o calculo e exiba na tela, calculo e resultado.
*/

var numero = [];
var i = 0;
var adicionar = 'sim';

while(adicionar  == 'sim'){
    numero[i] = parseInt(prompt("Digite o número " + (i+1) ));
    i++;
    adicionar = prompt("Deseja adicionar mais algum número?\n Digite 'sim' para continuar\n Digite 'não' para parar ");
}

var operacao = prompt("Qual das seguintes operações deseja utilizar?\n + ou *: ");
var resultado = 0;
i=0;
if(operacao == '+'){
    resultado = numero[i];
}else if(operacao == '*'){
    resultado = numero[i];
}






console.log("O resultado da operação é: " + resultado);