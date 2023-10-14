import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef mij een getal:'));
let getal2= parseFloat(await userInput.question('Geef mij nog een getal:'));

let bewerking = await userInput.question('Wilt u deze getallen optellen, aftrekken, vermenigvuldigen of delen?');
let oplossing;

switch(bewerking){
    case 'optellen':
        oplossing = getal1 + getal2;
        break;
    case 'aftrekken':
        oplossing = getal1 - getal2;
        break;
    case 'vermenigvuldigen':
        oplossing = getal1 * getal2;
        break;
    case 'delen':
        oplossing = getal1 / getal2;
        break;
    default:
        console.log('Ik ken deze bewerking niet');
}
console.log('De oplossing van de bewerking tussen deze twee getallen is ' + oplossing +'.');

process.exit();