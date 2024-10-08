/*
var nota1 = parseFloat(prompt("Digite a primeira nota: "));
var nota2 = parseFloat(prompt("Digite a segunda nota: "));
var nota3 = parseFloat(prompt("Digite a terceira nota: "));
var nota4 = parseFloat(prompt("Digite a quarta nota: "));

soma = nota1 + nota2 + nota3 + nota4;
divisao = soma / 4;

console.log("A média das notas são: " + divisao);
*/

var notas = [];
var i = 0;

// Recebe as notas 
notas[i] = parseInt(prompt("Digite a nota n° " + (i+1)));
i++;
notas[i] = parseInt(prompt("Digite a nota n° " + (i+1)));
i++;
notas[i] = parseInt(prompt("Digite a nota n° " + (i+1)));
i++;
notas[i] = parseInt(prompt("Digite a nota n° " + (i+1)));

var media = notas[0] + notas[1] + notas[2] + notas[3];
media = media / notas.length;
console.log("Media é:" , media);