/*
Apresente o Menu de Pizzas:
1 -> Mussarela -> R$ 20,00
2 -> Calabresa -> R$ 25,00
3 -> Marguerita -> R$ 23,00
4 -> 4 Queijos -> R$ 29,99
5 -> Baiana -> 22,50

Apresente o Menu de Bebidas:
1 -> Refrigerante Lata -> R$ 5,00
2 -> Refrigerante 2L -> R$ 10,00
3 -> Agua -> R$ 3,50
4 -> Suco -> R$ 7,50

Solicite ao usuário qual Pizza e quantidade que deseja comprar, qual refrigerante e quantidade, ao final apresente o total a pagar.
*/

var menuPizza = "==== ESCOLHA UMA PIZZA ====\n";
menuPizza = menuPizza + "Numero | Nome | Preço\n";
menuPizza += "1 | Mussarela  | 20,00 \n";
menuPizza += "2 | Calabresa  | 25,00 \n";
menuPizza += "3 | Marguerita | 23,00 \n";
menuPizza += "4 | 4 Queijos  | 29,99\n";
menuPizza += "5 | Baiana     | 22,50\n";
menuPizza += "\n Digite o NUMERO da Pizza Escolhida: ";

var numeroPizza = parseInt(prompt(menuPizza));

var quantidade = parseInt(prompt("Quantas pizzas você deseja pedir? "));

var totalPizza = 0

var menuBebida = "==== ESCOLHA UMA BEBIDA ====\n";
menuBebida = menuBebida + "Numero | Nome | Preço\n";
menuBebida += "1 | Refrigerante Lata  | 5,00 \n";
menuBebida += "2 | Refrigerante 2L    | 10,00 \n";
menuBebida += "3 | Agua               | 3,50 \n";
menuBebida += "4 | Suco               | 7,50\n";
menuBebida += "\n Digite o NUMERO da BEBIDA Escolhida: ";

var numeroBebida = parseInt(prompt(menuBebida));

var quantidade = parseInt(prompt("Quantas bebidas você deseja pedir? "));

var totalBebida = 0

if(numeroPizza == 1){
    totalPizza = quantidade * 20.00;
 }else if(numeroPizza == 2){
     totalPizza = quantidade * 25.00;
 }else if(numeroPizza == 3){
     totalPizza = quantidade * 23.00;
 }else if(numeroPizza == 4){
     totalPizza = quantidade * 29.99;
 }else if(numeroPizza == 5){
     totalPizza = quantidade* 22.50;
 }else{
     console.log("Número de Pizza inválido!!");
 }

if(numeroBebida == 1){
    totalBebida = quantidade * 5.00;
}else if(numeroBebida == 2){
    totalBebida = quantidade * 10.00;
}else if(numeroBebida == 3){
    totalBebida = quantidade * 3.50;
}else if(numeroBebida == 4){
    totalBebida = quantidade * 7.50;
}else{
    console.log("Número de Bebida inválido!!");
}

console.log("Seu pedido da pizza [ " + numeroPizza + " ]");
console.log("Foram pedidos [ " + quantidade + " ] pizzas");
console.log("Total da pizza:R$ " , totalPizza);

console.log("Seu pedido da bebida [ " + numeroBebida + " ]");
console.log("Foram pedidas [ " + quantidade + " ] bebidas");
console.log("Total da bebida:R$ " , totalBebida);  

console.log("Total a pagar:R$ " , totalBebida + totalPizza);
