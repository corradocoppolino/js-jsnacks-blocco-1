// creo array vuoto

var array = [];

// creo un ciclo for dove chiedo di inserire un numero

for(var i = 0; i < 6; i++){
    console.log(i);

    //chiedo di inserire un numero

    var numero = parseInt(prompt("Inserisci un numero"))

    // guardo se il numero è dispari e nel caso lo inserisco nel vettore

    if(numero%2){
        array.push(numero);
    }
}

console.log(array);