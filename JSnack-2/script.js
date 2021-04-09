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
