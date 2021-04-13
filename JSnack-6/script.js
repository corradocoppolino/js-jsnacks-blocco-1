//chiedo all'utente di inserire un numero

var numero = parseInt(prompt("Inserisci un numero"));

//creo variabile somma

var somma = 0;

//ciclo for da 1 al numero compreso

for(i=1; i<=numero; i++){
    
    //controllo che i sia giusto
    
    //console.log(i);

    somma += Math.pow(i,3);

    console.log(somma);

}



