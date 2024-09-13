/*
O cardápio de uma lanchonete é o seguinte:
Especificação Preço unitário 
100 Cachorro quente 1,10 
101 Bauru simples 1,30 
102 Bauru c/ovo 1,50 
103 Hamburger 1,10 
104 Cheeseburger 1,30 

Escrever um algoritmo que leia o código do lanche pedido, a quantidade e calcule o valor a ser pago por aquele lanche. 
*/

var descricaoCardapio = "==== ESCOLHA UM LANCHE ====\n";
descricaoCardapio = descricaoCardapio + "Cód | Nome            | Preço";
descricaoCardapio += "100 | Cachorro quente | 1,10\n";
descricaoCardapio += "101 | Bauru simples   | 1,30\n";
descricaoCardapio += "102 | Bauru c/ ovo    | 1,50\n";
descricaoCardapio += "103 | Hamburger       | 1,10\n";
descricaoCardapio += "104 | Cheeseburger    | 1,30\n";
descricaoCardapio += "\n Digite o CÓDIGO do Lanche Escolhido: ";

var codigoLanche = parseInt(prompt(descricaoCardapio));

var quantidade = parseInt(prompt("Quantos lanches você deseja pedir? "));

var valorTotal = 0

if(codigoLanche == 100){
   valorTotal = quantidade * 1.10;
}else if(codigoLanche == 101){
    valorTotal = quantidade * 1.30;
}else if(codigoLanche == 102){
    valorTotal = quantidade * 1.50;
}else if(codigoLanche == 103){
    valorTotal = quantidade * 1.10;
}else if(codigoLanche == 104){
    valorTotal = quantidade* 1.30;
}else{
    console.log("Código de lanche inválido!!");
}

console.log("Seu pedido do lanche [ " + codigoLanche + " ]");
console.log("Foram pedidos [ " + quantidade + " ] lanches");
console.log("Total a pagar:R$ " , valorTotal);
   
