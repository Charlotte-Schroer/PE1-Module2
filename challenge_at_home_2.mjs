// aantal dagen in een maand van een jaar
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question('Geef mij een maand: ');
let jaartal = parseFloat(await userInput.question('Geef mij een jaar: '));
let dag = 0;

switch(maand){
    case 'januari': dag = 31;
        break;
    case 'februari': 
        if(jaartal%4 == 0){
            if (jaartal%400 ==0){
           dag = 29;
        }
            else if(jaartal%100 != 0){
            dag = 29;     
        }
            else{
            dag = 28;}
        } else {dag = 28;}
             break;
    case 'maart': dag = 31;
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
console.log('Het aantal dagen in de maand ' + maand + ' van het jaar ' + jaartal + ' is ' + dag + '.');

process.exit();