/*
Elabore um algoritmo que calcule o valor a ser pago por um produto considerando a quantidade, o preço e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir e efetuar o cálculo adequado.
Código =>  Condição Pagamento
1      => À vista, dinheiro ou cheque, 10% de desconto
2      => À vista, cartão de credito, 5% de desconto
3      => Em 2 vezes, preço sem juros
4      => Em 3 vezes, preço + 10% de juros
*/


var quantidade = parseInt(prompt("Digite a quantidade de produto desejada: "));
var preco = parseFloat(prompt("Digite o valor do produto: "));

var tabela = "==== ESCOLHA UM MÉTODO DE PAGAMENTO ====\n";
tabela = tabela + "Codigo | Metodo \n";
tabela += "1 | À vista, dinheiro ou cheque, 10% de desconto\n";
tabela += "2 | À vista, cartão de credito, 5% de desconto\n";
tabela += "3 | Em 2 vezes, preço sem juros\n";
tabela += "4 | Em 3 vezes, preço + 10% de juros\n";
tabela += "\n Digite o código do método de pagamento desejada: ";

var numeroTabela = parseInt(prompt(tabela));
var totalConta = quantidade * preco;
var total

var porcentagem10 = 10 / 100 * totalConta;
var porcentagem5 = 5 / 100 * totalConta;

if(numeroTabela == 1){
    total = totalConta - porcentagem10;
    console.log("O valor a ser pago é :" + total);
}else if(numeroTabela == 2){
    total = totalConta - porcentagem5;
    console.log("O valor a ser pago é: " + total);
}else if(numeroTabela == 3){
    total = totalConta / 2;
    console.log("O valor a ser pago é: " + total);
}else if(numeroTabela == 4){
    total = (totalConta + porcentagem10) / 3 ;
    console.log("O valor a ser pago é: " + total);
}else{
    console.log("Digite um código válido!");
}
