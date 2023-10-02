import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let minumum = 8;
let maximum = 25;
let getal = parseFloat(await userInput.question('Geef mij een getal: '));

if(getal >= minumum && getal <= maximum){
    console.log('Je getal ligt tussen ' + minumum + ' en ' + maximum + '.');
}
else{
    console.log('Het getal ligt niet tussen ' + minumum + ' en ' + maximum + '.');
}

process.exit();