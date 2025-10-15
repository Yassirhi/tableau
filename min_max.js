const prompt = require ("prompt-sync")();
let t = [];
let min;
let max;
for (let i = 1; i <= 7; i++) {
    let num=prompt("entrer le "+i+" numero : ");
    t.push(num);
}
min =t[0];
max=t[0];

for (let i = 0; i <=7; i++) {
    if(min<t[i]){
        min=t[i]
    }
}


console.log("min :",min);
console.log("max :",max);