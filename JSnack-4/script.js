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
  
  
  
  