'use strict';

/*Salvare in una variabile locale la funzione createApp, presa 
dalla variabile globale Vue; createApp è come un valore
destrutturato di Vue*/
const { createApp } = Vue

/*Inizializzare un'istanza dell'applicazione Vue, invocando 
la funzione createApp*/
createApp({
    data() {
        return {
            title: 'CREATE RANDOM MAIL',
            email: []
        }
    },

    methods: {


    },

    /*Prima del render viene fatta una chiamata all'API (Application
    programming interface) al link indicato per ottenere in risposta
    una lista random di indirizzi e-mail; questi indirizzi vengono 
    aggiunti all'array delle mail e l'operazione viene ripetuta 10 volte
    per poter estrarre 10 indirizzi; in HTML sull' <li> viene collegato
    un v-for per leggere l'array degli elementi e stamparlo sul DOM.
    NB necessario utilizzare un'arrow function per poter leggere in
    maniera corretta il "this" dai Data; con una funzione normale
    si sarebbe presentato il problema dello SCOPE e il "this" avrebbe
    riportato un valore "undefined".*/ 
    beforeMount() {
        for (let i = 1; i <= 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.email.push(response.data.response);
                    console.log(this.email)
                });
        }
    },
}).mount('#app')
