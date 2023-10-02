import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef mij een getal! '));

let rest = getal % 2;

if(rest == 0){
    console.log('Het '+ getal + ' is een even getal.');
}
else{
    console.log('Het ' + getal + ' is een oneven getal.');
}

process.exit();