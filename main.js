/*
Snack 1
Crea una funzione che somma due numeri.
- Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
- Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
- Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/

/* Funzione dichiarativa */
/* function somma(num1, num2) {
    console.log(num1 + num2);
} */

/* Funzione anonima */
/* const somma = function(num1, num2) {
    console.log(num1 + num2);
} */

/* Funzione arrow function */

/* const somma = (num1, num2) => {
    console.log(num1 + num2);
} */

//somma(2, 2)


/*
Snack 2
Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
 */

/* Arrow function */
/* const quadrato = (numero) => {
    console.log(numero * 2);
}
 */
/* Funzione su una riga */
//const quadrato = (n) => console.log(n * 2);

//quadrato(8)

/* 
Snack 3
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
*/
/* const somma = (n1, n2) => n1 + n2
const sottrazione = (n1, n2) => n1 - n2
const moltiplica = (n1, n2) => n1 * n2

const eseguiOperazione = (n1, n2, operazione) => operazione(n1, n2)

console.log(eseguiOperazione(10, 5, somma));
console.log(eseguiOperazione(10, 5, sottrazione));
console.log(eseguiOperazione(10, 5, moltiplica)); */

/* 
Snack 4
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/

/* function createTimer(ms) {
    return setTimeout(() => {
        console.log("Tempo Scaduto!");
    }, ms);
}

createTimer(1000) */

/* 
Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
*/

/* const stampaOgniSecondo = (messaggio) => {
    return setInterval(() => {
        console.log(messaggio);
    }, 1000)
}

const intervallo = stampaOgniSecondo("Ciao ogni secondo!")

setTimeout(() => {
    clearInterval(intervallo)
    console.log("Messaggio fermato!");
}, 5000) */




/* 
Snack 6
Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
*/

/* let contatore = 0

function creaContatoreAutomatico(ms) {
    return setInterval(() => {
        console.log(contatore++);
    }, ms)
}

creaContatoreAutomatico(2000) */

/* 
Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/

/* function eseguiFerma(messaggio, start, stop) {
    const intervallo = setInterval(() => {
        console.log(messaggio);
    }, start)

    setTimeout(() => {
        clearInterval(intervallo)
        console.log("contatore fermato!");

    }, stop)
}

eseguiFerma("Sono il messaggio a intervalli regolari", 1000, 3000) */


/* 
Snack 8 (Bonus)
Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
*/

/* function contoAllaRovescia(n) {
    let contatore = n

    const intervallo = setInterval(() => {
        console.log(contatore--);
    }, 1000);

    setTimeout(() => {
        clearInterval(intervallo)
        console.log("Tempo Scaduto!");
    }, contatore*1000);
}

contoAllaRovescia(10) */

/* 
Snack 9 (Bonus)
Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
*/


/* function sequenzaOperazioni(operazioni, intervallo) {

    for (let i = 0; i < operazioni.length; i++) {
        const operazione = operazioni[i];

        setTimeout(() => {
            operazione()
        }, i * intervallo);
    }
}

sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
], 2000); */


/* 
Snack 10 (Bonus)
Creare un throttler per limitare l’esecuzione di una funzione
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
*/




