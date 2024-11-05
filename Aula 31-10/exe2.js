/* 
Elabore um programa que receba tarefas a fazer, ao final exiba elas.
*/

var tarefas = [];
var i = 0;
var condicao = 'sim';

while( condicao == 'sim'){
tarefas[i] = prompt("Digite a tarefa: ");
i++;

condicao = prompt("Deseja adicionar mais tarefas?\n Digite 'sim' para continuar: ");
}

i = 0;

while(i < tarefas.length){
    console.log("Tarefa [" + (i+1) + "]: " + tarefas[i]);
    i++;
}