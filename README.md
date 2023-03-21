# ESERCIZIO VUE EMAIL LIST

## Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
-------------------------------------------------
## Svolgimento:
- creato un array vuoto di email su JS.
- impostate le codifiche per Vue JS e il collegamento Cdn alla libreria
Axios (per l'esecuzione di chiamate asincrone) sull'head HTML.
- impostata la funzione Axios di chiamata all'API per ottenere una mail random; ciclata più volte la funzione per ottenere 10 mail da visualizzare nel DOM.