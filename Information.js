const prompt = require('prompt-sync')();

const name = prompt("What is your name? ");
console.log(`My name is ${name}`);

let age = prompt("What is your age? ");
console.log(`I am ${age}  years old`);

let complexion = prompt("What is your complexion? ");
console.log(`I am ${complexion}  in complexion`);

let school = prompt("What is the name of your School? ");
console.log(`I attend ${school}`);

let hobby = prompt("What is your hobby? ");
console.log(`I love ${hobby}`);

console.log(typeof(name))
