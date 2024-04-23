'use strict'

let currentElement = document.getElementById('psw3');
let text = currentElement.innerHTML;


// INPUTS

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


// OUTPUTS

// PSW1 
document.getElementById('psw1').innerHTML = `${userName}${userLastName}${color}${number}`;
// PSW2
document.getElementById('psw2').innerHTML = text;
// PSW3
currentElement.innerHTML = text;

// EXTRA
document.writeln(text);


// TEST
// text = `${userName}${userLastName}${color}${number}`;
