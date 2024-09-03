/**
 * A primeira estrutura condicional é o IF
 * Ele tem a anatomia de IF(condição) {}else{}
 * 
 * porém, podemos ter mais de 1 condição, 
 * neste caso usamos IF (){} else IF() {} ... else{}
 * 
 * exemplo para a idade brasileira:
 */

var anoNascimento = parseInt(prompt("Digite o ano que nasceu: "));

// Cria um elemento de data 
const data = new Date();

//Pega o ano do elemento de data 
const anoAtual = data.getFullYear();

const idade = anoAtual - anoNascimento;
console.log("Sua idade é: ");
if(idade >= 18){
    console.log("Voce é maior de idade e: ");
    console.log("1. Pode tirar o CNH!");
    console.log("2. É obrigado a votar!");
    console.log("3. Pode consumir bebidas alcoólicas e entrar em qualquer lugar.");}
 else if (idade >= 16){
        console.log("Voce é menor de idade, porém:");
        console.log("Pode votar!");
        console.log("Pode ser emancipado!");
        console.log("Pode entrar em alguns lugares desacompanhado.");
    } else{
        console.log("Voce é completamente menor de idade!");
        console.log("É completamente dependente de um responsável!");
    
}