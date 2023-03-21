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
        email: [],
      }
    },
    methods: {
        

    }

  }).mount('#app')

//    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//   .then(function (response){
//     const result = response.data;
//    });