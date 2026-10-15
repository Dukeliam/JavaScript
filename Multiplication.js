const prompt = require('prompt-sync')();

let number = Number(prompt("Table of: "));
let input = true
while (input){
      if(Number.isNaN(number8)){
            number = Number(prompt("Ode, Enter a Numer: "));
            continue;
      }
      else{
            
            for(let index = 1; index <= 12; index++){
            let result = number * index;
            console.log(number + " X " + index + " = " + result);
            }
      }
break;
}

