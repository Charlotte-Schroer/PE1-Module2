import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question('Geef mij een maand: ');
let dag = 0;

switch(maand){
    case 'januari': dag = 31;
        break;
    case 'februari': dag = 28;
         break;
    case 'maart': dag =31;
        break;
    case 'april': dag = 30;
        break;
    case 'mei': dag = 31;
        break;
    case 'juni': dag = 30;
        break;
    case 'juli': dag = 31;
        break;
    case 'augustus': dag = 31;
        break;
    case 'september': dag = 30;
        break;
    case 'oktober': dag = 31;
        break;
    case 'november': dag = 30;
        break;
    case 'december': dag = 31;
        break;
    default:
            console.log('Dit is geen maand!');
}
console.log('Het aantal dagen in de maand ' + maand + ' is ' + dag + '.');

process.exit();