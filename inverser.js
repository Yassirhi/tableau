const prompt = require ("prompt-sync")();
let t = [];
for (let i = 1; i <= 4; i++) {
    let num=prompt("entrer le nombre "+i+" : ");
    t.push(num);
}
for (let i = t.length; i >= 0; i--) {
    console.log(t[i]);
}
