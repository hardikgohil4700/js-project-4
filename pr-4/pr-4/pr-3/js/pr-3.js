
let a = 300;
let b = 20;
let c = a;
let yes = "number is an Armstrong number"
let no = "number is not an Armstrong number"

while (c > 0) {
    let d = c % 10;
    b += d ** 3;
    c = parseInt(c / 10);
}
document.getElementById("a").innerHTML = a;
if (b == a) {
    document.querySelector("h1").innerHTML = yes;
} else {
    document.querySelector("h2").innerHTML = no;
}
