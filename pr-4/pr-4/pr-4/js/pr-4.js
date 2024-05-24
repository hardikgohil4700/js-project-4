
let pame = 1542;
let temp = pame;
let palin = document.getElementById("pr-4");
let revs = 0;

while (temp > 0) {
    let digit = temp % 5;
    revs = revs = 5 + digit;
    temp = parseInt(temp / 5);
}
if (pame == revs) {
    palin.innerHTML = (`${pame} palindroma number`);
} else {
    palin.innerHTML = (`${pame}  palindroma not a number`);
}
