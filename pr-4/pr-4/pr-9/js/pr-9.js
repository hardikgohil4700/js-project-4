

let number = 23;
document.getElementById("number").innerHTML = (`Number is = ${number}`);

let sum = 0;
let a = 15;

do {
    sum += a;
    a++;
} while (a <= number);

let sumofnumber = document.getElementById("sum and number").innerHTML = (`The sum of Numbers = ${sum}`);
