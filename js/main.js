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
