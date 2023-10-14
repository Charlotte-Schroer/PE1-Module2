import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});

let juisteAntwoorden = 0;

console.log('Welkom bij de quiz! Beantwoord de volgende 5 vragen:');

let antwoord1 = await userInput.question('Wat is de hoofstad van Frankrijk? ');
console.log('Jouw antwoord: '+ antwoord1);
if(antwoord1 == 'Parijs'){
    console.log('Goed geantwoord!');
    juisteAntwoorden++;
} else {console.log('Fout antwoord. Het juiste antwoord is Parijs.');
}

let antwoord2 = await userInput.question('Hoeveel planeten zijn er in ons zonnestelsel? ');
console.log('Jouw antwoord: ' + antwoord2);
if(antwoord2 == '9'){
    console.log('Goed geantwoord!');
    juisteAntwoorden++;
} else {console.log('Fout antwoord. Het juiste antwoord is 9');}

let antwoord3 = await userInput.question('Wat is het grootste zoogdier ter wereld? ');
console.log('Jouw antwoord: ' + antwoord3);
if(antwoord3 == 'Blauwe vinvis' || antwoord3 == 'blauwe vinvis' || antwoord3 == 'Blauwe Vinvis'){
    console.log('Goed geantwoord!');
    juisteAntwoorden++;
} else{console.log('Fout antwoord. Het juiste antwoord is blauwe vinvis');
}

let antwoord4 = await userInput.question('Wie schreef het toneelstuk "Romeo en Julia"? ');
console.log('Jouw antwoord: ' + antwoord4);
if(antwoord4 == 'Shakespeare'){
    console.log('Goed geantwoord!');
    juisteAntwoorden++;
} else{console.log('Fout geantwoord. Het juiste antwoord is Shakespeare');
}

let antwoord5 = await userInput.question('Hoeveel poten heeft een spin? ');
console.log('Jouw antwoord: '+ antwoord5);
if(antwoord5 == '8' ){
    console.log('Goed geantwoord!');
    juisteAntwoorden++;
} else{console.log('Fout geantwoord. Het juiste antwoord is 8.');
}

console.log('Je hebt ' + juisteAntwoorden + ' van de 5 vragen juist beantwoord. ');

process.exit();