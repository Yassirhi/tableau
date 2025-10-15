const prompt = require ("prompt-sync")();
let t = [];
for (let i = 1; i <= 8; i++) {
    let num=+prompt("entrer le nombre "+i+" : ");
    t.push(num);
}
let r =+prompt("entrer le nombre à rechercher : ");
let i=0;
do {
    if( r == t[i]){
        console.log("le nombre existe est sa position est :",i+1);
    }
    i++;
    
} while (i<t.length);