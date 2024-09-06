/*
Desenvolva um programa que leia a idade do usuario e informe a categoria de filme adequado: "Livre", "12 Anos", "14 Anos", "16 Anos" ou "18 Anos".
*/

var idade = parseInt(prompt("Digite sua idade: "));

if(idade < 12 ){
    console.log("Sua categoria indicada é Livre.");
}else if(idade < 14){
    console.log("Sua categoria indicada é 12 Anos.");
}else if(idade < 16){
    console.log("Sua categoria indicada é 14 Anos.");
}else if(idade < 18){
    console.log("Sua categoria indicada é 16 Anos.");
}else if(idade >= 18){
    console.log("Sua categoria indicada é 18+ Anos.")
}else{
    console.log("Digite a sua idade! SEU LERDO!!!");
}