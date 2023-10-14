import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log('Kies een artiest:');
console.log('1. Red Hot Chillie Peppers');
console.log('2. AC/DC');
console.log('3. Netsky');
console.log('4. De Strangers');

let keuze = await userInput.question('Geef je keuze in: ');

switch(keuze){
    case '1':
        console.log('Je koos voor de Red Hot Chilli Peppers.');
        console.log('Ze zijn de artist achter de hit: Californication');
    break;
    case '2':
        console.log('Je koos voor AC/DC.');
        console.log('Ze zijn de artist achter de hit: Highway to Hell');
    break;
    case '3':
        console.log('Je koos voor Netsky');
        console.log('Ze zijn de artist achter de hit: Rio');
    break;
    case '4':
        console.log('Je koos voor De Strangers');
        console.log('Ze zijn de artist achter de hit: Mijnen blauwe geschelpte');
    break;
    default: console.log('Keuze niet herkend.');
}

process.exit();