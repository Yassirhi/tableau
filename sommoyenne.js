const prompt = require ("prompt-sync")();
let t = [];
let somme=0;
let moy=0;
for (let i = 1; i <= 10; i++) {
    let num=+prompt("entrer le nombre "+i+" : ");
    t.push(num);
    somme=somme+num;
}
console.log(somme);
console.log(somme/10);