/*
Elabore um programa que receba uma lista de receitas, depois receba uma lista de despesas.
Ao final, some todas as receitas e despesas, exiba o total e apresente a diferença entre eles.
*/

var receitas = [];
var despesas = [];
var i = 0;
var condicao = 'sim';
var totalReceita = 0, totalDespesas = 0;


while( condicao == 'sim'){
receitas[i] = parseFloat(prompt("Digite o valor da receita: "));
i++;

condicao = prompt("Deseja adicionar mais?\n Digite 'sim' para continuar: ");
}

condicao = 'sim'
i = 0;

while( condicao == 'sim'){
despesas[i] = parseFloat(prompt("Digite o valor  da despesa: "));
i++;

condicao = prompt("Deseja adicionar mais?\n Digite 'sim' para continuar: ");
}


for(var i = 0; i < receitas.length; i++){
    totalReceita += receitas[i];
    console.log("O total das receitas é: " + totalReceita);
}

for(var i = 0; i < despesas.length; i++){
    totalDespesas += despesas[i];
    console.log("O total das despesas é: ");
}

console.log("A diferença entre receita e despesa é " + (totalReceita - totalDespesas));