//Quando temos uma quantidade pré definida de repetições utilizamos o for

//O for possui 3 parâmetros: (contador; condição; modificador)

//para repetir 3 vezes:

for(var i = 0; i < 3; i++){
    console.log("O i vale: ",i);
}

//Todo array pode ser percorrido com for
console.log("Imprimindo o array");

var frutas = ['Maça' , 'Banana' , 'Uva' , 'Pessego' , 'Mamão' , 'Melão'];

for (var i = 0; i < frutas.length; i++){
    console.log("A fruta [ " + i + " ] é: " + frutas[i]);
    console.log("A fruta [ " , i , " ] é: " , frutas[i]);
    console.log(`A fruta [ " ${i} " ] é: "  ${frutas[i]} `);
}

