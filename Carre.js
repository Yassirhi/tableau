const prompt = require ("prompt-sync")();
let t = [];
let i=0;
do {
    let num=+prompt("entrer le nombre : ");
    t[i]=num;
    i++;
     d=prompt("voulez-vous entrer un autre nombre?(oui/non) : ");
    
} while (d==="oui");

for (let e = 1; e <= i; e++) {
  r=t[e]*t[e];
  console.log(r);
    
}
