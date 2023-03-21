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
            contacts: {
                email: 'clod2303@gmail.com',
            }
        }
    },

    methods: {


    },

    beforeMount() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data);
                this.contacts.email = response.data.response
                console.log(response.data.response)
            });
    },
}).mount('#app')

//    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//   .then(function (response){
//     const result = response.data;
//    });