/*
var palavraVariavel
Funções:
prompt(""):string
parseInt(""):number
parseFloat(""):number
console.log(""):void

+ soma ou concatena
- subtrai
* multiplica
/ divide 

Condições 
if(________________ ____ _________________) "retorna um boolean true/false"
   var ou texto/num      var ou texto/num

   == igual/comparação
   > maior
   >= maior igual
   < menor 
   <= menor ou igual 
   != diferente 
*/



var anoAtual = 2024;
var anoNascimento = parseInt(prompt("Digite seu ano de nascimento: "));
var idade = anoAtual - anoNascimento;

 if(idade >= 18) {
console.log("Você é maior de idade no Brasil ");
console.log ("Você é obrigado a votar! ");
 }else{
    console.log("Você é menor de idade no Brasil! ");
 }

 // Manipulando o if
 console.log("Usando apenas o > (idade > 17)");
 if(idade > 17){
    console.log("Maior de idade ");
 }else{
    console.log("Menor de idade ");
 }

 