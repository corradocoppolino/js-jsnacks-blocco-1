// inizializzo variabile somma

var somma=0;

// ciclo for che mi carica ogni numero e me lo somma al precendete

for(i=0;i<10;i++){
    var numero = parseInt(prompt("inserisci un numero"));
    somma += numero;
}

// output

console.log(somma);