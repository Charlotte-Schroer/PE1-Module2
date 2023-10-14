/*Schrijf een script dat 5 getallen inleest
Geef mij het grootste getal, het kleinste getal en het gemiddelde */

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Gebruiker, geef mij een getal: '));
let getal2 = parseFloat(await userInput.question('Geef mij nog eens een getal: '));
let getal3 = parseFloat(await userInput.question('En nog één: '));
let getal4 = parseFloat(await userInput.question('En nog één: '));
let getal5 = parseFloat(await userInput.question('En nog één: '));
let gemiddelde = (getal1 + getal2 +getal3 + getal4 + getal5)/5;

if(getal1 > getal2 && getal1 > getal3 && getal1 > getal4 && getal1 > getal5){
    console.log('Het eerste getal: ' + getal1 + ' is het grootste van de 5');
} else if(getal2 > getal1 && getal2 > getal3 && getal2 > getal4 && getal2 > getal5){
    console.log('Het tweede getal: ' + getal2 + ' is het grootste van de 5');
}else if(getal3 > getal1 && getal3 > getal2 && getal3 > getal4 && getal3 > getal5){
    console.log('Het derde getal: ' + getal3 + ' is het grootste van de 5');
}else if(getal4 > getal1 && getal4 > getal2 && getal4 > getal3 && getal4 > getal5){
    console.log('Het vierde getal: ' + getal4 + ' is het grootste van de 5');
}else {
    console.log('Het vijfde getal: ' + getal5 + ' is het grootste van de 5');
}

if(getal1 < getal2 && getal1 < getal3 && getal1 < getal4 && getal1 < getal5){
    console.log('Het eerste getal: ' + getal1 + ' is het kleinste van de 5');
} else if(getal2 < getal1 && getal2 < getal3 && getal2 < getal4 && getal2 < getal5){
    console.log('Het tweede getal: ' + getal2 + ' is het kleinste van de 5');
}else if(getal3 > getal1 && getal3 < getal2 && getal3 < getal4 && getal3 < getal5){
    console.log('Het derde getal: ' + getal3 + ' is het kleinste van de 5');
}else if(getal4 < getal1 && getal4 < getal2 && getal4 < getal3 && getal4 < getal5){
    console.log('Het vierde getal: ' + getal4 + ' is het kleinste van de 5');
}else {
    console.log('Het vijfde getal: ' + getal5 + ' is het kleinste van de 5');
}

console.log('Het gemiddelde is: ' + gemiddelde);

process.exit();