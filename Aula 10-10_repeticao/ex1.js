/*
Escreva um programa que solicite o valor do produto, em seguida pergunte se deseja adicionar mais produtos, 
se for SIM ou S ou 1 (escolha um deles), solicite novamente o produto.
Quando a resposta não, apresente a soma dos valores do produto.
*/

var produtos = [];
var i = 0;
var adicionar = 'Sim';

while(adicionar  == 'Sim'){
    produtos[i] = parseInt(prompt("Digite o valor do seu produto " + (i+1)));

    adicionar = prompt("Deseja adicionar mais algum valor de produto? Sim ou Não: ");
    i++;
}

i = 0;
var total = 0;
while (i < produtos.length) {
   total += produtos[i];
    i++;
}

console.log("O total dos produtos é: " + total);
