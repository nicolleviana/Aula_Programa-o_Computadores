/* 
Elabore um programa que receba tarefas a fazer, ao final exiba elas.
*/

var tarefas = [];
i = 0;
var condicao = 'sim';

while( condicao == 'sim'){
tarefas[i] = prompt("Digite a tarefa: ");
i++;

condicao = prompt("Deseja adicionar mais tarefas?\n Digite 'sim' para continuar: ");
}

console.log(tarefas);