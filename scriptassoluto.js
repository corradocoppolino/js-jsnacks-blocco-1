// JSnack 2

// inserimento 2 parole

var word1 = prompt("inserisci la prima parola");
var word2 = prompt("inserisci la seconda parola");

// ciclo if per vedere la più corta

if(word1.length > word2.length){
    console.log(word2+" "+word1);
}else if(word1.length <= word2.length){
    console.log(word1+" "+word2);
    
}else{
    alert("le parole sono uguali");
}

// JSnack 3

// inizializzo variabile somma

var somma=0;

// ciclo for che mi carica ogni numero e me lo somma al precendete

for(i=0;i<10;i++){
    var numero = parseInt(prompt("inserisci un numero"));
    somma += numero;
}

// output

console.log(somma);

// JSnack 4

// creo array e lo carico di nomi

var arraynames = [
    "Paolo",
    "Giuseppe",
    "Martina",
    "Giovanni",
    "Anna",
    "Francesca",
    "Antonio",
    "Filippo",
    "Caterina",
    "Alessandra"
];

// variabile di input del nome

var input = prompt("inserisci il tuo nome");

// ciclo for che carica il mio vettore

for(var i = 0; i < arraynames.length; i++){
    
    var nome = arraynames[i];

    // if per vedere se il nome inserito coincide con uno sulla lista

    if(input === nome){
        document.getElementById("partecipo").innerHTML = "puoi partecipare";
        console.log("puoi partecipare");
        break;
    }else{
        document.getElementById("partecipo").innerHTML = "non puoi partecipare";
        console.log("non puoi partecipare");
    }

}
  
//JSnack 5

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
