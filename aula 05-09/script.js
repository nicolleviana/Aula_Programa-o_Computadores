var numero1 = parseFloat(prompt("Digite o primeiro número: "));
var operacao = prompt("Escolha a operação (+, -, *, /): ");
var numero2 = parseFloat(prompt("Digite o segundo número: "));

var resultado = 0;

if(operacao == "+"){
    resultado = numero1 + numero2
    console.log("O resultado da soma é: " + resultado);
}else if(operacao == "-"){
    resultado = numero1 - numero2
    console.log("O resultado da subtração é: " + resultado);
}else if(operacao == "*"){
    resultado = numero1 * numero2
    console.log("O resultado da multiplicação é: " + resultado);
}else if(operacao == "/"){
    resultado = numero1 / numero2
    console.log("O resultado da divisão é: " + resultado);
}else{
    console.log("Digite uma das opções válidas! BURRO!");
}
