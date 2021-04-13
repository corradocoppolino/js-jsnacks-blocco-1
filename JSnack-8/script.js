var numero = parseInt(prompt("Inserisci un numero"));
var numero1 = 0;
var numero2 = 0;
var somma = 0;

if(numero < 10){
    console.log(numero);
}else{

    do{

        somma += numero%10;
        numero = Math.floor(numero/10);
        
    }while(numero > 0)

}

console.log(somma);