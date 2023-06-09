/*> Scrivere un programma che chieda all’utente:

    Il numero di chilometri da percorrere
    Età del passeggero
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

    il prezzo del biglietto è definito in base ai km (0.233 € al km)
    va applicato uno sconto del 19.4% per i minorenni
    va applicato uno sconto del 37.7% per gli over 65.
> MILESTONE 1:
> Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
> La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
> Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
> Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).  */

const kmToDo = document.getElementById('km-to-do');

const userAge = document.getElementById('user-age');

const button = document.querySelector('button');


button.addEventListener('click', function(){

    let price = kmToDo.value * 0.233;



    if (userAge.value < 18){
        price = price - (price * (19.4 / 100));
        
    }else if (userAge.value > 65){
        price = price - (price * (37.7 / 100));
    }

    const finalPrice = document.querySelector('p');
    finalPrice.innerHTML = "Il prezzo finale è di " +price.toFixed(2) +"€";

});


