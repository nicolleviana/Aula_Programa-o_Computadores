/*
Elabore um programa que receba uma lista de receitas, depois receba uma lista de despesas.
Ao final, some todas as receitas e despesas, exiba o total e apresente a diferença entre eles.
*/

var receitas = [];
var i = 0;
var condicao = 'sim';

while( condicao == 'sim'){
receitas[i] = prompt("Digite a receita: ");
i++;

condicao = prompt("Deseja adicionar mais receitas?\n Digite 'sim' para continuar: ");
}
var soma1 = receitas + i;

i = 0;
while(i < receitas.length){
    console.log(receitas[i]);
    i++;
}


var despesas = [];
var i = 0;
var condicao = 'sim';

while( condicao == 'sim'){
despesas[i] = prompt("Digite a despesa: ");
i++;

condicao = prompt("Deseja adicionar mais despesas?\n Digite 'sim' para continuar: ");
}

var soma2 = despesas + i;


i = 0
while(i < despesas.length){
    console.log(despesas[i]);
    i++;
}


var diferenca = soma1 - soma2;

console.log("Total de receitas: " + soma1);
console.log("Total das despesas: " + soma2);
console.log("A diferença é: " + diferenca);