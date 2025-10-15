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
    if(t[i]<min){
        min=t[i];
    }
}
for (let i = 0; i <=7; i++) {
    if(t[i]<max){
        max=t[i];
    }
}

console.log("min :",min);
console.log("max :",max);
