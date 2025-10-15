const prompt = require ("prompt-sync")();
let t = [];
for (let i = 1; i <= 3; i++) {
    let num=prompt("entrer la chaine de character numero "+i+" : ");
    t.push(num);
}
let r=prompt("entrer la chaine de caractere à rechercher: ");
let i=0;
do {
    if( r == t[i]){
        console.log("la chaine existe est sa position est :",i+1);
    }
    i++;
    
} while (i<t.length);