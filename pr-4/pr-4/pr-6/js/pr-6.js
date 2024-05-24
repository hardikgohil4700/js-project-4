

let number = 5;
let prim = 3;
let prime= document.getElementById("pr-6");

while (prim < number) {
    if (number % prim == 0) {
        prime.innerHTML += (`${number} prime not a number <br/>`);
        break;
    }
    else {
        prime.innerHTML += (`${number} prime number <br/>`);
    }
    prim++;
}
