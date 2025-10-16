const prompt = require ("prompt-sync")();
let t = [];
let d;
do {
    let num=+prompt("entrer le nombre : ");
    t.push(num);
     d=prompt("voulez-vous entrer un autre nombre?(oui/non) : ");

} while (d==="oui");

for (let e = 0; e < t.length; e++) {
  r=t[e]*t[e];
  console.log(r);

}
