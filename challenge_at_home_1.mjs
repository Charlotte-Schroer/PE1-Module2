//verschil bepalen tussen == vs ===

let var1 = 11;
let var2 = '11';
//Vervang je == eens door === en zie of dit iets anders gaat doen. Wat is hier de oorzaak van?

if(var1 === var2)
{console.log('===');}
else if(var1 == var2){
    console.log('==');
}else {
    console.log('Ik weet het niet.');
}
// bij uitvoering van dit script krijg ik enkel == (wat mij logisch lijkt) (als ik de eerste lijn omwissel met de tweede else if krijg ik hetzelfde.)
// geen verschil tussen == en ===?