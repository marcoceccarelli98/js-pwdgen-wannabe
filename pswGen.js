'use strict'

let element = document.getElementById('psw');
let text = element.innerHTML;

// INPUT NAME
let userName = prompt('Inserisci il nome');
// INPUT SURNAME
let userLastName = prompt('Inserisci il cognome');
// INPUT COLOR
let color = prompt('Inserisci il tuo colore preferito');
// RANDOM NUMBER
let number = Math.floor(Math.random() * 101);

text = `${userName}${userLastName}${color}${number}`;

console.log(text);

element.innerHTML = text;