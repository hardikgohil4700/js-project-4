

let i = 10;
let sum = 0;

for (i = 1; i <= 50; i++) {
    document.getElementById("i").innerHTML += (`${i * i} `);
    sum += i * i;
}
document.getElementById("sum").innerHTML += sum;
