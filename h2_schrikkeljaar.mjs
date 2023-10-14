// Schrijf een script dat een jaartal inleest en de dagen van februari weergeeft

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jaartal = parseFloat(await userInput.question('Geef mij een jaartal: '));

if(jaartal%4 == 0){
    if (jaartal%400 ==0){
        console.log('De maand februari in het jaar ' + jaartal + ' telt 29 dagen.');
    }
    else if(jaartal%100 != 0){
        console.log('De maand februari in het jaar ' + jaartal + ' telt 29 dagen.');     
    }
    else{
        console.log('De maand februari in het jaar ' + jaartal + ' telt 28 dagen.')
    }
} else {
    console.log('De maand februari in het jaar ' + jaartal + ' telt 28 dagen.');
}

process.exit();